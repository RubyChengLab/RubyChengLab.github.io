---
layout: default
title: Nowcraft 部落格平台
permalink: /projects/nowcraft-blog/
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
    <h1>Nowcraft 部落格平台</h1>

    <p>這是一個以 <strong>Jekyll</strong> 建置的實驗性部落格平台，支援 Firebase 登入註冊系統，並串接搜尋與個人化內容。</p>

    <h3>🔧 功能特色</h3>
    <ul>
      <li>整合 Firebase Authentication 登入／註冊／忘記密碼</li>
      <li>使用 Jekyll Liquid 模板語法建立多頁面</li>
      <li>搜尋功能可過濾文章標題（JavaScript 實作）</li>
      <li>支援 GitHub Pages 部署與版本控管</li>
    </ul>

    <h3>🧪 技術堆疊</h3>
    <p><strong>Jekyll、Firebase、HTML/CSS、JavaScript、Liquid</strong></p>
  </div>
</div>
