---
layout: post
title: "電阻串聯與並聯的基本概念"
date: 2025-07-16
bg: /images/20efc85c275d9dcb694f84c6dd2d5378_t.jpeg
tags: [Electronics, Circuits]
categories: [Electronics]
---
<style>
    /* 背景圖設定 */
    body {
      margin: 0;
      background-image: url('https://rubychenglab.github.io/images/20efc85c275d9dcb694f84c6dd2d5378_t.jpeg');
      background-size: cover;
      background-position: center center;
      background-attachment: fixed;
      background-repeat: no-repeat;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #222;
    }

    /* 內容區塊 */
    .content-wrapper {
      max-width: 800px;
      margin: 3rem auto;
      background-color: rgba(255, 255, 255, 0.85);
      border-radius: 12px;
      padding: 40px 30px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    /* 文章標題 */
    h1.post-title {
      font-weight: 700;
      font-size: 2.5rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    /* 日期 */
    p.post-date {
      color: #666;
      font-size: 0.9rem;
      margin-top: 0;
      margin-bottom: 2rem;
    }

    /* 文章正文 */
    .post-content {
      line-height: 1.6;
      font-size: 1.1rem;
    }

    /* 標籤 */
    .post-tags {
      margin-top: 2rem;
    }

    .post-tags a {
      color: #1a73e8;
      text-decoration: none;
      margin-right: 0.6rem;
    }

    .post-tags a:hover {
      text-decoration: underline;
    }
  </style>
## 電阻連接方式介紹

### 🔋 串聯（Series）

電池 + 電阻1 + 電阻2

總電阻計算公式：

$$
R_{\text{總}} = R_1 + R_2
$$

---

### 🔌 並聯（Parallel）

電路示意圖：

|-- R1 --|
---| |---
|-- R2 --|

yaml
複製程式碼

總電阻計算公式：

$$
\frac{1}{R_{\text{總}}} = \frac{1}{R_1} + \frac{1}{R_2}
$$

---

掌握這兩種連接方式，是分析電路的第一步！
