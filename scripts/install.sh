#!/usr/bin/env bash
set -eo pipefail
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
nvm install `cat .nvmrc`