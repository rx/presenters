# COmmon PResenter Language (COPRL)

![alt text](https://media.giphy.com/media/13LEyaRbQbiWdi/giphy.gif "Power Washer for Building User Interfaces")

## TLDR;
Do you wish you could write a modern user interface in Ruby or any other language?

Now you can. Presenters are a Ruby DSL for rendering user interfaces. 

* Presenters are a power washer for building user interfaces
* Presenters are to HTML/User Interfaces what C is to assembly
* A presenter generates a Presenter Object Model (POM) 
* A POM fully describes a user interface
* A POM client can fully render user interface from POM

The semantics are adopted from [Material Design](https://material.io/).

## Why?

Building a user interface should like Ruby itself: 
> ... a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

Instead building a user interface has turned into:
> How many languages/technologies/frameworks do I need to learn to build a rich user interface/experience?"

A typical web client requires at a minimum the following: HTML, CSS, Javascript, in addition we need Ruby on the server, plus some SQL.  
That is 5 technologies/languages.
Now lets talk about a new client like an iOS or Android client. If we go native, we can now add Java and Swift to that list. We are up to 7 technologies/languages!
We didn't even add any popular extras like coffeescript, haml, sass, and we left out frameworks.

What if you could write all my user interface in Ruby and have it rendered natively in ANY client? The COPRL _enable_ that. It is a Ruby DSL that describes a user interface.
It generates an intermediate Presenter Object Model (POM). 
The POM is a declarative user interface that can be rendered by a POM client. 
The presenters gem provides a web client as a fully functional implementation that both renders natively as a Rails templating engine and as a Rack app.

This concept was initially inspired by the Presenters concepts of Ivar Jacobson as presented by Robert Martin.

## Demo

[Demo]

Or to run locally:

    git clone git@github.com:rx/presenters.git
    cd presenters/
    bundle install
    bundle exec rackup

    open http://localhost:9292
   
> Note: Demo defaults to Ruby version 2.7.3 in the .ruby-version file. If you want to run a different version 
> -- set RBENV_VERSION to your desired version. 
> For example: 
> ```
> RBENV_VERSION=2.5.5 bundle insatall
> RBENV_VERSION=2.5.5 bundle exec rackup```
    
To see the POM:

    open http://localhost:9292/index.pom
      
## Usage

### Rails
Presenters are a view templating language in Rails. 
You can mix and match presenters with your existing views, 
use them as new views, or call them as partails in existing views.

#### 1) Add presenters to Gemfile    
    gem 'coprl'

#### 2) Require coprl in config/application.rb
    require 'coprl'

#### 3) Mount presenters in config/routes.rb

    mount Coprl::Presenters::Rails::Engine => "/"

#### 4) Create the file app/view/hello_world.html.pom with the contents

    Coprl::Presenters.define(:hello_world) do
      heading 'hello world'
    end   

Navigate to [locahost:3000/hello_world](http://127.0.0.1:3000/hello_world)

Use the [Demo] to get example code to drop into your presenters.

#### 5) Optionally -- use presenters as partials from ERB/HAML
You can render a presenter as a partial from other templating laguages (erb, haml):

    <%= render 'show', presenter: 'hello_world' %> 

You need to add the following to your layout to use presenters as a partial alongside other erb's, haml or any other rails templating language.

##### Inside the &lt;head&gt; tag add the following:

      <title><%= @pom.page.title if @pom.page %></title>
      <%= coprl_headers(@base_url, request, @pom) %> 

##### Inside the &lt;body&gt; tag, around you existing yield add the following:

    <%= partial "body/preamble", :locals => {pom:@pom} %>
    <%= yield %>
    <%= partial "body/postamble", :locals => {pom:@pom} %>

### Rack
#### 1) To use it, add this line to your Gemfile:

    gem 'coprl'

#### 2) Create the file app/presenters/index.pom with the contents:

    Coprl::Presenters.define(:hello_world) do
      heading 'hello world'
    end   

Presenters are rack based. If your framework uses a rack config file add the following:
    use Coprl::Presenters::WebClient::App
    # the api is optional        
    # use Coprl::Presenters::Api::App

Start your app and goto [/hello_world](http://127.0.0.1:3000/hello_world)

Use the [Demo] to get example code to drop into your presenters.

## Status
This project is in a released status. 

[![CircleCI](https://circleci.com/gh/rx/presenters.svg?style=svg)](https://circleci.com/gh/rx/presenters)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/rx/presenters/master/LICENSE)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rx/presenters.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the COPRL project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/coprl/coprl/blob/master/CODE-OF-CONDUCT.md).

[Demo]:https://coprl-ruby.herokuapp.com/
