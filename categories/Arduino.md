---
layout: category
category: Arduino
permalink: /categories/Arduino/
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
<h1>分類：{{ page.category }}</h1>

<ul>
  {% assign posts_in_category = site.categories[page.category] %}
  {% for post in posts_in_category %}
    <li>
      <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>