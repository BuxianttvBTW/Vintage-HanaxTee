// =====================================================
// Our Little Story — light interactions
// =====================================================

(function () {
  'use strict';

  // ----- Reveal on scroll -----
  const revealTargets = document.querySelectorAll('.section, .hero__frame');
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));

  // ----- Polaroid caption readout -----
  const polaroids = document.querySelectorAll('.polaroid');
  const readout = document.getElementById('captionReadout');
  const defaultText = readout ? readout.textContent : '';

  polaroids.forEach((p) => {
    const caption = p.getAttribute('data-caption') || '';
    p.addEventListener('mouseenter', () => {
      if (readout && caption) readout.textContent = '“' + caption + '”';
      readout && (readout.style.opacity = '1');
    });
    p.addEventListener('mouseleave', () => {
      if (readout) {
        readout.textContent = defaultText;
        readout.style.opacity = '0.7';
      }
    });
    p.addEventListener('focus', () => {
      if (readout && caption) readout.textContent = '“' + caption + '”';
    });
  });

  // ----- Music toggle (optional) -----
  const toggle = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-audio');
  if (toggle && audio) {
    toggle.addEventListener('click', () => {
      // If the user hasn't added a song yet, the audio has no source.
      if (!audio.querySelector('source')) {
        toggle.animate(
          [
            { transform: 'translateX(0)' },
            { transform: 'translateX(-4px)' },
            { transform: 'translateX(4px)' },
            { transform: 'translateX(0)' },
          ],
          { duration: 280 }
        );
        toggle.setAttribute('title', 'Add assets/song.mp3 to enable music');
        return;
      }
      if (audio.paused) {
        audio.play().catch(() => {});
        toggle.classList.add('is-playing');
      } else {
        audio.pause();
        toggle.classList.remove('is-playing');
      }
    });
  }

  // ----- Smooth-anchor offset for sticky heads (none here, but safe) -----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
    });
  });
})();
