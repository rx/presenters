# Configuration
Presenters can be configured via settings set in e.g. Rails initializers.

## Overview
Configuration is handled via [dry-configurable](https://github.com/dry-rb/dry-configurable).

```ruby
Coprl::Presenters::Settings.configure do |config|
  config.presenters.helpers << SomeHelperClass
end
```

## Table of Contents
* [`before_render`](#before_render)

## Settings
### `before_render`
`before_render` is an array of things which respond to `#call/1`. The items in
the array are lazily invoked with the current request prior to a Presenter
being rendered.

If an item returns a non-`nil` Presenter name, this Presenter will be rendered
instead of the Presenter that was about to be rendered. In this case, subsequent
`before_render` items will not be invoked.

```ruby
# request: /foos/foo?id=1

Coprl::Presenters::Settings.configure do |config|
  config.presenters.before_render << lambda do |req|
    if some_predicate?
      return :render_me_instead
      # /render_me_instead?id=1 will be rendered instead of /foos/foo?id=1.
    end

    # return nil will not intercept rendering and the next lambda will be
    # invoked.
  end

  # this lambda will be invoked only if all previous lambdas returned nil.
  config.presenters.before_render << lambda do |req|
    puts 'if you see me, some_predicate? returned true'

    # return nil will not intercept rendering and the next lambda will be
    # invoked.
  end
end
```

If all items return `nil`, the original Presenter is rendered unintercepted.

#### Returning context

A `before_render` item may optionally return a context hash. This hash will be
passed to the rendered presenter and merged with existing context at render
time. **Key names in a returned context hash will overwrite the request's
context, so use with caution.**

```ruby
# request: /foos/foo?id=1

class AuthenticationCheck
  def initialize; end

  def call(req)
    unless authenticated?(req)
      return ['auth:login', { timestamp: Time.current.to_i }]
      # /auth/login?id=1&timestamp=1579535489 will be rendered instead of
      # /foos/foo?id=1.
      # /auth/login will have context { id: 1, timestamp: 1579535489 }
    end

    # return nil will not intercept rendering and the next lambda will be
    # invoked.
  end
end

Coprl::Presenters::Settings.configure do |config|
  config.presenters.before_render << AuthenticationCheck.new
end
```
