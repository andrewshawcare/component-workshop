# component-workshop
Create fast development feedback loops using the web component workshop.

## Setup

There is an expectation that you have the following project structure:

* `docker-compose.yml`
* `index.js`
* `package.json`
* `spec.js`

The `docker-compose.yml` file should reference this image and set the following environment variables:

* `COMPONENT_PATH`: The path to the component source (e.g. `./test-component`)

You will likely want to map your component source into the `node_modules` folder at the appropriate location so that it mirrors a deployment environment.

Reference the `test-component` directory in this project to figure out how to structure the remaining files.

Currently the only test framework supported is [Jasmine](http://jasmine.github.io/).
