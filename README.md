# Voom::Presenters

## TLDR;
Presenters are to HTML/User Interfaces what C is to assembly.

A Ruby DSL for describing user interfaces. 
The semantics are adopted from [Material Design](https://material.io/).

A presenter generates a Presenter Object Model (POM). 
A POM fully describes a user interface.
A POM client can fully render user interface from POM.

## What are voom-presenters?

* A Ruby user interface abstraction.
* A Ruby DSL to build a user interface.
* A power washer for building user interfaces.

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

[Demo](https://powerful-bastion-96181.herokuapp.com)

Or to run locally:

    git clone git@github.com:rx/presenters.git
    cd presenters/
    bundle install
    rackup

    open http://localhost:9292
    
To see the POM:

    open http://localhost:9292/index.pom
  

## User Interface Engine

The POM + A POM Client is an interface engine. 

This example downloads the POM of the index page. 
Then posts it to the reference web client. 
That result is then saved to a file and opened up with a browser.
    
    curl localhost:9292/index.pom > $TMPDIR/index.json  && curl -d "@$TMPDIR/index.json" -X POST localhost:9292/index > $TMPDIR/index.html && open $TMPDIR/index.html

## Status
This project is in a pre-beta status. It is changing frequently as the first user interfaces are being built with it.
Any use should be for internal use only until the status becomes beta.

[![CircleCI](https://circleci.com/gh/rx/presenters.svg?style=svg)](https://circleci.com/gh/rx/presenters)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/rx/presenters/master/LICENSE)
    
## Usage

To use it, add this line to your Gemfile:

    gem 'voom-presenters'

For rails: Mount the web-client in your rails config/routes.rb

    mount ::Voom::Presenters::WebClient::App, at: '/'
    # the api is optional
    mount ::Voom::Presenters::Api::App,       at: '/'
     
   
Create the file app/presenters/hellow_world.pom with the contents:
    
    Voom::Presenters.define(:hellow_world) do
      heading 'hello world'
    end   

Start your rails server and goto http://localhost:3000/hello_world

Use the [Demo](https://powerful-bastion-96181.herokuapp.com) to get example code to drop into your presetners.


## Settings

Many of the presenters [settings](https://github.com/rx/presenters/blob/251f450f11f75332a74ff8d0729e7552b17f88ba/lib/voom/presenters/settings.rb) can be customized. You do this with an initializer to set them.

The initializer needs to be loaded after the base settings are loaded.

    # For example:
    Voom::Presenters::Settings.configure do |config|
      config.presenters.web_client.prepare_context << ->(context, session, _env){
        identity_id = session[:aaa_identity]
        context.merge(aaa_identity: identity_id)
      }
    end
    
## WebClient 

### Custom Error Pages

Exceptions will load the public/500.html from the current working directory of the process.

If you are running mounted in Rails, this will be there and you shouldn't have to do anything.

To see the page in development set the environment variable PRESENTERS_ENABLE_ERROR_PAGE=false and goto the route `/boom`.

> Attribution: Error page was ported from [Rails](https://github.com/rails/rails/blob/b2eb1d1c55a59fee1e6c4cba7030d8ceb524267c/railties/lib/rails/generators/rails/app/templates/public/500.html).

### Environment Variables

| Environment Variable        | Description|
|---                          |---|
|PRESENTERS_ENABLE_ERROR_PAGE | This will turn on/off the sinatra error page during development. Good for testing Custom Error pages.|

## Honeybadger

Presenters supports honeybadger for error reporting out of the box. Just set HONEYBADGER_API_KEY in your environment.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rx/presenters.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Voom::Presenters project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/rx/presenters/blob/master/CODE-OF-CONDUCT.md).
