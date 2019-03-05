---
layout: default
title: Example of do-this-not-that component
---


{% capture totally_do_this %}
Labels are intended to look like this
{% endcapture %}

{% capture so_do_not_do_this %}
Labels are not intended to look like this.
{% endcapture %}

{% include do-this-not-that.html
  do-this=totally_do_this
  do-phrase="use sentence case in labels"
  not-that=so_do_not_do_this
  not-phrase="end labels with end punctuation"
  %}
