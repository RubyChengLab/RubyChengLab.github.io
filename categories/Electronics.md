---
layout: category
category: Electronics
permalink: /categories/Electronics/
---
{% include header.html %}
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
<h1>分類：Electronics</h1>

<ul>
  {% for post in site.categories.Electronics %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

