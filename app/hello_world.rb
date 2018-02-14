Voom::Presenters.define('hello_world') do
  heading 'Heading 1'
  heading 'Heading 2', level: 2
  heading 'Heading 3', level: 3
  heading 'Heading 4', level: 4
  heading 'Heading 5', level: 5
  heading 'Heading 6', level: 6

  button "Default" #defaults: button_type: :raised, color: :primary
  button "Icon", icon: :anchor # with optional icon
  button "Secondary", color: :secondary
  button "Warning", color: :warning
  button "Success", color: :success
  button "Info", color: :info
  button "Danger", color: :danger # with optional icon

  button "Small", size: :sm
  button "L", size: :lg
  
  button "Flat",      type: :flat #color: ignored
  button "With Icon", icon: 'anchor', type: :flat #color: ignored
  button icon: 'anchor', type: :flat #color: ignored

  button "Large", size: :lg, type: :flat #color: ignored
  button "Large", icon: 'anchor', size: :lg, type: :flat #color: ignored
  button icon: 'anchor', size: :lg, type: :flat #color: ignored

  button "Small", size: :sm, type: :flat #color: ignored
  button "Small", icon: 'anchor', size: :sm, type: :flat #color: ignored
  button icon: 'anchor', size: :sm, type: :flat #color: ignored


  button icon: :plus, type: :fab #color: :primary
  button icon: :plus, type: :fab, color: :secondary
  button icon: :plus, type: :fab, color: :warning
  button icon: :plus, type: :fab, color: :success
  button icon: :plus, type: :fab, color: :info
  button icon: :plus, type: :fab, color: :danger
  button icon: :plus, type: :fab, size: :sm, color: :danger

  form do
    
  end
  # button  "Button" #default
  # button  "Button" #default
  #
  # button "Primary button", primary: true, render: 'hello_world'
  # button icon: 'plus', render: 'hello_world', primary: true # Floating Action Button
  # action 'Action Link', render: 'hello_world'
end