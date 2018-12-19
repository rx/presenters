class Hash
  def deep_transform_values(&block)
    reduce({}) do |result, (k, v)|
      result[k] = v.is_a?(Hash) ? v.deep_transform_values(&block) : yield(v)
      result
    end
  end
end
