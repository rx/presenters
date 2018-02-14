require 'spec_helper'

describe 'version' do
  it 'exists' do
    expect(Voom::Presenters::VERSION).not_to be nil
  end
end
