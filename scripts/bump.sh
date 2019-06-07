#!/usr/bin/env bash
set -euo pipefail
BUMP_LEVEL="${BUMP_LEVEL:-minor}"  # major, minor, patch, pre
# https://github.com/gregorym/bump
gem bump $BUMP_LEVEL --no-commit

