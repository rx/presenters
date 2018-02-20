require 'spec_helper'
require 'ostruct'

describe 'dsl' do
  describe 'depends_on' do
    let(:text) {'Hey Now'}
    before do
      load_presenters('presenters', spec_dir)
      Voom::Presenters.config.dependencies_container.register(:posts, -> {->(*) {OpenStruct.new(data: [text])}})
    end

    after do
      reset_presenters!
    end

    it 'dependency' do
      ui = Voom::Presenters[:depends_on].call.render(router: nil, context: {})
      expect(ui.components.first.text).to eq(text)
    end
  end
end
