require "watir_helper"

describe "Demo - Selectable List", :integration do
  before do
    goto "#{host}/lists"
  end
  after do
    print_js_errors
  end

  it "selects and deselects them all" do
    select_all = checkbox(class_name: 'v-checkbox--select-control')
    # Select
    select_all.click
    b.inputs(class_name: 'v-list-item--selectable-checkbox').each do |elem|
      expect(elem.set?).to eq(true)
    end
    # Deselect
    select_all.click
    b.inputs(class_name: 'v-list-item--selectable-checkbox').each do |elem|
      expect(elem.set?).to eq(false)
    end
  end

end