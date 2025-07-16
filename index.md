---
layout: default
title: Falling Comet Lab
---

# 🌠 Falling Comet Lab

## 📚 文章分類

<nav>
  <ul style="list-style: none; padding: 0; display: flex; gap: 1em;">
    <li><a href="{{ site.baseurl }}/categories/arduino">Arduino</a></li>
    <li><a href="{{ site.baseurl }}/categories/數學">數學</a></li>
    <li><a href="{{ site.baseurl }}/categories/電子">電子</a></li>
  </ul>
</nav>

---

## 👩‍💻 關於我

歡迎來到 **Falling Comet Lab** — 一個結合 `Arduino`、`電機電子` 與 `數學` 的學習實驗室！  
這裡是你追求「動手做 × 概念理解」的最佳據點。  
📬 有任何問題或合作邀請，歡迎到 [關於我](/about/) 頁面與我聯絡 🙌

---

## 🔧 最新文章

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>  
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
      {% if post.categories.size > 0 %}
        <em>— 分類: {{ post.categories | join: ', ' }}</em>
      {% endif %}
    </li>
  {% endfor %}
</ul>

---

## 🎯 我們在做什麼？

- 💡 提供 Arduino 專案教學與創作靈感  
- 📘 整理三電一工（電路、電子、電磁、工程數學）筆記  
- 🔍 整合互動學習工具，讓數學和電子不再困難  
- 🧁 偶爾還會分享甜點與創意人生（隕落蛋糕店 ♥）
