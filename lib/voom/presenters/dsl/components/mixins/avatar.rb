module Voom
  module Presenters
    module DSL
      module Components
        module Mixins
          module Avatar
            def avatar(avatar = nil, **attribs, &block)
              return @avatar if locked?
              @avatar = Components::Avatar.new(parent: self, avatar: avatar,
                                   context: context,
                                   **attribs, &block)
            end
          end
        end
      end
    end
  end
end
