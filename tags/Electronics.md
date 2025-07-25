---
layout: tag
tag: Electronics
permalink: /tags/Electronics/
---
{% include header.html %}
<style>
  h1 {
    font-size: 36px;
  }
  ul {
    font-size: 20px;
  }
  ul li a {
    font-size: 20px;
    text-decoration: none;
  }
  ul li a:hover {
    text-decoration: underline;
  }
</style>

<h1>#{{ page.tag }}</h1>

<ul>
  {% assign posts = site.tags[page.tag] %}
  {% if posts and posts.size > 0 %}
    {% for post in posts %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  {% else %}
    <li><em>這個標籤目前沒有文章喔！</em></li>
  {% endif %}
</ul>
