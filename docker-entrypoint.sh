#!/bin/bash
set -e
npm link ${COMPONENT_PATH}
npm install
sed \
  -e 's|${COMPONENT_PATH}|'${COMPONENT_PATH}'|g' \
  -e 's|${COMPONENT_NAME}|'${COMPONENT_NAME}'|g' \
  index.html.env > index.html
exec npm start
