require 'spec_helper'

describe 'helpers' do
  let(:helpers1_pom) {Voom::Presenters::App[:helpers1].call.expand(router: nil, context: context)}
  let(:helpers2_pom) {Voom::Presenters::App[:helpers2].call.expand(router: nil, context: context)}
  let(:context) {}
  after do
    reset_presenters!
  end

  describe 'configure global helpers' do
    let(:context) {{has_foo: true}}

    context 'module' do
      module TestingHelpers
        def gfoo
          :foo
        end
      end
      before do
        Voom::Presenters::Settings.configure do |config|
          config.presenters.helpers << TestingHelpers
        end
        load_presenters('presenters/helpers', spec_dir)
      end
      it 'helpers1 provides foo access' do
        expect(helpers1_pom.components.first.text).to eq(['foo'])
      end
      context 'attached' do
        let(:context) {super().merge({attach: true})}
        it 'helpers1 provides foo access' do
          expect(helpers1_pom.components.first.text).to eq(['foo'])
          expect(helpers1_pom.components[1].text).to eq(['foo'])
        end
      end
    end
  end


  describe "don't inherit parent helpers" do
    let(:context) {{attach: true, raise_bar: true}}

    before do
      load_presenters('presenters/helpers', spec_dir)
    end

    context 'attached' do
      it 'bar is raised' do
        expect {helpers1_pom.components.first.text}.to raise_error(NameError) {|e| e.message.include?('bar')}
      end
    end
  end

  describe "don't inherit attached/child helpers" do
    let(:context) {{attach: true, raise_baz: true}}

    before do
      load_presenters('presenters/helpers', spec_dir)
    end

    context 'attached' do
      it 'baz is raised' do
        expect {helpers1_pom.components.first.text}.to raise_error(NameError)
      end
    end
  end

  describe 'are accessable in nested components' do
    before do
          load_presenters('presenters/helpers', spec_dir)
        end
    let(:pom) {Voom::Presenters::App[:helpers_in_components].call.expand(router: nil, context: context)}
    it 'reaches baz' do
      expect{pom.components}.not_to raise_error
    end
  end
end
