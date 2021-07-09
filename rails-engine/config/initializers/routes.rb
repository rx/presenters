Rails.application.config.to_prepare do
  Coprl::Presenters::Settings.configure do |config|
    config.presenters.helpers << Coprl::Presenters::Helpers::Rails
  end
end
