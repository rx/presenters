Voom::Presenters.define 'layouts.default' do
  layout 'default' do
    header do
      menu do
        item 'Top'
      end
    end
    side_nav do
      menu do
        item 'Left'
      end
    end

    right_nav do
      menu do
        item 'Right'
      end
    end
  end
end
