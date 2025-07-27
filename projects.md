---
layout: null
title: 我的專案
permalink: /projects/
---

<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{{ page.title }}</title>

  <!-- 星空背景樣式 -->
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: black;
      overflow-x: hidden;
      height: 100%;
      font-family: sans-serif;
    }

    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: block;
      z-index: 0;
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
      z-index: 2;
    }

    #mouse-glow {
      position: fixed;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%);
      mix-blend-mode: screen;
      z-index: 1;
      transform: translate(-50%, -50%);
    }

    #bg-music {
      display: none;
    }

    /* 專案內容樣式 */
    .projects-container {
      background-color: rgba(255, 255, 255, 0.5);
      padding: 2.5rem 1.5rem;
      border-radius: 1.25rem;
      max-width: 960px;
      margin: 4rem auto;
      box-shadow: 0 6px 16px rgba(0,0,0,0.08);
      z-index: 3;
      position: relative;
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
      .project-title { font-size: 1.2rem; }
      .project-desc { font-size: 0.95rem; }
      .tech-stack { font-size: 0.8rem; }
    }
  </style>
</head>
<body>
  {% include header.html %}
  <canvas id="canvas"></canvas>
  <div id="clock"></div>
  <div id="mouse-glow"></div>
  <audio id="bg-music" src="/music/your-music.mp3" autoplay loop></audio>

  <main class="projects-container">
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

</main>

<script>
    window.addEventListener('DOMContentLoaded', () => {
    const bgm = document.getElementById('bg-music');

    // 嘗試靜音自動播放（某些瀏覽器允許）
    bgm.volume = 1;
    bgm.play().then(() => {
        console.log("音樂自動播放成功");
    }).catch((err) => {
        console.warn("自動播放失敗，等待使用者點擊啟動", err);
        // 點擊任意地方啟動音樂
        const startAudio = () => {
            bgm.play();
            document.removeEventListener('click', startAudio);
        };
        document.addEventListener('click', startAudio);
    });
    });

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let w, h, stars = [], meteors = [], nebulas = [], planets = [];

    function initStars() {
      stars = [];
      for (let i = 0; i < 150; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          speed: 0.005 + Math.random() * 0.01,
        });
      }
    }

    function initNebulas() {
      nebulas = [];
      for (let i = 0; i < 3; i++) {
        nebulas.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: 300 + Math.random() * 200,
          hue: Math.random() * 360,
          alpha: 0.1 + Math.random() * 0.2,
          pulse: 0.001 + Math.random() * 0.002
        });
      }
    }

    function initPlanets() {
      planets = [];
      for (let i = 0; i < 4; i++) {
        planets.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: 20 + Math.random() * 30,
          color: `hsl(${Math.random() * 360}, 70%, 50%)`
        });
      }
    }

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      initStars();
      initNebulas();
      initPlanets();
    }

    window.addEventListener("resize", resize);
    resize();

    function spawnMeteor() {
      const angle = Math.PI * 0.25;
      const speed = 2 + Math.random() * 1.5;
      const len = 40 + Math.random() * 60;
      meteors.push({
        x: Math.random() * w * 0.5 + w * 0.5,
        y: Math.random() * h * 0.3,
        dx: -Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        len,
        alpha: 1
      });
    }
    setInterval(spawnMeteor, 1000);

    function draw() {
      ctx.clearRect(0, 0, w, h);

      nebulas.forEach(n => {
        ctx.beginPath();
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size);
        grad.addColorStop(0, `hsla(${n.hue}, 100%, 70%, ${n.alpha})`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();
        n.alpha += n.pulse;
        if (n.alpha > 0.3 || n.alpha < 0.1) n.pulse *= -1;
      });

      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0.2) s.speed *= -1;
      });

      planets.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const tx = m.x - m.dx * m.len;
        const ty = m.y - m.dy * m.len;
        const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
        grad.addColorStop(0, "rgba(255,255,255,1)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
        m.x += m.dx;
        m.y += m.dy;
        if (m.x < 0 || m.y > h) meteors.splice(i, 1);
      }

      requestAnimationFrame(draw);
    }
    draw();

    function updateClock() {
      const now = new Date();
      document.getElementById("clock").textContent = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    const glow = document.getElementById("mouse-glow");
    document.addEventListener("mousemove", e => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    });
  </script>
</body>
</html>

