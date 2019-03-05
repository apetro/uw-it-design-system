# UW IT Design System

WIP

Preview this project at https://uw-madison-doit.github.io/uw-it-design-system/

## Getting Started

Clone the repository locally and run `bundler install`
That's all there is to it.

## Alternative getting started

Good news: you can locally build and try out the documentation without locally
installing Ruby, Bundler, Gem, Gulp, Hack, Cough, Spittle, Phlem, or, well, you
get the idea.

1. Clone this repo locally:
   `git clone https://github.com/UW-Madison-DoIT/uw-it-design-system.git`
2. Install [Docker][].
3. Navigate on the command line to the directory of this project.
4. `docker-compose up`
5. Tada! You can now locally try out the site at
   `localhost:8080/uw-it-design-system/`.

All the tooling, all the building, happens contained in a tidy little Docker
container with no impact on your local environment.

## Developing

Ensure you have Jekyll installed on your machine: `jekyll -v` 

Jekyll installation instructions: [https://jekyllrb.com/docs/installation/macos/]

## Developing

To build the \_site directory used by Jekyll, use: `jekyll build`

To run the site locally, use: `jekyll serve`

Hint: when that doesn't work, try `bundle exec jekyll serve` .

## Building for Production

Building for production is easy, just run npm run build-prod to compile and minify all .scss and .js files. This will overwrite any non minified files in the dist directory, this is done so that file paths do not need to be changed when building for prod or working in a dev environment.

The site will be available at http://127.0.0.1:4000/uw-it-design-system/

## Do and do not includes

To use the do this, not that idiom, use the `do-this-not-that` `include`.

Do and do not examples consist of:

+ the positive example
+ a phrase describing the positive example. The template will prepend "Do " to
  this phrase.
+ the negative example
+ a phrase describing the negative example. The template will prepand "Don't "
  to this phrase.

First, capture the examples

```liquid
{% capture totally_do_this %}
Labels are intended to look like this
{% endcapture %}

{% capture so_do_not_do_this %}
Labels are not intended to look like this.
{% endcapture %}
```

Then, invoke the include, passing along the examples and the phrases.

```liquid
{% include do-this-not-that.html
  do-this=totally_do_this
  do-phrase="use sentence case in labels"
  not-that=so_do_not_do_this
  not-phrase="end labels with end punctuation"
  %}
```

In this example, `totally_do_this` and `so_do_not_do_this` are arbitrary
identifiers -- use whatever would best label the examples.

---

Copyright (c) 2019 by Board of Regents of the University of Wisconsin System.

[Docker]: https://www.docker.com/
