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
libdir = File.join(ENV['VOOM_ROOT'], 'lib')
$:.unshift(libdir) unless $:.include?(libdir)
require 'voom/presenters/api/app'
require 'voom/presenters/web_client/app'
require 'voom/presenters/demo/search'
require 'voom/presenters/demo/echo'
require 'voom/presenters/demo/slow'
require 'voom/presenters/demo/dragon_drop'

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

if ENV.fetch('HONEYBADGER_API_KEY', false)
  use Honeybadger::Rack::UserInformer
  use Honeybadger::Rack::UserFeedback
end

use Voom::Presenters::Demo::Search
use Voom::Presenters::Demo::Echo
use Voom::Presenters::Demo::Slow
use Voom::Presenters::Demo::DragonDrop
use Voom::Presenters::WebClient::App
use Voom::Presenters::Api::App
run Voom::Presenters::WebClient::App

Voom::Presenters::App.boot!
