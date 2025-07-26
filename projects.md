---
layout: star_layout
title: 我的專案
permalink: /projects/
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
    background-color: rgba(255, 255, 255, 0.85);
    padding: 2rem;
    border-radius: 1rem;
    max-width: 900px;
    margin: 3rem auto;
  }

  a.project-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 1.5rem;
    margin-bottom: 2rem;
    transition: transform 0.2s;
  }

  a.project-card:hover {
    transform: translateY(-4px);
  }

  .project-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .project-desc {
    margin-bottom: 0.75rem;
    color: #444;
  }

  .tech-stack {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

</style>

<div class="content-container">
  <h1>我的專案</h1>

  <a href="/projects/six_codes/" class="project-card">
    <div class="project-title">六法全書 Flutter App</div>
    <div class="project-desc">支援離線查詢、書籤筆記、條文搜尋、歷史版本比較等功能的法規查詢工具。</div>
    <div class="tech-stack">技術：Flutter、Dart、Firebase、Python 爬蟲</div>
  </a>

  <a href="/projects/ee_app/" class="project-card">
    <div class="project-title">三電一工教學 App</div>
    <div class="project-desc">以章節結構呈現電學與邏輯設計，支援練習題、自動驗算、簡圖動畫與進度追蹤。</div>
    <div class="tech-stack">技術：Python、Streamlit、Manim、LaTeX</div>
  </a>


  <a href="/projects/flutter_snake/" class="project-card">
    <div class="project-title">Flutter 貪食蛇遊戲</div>
    <div class="project-desc">手機滑動與桌機方向鍵控制皆支援，自適應畫面，具備完整碰撞與得分邏輯。</div>
    <div class="tech-stack">技術：Flutter、Dart、RWD 設計</div>
  </a>

</div>
