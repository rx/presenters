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
ENV['GOOGLE_API_KEY'] = 'AIzaSyDhSgj9XSBLY5E9Rx5pP2ILQ7IXnD4uX2Q'
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

use Coprl::Presenters::Demo::Search
use Coprl::Presenters::Demo::Echo
use Coprl::Presenters::Demo::Slow
use Coprl::Presenters::Demo::DragonDrop

use Coprl::Presenters::WebClient::App
run Coprl::Presenters::Api::App


Coprl::Presenters::App.boot!


