
Voom::Presenters::Rails::Engine.routes.draw do
    class PomExists
      extend Voom::Presenters::WebClient::Helpers::Rails::Namespaced
      def self.matches?(request)
        presenter = namespaced_presenter(request.params)
        presenter ? Voom::Presenters::App.keys.include?(presenter) : false
      end
    end
    get ':namespace1/:namespace2/:presenter' => "coprl#show", constraints: PomExists
    get ':namespace1/:presenter' => "coprl#show", constraints: PomExists
    get ':presenter' => "coprl#show", constraints: PomExists
end
