// Shared, gentle behaviour for the inner Zedu pages.
// - .reveal: fades/floats in once when scrolled into view (adds .in)
// - .watch: plays its one small animation when scrolled into view (adds .in)
// - .tappable: tap replays its animation (adds .tap briefly), so phones get what hover gives a mouse
// - [data-count]: counts up once when visible
// - .squig: draws a hand-drawn underline under a key word once the tab is visible
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    if (e.target.dataset.count) countUp(e.target);
    io.unobserve(e.target);
  }), { threshold: 0.3 });
  document.querySelectorAll(".reveal, .watch, [data-count]").forEach((el) => io.observe(el));

  document.querySelectorAll(".tappable").forEach((el) => el.addEventListener("click", () => {
    el.classList.remove("tap"); void el.offsetWidth; el.classList.add("tap");
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("tap"), 1200);
  }));

  function countUp(el) {
    const end = parseFloat(el.dataset.count), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    if (reduce) { el.textContent = pre + end + suf; return; }
    const t0 = performance.now(), dur = 1300;
    (function tick(now) {
      const t = Math.min(1, (now - t0) / dur), v = end * (1 - Math.pow(1 - t, 3));
      el.textContent = pre + (Number.isInteger(end) ? Math.round(v) : v.toFixed(1)) + suf;
      if (t < 1) requestAnimationFrame(tick);
    })(t0);
  }

  // Underline the key word in the page title, once the person is looking at the tab.
  function squiggle() { document.querySelectorAll(".squig").forEach((s) => s.classList.add("drawn")); }
  if (document.visibilityState === "visible") setTimeout(squiggle, 300);
  else document.addEventListener("visibilitychange", function once() {
    if (document.visibilityState === "visible") { document.removeEventListener("visibilitychange", once); setTimeout(squiggle, 300); }
  });

  // Phone menu.
  const btn = document.querySelector(".menu-btn"), nav = document.querySelector(".nav");
  if (btn && nav) btn.addEventListener("click", () => nav.classList.toggle("open"));
})();
