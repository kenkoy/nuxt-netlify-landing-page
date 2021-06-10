# Static Site Generator for Landing/Lobby Pages 

## Goals
- Automatically build Netlify CMS, and landing/lobby pages through a seamless integration with nuxt.js
- Authenticate admin user through Gitlab
- AWS S3 auto deployment

# The Architecture
landing-page-ssg is a project build on top of Nuxt.JS and Netlify CMS.
- Digital Acquisition [How did we use it with Digital Acquisition Architecture](https://wiki.jpj.com/display/ITDEV/DAS+-+Architectural+Platform)
- Nuxt JS [Nuxt.js docs](https://nuxtjs.org).
- Netlify CMS [Netlify CMS Architecture](https://www.netlifycms.org/docs/architecture/#:~:text=Netlify%20CMS%20is%20a%20React,collections%20%2C%20entries%20%2C%20and%20widgets%20.&text=The%20structure%20of%20an%20entry,a%20label%20%2C%20and%20a%20widget%20.).

## Folder Structure

### `assets`
└─ content/landing-page/marketing

  └─ template code - ex. vjhp, vjlp1, iclp1 etc.

    └─ *.md - contains CMS data in yml format

### `layouts`
└─ *.vue - implements the rendering of data to static landing pages

### `pages`
└─ marketing

  └─ template code - ex. vjhp, vjlp1, iclp1 etc.

    └─ index.vue - implements the retrieval of all landing pages under the same parent template

    └─ _slug

      └─ index.vue - implements the retrieval of data from markdown files

### `static`
└─ marketing

  └─ admin - contains CMS loader and configuration files
  
  └─ img - contains static images uploaded from CMS

### `test`
Contains unit tests per module folder and test configurations

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# run unit test
$ npm run test

# run tests related to changed files
$ npm run test:unit

# run code linter
$ npm run lint

# run to fix some code linting issues
$ npm run lint:fix

```
