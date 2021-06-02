module Coprl
  module Presenters
    module DSL
      module Components
        module Mixins
          module Avatar
            def avatar(avatar = nil, **attribs, &block)
              self << Components::Avatar.new(parent: self, avatar: avatar, **attribs, &block)
            end
          end
        end
      end
    end
  end
end
