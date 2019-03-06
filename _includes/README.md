# Includes documentation

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
