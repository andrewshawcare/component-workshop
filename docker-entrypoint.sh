#!/bin/bash
set -e
npm install ./component
npm install
exec npm start
