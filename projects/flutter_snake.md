---
layout: default
title: Flutter 貪食蛇遊戲
permalink: /projects/flutter_snake/
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
    <h1>Flutter 貪食蛇遊戲</h1>

    <p>支援 <strong>手機滑動 + 桌機方向鍵</strong> 操作，具備 <strong>完整碰撞與得分邏輯</strong>，並能根據裝置尺寸自適應畫面。</p>

    <h3>🔧 技術堆疊</h3>
    <ul>
      <li>Flutter + Dart：遊戲邏輯與畫面設計</li>
      <li>RWD 設計：支援多裝置操作</li>
    </ul>
  </div>
</div>
