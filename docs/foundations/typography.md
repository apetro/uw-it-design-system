---
layout: default
title: Typography
---

{% capture designer %}

Use the type scale to apply consistent typographic design.

### Typefaces

The UW Madison Design System uses exclusively `Roboto`. The type was chosen
because it is flexible, accessible and free to use, which is necessary to
accommodate projects across UW’s campus.

+ Primary Font: Roboto
+ Fallback Fonts: Helvetica, Arial
+ Title Font: Verlag

### General Guidelines

+ Never end a header or label with a period (.)
+ Only use a period (.) for sentences, paragraphs, and copy.
+ Avoid use of all caps wherever possible.

OPPORTUNITY FOR DO-THIS-NOT-THAT EXAMPLE HERE.

SOME KIND OF DEMONSTRATIVE EXAMPLE GOES HERE

<h1>H1: The quick brown fox jumps over the lazy dog</h1>
<h2>H2: The quick brown fox jumps over the lazy dog</h2>
<h3>H3: The quick brown fox jumps over the lazy dog</h3>
<h4>H4: The quick brown fox jumps over the lazy dog</h4>
<h5>H5: The quick brown fox jumps over the lazy dog</h5>
<h6>H6: The quick brown fox jumps over the lazy dog</h6>

{% endcapture %}

{% capture developer %}
	Developer Content
{% endcapture %}

{% include view-mode.html
	designer=designer
	developer=developer
%}
