require "watir_helper"

describe "Demo Index", :integration do
  before do
    goto "#{host}/index"
  end

  it "has heading" do
    expect(div(id: "headline")).to be_present
  end
end