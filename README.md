# component-workshop

Create fast development feedback loops using the component workshop.

## Getting Started

This project is used by the [slush-component generator](https://github.com/andrewshawcare/slush-component). It is intended that you run the generator in order to scaffold a component. The resulting component folder will include a `docker-compose.yml` file that, when run, will start a container using this image.

If your intention is not to create components but to contribute to development of the component workshop itself, follow these steps to setup a development environment:

1. Run the following command to install Homebrew: `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Using Homebrew, install Docker Toolbox: `brew update && brew install docker-toolbox`
3. Run the docker container via `docker-compose`: `docker-compose up`
