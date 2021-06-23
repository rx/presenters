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

# Configuration for watir-rspec
require "watir/rspec"
require 'webdrivers'
require_relative 'support/integration/js_errors'
require_relative 'support/integration/browser'
require_relative 'support/integration/host'


RSpec.configure do |config|
  # Use Watir::RSpec::HtmlFormatter to get links to the screenshots, html and
  # all other files created during the failing examples.
  config.add_formatter(:progress) if config.formatters.empty?
  config.add_formatter(Watir::RSpec::HtmlFormatter)

  # Open up the browser for each example.
  config.before :all, :integration do
    skip startup_instructions unless host
    @browser = Watir::Browser.new
  end

  # Close that browser after each example.
  config.after :all, :integration do
    @browser.close if @browser
  end

  # Include RSpec::Helper into each of your example group for making it possible to
  # write in your examples instead of:
  #   @browser.goto "localhost"
  #   @browser.text_field(name: "first_name").set "Bob"
  #
  # like this:
  #   goto "localhost"
  #   text_field(name: "first_name").set "Bob"
  #
  # This needs that you've used @browser as an instance variable name in
  # before :all block.
  config.include Watir::RSpec::Helper

  # Include RSpec::Matchers into each of your example group for making it possible to
  # use #within with some of RSpec matchers for easier asynchronous testing:
  #   expect(@browser.text_field(name: "first_name")).to exist.within(2)
  #   expect(@browser.text_field(name: "first_name")).to be_present.within(2)
  #   expect(@browser.text_field(name: "first_name")).to be_visible.within(2)
  #
  # You can also use #during to test if something stays the same during the specified period:
  #   expect(@browser.text_field(name: "first_name")).to exist.during(2)
  config.include Watir::RSpec::Matchers

  config.include Support::JSErrors
  config.include Support::Host
  config.include Support::Browser
end
  
