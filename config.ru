#!/usr/bin/env ruby
if ENV['VOOM_ENV'] == 'integration_testing'
  require 'simplecov'
  if ENV['CIRCLE_ARTIFACTS']
    dir = File.join(ENV['CIRCLE_ARTIFACTS'], "coverage")
    SimpleCov.coverage_dir(dir)
  end
  SimpleCov.start
end

ENV['VOOM_ROOT'] = File.expand_path(__dir__)
require 'dotenv/load'
require 'coprl'

require 'rack/cors'
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :options]
  end
end

Coprl::Presenters::Settings.configure do |config|
  config.presenters.root = File.join(ENV['VOOM_ROOT'], 'app')
  config.presenters.web_client.prepare_context << ->(context, session, _env) {
    context.merge(session: session)
  }
end

require 'pry'
require 'coprl/presenters/plugins/cacheable'
cache_store = Concurrent::Hash.new
# Quick and dirty demo always growing memory cache -- DONT DO THIS IN PRODUCTION!
def cache_store.fetch(key, options=nil, &block)
  result = super(key, &block)
  store(key, result) unless has_key?(key)
  result
end

Coprl::Presenters::Plugins::Cacheable::Settings.configure do |config|
  config.cache=cache_store
end

use Coprl::Presenters::Demo::Search
use Coprl::Presenters::Demo::Echo
use Coprl::Presenters::Demo::Slow
use Coprl::Presenters::Demo::DragonDrop

use Coprl::Presenters::WebClient::App
run Coprl::Presenters::Api::App


Coprl::Presenters::App.boot!


