---
layout: default
title: 我的專案
permalink: /projects/
---

<style>
  .projects-container {
    background-color: rgba(255, 255, 255, 0.92);
    padding: 2.5rem 1.5rem;
    border-radius: 1.25rem;
    max-width: 960px;
    margin: 2rem auto;
    box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  }

  a.project-card {
    display: block;
    text-decoration: none;
    color: inherit;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  a.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  }

  .project-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  .project-desc {
    font-size: 1rem;
    color: #444;
    margin-bottom: 0.6rem;
  }

  .tech-stack {
    font-size: 0.85rem;
    color: #777;
  }

  @media (max-width: 768px) {
    .project-title {
      font-size: 1.2rem;
    }
    .project-desc {
      font-size: 0.95rem;
    }
    .tech-stack {
      font-size: 0.8rem;
    }
  }
</style>

<div class="projects-container">
  <h1 style="margin-bottom: 2rem;">我的專案</h1>

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

  <a href="/projects/nowcraft-blog/" class="project-card">
    <div class="project-title">Nowcraft 部落格平台</div>
    <div class="project-desc">使用 Jekyll 架設的靜態部落格平台，支援 Firebase 登入、註冊與搜尋功能，頁面乾淨簡潔。</div>
    <div class="tech-stack">技術：Jekyll、Firebase Auth、HTML/CSS、JavaScript、Liquid</div>
  </a>
</div>
