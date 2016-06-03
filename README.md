# component-workshop
Create fast development feedback loops using the web component workshop.

## Setup

There is an expectation that you have the following project structure:

* `docker-compose.yml`
* `index.js`
* `package.json`
* `spec.js`

The `docker-compose.yml` file for components should mount a volume of the source directory to `/usr/src/app/component`.

Reference the `test-component` directory in this project to figure out how to structure the remaining files.

Currently the only test framework supported is [Jasmine](http://jasmine.github.io/).
