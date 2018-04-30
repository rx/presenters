require "watir_helper"

describe "Demo Index", :integration do
  before do
    goto "http://localhost:9292/index"
  end

  it "has heading" do
    expect(div(id: "headline")).to be_present
  end
end