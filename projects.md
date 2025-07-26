---
layout: default
title: 我的專案
permalink: /projects/
---

<style>
  html, body {
    margin: 0;
    padding: 0;
    background: black;
    overflow-x: hidden;
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    display: block;
  }

  #clock {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 12px 20px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    border: 2px solid rgba(255,255,255,0.2);
    white-space: nowrap;
    pointer-events: none;
    z-index: 1000;
  }

  #mouse-glow {
    position: fixed;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
    mix-blend-mode: screen;
    z-index: 2;
    transform: translate(-50%, -50%);
  }

  .content-container {
    background-color: rgba(255, 255, 255, 0.88);
    padding: 2rem;
    border-radius: 1rem;
    max-width: 900px;
    margin: 3rem auto;
    position: relative;
    z-index: 10;
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

<!-- 星空特效區 -->
<canvas id="canvas"></canvas>
<div id="clock"></div>
<div id="mouse-glow"></div>
<audio id="bg-music" src="/music/your-music.mp3" autoplay loop></audio>

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

<script>
// 與你提供的特效 JS 相同（省略重複貼上）
// 建議獨立存一份 JS，例如：/assets/js/starfield.js 然後用 <script src="..."></script> 引入
</script>
