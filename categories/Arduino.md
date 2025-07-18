---
layout: category
category: Arduino
permalink: /categories/Arduino/
---

<h1>分類：Arduino</h1>

<ul>
  {% assign current_category = page.category | downcase %}
  {% for post in site.posts %}
    <li>{{ post.title }} - Categories: {{ post.categories | join: ", " }}</li>
    {% for cat in post.categories %}
      {% if cat | downcase == current_category %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% break %}
      {% endif %}
    {% endfor %}
  {% endfor %}
</ul>