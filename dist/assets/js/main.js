// Mobile menu toggle
const mobileToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("navbar-main");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", isOpen);
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

// Tours dropdown — click toggle on mobile, hover handled by CSS on desktop
const toursToggle = document.getElementById("tours-toggle");
const toursMobile = document.getElementById("tours-mobile");
const toursChevron = document.getElementById("tours-chevron");

if (toursToggle && toursMobile) {
  toursToggle.addEventListener("click", () => {
    // Only toggle on mobile (md breakpoint = 768px)
    if (window.innerWidth < 768) {
      const isOpen = !toursMobile.classList.contains("hidden");
      toursMobile.classList.toggle("hidden", isOpen);
      toursChevron.style.transform = isOpen ? "" : "rotate(180deg)";
      toursToggle.setAttribute("aria-expanded", String(!isOpen));
    }
  });
}
