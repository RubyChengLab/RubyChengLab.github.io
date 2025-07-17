---
layout: default
title: 所有標籤 Tags
permalink: /tags/
---

<h1>🏷️ 所有標籤</h1>
<ul>
  {% for tag in site.tags %}
    <li>
      <a href="{{ site.baseurl }}/tags/{{ tag[0] | slugify }}/">{{ tag[0] }} ({{ tag[1].size }})</a>
    </li>
  {% endfor %}
</ul>
