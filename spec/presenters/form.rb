Voom::Presenters.define('form1') do
  form id: 'greeting-form' do
    field id: :firstname, label: 'First Name'
    field id: :ssn, type: :hidden
    button text: 'hey now'
  end
end
