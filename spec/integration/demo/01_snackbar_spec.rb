require "watir_helper"

describe "Demo - Snackbars", :integration do
  before do
    goto "#{host}/snackbar"
  end
  after do
    print_js_errors
  end
  
  it "has snacktext" do
    b.wait_until(timeout: 1) {
      b.text.include? "Top Level Important Information!"
    }
    button(id: 'show_snackbar').click
    b.wait_until(timeout: 3) {
      b.text.include? "You clicked snackbar the button!"
    }
  end
end
