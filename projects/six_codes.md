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

  .project-wrapper {
    background-color: rgba(255, 255, 255, 0.88);
    max-width: 880px;
    margin: 3rem auto;
    padding: 2rem 2.5rem;
    border-radius: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    font-size: 1.1rem;
    line-height: 1.75;
  }

  .project-wrapper h1,
  .project-wrapper h2 {
    font-weight: 700;
    margin-top: 1.5rem;
  }

  .project-wrapper ul {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .project-wrapper li {
    margin-bottom: 0.5rem;
  }

  .project-wrapper a {
    color: #007acc;
    text-decoration: none;
  }

  .project-wrapper a:hover {
    text-decoration: underline;
  }
</style>

<div class="project-wrapper">

# 六法全書 Flutter App ＋ 法規爬蟲

這是一個完整的法規查詢系統，由 **法規爬蟲後端** 與 **Flutter App 前端** 組成，支援使用者離線查詢、書籤筆記、條文搜尋、歷史版本比較等功能。

---

## 📌 功能亮點

- 六法全書內容完整收錄（民法、刑法、訴訟法...）
- 條文支援關鍵字搜尋與版本比對
- 可加書籤與筆記，並同步到 Firebase
- App 支援離線使用、夜間模式、自動更新

---

## 🛠 技術堆疊

- **前端**：Flutter、Dart、Firebase  
- **後端**：Python、BeautifulSoup、正規表達式  
- **格式**：JSON 結構儲存所有編、章、節、條文

---

## 🔗 相關連結

- [Flutter App GitHub](https://github.com/your-repo/six_codes_app)
- [法規爬蟲 GitHub](https://github.com/your-repo/law-crawler)

</div>
