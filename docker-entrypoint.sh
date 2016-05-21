#!/bin/bash
set -e
npm link ${COMPONENT_PATH}
npm install
sed \
  -e 's|${COMPONENT_PATH}|'${COMPONENT_PATH}'|g' \
  index.html.env > index.html
exec npm start
