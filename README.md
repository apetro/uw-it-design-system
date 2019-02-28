# Honey Bee Design System

WIP

Preview this project at https://uw-madison-doit.github.io/honeybee-design-system/

## Getting Started
Clone the repository locally and run npm install
That's all there is to it.

## Developing
To begin development, run `npm run dev` to compile all files, create the dist directory, and start the development watch task. Gulp will now be watching all .scss and .js files in the respective asset directory. Gulp will output non minified files when compiling for development, it will also lint all JavaScript files and alert the developer of errors and warnings via the command line.

Gulp watch also includes a live reload server, be sure to install the LiveReload plugin for Chrome.

## Building for Production
Building for production is easy, just run npm run build-prod to compile and minify all .scss and .js files. This will overwrite any non minified files in the dist directory, this is done so that file paths do not need to be changed when building for prod or working in a dev environment.

Copyright (c) 2019 by Board of Regents of the University of Wisconsin System.
