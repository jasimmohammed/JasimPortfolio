const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const prog = document.querySelector(".prog");
const dot = document.querySelector(".cur-dot");
const ring = document.querySelector(".cur-ring");
const portrait = document.querySelector(".portrait");
const ghosts = [...document.querySelectorAll(".ghost")];
const counters = [...document.querySelectorAll("[data-count]")];
const revealEls = [...document.querySelectorAll(".reveal")];
const steps = [...document.querySelectorAll(".step")];
const rail = document.querySelector(".tl-fill");
const stepList = document.querySelector(".steps");

window.addEventListener("mousemove", (event) => {
  if (!dot || !ring) return;
  dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
  ring._tx = event.clientX;
  ring._ty = event.clientY;
  ring.classList.toggle("is-hot", Boolean(event.target.closest("a, button")));
});

let rx = window.innerWidth / 2;
let ry = window.innerHeight / 2;
function loop() {
  if (!reduced && ring) {
    const tx = ring._tx ?? rx;
    const ty = ring._ty ?? ry;
    rx += (tx - rx) * 0.18;
    ry += (ty - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
  }
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? window.scrollY / max : 0;
  if (prog) prog.style.transform = `scaleX(${p})`;

  if (!reduced && portrait && window.innerWidth > 860) {
    portrait.style.transform = `translate(-50%, calc(-50% + ${window.scrollY * 0.06}px))`;
  } else if (portrait) {
    portrait.style.transform = "translate(-50%, -50%)";
  }

  ghosts.forEach((ghost) => {
    const rect = ghost.getBoundingClientRect();
    const shift = (rect.top - window.innerHeight * 0.45) * -0.05;
    ghost.style.transform = `translate3d(0, ${shift}px, 0)`;
  });

  if (rail && stepList) {
    const box = stepList.getBoundingClientRect();
    const progress = (window.innerHeight * 0.7 - box.top) / (box.height * 0.9);
    const clamped = Math.min(1, Math.max(0, progress));
    rail.style.transform = `scaleY(${clamped})`;
    steps.forEach((step, index) => {
      step.classList.toggle("is-on", clamped > (index + 0.15) / steps.length);
    });
  }
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    onScroll();
    ticking = false;
  });
}, { passive: true });
onScroll();

function runCount(el) {
  if (el.dataset.done) return;
  el.dataset.done = "1";
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  if (reduced) {
    el.textContent = `${target}${suffix}`;
    return;
  }
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / 1100);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("in");
    entry.target.querySelectorAll("[data-count]").forEach(runCount);
    io.unobserve(entry.target);
  });
}, { threshold: 0.35 });

revealEls.forEach((el) => io.observe(el));

if (reduced) {
  revealEls.forEach((el) => el.classList.add("in"));
  counters.forEach(runCount);
  steps.forEach((step) => step.classList.add("is-on"));
}
