# Migrating from Presenters v2 to COPRL Presenters v3

## Plugins

The plugins have been modified to support Rails native views.
There is a generator that you can also use to generate a new plugin: `coprl generate plugin PLUGIN_NAME`.
In some cases generating a new plugin and moving over the code may be the preferred option.

The rest of this guide assumes you are going to migrate it over manualy.

### Module Rename
* Rename library directory `lib/voom` => 'lib/coprl'
* Refactor module `Voom` => `Coprl`
* Replace in `lib` files  'voom/' => `coprl/`

### View Changes

In the Coprl::Presenters::Plugins::PLUGIN_NAME::WebClientComponents
Add the following callback that points to your views directory

    def view_dir_PLUGIN_NAME(pom)
        File.join(__dir__, '../../../../../../..', 'views', 'components')
    end

* Add an `application` directory under your view directory returned above.
* Add a `_` prefix to your templates.
* Change erb render calls in your templates `erb :"components/event"` => `partial "components/event"`
* Add raw calls to any javascript/css that you emitt from your templates, e.g., `<%= raw File.read(File.expand_path('../../../../../../public/c3.min.css', __dir__)  ) %>`

**Recommended** 

Move templates, javascript and css files into their own view directory at the root of the presenter. 
This makes it easier to reason and find the appropriate parts of the plugin
