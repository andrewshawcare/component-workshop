#!/bin/bash
set -e
npm install
sed \
  -e 's|${COMPONENT_PATH}|'${COMPONENT_PATH}'|g' \
  -e 's|${COMPONENT_NAME}|'${COMPONENT_NAME}'|g' \
  index.html.template > index.html
exec npm start
