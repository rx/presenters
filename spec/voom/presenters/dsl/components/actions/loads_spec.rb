require 'spec_helper'
require 'ostruct'

describe 'dsl' do
  describe 'actions' do
    before do
      load_presenters('.', app_dir)
    end

    after do
      reset_presenters!
    end

    describe 'loads' do
      context 'last_response_action' do
        let(:pom) { Voom::Presenters::App['last_response_action'].call.expand(router: Voom::Presenters::Router.new, context: {}) }

        it 'text' do
          expect(pom.to_h.inspect).not_to include("#<Voom::Presenters::DSL::Components::Mixins::LastResponse::ActionParameter")
        end
      end
    end

  end
end
