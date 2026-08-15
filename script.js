/**
 * Aqualux Water - Landing Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const openInquireModalBtn = document.getElementById('openInquireModal');
  const mobileInquireBtn = document.getElementById('mobileInquireBtn');
  const getQuoteBtn = document.getElementById('getQuoteBtn');
  const exploreProductsBtn = document.getElementById('exploreProductsBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const inquireModal = document.getElementById('inquireModal');
  const inquireForm = document.getElementById('inquireForm');
  const modalSuccess = document.getElementById('modalSuccess');

  // Mobile Menu Toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when clicking nav links
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Active Nav Link Switcher
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Modal Open / Close Functions
  function openModal() {
    if (inquireModal) {
      inquireModal.classList.add('open');
      inquireModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Reset form view
      if (inquireForm) inquireForm.style.display = 'flex';
      if (modalSuccess) modalSuccess.style.display = 'none';
    }
  }

  function closeModal() {
    if (inquireModal) {
      inquireModal.classList.remove('open');
      inquireModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openInquireModalBtn) openInquireModalBtn.addEventListener('click', openModal);
  if (mobileInquireBtn) {
    mobileInquireBtn.addEventListener('click', () => {
      if (mobileToggle) mobileToggle.classList.remove('active');
      if (mobileMenu) mobileMenu.classList.remove('open');
      openModal();
    });
  }
  if (getQuoteBtn) getQuoteBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside of modal card
  if (inquireModal) {
    inquireModal.addEventListener('click', (e) => {
      if (e.target === inquireModal) {
        closeModal();
      }
    });
  }

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && inquireModal && inquireModal.classList.contains('open')) {
      closeModal();
    }
  });

  // Form submission handler
  window.submitInquiry = function() {
    if (inquireForm && modalSuccess) {
      inquireForm.style.display = 'none';
      modalSuccess.style.display = 'block';

      setTimeout(() => {
        closeModal();
        inquireForm.reset();
        inquireForm.style.display = 'flex';
        modalSuccess.style.display = 'none';
      }, 3000);
    }
  };

  // Contact Page Form Submission Handler
  const contactPageForm = document.getElementById('contactPageForm');
  const contactSuccessMsg = document.getElementById('contactSuccessMsg');

  window.submitContactPageForm = function() {
    if (contactPageForm && contactSuccessMsg) {
      contactPageForm.style.display = 'none';
      contactSuccessMsg.style.display = 'block';

      setTimeout(() => {
        contactPageForm.reset();
        contactPageForm.style.display = 'flex';
        contactSuccessMsg.style.display = 'none';
      }, 4000);
    }
  };

  // Jitter Animated Feature List Trigger (How We Work Section)
  const howWeWorkSection = document.getElementById('how-we-work');
  if (howWeWorkSection) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15
    };

    const workObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          howWeWorkSection.classList.add('is-animated');
          observer.unobserve(howWeWorkSection);
        }
      });
    }, observerOptions);

    workObserver.observe(howWeWorkSection);
  }

  // Jitter Animated Feature List Trigger (Project Workflow Section)
  const projectWorkflowSection = document.getElementById('project-workflow');
  if (projectWorkflowSection) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.15
    };

    const workflowObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          projectWorkflowSection.classList.add('is-animated');
          observer.unobserve(projectWorkflowSection);
        }
      });
    }, observerOptions);

    workflowObserver.observe(projectWorkflowSection);
  }
});
