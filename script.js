/* Portfolio — UI logic & content rendering */

(function () {
  "use strict";

  const data = PORTFOLIO;

  /* ---- Render content from data.js ---- */

  function renderHero() {
    document.getElementById("hero-name").textContent = data.name;
    document.getElementById("hero-title").textContent = data.title;
    document.getElementById("hero-headline").textContent = data.headline;

    const socialContainer = document.getElementById("hero-social");
    const links = [
      { href: data.social.github, icon: "fab fa-github", label: "GitHub" },
      { href: data.social.linkedin, icon: "fab fa-linkedin", label: "LinkedIn" },
      { href: `mailto:${data.email}`, icon: "fas fa-envelope", label: "Email" },
      { href: `tel:${data.phone}`, icon: "fas fa-phone", label: "Phone" },
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
    document.getElementById("about-text").textContent = data.about;

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
        (group) => `
        <div class="skill-card reveal">
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

  function renderProjects() {
    const icons = {
      MediLink: "fa-heart-pulse",
      "Green House": "fa-utensils",
      Shirsh: "fa-plane",
      "CS National": "fa-graduation-cap",
      "The Row": "fa-hotel",
      Weather: "fa-cloud-sun",
    };

    function getIcon(title) {
      const key = Object.keys(icons).find((k) => title.includes(k));
      return icons[key] || "fa-code";
    }

    document.getElementById("projects-grid").innerHTML = data.projects
      .map(
        (p) => `
      <article class="project-card reveal${p.featured ? " project-card--featured" : ""}">
        <div class="project-card__header">
          <div class="project-card__icon" style="background:${p.color}">
            <i class="fas ${getIcon(p.title)}" aria-hidden="true"></i>
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
      </article>`
      )
      .join("");
  }

  function renderExperience() {
    document.getElementById("experience-timeline").innerHTML = data.experience
      .map(
        (exp) => `
      <div class="timeline__item reveal">
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
      .map((cert) => {
        const statusClass =
          cert.status === "Completed"
            ? "cert-card__status--completed"
            : "cert-card__status--ongoing";
        return `
        <div class="cert-card reveal">
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
    observeRevealElements();
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
  const menuIcon = menuToggle.querySelector("i");

  function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuIcon.classList.replace("fa-times", "fa-bars");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-times", isOpen);
  });

  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

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

  function updateActiveNav() {
    const scrollY = window.scrollY + varHeaderOffset();

    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }

  function varHeaderOffset() {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) || 72;
  }

  /* ---- Scroll reveal ---- */

  let revealObserver;

  function observeRevealElements() {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
  }

  /* ---- Header shadow on scroll ---- */

  const header = document.querySelector(".site-header");

  function updateHeader() {
    header.style.boxShadow = window.scrollY > 10 ? "var(--shadow-md)" : "none";
    updateActiveNav();
  }

  /* ---- Contact form ---- */

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    form.reset();
  });

  /* ---- Init ---- */

  initTheme();
  renderAll();
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
})();
