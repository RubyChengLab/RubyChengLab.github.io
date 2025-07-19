---
layout: default
title: Falling Comet Lab
---
<style>
  body {
    background-image: url('/images/20efc85c275d9dcb694f84c6dd2d5378_t.jpeg'); /* 這裡換成你的圖片路徑 */
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  /* 可以讓內容有一層半透明底，避免文字不清楚 */
  div[style*="padding-top: 140px"] {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  }
</style>
<script type="module" src="/assets/js/viewCounter.js"></script>

<header style="
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 24px;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0; left: 0; right: 0;
  background: #fff;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  z-index: 100;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
">

  <!-- 左側標題 -->
  <h1 style="margin: 0; line-height: 1.2; font-weight: 700; font-size: 1.8rem; color: #2a2a2a;">
    🌠 Falling Comet Lab
  </h1>

  <!-- 右側區塊 -->
  <div style="display: flex; gap: 2rem; align-items: flex-start; font-size: 0.95rem; color: #444;">

    <!-- 搜尋文章區 -->
    <div style="display: flex; flex-direction: column; min-width: 280px;">
      <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 6px;">
        <h2 style="margin: 0; white-space: nowrap; font-weight: 600; font-size: 1rem; color: #222;">
          🔎 搜尋文章
        </h2>
        <input 
          type="text" 
          id="search-input" 
          placeholder="輸入關鍵字搜尋文章" 
          style="
            flex: 1; 
            padding: 0.5em 0.7em; 
            font-size: 0.95rem; 
            border: 1.5px solid #ccc; 
            border-radius: 6px;
            transition: border-color 0.3s;
          " 
          onfocus="this.style.borderColor='#4a90e2'" 
          onblur="this.style.borderColor='#ccc'"
        >
      </div>
      <ul id="search-results" style="
        max-height: 180px; 
        overflow-y: auto; 
        margin: 0; 
        padding-left: 1.2em; 
        background: #fefefe;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-shadow: 0 2px 6px rgb(0 0 0 / 0.05);
        font-size: 0.9rem;
        color: #333;
        list-style: disc;
      "></ul>
    </div>

    <!-- 文章分類區 -->
    <nav>
    <ul style="
      list-style: none; 
      padding: 0; 
      margin: 0; 
      display: flex; 
      gap: 1em; 
      align-items: center; 
      font-size: 16px; /* 字體大小統一 */
    ">
      <li style="margin: 0; padding: 0;">
        <a href="{{ site.baseurl }}/categories/Arduino/" style="line-height: 1.5; text-decoration: none;">Arduino</a>
      </li>
      <li style="margin: 0; padding: 0;">
        <a href="{{ site.baseurl }}/categories/Math/" style="line-height: 1.5; text-decoration: none;">Math</a>
      </li>
      <li style="margin: 0; padding: 0;">
        <a href="{{ site.baseurl }}/categories/Electronics/" style="line-height: 1.5; text-decoration: none;">Electronics</a>
      </li>
      <li style="margin: 0; padding: 0;">
        <a href="/about/" style="line-height: 1.5; text-decoration: none;">關於我</a>
      </li>
    </ul>
  </nav>

  </div>

</header>

<!-- 讓正文往下推，避免被固定頂部擋住 -->
<div style="padding-top: 140px; max-width: 960px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #2a2a2a;">

<!-- 其餘內容不動，照你原本的排版放下面就好 -->

<section>
{% assign max_size = 0 %}
{% for tag in site.tags %}
  {% if tag[1].size > max_size %}
    {% assign max_size = tag[1].size %}
  {% endif %}
{% endfor %}

<div id="tag-cloud" style="
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 280px;
  max-height: 200px;
  overflow-y: auto;
  line-height: 1.6;
  z-index: 150;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.9rem;
">
  {% for tag in site.tags %}
    {% assign size = tag[1].size | times: 1.0 %}
    {% assign font_size = size | divided_by: max_size | times: 120 | plus: 80 %}
    <a href="{{ site.baseurl }}/tags/{{ tag[0] }}" style="
      font-size: {{ font_size | round }}%;
      margin-right: 0.7rem;
      text-decoration: none;
      color: #4a90e2;
      transition: color 0.2s;
      display: inline-block;
      margin-bottom: 6px;
    "
    onmouseover="this.style.color='#e67e22'" onmouseout="this.style.color='#4a90e2'">
      {{ tag[0] }}
    </a>
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
      a.style.color = "#2a2a2a";
      a.style.textDecoration = "none";
      a.onmouseover = () => a.style.textDecoration = "underline";
      a.onmouseout = () => a.style.textDecoration = "none";
      li.appendChild(a);
      searchResults.appendChild(li);
    });
  });
</script>

<!-- 以下維持你原本的內容 -->

<section>
  <h2 style="font-weight: 700; font-size: 1.4rem; margin-bottom: 0.8rem;">🔥 熱門文章排行</h2>
  <ul id="popular-posts" style="padding-left: 1.2em; color: #444; font-size: 1rem;">
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
      a.style.color = "#4a90e2";
      a.style.textDecoration = "none";
      a.onmouseover = () => a.style.textDecoration = "underline";
      a.onmouseout = () => a.style.textDecoration = "none";
      li.appendChild(a);
      popularPostsEl.appendChild(li);
    });
    
    if (querySnapshot.empty) {
      popularPostsEl.innerHTML = "<li>還沒有熱門文章喔！</li>";
    }
  }

  loadPopularPosts();
</script>


<h2 style="font-weight: 700; font-size: 1.4rem; margin-bottom: 0.8rem;"> 🔧 最新文章</h2>

<ul style="color: #2a2a2a; font-size: 1rem; line-height: 1.5; padding-left: 1.2em;">
  {% for post in site.posts limit:5 %}
    <li style="margin-bottom: 0.5em;">
      <a href="{{ post.url }}" style="color: #4a90e2; text-decoration: none; font-weight: 600;">
        {{ post.title }}
      </a>  
      <small style="color: #666; margin-left: 0.4em;">
        ({{ post.date | date: "%Y-%m-%d" }})
      </small>
      {% if post.categories.size > 0 %}
        <em style="color: #999; margin-left: 0.6em; font-style: normal;">
          — 分類: {{ post.categories | join: ', ' }}
        </em>
      {% endif %}
    </li>
  {% endfor %}
</ul>


<h2 style="font-weight: 700; font-size: 1.4rem; margin-bottom: 0.8rem;"> 🎯 我們在做什麼？</h2>

<ul style="color: #2a2a2a; font-size: 1rem; line-height: 1.6;">
  <li>💡 提供 Arduino 專案教學與創作靈感</li>
  <li>📘 整理三電一工（電路、電子、電磁、工程數學）筆記</li>
  <li>🔍 整合互動學習工具，讓數學和電子不再困難</li>
  <li>🧁 偶爾還會分享甜點與創意人生（隕落蛋糕店 ♥）</li>
</ul>

<a href="https://go-big-or-go-home.streamlit.app/" target="_blank" rel="noopener noreferrer" style="
  font-size: 1.25rem; 
  color: #4a90e2; 
  font-weight: 700; 
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s;
">
  前往《微積分 + 三電一工》教學平台
</a>
<script>
  const link = document.querySelector('a[href="https://go-big-or-go-home.streamlit.app/"]');
  link.addEventListener('mouseover', () => {
    link.style.borderColor = '#e67e22';
  });
  link.addEventListener('mouseout', () => {
    link.style.borderColor = 'transparent';
  });
</script>

<p style="margin-top: 1.5rem; color: #555;">
  <span id="view-counter">👁️ 本頁瀏覽次數：</span>
</p>

</div>
