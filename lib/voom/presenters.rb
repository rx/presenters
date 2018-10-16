require 'dry-container'
require 'voom/container_methods'
require 'voom/logger_methods'
require 'voom/trace'
unless defined?(Voom::Presenters::Version)
  require 'voom/presenters/version'
  require 'voom/presenters/settings'
  require 'voom/presenters/container_item'
  require 'voom/presenters/dsl'
  require 'voom/presenters/dsl/definer'
  require 'voom/presenters/dsl/definition'
  require 'voom/presenters/helpers'
  require 'voom/presenters/app'
  
  module Voom
    module Presenters
    end
  end
end