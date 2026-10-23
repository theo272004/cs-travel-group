// =====================================================================
// Inicio de CS Travel Group (rebranding, copia sin publicar)
// 1) Las cifras del hero cuentan al aparecer.
// 2) Lo que significa trabajar con nosotros: tres paneles; el elegido se abre.
// 3) Carrusel de servicios en abanico (flechas, puntos, teclado, arrastre).
// Nada sigue al cursor. Sin JS todo se ve: cifras finales, primer panel
// abierto y las tarjetas del carrusel quietas.
// =====================================================================
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // --------------------------------------------------------- Cifras
  (function counters() {
    var els = document.querySelectorAll('.cs-count');
    if (!els.length || reduced || !('IntersectionObserver' in window)) return;
    function run(el) {
      var to = +el.getAttribute('data-to');
      var dur = Math.min(1600, 700 + to * 1.6);
      var t0 = performance.now();
      (function step(now) {
        var k = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(to * (k === 1 ? 1 : 1 - Math.pow(2, -10 * k)));
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); io.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    els.forEach(function (el) { el.textContent = '0'; io.observe(el); });
  })();

  // -------------------------------------------------------- Paneles
  (function panels() {
    var root = document.querySelector('.cs-why');
    if (!root) return;
    var items = Array.prototype.slice.call(root.querySelectorAll('.cs-panel'));
    var current = 0, touched = false;
    function set(i) {
      current = i;
      items.forEach(function (b, k) {
        b.classList.toggle('is-active', k === i);
        b.setAttribute('aria-expanded', k === i ? 'true' : 'false');
      });
    }
    items.forEach(function (b, i) {
      b.addEventListener('click', function () { touched = true; set(i); });
      if (finePointer) b.addEventListener('pointerenter', function () { touched = true; set(i); });
    });
    // Mientras nadie los toque, avanzan solos cuando la sección está a la vista.
    if (reduced || !('IntersectionObserver' in window)) return;
    var visible = false;
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0.5 }).observe(root);
    setInterval(function () {
      if (!touched && visible && !document.hidden) set((current + 1) % items.length);
    }, 4200);
  })();

  // -------------------------------------------------------- Carrusel
  (function cover() {
    var root = document.querySelector('.rb-cover');
    if (!root) return;
    var stage = root.querySelector('.rb-cover-stage');
    var cards = Array.prototype.slice.call(root.querySelectorAll('.rb-cover-card'));
    var dotsBox = root.querySelector('.rb-cover-dots');
    var n = cards.length, active = 0;

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
      var w = cards[0].offsetWidth || 380;
      var gap = w * 0.78;
      cards.forEach(function (c, i) {
        var o = i - active;
        if (o > n / 2) o -= n;
        if (o < -n / 2) o += n;
        var a = Math.abs(o);
        c.style.transform = 'translateX(' + (o * gap).toFixed(0) + 'px) translateZ(' + (-a * 140) + 'px) rotateY(' + (-o * 16) + 'deg) scale(' + (1 - a * 0.1).toFixed(2) + ')';
        c.style.zIndex = String(10 - a);
        c.style.setProperty('--dim', String(Math.min(0.62, a * 0.32)));
        c.style.visibility = a > 2 ? 'hidden' : 'visible';
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
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) set(active + (dx < 0 ? 1 : -1));
    });
    window.addEventListener('resize', layout);
    layout();
  })();
})();
