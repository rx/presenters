# Voom::Presenters

A Ruby DSL for describing user interfaces. 
The semantics are adopted from [Material Design](https://material.io/).

A presenter generates a Presenter Object Model (POM). 
A POM fully describes a user interface.
A POM client can fully render user interface from POM.

## Demo

    git clone git@github.com:rx/presenters.git
    cd presenters/
    bundle install
    rackup

    open htt://localhost:9292
    
To see the POM:

    open htt://localhost:9292/pom
  

## User Interface Engine

The POM + A POM Client is an interface engine. 

This example downloads the POM of the index page. 
Then posts it to the reference web client. 
That result is then saved to a file and opened up with a browser.
    
    curl localhost:9292/pom/index > $TMPDIR/index.json  && curl -d "@$TMPDIR/index.json" -X POST localhost:9292/index > $TMPDIR/index.html && open $TMPDIR/index.html
    
## Usage

TODO: Write usage instructions here

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rx/presenters.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

