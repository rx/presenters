require 'spec_helper'

describe 'dsl' do
  describe 'headline' do
    before do
      load_presenters('presenters', spec_dir)
    end

    after do
      reset_presenters!
    end

    it 'text' do
      ui = Voom::Presenters[:headline].call.render(router: nil, context: {})
      expect(ui.components.first.text).to eq('hello world')
    end
  end
end
