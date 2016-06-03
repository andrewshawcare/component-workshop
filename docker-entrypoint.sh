#!/bin/bash
set -e
npm link ./component
npm install
exec npm start
