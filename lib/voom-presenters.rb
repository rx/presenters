require 'zeitwerk'

p 'Loading voom-presenters'
class MyInflector < Zeitwerk::GemInflector
  def camelize(basename, _abspath)
    case basename
    when "dsl"
      "DSL"
    else
      super
    end
  end
end

loader = Zeitwerk::Loader.for_gem
loader.inflector = MyInflector.new(__FILE__)
loader.ignore(__FILE__)
# loader.logger = Logger.new($stderr)
loader.reload

module Voom
  module Presenters
  end
end

if defined?(::Rails)
  # loader.logger = Rails.logger
  load 'voom/railtie.rb'
end
