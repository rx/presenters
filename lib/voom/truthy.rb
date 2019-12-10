module Voom
  module Truthy
    TRUE_VALUES = [true, 1, '1', 't', 'T', 'true', 'TRUE', 'on', 'ON'].to_set
    FALSE_VALUES = [false, 0, '0', 'f', 'F', 'false', 'FALSE', 'off', 'OFF'].to_set

    def truthy?(value)
      TRUE_VALUES.include?(value)
    end

    def falsey?(value)
      FALSE_VALUES.include?(value)
    end
  end
end
