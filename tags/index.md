---
layout: default
title: "所有標籤"
permalink: /tags/
---
{% include header.html %}
<h1>所有標籤</h1>

<ul>
  {% for tag in site.tags %}
    {% assign tag_name = tag[0] %}
    <li>
      <a href="{{ site.baseurl }}/tags/{{ tag_name }}/">{{ tag_name }}</a> （文章數：{{ tag[1].size }}）
    </li>
  {% endfor %}
</ul>
