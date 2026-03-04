// Mobile menu toggle
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("navbar-main");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("nav-open");
    mobileMenu.classList.toggle("nav-open");
    mobileToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}

// Shrink nav on scroll
const mainNav = document.getElementById("main-nav");
if (mainNav) {
  window.addEventListener("scroll", () => {
    mainNav.classList.toggle("nav-scrolled", window.scrollY > 60);
  }, { passive: true });
}

// Tours dropdown — click on mobile, hover with grace period on desktop
const toursToggle = document.getElementById("tours-toggle");
const toursDropdown = document.getElementById("tours-dropdown");
const toursMobile = document.getElementById("tours-mobile");
const toursChevron = document.getElementById("tours-chevron");
const toursMenuItem = document.getElementById("tours-menu-item");

// Mobile: click to expand inline sub-menu
if (toursToggle && toursMobile) {
  toursToggle.addEventListener("click", () => {
    if (window.innerWidth < 989) {
      const isOpen = toursMobile.classList.contains("sub-open");
      toursMobile.classList.toggle("sub-open");
      toursChevron.style.transform = isOpen ? "" : "rotate(180deg)";
      toursToggle.setAttribute("aria-expanded", String(!isOpen));
    }
  });
}

// Scroll-triggered fade-in
const scrollEls = document.querySelectorAll('[data-animate]');
if (scrollEls.length) {
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  scrollEls.forEach(el => scrollObserver.observe(el));
}

// Skull: start off-screen left, slide in on scroll, then float
const skull = document.getElementById('skull-decoration');
if (skull) {
  skull.style.transform = 'translateX(calc(-50% - 700px)) translateY(-50%)';
  // Observe the parent section (skull is off-screen so can't observe itself)
  const skullSection = skull.closest('section');
  const skullObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skull.classList.add('skull-sliding');
        skull.addEventListener('animationend', () => {
          skull.style.transform = 'translateX(-50%) translateY(-50%)';
          skull.classList.remove('skull-sliding');
          skull.classList.add('skull-floating');
        }, { once: true });
        skullObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });
  skullObserver.observe(skullSection);
}

// Desktop: click to toggle dropdown, click outside to close
if (toursMenuItem && toursDropdown && toursToggle && window.matchMedia("(min-width: 989px)").matches) {
  toursToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = toursDropdown.classList.contains("dropdown-open");
    toursDropdown.classList.toggle("dropdown-open");
    toursToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  document.addEventListener("click", (e) => {
    if (!toursMenuItem.contains(e.target)) {
      toursDropdown.classList.remove("dropdown-open");
      toursToggle.setAttribute("aria-expanded", "false");
    }
  });
}
