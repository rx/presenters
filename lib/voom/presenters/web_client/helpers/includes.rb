module Voom::Presenters::WebClient::Helpers
  module Includes
    def include?(array, value)
      array.map(&:to_s).include?(value.to_s)
    end

    def includes_one?(array1, array2)
      (array2.map(&:to_sym)-array1.map(&:to_sym)).size != array2.size
    end
  end
end
