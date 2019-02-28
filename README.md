# Honey Bee Design System

WIP

Preview this project at https://uw-madison-doit.github.io/honeybee-design-system/

## Getting Started

Clone the repository locally and run `bundler install`
That's all there is to it.

## Developing

Ensure you have Jekyll installed on your machine: `jekyll -v` 

Jekyll installation instructions: [https://jekyllrb.com/docs/installation/macos/]

## Developing

To build the \_site directory used by Jekyll, use: `jekyll build`

To run the site locally, use: `jekyll serve`

## Building for Production

Building for production is easy, just run npm run build-prod to compile and minify all .scss and .js files. This will overwrite any non minified files in the dist directory, this is done so that file paths do not need to be changed when building for prod or working in a dev environment.

The site will be available at http://127.0.0.1:4000/honeybee-design-system/

---

Copyright (c) 2019 by Board of Regents of the University of Wisconsin System.
