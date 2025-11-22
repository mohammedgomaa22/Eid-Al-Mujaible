/* Main JS - vanilla (no modules)
    Responsibilities:
    - Initialize AOS safely
    - Small helpers: set year, simple form handling (no network)
*/
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      mirror: false
    });
  }
});

/* ========== PAGE PRELOADER ========== */
window.addEventListener("load", function () {
  const pre = document.getElementById("preloader");
  if (pre) {
    setTimeout(() => {
      pre.classList.add("hide");
    }, 3000);
  }
});

/* ========== SCROLL TO TOP BUTTON ========== */
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ========== Mobile menu toggle functionality ========== */
(function () {
  const menuToggle = document.getElementById('menuToggle');
  const closeSidebar = document.getElementById('closeSidebar');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarLinks = mobileSidebar.querySelectorAll('a');

  function openSidebar() {
    mobileSidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebarFunc() {
    mobileSidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', openSidebar);
  closeSidebar.addEventListener('click', closeSidebarFunc);
  sidebarOverlay.addEventListener('click', closeSidebarFunc);

  // Close sidebar when clicking on a link
  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebarFunc);
  });

  // Header shadow on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Close sidebar on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
      closeSidebarFunc();
    }
  });
})();

/* ========== Initialize Testimonials Swiper ========== */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
      modules: [window.swiperModules?.Navigation, window.swiperModules?.Pagination, window.swiperModules?.Autoplay].filter(Boolean),
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 600,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      a11y: {
        enabled: true,
        prevSlideMessage: 'الشريحة السابقة',
        nextSlideMessage: 'الشريحة التالية',
      },
    });
  }
});

/* ========== FAQ Accordion functionality ========== */
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon i');

    question.addEventListener('click', () => {
      const isOpen = question.getAttribute('aria-expanded') === 'true';

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherQuestion = otherItem.querySelector('.faq-question');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon i');

          otherQuestion.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = '0';
          otherIcon.classList.remove('fa-minus');
          otherIcon.classList.add('fa-plus');
          otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current item
      if (isOpen) {
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        item.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
      } else {
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        item.querySelector('.faq-icon').style.transform = 'rotate(180deg)';
      }
    });

    // Keyboard accessibility
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
});

/* ========== Set current year dynamically ========== */
document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
