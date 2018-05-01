require "watir_helper"

describe "Demo - Autocomplete", :integration do
  before do
    goto "#{host}/autocomplete"
  end
  after do
    print_js_errors
  end

  it "autocompletes" do
    search = text_field(name: 'search')
    search.set('erl')
    datalist = datalist(id: search.list)
    b.wait_until(timeout: 2) {
      (datalist.option(index: 0).value == 'Erlich Bachman' &&
          datalist.option(index: 1).value == 'erlich@bachmanity.test')
    }
    # Does not work
    # b.execute_script <<-JS
    #         var option = document.querySelector('option[data-key="1"]')
    #         option.click();
    # JS
    # expect(search.value).to eq ('erlich@bachmanity.test')
    # expect(search.data_key).to eq (1)
    # b.text('search_id: 1')
    # b.text('search: erlich@bachmanity.test')
  end
end