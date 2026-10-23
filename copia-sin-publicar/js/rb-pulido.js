// =====================================================================
// Inicio pulido (rebranding CS Travel, copia sin publicar)
// 1) La ruta del hero: el avión sigue al cursor, al dedo y al scroll; al
//    pasar cada parada cambia el mensaje y la foto.
// 2) Las cifras cuentan cuando se ven.
// 3) El carrusel de servicios en abanico (flechas, puntos, teclado, arrastre).
// Sin JS todo se ve: el primer mensaje, la ruta completa y las tarjetas.
// =====================================================================
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------ Ruta
  (function route() {
    var hero = document.querySelector('.rb-hero');
    if (!hero) return;
    var svg = hero.querySelector('.rb-route');
    var done = hero.querySelector('.rb-route-done');
    var plane = hero.querySelector('.rb-plane');
    var stops = Array.prototype.slice.call(hero.querySelectorAll('.rb-stop'));
    var texts = hero.querySelectorAll('.rb-hero-text');
    var imgs = hero.querySelectorAll('.rb-hero-img');
    var steps = hero.querySelectorAll('.rb-step');
    if (!svg || !done || !plane) return;

    var len = done.getTotalLength();
    var N = 600;
    var pts = [];
    for (var i = 0; i <= N; i++) pts.push(done.getPointAtLength((len * i) / N));

    // Las tres paradas: una por mensaje. El mensaje cambia al pasarlas.
    var STOP_T = [0.27, 0.6, 0.92];
    stops.forEach(function (g, k) {
      var p = pts[Math.round(STOP_T[k] * N)];
      g.setAttribute('transform', 'translate(' + p.x + ' ' + p.y + ')');
    });

    done.style.strokeDasharray = len;
    var t = reduced ? STOP_T[0] : 0;
    var target = STOP_T[0];
    var stage = -1;
    var lastInput = 0;
    var raf = 0;

    function pointAt(u) {
      var x = Math.max(0, Math.min(N, u * N));
      var a = pts[Math.floor(x)], b = pts[Math.ceil(x)], f = x - Math.floor(x);
      return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f };
    }

    function setStage(s) {
      if (s === stage) return;
      stage = s;
      for (var k = 0; k < texts.length; k++) texts[k].classList.toggle('is-active', k === s);
      for (k = 0; k < imgs.length; k++) imgs[k].classList.toggle('is-active', k === s);
      for (k = 0; k < steps.length; k++) {
        steps[k].classList.toggle('is-active', k === s);
        steps[k].setAttribute('aria-selected', k === s ? 'true' : 'false');
      }
    }

    function paint() {
      done.style.strokeDashoffset = len * (1 - t);
      var p = pointAt(t);
      var a = pointAt(Math.max(0, t - 0.004));
      var b = pointAt(Math.min(1, t + 0.004));
      var ang = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      plane.setAttribute('transform', 'translate(' + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ') rotate(' + ang.toFixed(1) + ')');
      stops.forEach(function (g, k) { g.classList.toggle('is-passed', t >= STOP_T[k] - 0.005); });
      setStage(t < (STOP_T[0] + STOP_T[1]) / 2 ? 0 : t < (STOP_T[1] + STOP_T[2]) / 2 ? 1 : 2);
    }

    function tick() {
      raf = 0;
      var d = target - t;
      if (reduced || Math.abs(d) < 0.0006) { t = target; paint(); return; }
      t += d * 0.085;
      paint();
      raf = requestAnimationFrame(tick);
    }
    function go(u) {
      target = Math.max(0, Math.min(1, u));
      if (!raf) raf = requestAnimationFrame(tick);
    }

    // El punto de la ruta más cercano a donde está el cursor o el dedo.
    function nearest(clientX, clientY) {
      var m = svg.getScreenCTM();
      if (!m) return null;
      var pt = svg.createSVGPoint();
      pt.x = clientX; pt.y = clientY;
      var q = pt.matrixTransform(m.inverse());
      var best = 0, bd = Infinity;
      for (var k = 0; k <= N; k += 2) {
        var dx = pts[k].x - q.x, dy = pts[k].y - q.y, dd = dx * dx + dy * dy;
        if (dd < bd) { bd = dd; best = k; }
      }
      return best / N;
    }
    function follow(e) {
      var src = e.touches ? e.touches[0] : e;
      var u = nearest(src.clientX, src.clientY);
      if (u === null) return;
      lastInput = Date.now();
      go(u);
    }
    hero.addEventListener('mousemove', follow);
    hero.addEventListener('touchmove', follow, { passive: true });
    hero.addEventListener('touchstart', follow, { passive: true });

    // Al bajar, el avión termina su recorrido.
    window.addEventListener('scroll', function () {
      if (Date.now() - lastInput < 1200) return;
      var h = hero.offsetHeight || 1;
      var p = Math.max(0, Math.min(1, window.scrollY / (h * 0.7)));
      if (p > 0.02) go(STOP_T[0] + (1 - STOP_T[0]) * p);
    }, { passive: true });

    // Los números del hero llevan a cada parada.
    for (var s = 0; s < steps.length; s++) {
      steps[s].addEventListener('click', function (e) {
        lastInput = Date.now();
        go(STOP_T[+e.currentTarget.getAttribute('data-go')]);
      });
    }

    // Si nadie interactúa, el vuelo avanza solo de parada en parada.
    if (!reduced) {
      setInterval(function () {
        if (Date.now() - lastInput < 7000 || window.scrollY > 40 || document.hidden) return;
        var next = stage + 1;
        if (next >= STOP_T.length) next = 0;
        if (next === 0) { t = 0; }
        go(STOP_T[next]);
      }, 6500);
    }

    paint();
    go(STOP_T[0]);
  })();

  // ------------------------------------------------------- Cifras
  (function counters() {
    var els = document.querySelectorAll('.rb-count');
    if (!els.length) return;
    function run(el) {
      var to = +el.getAttribute('data-to');
      if (reduced) { el.textContent = to; return; }
      var dur = Math.min(1600, 700 + to * 1.6);
      var t0 = performance.now();
      (function step(now) {
        var k = Math.min(1, (now - t0) / dur);
        var e = k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
        el.textContent = Math.round(to * e);
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    }
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.6 });
    els.forEach(function (el) { el.textContent = '0'; io.observe(el); });
  })();

  // ------------------------------------------------------ Carrusel
  (function cover() {
    var root = document.querySelector('.rb-cover');
    if (!root) return;
    var stage = root.querySelector('.rb-cover-stage');
    var cards = Array.prototype.slice.call(root.querySelectorAll('.rb-cover-card'));
    var dotsBox = root.querySelector('.rb-cover-dots');
    var n = cards.length;
    var active = 0;

    var dots = cards.map(function (c, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Servicio ' + (i + 1));
      b.addEventListener('click', function () { set(i); });
      dotsBox.appendChild(b);
      return b;
    });

    function layout() {
      var narrow = window.matchMedia('(max-width: 900px)').matches;
      var gap = narrow ? 150 : 200;
      cards.forEach(function (c, i) {
        var o = i - active;
        if (o > n / 2) o -= n;
        if (o < -n / 2) o += n;
        var a = Math.abs(o);
        c.style.transform = 'translateX(' + o * gap + 'px) translateZ(' + -a * 120 + 'px) rotateY(' + -o * 14 + 'deg) scale(' + (1 - a * 0.08) + ')';
        c.style.zIndex = String(10 - a);
        c.style.opacity = a > 2 ? '0' : String(1 - a * 0.14);
        c.setAttribute('aria-hidden', o === 0 ? 'false' : 'true');
      });
      dots.forEach(function (d, i) { d.setAttribute('aria-selected', i === active ? 'true' : 'false'); });
    }
    function set(i) { active = ((i % n) + n) % n; layout(); }

    root.querySelector('.rb-cover-nav.prev').addEventListener('click', function () { set(active - 1); });
    root.querySelector('.rb-cover-nav.next').addEventListener('click', function () { set(active + 1); });
    cards.forEach(function (c, i) { c.addEventListener('click', function () { if (i !== active) set(i); }); });

    stage.setAttribute('tabindex', '0');
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); set(active - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); set(active + 1); }
    });

    var x0 = null;
    stage.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
    stage.addEventListener('pointerup', function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0;
      x0 = null;
      if (Math.abs(dx) > 40) set(active + (dx < 0 ? 1 : -1));
    });
    window.addEventListener('resize', layout);
    layout();
  })();
})();
