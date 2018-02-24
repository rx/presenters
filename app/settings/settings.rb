require 'concurrent/map'
require_relative 'store'
module Settings
  include Store

  def settings
    store[:settings] ||= OpenStruct.new(id: 'rx9000', username: 'Russell', email: 'russell@voomify.com', domain: 'voomify.com', avatar: nil)
  end

  def save_settings!
    settings.avatar = context['avatar'] if context['avatar']
  end
end