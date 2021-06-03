require 'thor'
require_relative 'generators/plugin'
require_relative 'version'

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
        def self.exit_on_failure?
          true
        end
        map %w[--version -v] => :__print_version

        desc "--version, -v", "print the version"
        def __print_version
          puts Coprl::Presenters::Version::VERSION
        end
        desc "generate", "generate a plugin"
        subcommand "generate", Generate
      end
    end
  end

