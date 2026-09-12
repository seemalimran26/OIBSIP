
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollToTop(e) {
  if (e) e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function smoothNav(e, id) {
  e.preventDefault();
  scrollToSection(id);
}
/* Footer year */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
/* Navbar scroll state */
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );
}
/* Mobile navigation */
function toggleMobileNav() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("mobileNav");
  if (!hamburger || !nav) return;
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
}
function mobileNav(e, id) {
  e.preventDefault();
  document.getElementById("hamburger")?.classList.remove("open");
  document.getElementById("mobileNav")?.classList.remove("open");
  scrollToSection(id);
}
/* Typewriter */
(function () {
  const words = [
    "Full-Stack Developer.",
    "Laravel Developer.",
    "Frontend Developer.",
    "Problem Solver.",
  ];
  const el = document.getElementById("typewriter-text");
  if (!el) return;
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  function type() {
    const word = words[wordIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, deleting ? 45 : 75);
  }
  setTimeout(type, 700);
})();
/* Scroll reveal */
(function () {
  const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    },
  );
  elements.forEach((el) => observer.observe(el));
})();
/* Contact form validation */
function handleFormSubmit(e) {
  e.preventDefault();
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const msgEl = document.getElementById("message");
  const nameErr = document.getElementById("nameErr");
  const emailErr = document.getElementById("emailErr");
  const msgErr = document.getElementById("msgErr");
  const success = document.getElementById("formSuccess");
  if (!nameEl || !emailEl || !msgEl) return;
  let valid = true;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function setError(input, errorElement, show) {
    input.classList.toggle("error", show);
    if (errorElement) errorElement.classList.toggle("show", show);
    if (show) valid = false;
  }
  setError(nameEl, nameErr, nameEl.value.trim() === "");
  setError(emailEl, emailErr, !emailRe.test(emailEl.value.trim()));
  setError(msgEl, msgErr, msgEl.value.trim() === "");
  if (!valid) return;
  success?.classList.add("show");
  nameEl.value = "";
  emailEl.value = "";
  msgEl.value = "";
  setTimeout(() => {
    success?.classList.remove("show");
  }, 4000);
}

