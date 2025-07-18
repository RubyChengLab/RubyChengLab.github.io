---
layout: default
title: Falling Comet Lab
---
<script type="module" src="/assets/js/viewCounter.js"></script>
# 🌠 Falling Comet Lab
<section>
  <h2>🔎 搜尋文章</h2>
  <input type="text" id="search-input" placeholder="輸入關鍵字搜尋文章">
  <ul id="search-results"></ul>
</section>

<section>
{% assign max_size = 0 %}
{% for tag in site.tags %}
  {% if tag[1].size > max_size %}
    {% assign max_size = tag[1].size %}
  {% endif %}
{% endfor %}

<div id="tag-cloud">
  {% for tag in site.tags %}
    {% assign size = tag[1].size | times: 1.0 %}
    {% assign font_size = size | divided_by: max_size | times: 120 | plus: 80 %}
    <a href="{{ site.baseurl }}/tags/{{ tag[0] }}" style="font-size: {{ font_size | round }}%;">{{ tag[0] }}</a>
  {% endfor %}
</div>
</section>

<script>
  const posts = [
    {% for post in site.posts %}
    {
      title: "{{ post.title | escape }}",
      url: "{{ post.url }}",
      content: "{{ post.content | strip_html | strip_newlines | escape }}"
    },
    {% endfor %}
  ];

  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";
    if (q.length < 2) return;

    const filtered = posts.filter(p => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q));
    if (filtered.length === 0) {
      searchResults.innerHTML = "<li>找不到符合的文章</li>";
      return;
    }

    filtered.forEach(p => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = p.url;
      a.textContent = p.title;
      li.appendChild(a);
      searchResults.appendChild(li);
    });
  });
</script>
<section>
  <h2>🔥 熱門文章排行</h2>
  <ul id="popular-posts">
    <li>載入中...</li>
  </ul>
</section>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getFirestore, collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBmR7K4ECZA0Vv0PlHn6dMxg5P06UsBnq0",
    authDomain: "falling-comet-lab-blog.firebaseapp.com",
    projectId: "falling-comet-lab-blog",
    storageBucket: "falling-comet-lab-blog.appspot.com",
    messagingSenderId: "275403715950",
    appId: "1:275403715950:web:25383ec082d6ff3338bd7f",
    measurementId: "G-TRDSPMNYQK"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function loadPopularPosts() {
    const popularPostsEl = document.getElementById("popular-posts");
    const q = query(collection(db, "posts"), orderBy("views", "desc"), limit(5));
    const querySnapshot = await getDocs(q);

    popularPostsEl.innerHTML = "";

    querySnapshot.forEach(doc => {
      const data = doc.data();
      const id = doc.id.replace(/_/g, "/"); // 反轉path格式成URL path

      // 預設 post title 使用 doc id，你可以改成存標題欄位
      const title = data.title || id;

      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = id === "index" ? "/" : id;
      a.textContent = `${title}（瀏覽: ${data.views || 0}）`;
      li.appendChild(a);
      popularPostsEl.appendChild(li);
    });

    if (querySnapshot.empty) {
      popularPostsEl.innerHTML = "<li>還沒有熱門文章喔！</li>";
    }
  }

  loadPopularPosts();
</script>
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
---
  ## 《微積分 + 三電一工》教學平台
<p>點擊下面連結，在新視窗打開教學平台：</p>
<a href="https://go-big-or-go-home.streamlit.app/" target="_blank" rel="noopener noreferrer">
  前往《微積分 + 三電一工》教學平台
</a>

  <p><span id="view-counter">👁️ 本頁瀏覽次數：</span></p>
