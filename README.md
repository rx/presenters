# Voom::Presenters

## TLDR;
Do you wish you could write a modern user interface in pure Ruby?

Now you can. Presenters are a Ruby DSL for rendering user interfaces. 
The semantics are adopted from [Material Design](https://material.io/).

* Presenters are to HTML/User Interfaces what C is to assembly
* A presenter generates a Presenter Object Model (POM) 
* A POM fully describes a user interface
* A POM client can fully render user interface from POM

## What are voom-presenters?

* A Ruby user interface abstraction
* A Ruby DSL to build a user interface
* A power washer for building user interfaces

## Why?

Building a user interface should like Ruby itself: 
> ... a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

Instead building a user interface has turned into:
> How many languages/technologies/frameworks do I need to learn to build a rich user interface/experience?"

A typical web client requires at a minimum the following: HTML, CSS, Javascript, in addition we need Ruby on the server, plus some SQL.  
That is 5 technologies/languages.
Now lets talk about a new client like an iOS or Android client. If we go native, we can now add Java and Swift to that list. We are up to 7 technologies/languages!
We didn't even add any popular extras like coffeescript, haml, sass, and we left out frameworks.

What if you could write all my user interface in Ruby and have it rendered natively in ANY client? The voom-presenters _enable_ that. It is a Ruby DSL that describes a user interface.
It generates an intermediate Presenter Object Model (POM). 
The POM is a declarative user interface that can be rendered by a POM client. 
The core presenters gem provides a Web client as a fully functional reference implementation.

This concept was initially inspired by the Presenters concepts of Ivar Jacobson as presented by Robert Martin.

## Demo

[Demo]

Or to run locally:

    git clone git@github.com:rx/presenters.git
    cd presenters/
    bundle install
    bundle exec rackup

    open http://localhost:9292
    
To see the POM:

    open http://localhost:9292/index.pom
      
## Usage

To use it, add this line to your Gemfile:

    gem 'voom-presenters', github('rx/presenters'), require: false

Create the file app/presenters/index.pom with the contents:
    
    Voom::Presenters.define(:hello_world) do
      heading 'hello world'
    end   

### Rails
For rails: Mount the web-client in your rails config/routes.rb

    mount ::Voom::Presenters::WebClient::App, at: '/'
    # the api is optional
    # mount ::Voom::Presenters::Api::App,       at: '/'
    
Create an initializer `config/initializers/presenters.rb` with the following:
    
    require 'voom'

### Rack
Presenters are rack based. If your framework uses a rack config file add the following:

    use Voom::Presenters::WebClient::App
    # the api is optional        
    # use Voom::Presenters::Api::App

Start your app and goto [/hello_world](http://127.0.0.1:3000/hello_world)

Use the [Demo] to get example code to drop into your presetners.

## Status
This project is in a pre-beta status. It is changing frequently as the first user interfaces are being built with it.
Any use should be for internal use only until the status becomes beta.

[![CircleCI](https://circleci.com/gh/rx/presenters.svg?style=svg)](https://circleci.com/gh/rx/presenters)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/rx/presenters/master/LICENSE)

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rx/presenters.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Voom::Presenters project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/rx/presenters/blob/master/CODE-OF-CONDUCT.md).


[Demo]:https://powerful-bastion-96181.herokuapp.com
