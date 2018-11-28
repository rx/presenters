#!/usr/bin/env bash
set -euo pipefail
# https://github.com/github-changelog-generator/github-changelog-generator
github_changelog_generator rx/presenters --future-release $1

