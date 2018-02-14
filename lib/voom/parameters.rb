module Voom
  # Provides a query interface for the ruby parameters method
  class Parameters
    def initialize(parameters)
      @params = parameters
    end

    def args
      @params.select {|p| p.first == :req || p.first == :opt}
    end

    def required_args
      @params.select {|p| p.first == :req}
    end

    def required_args?
      required_args.any?
    end

    def optional_args
      @params.select {|p| p.first == :opt}
    end

    def optional_args?
      optional_args.any?
        end

    def splats_args
      @params.select {|p| p.first == :rest}
    end

    def splats_args?
      splats_args.any?
    end
    
    def options
      @params.select {|p| p.first == :keyreq || p.first == :key}
    end

    def options?
      options.any?
    end

    def required_options
      @params.select {|p| p.first == :keyreq}
    end

    def required_options?
      required_options.any?
    end
    

    def optional_options
      @params.select {|p| p.first == :key}
    end

    def optional_options?
      optional_options.any?
    end

    def spalts_options
      @params.select {|p| p.first == :keyrest}
    end

    def splats_options?
      spalts_options.any?
    end

    def names(args_or_options)
      args_or_options.map(&:last)
    end
  end
end
