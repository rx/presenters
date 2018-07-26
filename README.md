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

Building a user interface should like Ruby iteself: 
> ... a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.

Instead building a user interface has turned into:
> How many languages/technologies/frameworks do I need to learn to build a rich user interface/experience?"

A typical web client requires at a minimum the following: HTML, CSS, Javascript, in addition we need Ruby on the server, plus some SQL.  That is 5 techologies/languagaes.
Now lets talk about a new client like an iOS or Android client. If we go native, we can now add Java and Swift to that list. We are up to 7 technologies/languages!
We didn't even add any popular extras like coffeescript, haml, sass, and we left out frameworks.

What if you could write all my user interface in Ruby and have it rendered natively in ANY client? The voom-presenters _enables_ that. It is a Ruby DSL that describes a user interface.
It generates an intermediate Presenter Object Model (POM). The POM is a declartive user interface that can be rendered by a POM client. 
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
[![Maintainability](https://api.codeclimate.com/v1/badges/8fcea717485230e60f27/maintainability)](https://codeclimate.com/github/rx/presenters/maintainability)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/rx/presenters/master/LICENSE)
    
## Usage

TODO: Write usage instructions here

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rx/presenters.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

