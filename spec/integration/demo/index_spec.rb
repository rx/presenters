require "watir_helper"

describe "Demo Index", :integration do
  before do
    goto "http://localhost:9292"
  end

  it "has heading" do
    expect(div(id: "headline")).to be_present
  end

  # it "allows to search" do
  #   text_field(name: "q").set "watir"
  #   button(class: "lsb").click
  #   results = div(id: "ires")
  #   expect(results).to be_present.within(2)
  #   expect(results.lis(class: "g").map(&:text)).to be_any { |text| text =~ /watir/ }
  #   expect(results).to be_present.during(1)
  # end
end