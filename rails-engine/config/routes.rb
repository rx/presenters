
Coprl::Presenters::Rails::Engine.routes.draw do
    class PomExists
      extend Coprl::Presenters::WebClient::Helpers::Rails::Namespaced
      def self.matches?(request)
        presenter = namespaced_presenter(request.params)
        fq_presenter = [presenter, 'index'].join(':')
        presenter ? Coprl::Presenters::App.keys.include?(presenter) || Coprl::Presenters::App.registered?(fq_presenter) : false
      end
    end
    get ':namespace1/:namespace2/:presenter' => "coprl#show", constraints: PomExists
    get ':namespace1/:presenter' => "coprl#show", constraints: PomExists
    get ':presenter' => "coprl#show", constraints: PomExists
end
