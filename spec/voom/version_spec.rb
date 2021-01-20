require 'spec_helper'

describe 'version' do
  it 'exists' do
    expect(Voom::Presenters::Version::VERSION).not_to be nil
  end
end
