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
require 'voom'

require 'rack/cors'
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :options]
  end
end

Voom::Presenters::Settings.configure do |config|
  config.presenters.root = File.join(ENV['VOOM_ROOT'], 'app')
  config.presenters.web_client.prepare_context << ->(context, session, _env) {
    context.merge(session: session)
  }
end

use Voom::Presenters::Demo::Search
use Voom::Presenters::Demo::Echo
use Voom::Presenters::Demo::Slow
use Voom::Presenters::Demo::DragonDrop

use Voom::Presenters::WebClient::App
run Voom::Presenters::Api::App


Voom::Presenters::App.boot!


