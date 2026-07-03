/* Portfolio — UI logic & content rendering */

(function () {
  "use strict";

  if (typeof PORTFOLIO === "undefined") {
    console.error("Portfolio data failed to load. Check that data.js is linked correctly.");
    return;
  }

  const data = PORTFOLIO;

  /* ---- Render content from data.js ---- */

  function renderHero() {
    document.getElementById("hero-name").textContent = data.name;
    document.getElementById("hero-title").textContent = data.title;
    document.getElementById("hero-tagline").textContent = data.tagline;

    document.getElementById("hero-badges").innerHTML = data.badges
      .map((b) => `<span class="hero__badge">${b}</span>`)
      .join("");

    document.getElementById("hero-stats").innerHTML = data.stats
      .map(
        (s) => `
        <div class="hero__stat">
          <span class="hero__stat-value">${s.value}</span>
          <span class="hero__stat-label">${s.label}</span>
        </div>`
      )
      .join("");

    const socialContainer = document.getElementById("hero-social");
    const links = [
      { href: data.social.github, icon: "fab fa-github", label: "GitHub" },
      { href: data.social.linkedin, icon: "fab fa-linkedin", label: "LinkedIn" },
      { href: `mailto:${data.email}`, icon: "fas fa-envelope", label: "Email" },
      { href: data.social.graphics, icon: "fas fa-palette", label: "Graphics Portfolio" },
    ];

    socialContainer.innerHTML = links
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener noreferrer" aria-label="${l.label}"><i class="${l.icon}" aria-hidden="true"></i></a>`
      )
      .join("");
  }

  function renderAbout() {
    const paragraphs = data.about.trim().split(/\n\n+/);
    document.getElementById("about-text").innerHTML = paragraphs
      .map((p) => `<p>${p.trim()}</p>`)
      .join("");

    const edu = data.education;
    document.getElementById("education-content").innerHTML = `
      <p class="education__degree">${edu.degree}</p>
      <p class="education__school">${edu.school}</p>
      <div class="education__meta">
        <span class="education__badge">${edu.period}</span>
        <span class="education__badge">${edu.cgpa}</span>
      </div>
      <p class="education__coursework"><strong>Relevant Coursework:</strong> ${edu.coursework.join(", ")}</p>
    `;

    document.getElementById("achievements-list").innerHTML = data.achievements
      .map((a) => `<li>${a}</li>`)
      .join("");

    document.getElementById("languages-list").innerHTML = data.languages
      .map((l) => `<li><strong>${l.name}</strong> — ${l.level}</li>`)
      .join("");
  }

  function renderSkills() {
    document.getElementById("skills-technical").innerHTML = data.skills.technical
      .map(
        (group, i) => `
        <div class="skill-card reveal" style="--reveal-delay:${i * 80}ms">
          <h3 class="skill-card__category">${group.category}</h3>
          <div class="skill-card__tags">
            ${group.items.map((s) => `<span class="skill-tag">${s}</span>`).join("")}
          </div>
        </div>`
      )
      .join("");

    document.getElementById("skills-soft").innerHTML = data.skills.soft
      .map((s) => `<span class="soft-tag">${s}</span>`)
      .join("");
  }

  const projectIcons = {
    MediLink: "fa-heart-pulse",
    "Green House": "fa-utensils",
    Shirsh: "fa-plane",
    "CS National": "fa-graduation-cap",
    "The Row": "fa-hotel",
    Weather: "fa-cloud-sun",
  };

  function getProjectIcon(title) {
    const key = Object.keys(projectIcons).find((k) => title.includes(k));
    return projectIcons[key] || "fa-code";
  }

  function buildProjectCard(p) {
    return `
      <article class="project-card reveal${p.featured ? " project-card--featured" : ""}" data-filter="${p.featured ? "featured" : "all"}">
        <div class="project-card__inner">
          <div class="project-card__header">
            <div class="project-card__icon" style="background:${p.color}">
              <i class="fas ${getProjectIcon(p.title)}" aria-hidden="true"></i>
            </div>
            ${p.featured ? '<span class="project-card__badge">Featured</span>' : ""}
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${p.title}</h3>
            <p class="project-card__meta">${p.role} · ${p.timeline}</p>
            <p class="project-card__desc">${p.description}</p>
            <ul class="project-card__features">
              ${p.features.map((f) => `<li>${f}</li>`).join("")}
            </ul>
            <div class="project-card__stack">
              ${p.stack.map((t) => `<span class="stack-tag">${t}</span>`).join("")}
            </div>
            <p class="project-card__achievement">${p.achievement}</p>
          </div>
          <div class="project-card__footer">
            ${
              p.live
                ? `<a href="${p.live}" class="btn btn--ghost" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt" aria-hidden="true"></i> Live Demo</a>`
                : ""
            }
            <a href="${p.github}" class="btn btn--ghost" target="_blank" rel="noopener noreferrer"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
          </div>
        </div>
      </article>`;
  }

  function renderProjects() {
    const featuredCount = data.projects.filter((p) => p.featured).length;

    document.getElementById("projects-filter").innerHTML = `
      <button class="filter-btn active" data-filter="all" role="tab" aria-selected="true">All (${data.projects.length})</button>
      <button class="filter-btn" data-filter="featured" role="tab" aria-selected="false">Featured (${featuredCount})</button>
    `;

    document.getElementById("projects-grid").innerHTML = data.projects
      .map((p) => buildProjectCard(p))
      .join("");

    initProjectFilter();
  }

  function initProjectFilter() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach((b) => {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-selected", String(b === btn));
        });

        cards.forEach((card) => {
          const show = filter === "all" || card.dataset.filter === filter;
          card.classList.toggle("hidden", !show);
        });
      });
    });
  }

  function renderExperience() {
    document.getElementById("experience-timeline").innerHTML = data.experience
      .map(
        (exp, i) => `
      <div class="timeline__item reveal" style="--reveal-delay:${i * 100}ms">
        <div class="timeline__dot" aria-hidden="true"></div>
        <div class="timeline__card">
          <h3 class="timeline__title">${exp.title}</h3>
          <p class="timeline__company">${exp.company} · ${exp.location}</p>
          <p class="timeline__period">${exp.period}</p>
          <ul class="timeline__highlights">
            ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
        </div>
      </div>`
      )
      .join("");
  }

  function renderCertifications() {
    document.getElementById("certifications-grid").innerHTML = data.certifications
      .map((cert, i) => {
        const statusClass =
          cert.status === "Completed"
            ? "cert-card__status--completed"
            : "cert-card__status--ongoing";
        return `
        <div class="cert-card reveal" style="--reveal-delay:${i * 80}ms">
          <h3 class="cert-card__name">${cert.name}</h3>
          <div class="cert-card__meta">
            <span class="cert-card__issuer">${cert.issuer}</span>
            <span class="cert-card__status ${statusClass}">${cert.status}</span>
            <span class="cert-card__date">${cert.date}</span>
          </div>
        </div>`;
      })
      .join("");
  }

  function renderContact() {
    document.getElementById("contact-email").innerHTML = `
      <i class="fas fa-envelope" aria-hidden="true"></i>
      <div><span>Email</span><a href="mailto:${data.email}">${data.email}</a></div>
    `;
    document.getElementById("contact-phone").innerHTML = `
      <i class="fas fa-phone" aria-hidden="true"></i>
      <div><span>Phone</span><a href="tel:${data.phone}">${data.phone}</a></div>
    `;
    document.getElementById("contact-location").innerHTML = `
      <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
      <div><span>Location</span><p>${data.location}</p></div>
    `;

    const socialLinks = [
      { href: data.social.github, icon: "fab fa-github", label: "GitHub" },
      { href: data.social.linkedin, icon: "fab fa-linkedin", label: "LinkedIn" },
      { href: data.social.portfolio, icon: "fas fa-globe", label: "Portfolio" },
      { href: data.social.graphics, icon: "fas fa-palette", label: "Graphics" },
    ];

    document.getElementById("contact-social").innerHTML = socialLinks
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener noreferrer" aria-label="${l.label}"><i class="${l.icon}" aria-hidden="true"></i></a>`
      )
      .join("");

    document.getElementById("references-list").innerHTML = data.references
      .map(
        (ref) => `
        <div class="reference-card">
          <p class="reference-card__name">${ref.name}</p>
          <div class="reference-card__contact">
            <a href="tel:${ref.phone.replace(/\s/g, "")}"><i class="fas fa-phone" aria-hidden="true"></i> ${ref.phone}</a>
            <a href="mailto:${ref.email}"><i class="fas fa-envelope" aria-hidden="true"></i> ${ref.email}</a>
          </div>
        </div>`
      )
      .join("");
  }

  function renderFooter() {
    document.getElementById("footer-year").textContent = new Date().getFullYear();
    document.getElementById("footer-links").innerHTML = `
      <a href="${data.social.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="${data.social.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="${data.social.graphics}" target="_blank" rel="noopener noreferrer">Graphics</a>
    `;
  }

  function renderAll() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExperience();
    renderCertifications();
    renderContact();
    renderFooter();
  }

  /* ---- Theme toggle ---- */

  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("fa-moon", theme === "light");
    icon.classList.toggle("fa-sun", theme === "dark");
  }

  function initTheme() {
    const saved = localStorage.getItem("theme");
    const theme =
      saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    html.setAttribute("data-theme", theme);
    updateThemeIcon(theme);
  }

  themeToggle.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  });

  /* ---- Mobile menu ---- */

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navOverlay = document.getElementById("nav-overlay");
  const menuIcon = menuToggle.querySelector("i");

  function closeMenu() {
    navLinks.classList.remove("open");
    navOverlay.classList.remove("visible");
    menuToggle.setAttribute("aria-expanded", "false");
    menuIcon.classList.replace("fa-times", "fa-bars");
    document.body.style.overflow = "";
  }

  function openMenu() {
    navLinks.classList.add("open");
    navOverlay.classList.add("visible");
    menuToggle.setAttribute("aria-expanded", "true");
    menuIcon.classList.replace("fa-bars", "fa-times");
    document.body.style.overflow = "hidden";
  }

  menuToggle.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navOverlay.addEventListener("click", closeMenu);

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  /* ---- Smooth scroll ---- */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ---- Active nav link on scroll ---- */

  const sections = document.querySelectorAll("section[id]");
  const navItems = navLinks.querySelectorAll("a");
  const header = document.querySelector(".site-header");
  const scrollProgress = document.getElementById("scroll-progress");
  const backToTop = document.getElementById("back-to-top");

  function headerOffset() {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 72;
  }

  function updateOnScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    scrollProgress.style.width = `${progress}%`;
    header.classList.toggle("scrolled", scrollY > 10);
    backToTop.classList.toggle("visible", scrollY > 400);

    const offset = scrollY + headerOffset() + 20;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (offset >= top && offset < top + height) {
        navItems.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Scroll reveal ---- */

  let revealObserver;

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function observeRevealElements() {
    if (revealObserver) revealObserver.disconnect();

    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add("visible");
      }
    });

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains("visible")) {
        revealObserver.observe(el);
      }
    });
  }

  /* ---- Contact form ---- */

  const form = document.getElementById("contact-form");

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    input.classList.add("invalid");
    error.textContent = message;
  }

  function clearErrors() {
    form.querySelectorAll("input, textarea").forEach((el) => el.classList.remove("invalid"));
    form.querySelectorAll(".form-error").forEach((el) => (el.textContent = ""));
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name) {
      showError("name", "Please enter your name.");
      valid = false;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "Please enter a valid email address.");
      valid = false;
    }
    if (!message) {
      showError("message", "Please enter a message.");
      valid = false;
    }
    if (!valid) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    form.reset();
  });

  function enableRevealAnimations() {
    document.documentElement.classList.add("js-enabled");
    observeRevealElements();
  }

  /* ---- Init ---- */

  initTheme();

  try {
    renderAll();
    enableRevealAnimations();
  } catch (err) {
    console.error("Portfolio render error:", err);
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
  }

  window.addEventListener("scroll", updateOnScroll, { passive: true });
  updateOnScroll();
})();
