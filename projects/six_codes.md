---
layout: default
title: 六法全書 Flutter App + 法規爬蟲
permalink: /projects/six_codes/
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
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
  }

  li {
    margin-bottom: 0.5rem;
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
    <h1>六法全書 Flutter App ＋ 法規爬蟲</h1>

    <p>
      這是一個完整的法規查詢系統，由 <strong>法規爬蟲後端</strong> 與 <strong>Flutter App 前端</strong> 組成，
      支援使用者離線查詢、書籤筆記、條文搜尋、歷史版本比較等功能。
    </p>

    <h3>📌 功能亮點</h3>
    <ul>
      <li>六法全書內容完整收錄（民法、刑法、訴訟法...）</li>
      <li>條文支援關鍵字搜尋與版本比對</li>
      <li>可加書籤與筆記，並同步到 Firebase</li>
      <li>App 支援離線使用、夜間模式、自動更新</li>
    </ul>

    <h3>🛠 技術堆疊</h3>
    <ul>
      <li><strong>前端</strong>：Flutter、Dart、Firebase</li>
      <li><strong>後端</strong>：Python、BeautifulSoup、正規表達式</li>
      <li><strong>格式</strong>：JSON 結構儲存所有編、章、節、條文</li>
    </ul>
  </div>
</div>
