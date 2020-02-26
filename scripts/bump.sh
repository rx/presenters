#!/usr/bin/env bash
set -euo pipefail
# Docs: https://github.com/svenfuchs/gem-release#gem-release
BUMP_LEVEL="${BUMP_LEVEL:-minor}"  # major, minor, patch, pre
gem bump --version $BUMP_LEVEL --no-commit

