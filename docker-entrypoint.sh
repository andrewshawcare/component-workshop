#!/bin/bash
set -e
npm install ./component
npm link ./component
exec npm start
