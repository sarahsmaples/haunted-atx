// Hero video iOS autoplay fallback — hide if autoplay is blocked (e.g. Low Power Mode)
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  heroVideo.muted = true;
  const p = heroVideo.play();
  if (p && p.catch) p.catch(() => { heroVideo.style.display = 'none'; });
}

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

// Photo gallery lightbox
const galleries = document.querySelectorAll('.photo-gallery');
if (galleries.length) {
  const modal = document.createElement('div');
  modal.id = 'lightbox';
  modal.innerHTML = `
    <button id="lb-close" aria-label="Close">&times;</button>
    <button id="lb-prev" aria-label="Previous">&#8249;</button>
    <img id="lb-img" src="" alt="">
    <button id="lb-next" aria-label="Next">&#8250;</button>
  `;
  document.body.appendChild(modal);

  const lbImg = document.getElementById('lb-img');
  let images = [];
  let current = 0;

  function showImage(index) {
    current = (index + images.length) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
  }

  function openLightbox(imgs, index) {
    images = imgs;
    showImage(index);
    modal.classList.add('lb-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('lb-open');
    document.body.style.overflow = '';
  }

  galleries.forEach(gallery => {
    const imgs = Array.from(gallery.querySelectorAll('img'));
    imgs.forEach((img, i) => {
      img.addEventListener('click', () => openLightbox(imgs, i));
    });
  });

  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => showImage(current - 1));
  document.getElementById('lb-next').addEventListener('click', () => showImage(current + 1));
  modal.addEventListener('click', e => { if (e.target === modal) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('lb-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(current - 1);
    if (e.key === 'ArrowRight') showImage(current + 1);
  });
}

// Image slider factory — images are duplicated in the template (like the marquee),
// so translateX(-50%) loops seamlessly with no JS cloning needed.
function makeSlider(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return;
  track.addEventListener('touchstart', () => track.classList.add('paused'), { passive: true });
  track.addEventListener('touchend',   () => track.classList.remove('paused'));
}

makeSlider('igTrack');
makeSlider('gsTrack');

// Bats scroll trigger — watch Ghost Hosts section, drop bats in when visible
const batImgs = document.querySelectorAll('.bats-drop');
if (batImgs.length) {
  const batsSection = batImgs[0].closest('section');
  if (batsSection) {
    const batsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          batImgs.forEach(bat => bat.classList.add('is-visible'));
          batsObserver.disconnect();
        }
      });
    }, { threshold: 0.1 });
    batsObserver.observe(batsSection);
  }
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
