---
layout: tag
tag: Circuits
permalink: /tags/Circuits/
---
<style>
  h1 {
    font-size: 36px; /* 大標題字體 */
  }
  ul {
    font-size: 20px; /* 清單字體 */
  }
  ul li a {
    font-size: 20px; /* 連結字體 */
    text-decoration: none;
  }
  ul li a:hover {
    text-decoration: underline;
  }
</style>
<h1>#{{ page.tag }}</h1>

<ul>
  {% for post in site.tags[page.tag] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
