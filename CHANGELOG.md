# [3.0.0-beta.7](https://github.com/rx/presenters/compare/v3.0.0-beta.6...v3.0.0-beta.7) (2021-07-09)


### Bug Fixes

* Rails routes automatically made available as helpers ([#322](https://github.com/rx/presenters/issues/322)) ([abb0031](https://github.com/rx/presenters/commit/abb00311940fda8741459f8aafe29cd7bf074b88))
* view paths issue when using partials with Rails Engine ([#321](https://github.com/rx/presenters/issues/321)) ([2a917e7](https://github.com/rx/presenters/commit/2a917e7076895037e5a069e77525ef53d2ca45f1))


### Features

* switch to use Rails built-in watchers and reloader ([#320](https://github.com/rx/presenters/issues/320)) ([53e0ee4](https://github.com/rx/presenters/commit/53e0ee49caa663ce93ff731c280bcd754da73fc1))

# [3.0.0-beta.6](https://github.com/rx/presenters/compare/v3.0.0-beta.5...v3.0.0-beta.6) (2021-06-23)


### Bug Fixes

* fixed typo on if check ([95b3091](https://github.com/rx/presenters/commit/95b3091365a853eee24e4bce0e37b182da1fdc3d))
* small tweaks to simplify the presenters wrappers ([#319](https://github.com/rx/presenters/issues/319)) ([cbf0c7c](https://github.com/rx/presenters/commit/cbf0c7c4c80d68ecc84a2989934d2d02e8a1a928))

# [3.0.0-beta.5](https://github.com/rx/presenters/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2021-06-18)


### Bug Fixes

* add Rack > 2.2.2 support ([c39c18d](https://github.com/rx/presenters/commit/c39c18d48c557f9f206396eb73e20f15b0a85e7e))
* add Rack > 2.2.2 support ([6e23287](https://github.com/rx/presenters/commit/6e232875d1ea3c4250f9e19e841215a750082ffc))
* native rails tag helper conflicts with base components tag method. ([c9d3847](https://github.com/rx/presenters/commit/c9d3847405ab53c1ba728bf9f2afac655f0b1c1f))

# [3.0.0-beta.4](https://github.com/rx/presenters/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2021-06-15)


### Bug Fixes

* Updated generator to use secure version of Rake ([5e0761f](https://github.com/rx/presenters/commit/5e0761f7c13139e68da38ea4dfaae4b40c010e71))

# [3.0.0-beta.3](https://github.com/rx/presenters/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2021-06-07)


### Bug Fixes

* added cli --version ([4c5b10e](https://github.com/rx/presenters/commit/4c5b10e0707bcdeecfb29908eb3284b692cbcd41))
* added missing prepare context callbacks to Rails Engine ([bafa36d](https://github.com/rx/presenters/commit/bafa36d6e95ad9863eb93cb44cc894163c147c4f))
* added prepare context for Rails native views engine that sets the request and session automatically ([a09f3c6](https://github.com/rx/presenters/commit/a09f3c637102e640fe0b91894ae89b5a07288846))
* Added version.rb to plugin generator ([f1f2092](https://github.com/rx/presenters/commit/f1f20925dfd326fb5a47910952e21b34b762c31d))
* Added version.rb to plugin generator ([35187bf](https://github.com/rx/presenters/commit/35187bf188957e2ca93e2bf07963e958452f27fe))
* expanded plugin generator to include github semantic release, demo pom and sample README ([06de7a2](https://github.com/rx/presenters/commit/06de7a237f8a417a11776d1994915c32253a981d))
* fixed unordered list partial rendering error ([014f1d1](https://github.com/rx/presenters/commit/014f1d19926d7e9d39618fbe68c8068db316ac4b))
* generator not compatible with COPRL 3 Rails templating naming conventions ([f6d80f0](https://github.com/rx/presenters/commit/f6d80f0a44f6305b9339bc2bd6db8487eefc68cc))
* removed google_map built in plugin to its own plugin ([a34290d](https://github.com/rx/presenters/commit/a34290de890e2fdf7e6c2c7b1714854d454c82a4))


### Features

* Added singular alias for common actions: load, replace, post, create, and delete ([b57c305](https://github.com/rx/presenters/commit/b57c305bd4dbf95b8a9662ad747020683bf74c8d))

# [3.0.0-beta.2](https://github.com/rx/presenters/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2021-06-03)


### Bug Fixes

* support for index presenters within Rails ([06b5fb9](https://github.com/rx/presenters/commit/06b5fb97e049db3f8670eef87979959d8bb1e63b))

# [3.0.0-beta.1](https://github.com/rx/presenters/compare/v2.1.1...v3.0.0-beta.1) (2021-06-02)

* Coprl module rename and Rails 5 and 6 native views (#318) ([8acafd5](https://github.com/rx/presenters/commit/8acafd5e1a1f116c881ae79c59d069161d7ec2e6)), closes [#318](https://github.com/rx/presenters/issues/318) [#309](https://github.com/rx/presenters/issues/309) [#317](https://github.com/rx/presenters/issues/317) [#316](https://github.com/rx/presenters/issues/316) [#315](https://github.com/rx/presenters/issues/315) [#314](https://github.com/rx/presenters/issues/314) [#313](https://github.com/rx/presenters/issues/313) [#312](https://github.com/rx/presenters/issues/312) [#311](https://github.com/rx/presenters/issues/311) [#310](https://github.com/rx/presenters/issues/310) [#316](https://github.com/rx/presenters/issues/316) [#315](https://github.com/rx/presenters/issues/315) [#314](https://github.com/rx/presenters/issues/314) [#313](https://github.com/rx/presenters/issues/313) [#312](https://github.com/rx/presenters/issues/312) [#311](https://github.com/rx/presenters/issues/311) [#310](https://github.com/rx/presenters/issues/310)

### BREAKING CHANGES

#### Migrating from Presenters v2 to COPRL Presenters v3

##### Clients
* Refactor module Voom => Coprl
* Replace in requires in app and lib files 'voom' => 'coprl'

##### Plugins

The plugins have been modified to support Rails native views.
There is a generator that you can also use to generate a new plugin: `coprl generate plugin PLUGIN_NAME`.
In some cases generating a new plugin and moving over the code may be the preferred option.

The rest of this guide assumes you are going to migrate it over manualy.

###### Module Rename
* Rename library directory `lib/voom` => 'lib/coprl'
* Refactor module `Voom` => `Coprl`
* Replace in `lib` files  'voom/' => `coprl/`

###### View Changes

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

# [2.1.1](https://github.com/rx/presenters/tree/2.1.1) (2021-04-26)

[Full Changelog](https://github.com/rx/presenters/compare/v2.1.1...2.1.0)

# [2.1.0](https://github.com/rx/presenters/tree/2.1.0) (2021-03-17)

[Full Changelog](https://github.com/rx/presenters/compare/v2.1.0...2.0.3)

# [2.0.3](https://github.com/rx/presenters/tree/2.0.3) (2021-03-11)

[Full Changelog](https://github.com/rx/presenters/compare/v2.0.3...2.0.2)

# [2.0.2](https://github.com/rx/presenters/tree/2.0.2) (2021-02-18)

[Full Changelog](https://github.com/rx/presenters/compare/v2.0.2...2.0.1)

# [2.0.1](https://github.com/rx/presenters/tree/2.0.1) (2020-12-23)

[Full Changelog](https://github.com/rx/presenters/compare/v2.0.1...2.0.0)

# [v2.0.0](https://github.com/rx/presenters/tree/v2.0.0) (2020-12-22)

[Full Changelog](https://github.com/rx/presenters/compare/2.0.0...v1.0.0)

# [1.0.0](https://github.com/rx/presenters/tree/1.0.0) (2020-12-20)

[Full Changelog](https://github.com/rx/presenters/compare/v0.5.0...1.0.0)

**Closed issues:**

- Validation on components and plugins is not run [\#274](https://github.com/rx/presenters/issues/274)

**Merged pull requests:**

- Semantic release [\#296](https://github.com/rx/presenters/pull/296) ([rx](https://github.com/rx))
- Bump lodash from 4.17.14 to 4.17.20 in /views/mdc [\#295](https://github.com/rx/presenters/pull/295) ([dependabot[bot]](https://github.com/apps/dependabot))
- Plugin Generator [\#294](https://github.com/rx/presenters/pull/294) ([rx](https://github.com/rx))
- Need quotes around behavior [\#293](https://github.com/rx/presenters/pull/293) ([NullTerminator](https://github.com/NullTerminator))
- Allow "currency" as a behavior in text fields  [\#292](https://github.com/rx/presenters/pull/292) ([dsgraham](https://github.com/dsgraham))
- Allow setting background color of a card [\#291](https://github.com/rx/presenters/pull/291) ([NullTerminator](https://github.com/NullTerminator))
- Bump http-proxy from 1.17.0 to 1.18.1 in /views/mdc [\#290](https://github.com/rx/presenters/pull/290) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump handlebars from 4.3.3 to 4.7.6 in /views/mdc [\#289](https://github.com/rx/presenters/pull/289) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump node-sass from 4.11.0 to 4.13.1 in /views/mdc [\#288](https://github.com/rx/presenters/pull/288) ([dependabot[bot]](https://github.com/apps/dependabot))
- Namespace CSS and field level validation errors [\#287](https://github.com/rx/presenters/pull/287) ([dsgraham](https://github.com/dsgraham))
- Bump elliptic from 6.4.1 to 6.5.3 in /views/mdc [\#286](https://github.com/rx/presenters/pull/286) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump json from 2.1.0 to 2.3.1 [\#285](https://github.com/rx/presenters/pull/285) ([dependabot[bot]](https://github.com/apps/dependabot))
- Presenter definition options [\#284](https://github.com/rx/presenters/pull/284) ([dsgraham](https://github.com/dsgraham))
- Html decorators [\#282](https://github.com/rx/presenters/pull/282) ([NullTerminator](https://github.com/NullTerminator))
- Bump npm from 6.13.4 to 6.14.6 in /views/mdc [\#281](https://github.com/rx/presenters/pull/281) ([dependabot[bot]](https://github.com/apps/dependabot))
- Unescape attrs before passing them to replaces [\#279](https://github.com/rx/presenters/pull/279) ([NullTerminator](https://github.com/NullTerminator))
- Dispatch an event when the calendar picker is closed [\#278](https://github.com/rx/presenters/pull/278) ([NullTerminator](https://github.com/NullTerminator))
- Bump rack from 2.0.8 to 2.2.3 [\#277](https://github.com/rx/presenters/pull/277) ([dependabot[bot]](https://github.com/apps/dependabot))
- Allow table columns to have non markdown values [\#276](https://github.com/rx/presenters/pull/276) ([NullTerminator](https://github.com/NullTerminator))
- Hook up validation for components and plugins from the post event. [\#275](https://github.com/rx/presenters/pull/275) ([dsgraham](https://github.com/dsgraham))
- New cart support [\#273](https://github.com/rx/presenters/pull/273) ([kgrafius](https://github.com/kgrafius))
- Bump websocket-extensions from 0.1.3 to 0.1.4 in /views/mdc [\#272](https://github.com/rx/presenters/pull/272) ([dependabot[bot]](https://github.com/apps/dependabot))
- Changed content implementation of inline from inline to inline-block. … [\#271](https://github.com/rx/presenters/pull/271) ([kgrafius](https://github.com/kgrafius))
- Fix snackbar callback [\#270](https://github.com/rx/presenters/pull/270) ([dsgraham](https://github.com/dsgraham))
- Introduce text\_field `behavior` attribute [\#269](https://github.com/rx/presenters/pull/269) ([jadefish](https://github.com/jadefish))
- Fix text field icons [\#268](https://github.com/rx/presenters/pull/268) ([jadefish](https://github.com/jadefish))
- Updated card markup with a containing div for managing visibility. Ad… [\#267](https://github.com/rx/presenters/pull/267) ([kgrafius](https://github.com/kgrafius))
- Ensure lifecycle events are always dispatched [\#266](https://github.com/rx/presenters/pull/266) ([jadefish](https://github.com/jadefish))
- Remove Nokogiri as an explicit dependency [\#265](https://github.com/rx/presenters/pull/265) ([jadefish](https://github.com/jadefish))
- Fix frozen string mutation issue with Ruby 2.7.0 [\#264](https://github.com/rx/presenters/pull/264) ([jadefish](https://github.com/jadefish))
- Alternate css hide strategy [\#263](https://github.com/rx/presenters/pull/263) ([kgrafius](https://github.com/kgrafius))
- Added icons to the select component [\#262](https://github.com/rx/presenters/pull/262) ([rx](https://github.com/rx))
- Update rake requirement from ~\> 11.3 to ~\> 13.0 [\#261](https://github.com/rx/presenters/pull/261) ([dependabot[bot]](https://github.com/apps/dependabot))
- Dmonsewicz/add color to secondary title for expansion panel [\#259](https://github.com/rx/presenters/pull/259) ([dennismonsewicz](https://github.com/dennismonsewicz))
- adding Icons mixin to Common [\#258](https://github.com/rx/presenters/pull/258) ([dennismonsewicz](https://github.com/dennismonsewicz))
- Use color classes for background-color so we can use palette colors [\#257](https://github.com/rx/presenters/pull/257) ([NullTerminator](https://github.com/NullTerminator))
- Render table pagination buttons as buttons [\#255](https://github.com/rx/presenters/pull/255) ([jadefish](https://github.com/jadefish))
- Implement Typography.prototype.value\(\) [\#254](https://github.com/rx/presenters/pull/254) ([jadefish](https://github.com/jadefish))
- Flag HTML in POSTs [\#253](https://github.com/rx/presenters/pull/253) ([dsgraham](https://github.com/dsgraham))
- Add before\_render configuration setting [\#251](https://github.com/rx/presenters/pull/251) ([jadefish](https://github.com/jadefish))
- Allow replaces to skip some input values [\#250](https://github.com/rx/presenters/pull/250) ([NullTerminator](https://github.com/NullTerminator))
- Provide CSRF authenticity token meta tags and pass through on POST [\#249](https://github.com/rx/presenters/pull/249) ([dsgraham](https://github.com/dsgraham))
- Added `case\_type` attribute to text\_field component.  [\#248](https://github.com/rx/presenters/pull/248) ([kgrafius](https://github.com/kgrafius))
- Bump rack-cors from 1.0.2 to 1.1.0 [\#247](https://github.com/rx/presenters/pull/247) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump rack from 2.0.6 to 2.0.8 [\#246](https://github.com/rx/presenters/pull/246) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump npm from 6.11.3 to 6.13.4 in /views/mdc [\#245](https://github.com/rx/presenters/pull/245) ([dependabot[bot]](https://github.com/apps/dependabot))
- Allow the use of a dialog from a list line. [\#244](https://github.com/rx/presenters/pull/244) ([dsgraham](https://github.com/dsgraham))
- Number field [\#243](https://github.com/rx/presenters/pull/243) ([kgrafius](https://github.com/kgrafius))
- Only load scripts from a flow-matic once [\#242](https://github.com/rx/presenters/pull/242) ([NullTerminator](https://github.com/NullTerminator))
- Allow setting background color for buttons and contents [\#239](https://github.com/rx/presenters/pull/239) ([NullTerminator](https://github.com/NullTerminator))
- Dependabot bumped one, but had old versions of others.  lock from bundle [\#238](https://github.com/rx/presenters/pull/238) ([NullTerminator](https://github.com/NullTerminator))
- Updates to be web component / shadow dom friendly [\#234](https://github.com/rx/presenters/pull/234) ([NullTerminator](https://github.com/NullTerminator))
- Bump rubyzip from 1.2.3 to 1.3.0 [\#229](https://github.com/rx/presenters/pull/229) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump mixin-deep from 1.3.1 to 1.3.2 in /views/mdc [\#213](https://github.com/rx/presenters/pull/213) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump eslint-utils from 1.3.1 to 1.4.2 in /views/mdc [\#212](https://github.com/rx/presenters/pull/212) ([dependabot[bot]](https://github.com/apps/dependabot))

## [v0.5.0](https://github.com/rx/presenters/tree/v0.5.0) (2019-11-01)

[Full Changelog](https://github.com/rx/presenters/compare/0.5.0...v0.5.0)

# HISTORY
This is the manual changelog, managed before switching to github_changelog_generator.

## [0.2.00] - 2018-09-18
### Added
- This change log
- [Namespaces]
- [Slider component]
- [Rich text component]
- [Map component]
- [Chip as input]
- [Tagged Input]
- [Grid Padding]
- [Grid Wide/Table scrolling]
- [Overline Text Style]
- [Blank lines]
- [Page separator]
- [Clear action]
- Floating content blocks
- Request logging

### Removed
- Autocomplete event

### Changed
- Text field - draw with outlined style by default
- Text field - support for leading or trailing icons
- Text field - disabled support
- Text area - can specify cols to control width
- Select options - can pass the option text as the first parameter, or in the block.
- List - component action blocks are now actions
- List - color and border
- Content blocks - icons support
- Events - aliases focus and blur (maps to focusin and focusout)
- Typography - available in menu items, including markdown
- Typography - removed trailing line breaks
- Rails helper table_for helper - accepts timezone for auto time formatting
- Date time - default format changed
- Webclient FAB button - shifted up and out to make room for list actions 

### Fixed
- Text field - Removed excessive trailing spacing
- Context is no longer copied and it is not included in the pom json
- List - selected lists can render selected with the checked option

[Unreleased]: https://github.com/rx/presenters/compare/v0.1.14...HEAD 
[0.1.14]: https://github.com/rx/presenters/compare/v0.1.14...v0.1.13
[Namespaces]: https://coprl-ruby.herokuapp.com/namespaces
[Stepper]: https://coprl-ruby.herokuapp.com/steppers
[Rich text component]: https://coprl-ruby.herokuapp.com/text_areas
[Slider component]: https://coprl-ruby.herokuapp.com/sliders
[Tagged Input]: https://coprl-ruby.herokuapp.com/tagged_input
[Overline Text Style]: https://coprl-ruby.herokuapp.com/styles
[Page separator]: https://coprl-ruby.herokuapp.com/separator
[Blank lines]: https://coprl-ruby.herokuapp.com/styles
[Grid Padding]: https://coprl-ruby.herokuapp.com/layouts
[Map component]: https://coprl-ruby.herokuapp.com/maps
[Clear action]: https://coprl-ruby.herokuapp.com/clear_action 
[Chip as input]: https://coprl-ruby.herokuapp.com/chips#input_chips 
[Floating content blocks]:https://coprl-ruby.herokuapp.com/content#floating  
[Grid Wide/Table scrolling]:https://coprl-ruby.herokuapp.com/tables

\* *This Changelog was automatically generated by [github_changelog_generator](https://github.com/github-changelog-generator/github-changelog-generator)*
