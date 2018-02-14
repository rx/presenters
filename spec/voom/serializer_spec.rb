require 'spec_helper'

describe 'to_hash' do
  before do
     load_presenters('presenters', spec_dir)
   end

  Voom::Presenters.list.each do |key|

    it 'exists' do
      expect(Voom::Presenters[key]).not_to be nil
    end
  end
end
