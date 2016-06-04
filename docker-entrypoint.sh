#!/bin/bash
set -e
npm install
npm install ./component
exec npm start
