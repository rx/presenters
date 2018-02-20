require 'spec_helper'
require 'ostruct'
require 'voom/presenters/web_client/router'

describe 'reference' do
  describe 'attributes' do
    before do
      load_presenters('.', app_dir)
    end

    after do
      reset_presenters!
    end

    let(:router) {Voom::Presenters::WebClient::Router.new(base_url: '/')}
    let(:params) {{}}

    it 'empty' do
      keys = Voom::Presenters.keys
      keys.each do |key|
        presenter = Voom::Presenters[key].call
        pom = presenter.render(router: router, context: params)
        desc = "'#{key}.pom'\n"

        def check_components(comp, attribs, level=0, desc)
          comp.components.each_with_index do |comp, index|
            desc += "#{''.ljust(level*4)}index: #{index} type: #{comp.type}"
            return attribs << [desc, comp.to_hash] if comp.attributes.any?
            check_components(comp, attribs, level+1, desc)
          end
        end
        attribs = []
        check_components(pom, attribs, desc)
        expect(attribs).to eq([])
      end
    end
  end
end
