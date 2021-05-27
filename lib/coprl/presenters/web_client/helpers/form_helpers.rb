# used used by the form erbs
module Coprl::Presenters::WebClient::Helpers
  module FormHelpers

    def buttons?(components)
      buttons(components).any?
    end

    def buttons(components)
      components.select {|c| eq(c.type, :button)}
    end

  end
end
