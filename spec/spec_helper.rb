$LOAD_PATH.unshift File.expand_path('../../lib', __FILE__)
ENV['VOOM_ENV']='testing' unless ENV['VOOM_ENV']
require 'voom-presenters'
require 'rspec-html-matchers'

require_relative 'support/directories'
require_relative 'support/loader'

RSpec.configure do |c|
  c.include Support::Directories
  c.include Support::Loader
  c.include Voom::Trace
  c.include RSpecHtmlMatchers
end
