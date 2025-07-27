(() => {
  const canvas = document.getElementById("canvas"); // 改成 canvas
  const ctx = canvas.getContext("2d");
  let w, h;
  let stars = [];
  let nebulas = [];
  let planets = [];
  let meteors = [];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: random(0.5, 1.5),
        alpha: random(0.2, 1),
        speed: random(0.002, 0.01),
        increasing: Math.random() < 0.5,
      });
    }
  }

  function initNebulas() {
    nebulas = [];
    for (let i = 0; i < 3; i++) {
      nebulas.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: random(250, 350),
        hue: Math.random() * 360,
        alpha: random(0.1, 0.3),
        pulseSpeed: random(0.0005, 0.0015),
        increasing: Math.random() < 0.5,
      });
    }
  }

  function initPlanets() {
    planets = [];
    for (let i = 0; i < 4; i++) {
      planets.push({
        x: Math.random() * w,
        y: Math.random() * h * 0.7,
        radius: random(20, 40),
        color: `hsl(${random(0, 360)}, 70%, 50%)`,
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

  function spawnMeteor() {
    const angle = Math.PI * 0.25; // 45度
    const speed = random(2, 3.5);
    const len = random(40, 70);
    meteors.push({
      x: random(w * 0.5, w),
      y: random(0, h * 0.3),
      dx: -Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      len,
      alpha: 1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // 畫星雲
    nebulas.forEach((n) => {
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.size);
      grad.addColorStop(0, `hsla(${n.hue}, 100%, 70%, ${n.alpha})`);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
      ctx.fill();

      if (n.increasing) {
        n.alpha += n.pulseSpeed;
        if (n.alpha >= 0.3) n.increasing = false;
      } else {
        n.alpha -= n.pulseSpeed;
        if (n.alpha <= 0.1) n.increasing = true;
      }
    });

    // 畫星星
    stars.forEach((s) => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
      ctx.fill();

      if (s.increasing) {
        s.alpha += s.speed;
        if (s.alpha >= 1) s.increasing = false;
      } else {
        s.alpha -= s.speed;
        if (s.alpha <= 0.2) s.increasing = true;
      }
    });

    // 畫行星
    planets.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // 畫流星
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i];
      const tx = m.x - m.dx * m.len;
      const ty = m.y - m.dy * m.len;
      const grad = ctx.createLinearGradient(m.x, m.y, tx, ty);
      grad.addColorStop(0, `rgba(255,255,255,${m.alpha})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.moveTo(m.x, m.y);
      ctx.lineTo(tx, ty);
      ctx.stroke();

      m.x += m.dx;
      m.y += m.dy;
      m.alpha -= 0.02; // 漸隱

      if (m.x < 0 || m.y > h || m.alpha <= 0) {
        meteors.splice(i, 1);
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();

  setInterval(spawnMeteor, 1200);

  draw();
})();
