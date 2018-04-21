#!/usr/bin/env ruby
ENV['VOOM_ROOT'] = File.expand_path(__dir__)
libdir = File.join(ENV['VOOM_ROOT'], 'lib')
$:.unshift(libdir) unless $:.include?(libdir)
require 'voom/presenters/api/app'
require 'voom/presenters/web_client/app'
require 'voom/presenters/demo/search'
require 'voom/presenters/demo/echo'


use Voom::Presenters::Demo::Search
use Voom::Presenters::Demo::Echo

use Voom::Presenters::WebClient::App
run Voom::Presenters::Api::App

Voom::Presenters::Settings.configure do |config|
  config.presenters.root = File.join(ENV['VOOM_ROOT'], 'app')
end
Voom::Presenters::App.boot!

