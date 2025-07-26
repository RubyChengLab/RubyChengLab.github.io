---
layout: default
title: 三電一工教學 App
permalink: /projects/ee_app/
---

<style>
  body {
    background: transparent;
    background-image: url('{{ "/images/bg.jpeg" | absolute_url }}') !important;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  .content-container {
    max-width: 960px;
    margin: 3rem auto;
    padding: 0 1rem;
  }

  .inner-box {
    background-color: rgba(255, 255, 255, 0.88);
    border-radius: 1.5rem;
    padding: 2.5rem 3rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
    line-height: 1.75;
  }

  @media screen and (max-width: 600px) {
    .inner-box {
      padding: 1.5rem 1.25rem;
    }
  }

  h1, h2, h3 {
    margin-top: 1.5rem;
    color: #333;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  a {
    color: #007acc;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<div class="content-container">
  <div class="inner-box">
    <h1>三電一工教學 App</h1>

    <p>這個 App 以章節結構呈現電學與邏輯設計，搭配 <strong>練習題、自動驗算、簡圖動畫、進度追蹤</strong>，幫助學生深入理解三電一工。</p>

    <h3>🔧 技術堆疊</h3>
    <ul>
      <li>Python + Streamlit：介面與互動邏輯</li>
      <li>Manim：產生動畫</li>
      <li>LaTeX：數學排版</li>
    </ul>

    <h3>🔗 相關連結</h3>
    <ul>
      <li><a href="https://go-big-or-go-home.streamlit.app/" target="_blank">Streamlit App（立即體驗）</a></li>
      <li><a href="https://github.com/your-repo/ee_app" target="_blank">GitHub 儲存庫</a></li>
    </ul>
  </div>
</div>
