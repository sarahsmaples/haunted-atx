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

// Tours dropdown — click on mobile, hover with grace period on desktop
const toursToggle = document.getElementById("tours-toggle");
const toursDropdown = document.getElementById("tours-dropdown");
const toursMobile = document.getElementById("tours-mobile");
const toursChevron = document.getElementById("tours-chevron");
const toursMenuItem = document.getElementById("tours-menu-item");

// Mobile: click to expand inline sub-menu
if (toursToggle && toursMobile) {
  toursToggle.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      const isOpen = !toursMobile.classList.contains("hidden");
      toursMobile.classList.toggle("hidden", isOpen);
      toursChevron.style.transform = isOpen ? "" : "rotate(180deg)";
      toursToggle.setAttribute("aria-expanded", String(!isOpen));
    }
  });
}

// Desktop: hover with 150ms close delay so the gap between button and menu
// doesn't cause the dropdown to flicker closed mid-cursor-move
if (toursMenuItem && toursDropdown && window.matchMedia("(min-width: 768px)").matches) {
  let closeTimer;

  const openDropdown = () => {
    clearTimeout(closeTimer);
    toursDropdown.classList.remove("hidden");
    toursToggle.setAttribute("aria-expanded", "true");
  };

  const closeDropdown = () => {
    closeTimer = setTimeout(() => {
      toursDropdown.classList.add("hidden");
      toursToggle.setAttribute("aria-expanded", "false");
    }, 150);
  };

  toursMenuItem.addEventListener("mouseenter", openDropdown);
  toursMenuItem.addEventListener("mouseleave", closeDropdown);
  // Entering the dropdown itself cancels the pending close
  toursDropdown.addEventListener("mouseenter", () => clearTimeout(closeTimer));
  toursDropdown.addEventListener("mouseleave", closeDropdown);
}
