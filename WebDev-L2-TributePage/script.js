document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".progress");
  const cursorGlow = document.querySelector(".cursor-glow");
  const reveals = document.querySelectorAll(".reveal");
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  // Intro loader
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("done"), 700);
  });

  // Mobile navigation
  menuToggle?.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });

  // Scroll reveal with stagger
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  reveals.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min((i % 5) * 70, 280)}ms`;
    observer.observe(el);
  });

  // Header + scroll progress
  function updateScroll() {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? (scrollTop / height) * 100 : 0;

    progress.style.width = `${percent}%`;
    header.classList.toggle("scrolled", scrollTop > 60);
  }

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  // Mouse glow on desktop
  window.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 900) return;
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
    cursorGlow.style.opacity = "1";
  });

  // Subtle parallax for hero image
  const heroImage = document.querySelector(".hero-image-frame");
  window.addEventListener(
    "scroll",
    () => {
      if (!heroImage || window.innerWidth < 900) return;
      const y = Math.min(window.scrollY * 0.08, 45);
      heroImage.style.transform = `translateY(${y}px)`;
    },
    { passive: true },
  );

  // Timeline progress line
  const timeline = document.querySelector(".timeline");
  const timelineFill = document.querySelector(".timeline-line span");

  function updateTimeline() {
    if (!timeline || !timelineFill) return;

    const rect = timeline.getBoundingClientRect();
    const viewport = window.innerHeight;
    const progressValue = Math.max(
      0,
      Math.min(1, (viewport * 0.75 - rect.top) / rect.height),
    );

    timelineFill.style.height = `${progressValue * 100}%`;
  }

  window.addEventListener("scroll", updateTimeline, { passive: true });
  updateTimeline();

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Small keyboard-friendly image interaction
  document.querySelectorAll(".image-card, .gallery-item").forEach((card) => {
    card.setAttribute("tabindex", "0");
  });
});
