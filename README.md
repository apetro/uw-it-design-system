# UW IT Design System

WIP

## Getting started with understanding, using the design system

View the website at https://uw-madison-doit.github.io/uw-it-design-system/

## Getting Started with editing the design system

### How the website works

In general this is a website generated via the Jekyll static site generator as
provided software--as-a-service in GitHub Pages.

That means there's source code for the site (text files and assets) that a
program (Jekyll) tranforms into a website (generated HTML files) that GitHub
then hosts at https://uw-madison-doit.github.io/uw-it-design-system/ .

### File structure

#### Content

Most of the content of the site that's *about* the design system is in the
content pages. These tend to be Markdown files (with a `.md` suffix) in the
`docs` directory. There you'll find sub-directories for `components` and for
`foundations`.

A content file includes `YAML` frontmatter that declares metadata about the
file. That is, the page's title and what layout it uses.

```yaml
---
layout: default
title: Typography
---
```

Then the file includes content.

Most content files use Markdown, a markup language that optimizes for basic
text content. Markdown is a super-set of HTML -- you can write HTML in Markdown
files.

#### Styles

This site uses SASS files that compile to CSS to style the site as experienced
by end users.

In the `_sass` directory there's `.scss` files defining these styles.

`assets/css/main.scss` is the entry point, importing the other `.scss` files.

#### Layouts

When content (and other) files declare `layout:` in their front matter, they're
declaring which of the HTML files in `_layouts` to use to render the content.

#### Includes

`_includes` provides macros that pages include using the `{% include}` macro (in
a templating language called Liquid).

For instance, `do-this-not-that.html` defines the `do-this-not-that` include.

### How you can edit

### Option 1: online editing

You can edit on the web via GitHub.com without downloading or locally building
anything.

The advantage of this is that it's easy and low barrier to entry.

The big disadvantage of this is that it skips locally previewing change before
that change would hit the public website.

### Option 2: local editing with Docker build

Good news: you can locally build and try out the documentation without locally
installing Ruby, Bundler, Gem, Gulp, Hack, Cough, Spittle, Phlem, or, well, you
get the idea.

#### Pre-requisites

You'll need

+ The command line (`Terminal` in MacOS)
+ A Git client (the one built into your MacOS is fine)
+ [Docker][]

#### Step 1: Clone this repo locally

On the command line, navigate to somewhere you'd like to have a copy of this
repo on your computer.

(This is an example of commands that will work. If you're already comfortable,
feel free to make your own choices about where you want directories with what
names.)

(The `$` represents your prompt, which may look different for you. It might be
something more like `hostname:~ username$` . In any case,
_you are not meant to type in the $_).

```shell
$ cd
$ mkdir uw-it-design-system-work
$ cd uw-it-design-system-work
$ git clone git clone https://github.com/UW-Madison-DoIT/uw-it-design-system.git
$ cd uw-it-design-system
```

If you followed that exactly, you are now a couple folders deep in your home
directory. From there...

#### Step 2: Use a Docker container to generate and host the site

From the command line, from within the directory where you cloned the repo...

```shell
$ docker-compose up
```

##### Step 3: Try it out

Try out the site in your web browser, at
`localhost:8080/uw-it-design-system/` .

(It's port `8080` because you're on the outside of a Docker container that
publishes to that specific port number.)

#### Step 4: Edit something

This is the upside of building the site locally: you can now make a change and
see its effect. Edit a file, and the Jekyll running in the Docker container will
re-build the site. Refresh your web browser, and you'll see the change.

Pro tip: Use the developer tools or developer mode of your browser to opt out of
browser caching so that your browser will reflect the changed pages.

#### Step 5: Offer the change upstream via a Pull Request

Once you have locally crafted a change that you'd like to offer as a
contribution, offer it upstream via a GitHub Pull Request.

### Option 3: local editing with local Jekyll

Clone the repository locally and run `bundler install`
That's all there is to it.

Ensure you have Jekyll installed on your machine: `jekyll -v`

Jekyll installation instructions: [https://jekyllrb.com/docs/installation/macos/]

To build the \_site directory used by Jekyll, use: `jekyll build`

To run the site locally, use: `jekyll serve`

Hint: when that doesn't work, try `bundle exec jekyll serve` .

The site will be available at http://127.0.0.1:4000/uw-it-design-system/

## View Modes

The "Design | Develop" view modes toggle is automatically included on the component layout.
```
---
layout: component
title: Typography
---
```

Use a capture group to assign content to a specific view. In the example below, we use the capture group `{% capture designer %}` to assign designer specific content to the design view mode.

```
{% capture designer %}
	Designer specific content goes here...
{% endcapture %}
{% include view-mode.html designer=designer %}

{% capture developer %}
	Developer specific content goes here...
{% endcapture %}
{% include view-mode.html developer=developer %}

```


---

Copyright (c) 2019 by Board of Regents of the University of Wisconsin System.

[Docker]: https://www.docker.com/
