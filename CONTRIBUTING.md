## How to contribute to Presenters

#### Semantic Release commit messages
Presenter uses [semantic release](https://semantic-release.gitbook.io/semantic-release/) to maintain [semantic versioning](https://semver.org/). 

This means that your commits must identify what changes are in them. Examples (from the semantic release readme):

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |

The following types are available:

* feat: A new feature
* fix: A bug fix
* docs: Documentation only changes
* style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* refactor: A code change that neither fixes a bug nor adds a feature
* perf: A code change that improves performance
* test: Adding missing or correcting existing tests
* chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

The [Angular Git Commit Guidelines](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) 
outlines the conventions in full detail.

#### **Did you find a bug?**

* **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/rx/presenters/issues).

* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/rx/presenters/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

* Use the bug report templates to create the issue.

#### **Did you write a patch that fixes a bug?**

* Open a new GitHub pull request with the patch.

* Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

#### **Do you intend to add a new feature or change an existing one?**

* Suggest your change as a new [feature request](https://github.com/rx/presenters/issues/new) and start writing code.

#### **Do you have questions about the source code?**

* Ask any question about how to use Presenters open a [support/question](https://github.com/rx/presenters/issues/new)

#### **Do you want to contribute to the Presenters documentation?**

* Open a new GitHub pull request with the patch.

Presenters are a volunteer effort. We encourage you to pitch in and join the team!

Thanks! :heart: :heart: :heart:

Presenters Team

(Attribution: Adapted from Rails contribution guidlines)
