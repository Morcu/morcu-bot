#!/bin/bash

set -eo pipefail

if [[ "$1" = bottfg ]]; then
  exec node ./lib/app >> /var/log/bottfg/bottfg.log
fi

exec "$@"
