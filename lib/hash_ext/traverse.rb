module HashExt
  def self.traverse(hash, &block)
    hash.inject({}) do |h,(k,v)|
      if Hash === v
        v = traverse(v,&block)
      end
      nk, nv = block.call(k,v)
      h[nk] = nv unless nk.nil?
      h
    end
  end
end
