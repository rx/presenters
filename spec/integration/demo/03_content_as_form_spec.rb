require 'watir_helper'

shared_examples 'displays all input parameters' do
  before do
    form.text_fields.each_with_index do |input, i|
      input.set(values[i])
    end
    form.checkboxes.first.set(checkbox_value)
  end

  before :each do
    submit_button.click
    response_div.wait_until(&:present?)
  end

  it 'renders all input parameters to the page' do
    expect(response_div.text).to include(checkbox_value.to_s)

    values.each do |value|
      expect(response_div.text).to include(value)
    end
  end
end

describe 'Content as Form', :integration do
  before do
    goto "#{host}/content_as_form"
    Watir.default_timeout = 5
  end

  after do
    print_js_errors
  end

  let(:response_div) { b.div(id: 'response_content', 'data-input-tag' => tag.to_s.succ) }
  let(:submit_button) { form.buttons[tag] }
  let(:values) { [SecureRandom.hex] }
  let(:checkbox_value) { Random.rand > 0.50 }

  context 'in a form block' do
    let(:form) { div(id: 'form_1') }
    let(:tag) { 0 }

    it_behaves_like 'displays all input parameters'

    context 'in a content block' do
      let(:tag) { 1 }

      it_behaves_like 'displays all input parameters'
    end

    context 'in a grid > column' do
      let(:tag) { 2 }

      it_behaves_like 'displays all input parameters'
    end
  end

  context 'in an untagged content block' do
    let(:form) { div(id: 'content_1') }
    let(:tag) { 0 }

    it_behaves_like 'displays all input parameters'

    context 'in a content block' do
      let(:tag) { 1 }

      it 'does not render any parameters to the page' do
        submit_button.click

        response_div.wait_until(&:present?)
        expect(response_div.text).to be_empty
      end
    end

    context 'in a grid > column' do
      let(:tag) { 2 }

      it_behaves_like 'displays all input parameters'
    end
  end

  context 'in a tagged content block' do
    let(:form) { div(id: 'content_2') }
    let(:tag) { 0 }

    it_behaves_like 'displays all input parameters'

    context 'in a content block' do
      let(:tag) { 1 }

      it_behaves_like 'displays all input parameters'
    end

    context 'in a grid > column' do
      let(:tag) { 2 }

      it_behaves_like 'displays all input parameters'
    end
  end

  context 'with an array of values' do
    let(:form) { div(id: 'content_array') }
    let(:tag) { 0 }
    let(:values) { Array.new(3) { SecureRandom.hex } }

    it_behaves_like 'displays all input parameters'
  end
end
