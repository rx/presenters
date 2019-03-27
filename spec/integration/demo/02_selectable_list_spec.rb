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
    b.checkboxes(class_name: 'v-list-item--selectable-checkbox').each do |checkbox|
      expect(checkbox.checked?).to eq(true)
    end
    # Deselect
    select_all.click
    b.checkboxes(class_name: 'v-list-item--selectable-checkbox').each do |checkbox|
      expect(checkbox.checked?).to eq(false)
    end
  end

end
