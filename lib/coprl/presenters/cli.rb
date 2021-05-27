require 'thor'
require_relative 'generators/plugin'

module Coprl
  module Presenters
    class SubCommandBase < Thor
      def self.banner(command, namespace = nil, subcommand = false)
        "#{basename} #{subcommand_prefix} #{command.usage}"
      end

      def self.subcommand_prefix
        self.name.gsub(%r{.*::}, '').gsub(%r{^[A-Z]}) { |match| match[0].downcase }.gsub(%r{[A-Z]}) { |match| "-#{match[0].downcase}" }
      end
    end

      class Generate < SubCommandBase
        desc "plugin", "generates a plugin"
        def plugin(name)
          Generators::Plugin.start([name])
        end
      end
      class Cli < Thor
        desc "generate", "generate a plugin"
        subcommand "generate", Generate
      end
    end
  end

