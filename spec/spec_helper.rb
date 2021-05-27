require 'simplecov'
if ENV['CIRCLE_ARTIFACTS']
  dir = File.join(ENV['CIRCLE_ARTIFACTS'], "coverage")
  SimpleCov.coverage_dir(dir)
end
SimpleCov.start

$LOAD_PATH.unshift File.expand_path('../../lib', __FILE__)
ENV['VOOM_ENV']='testing' unless ENV['VOOM_ENV']
require 'coprl'
require 'rspec-html-matchers'

require_relative 'support/directories'
require_relative 'support/loader'

RSpec.configure do |c|
  c.include Support::Directories
  c.include Support::Loader
  c.include Coprl::Trace
  c.include RSpecHtmlMatchers
end
