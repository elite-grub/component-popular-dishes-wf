# Elite Grub
Best way to learn more about a restaurant

## Related Projects
[Main Repo](https://github.com/elite-grub)

## Table of Contents
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

In a browser, navigate to localhost:3030/ to see Popular Dishes component.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 10.13.0
- etc

## Development

### Installing Dependencies

Note: Nodemon should be installed globally.

From within the root directory:
Open a terminal instance for every service and one for the proxy.
- Run 'npm install' for every service and the proxy.
- Run 'npm run build' for every service to create a bundle.js file.
- Run 'npm start' to start server.
- Run 'npm test' run Jest and Enzyme tests.
- Run 'npm run seed' to start database.
  - In a browser navigate to localhost:3030/popular/id to check information
  - (ex) For main restaurant information: localhost:3030/popular/1
