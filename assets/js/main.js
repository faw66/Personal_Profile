/* ============================================
   FAUZI PERSONAL WEBSITE — MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAVBAR SCROLL + TOGGLE ---- */
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('open');
    });

    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
      }
    });
  }

  /* ---- FADE-IN ON SCROLL ---- */
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));

  /* ---- QUOTE ROTATOR (Landing Page) ---- */
  const quotes = [
    "Setiap langkah kecil adalah awal dari perjalanan besar.",
    "Belajar tanpa henti, tumbuh tanpa batas.",
    "Kreativitas adalah kecerdasan yang sedang bersenang-senang.",
    "Impian bukan tentang tidur, tapi tentang bangun dan bertindak.",
    "Jadilah versi terbaik dari dirimu sendiri, setiap hari.",
  ];

  const quoteEl = document.getElementById('rotatingQuote');
  if (quoteEl) {
    let i = 0;
    setInterval(() => {
      quoteEl.style.opacity = '0';
      setTimeout(() => {
        i = (i + 1) % quotes.length;
        quoteEl.textContent = quotes[i];
        quoteEl.style.opacity = '1';
      }, 400);
    }, 4000);
  }

  /* ---- CAROUSEL FACTORY ---- */
  function initCarousel(trackId, prevId, nextId, autoScrollSpeed = 0) {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);

    if (!track) return;
    
    // Smooth continuous scroll logic if speed is passed
    if (autoScrollSpeed !== 0) {
      // Clone all children to make it infinite
      const children = Array.from(track.children);
      children.forEach(child => track.appendChild(child.cloneNode(true)));
      children.forEach(child => track.appendChild(child.cloneNode(true))); // extra clones for wide screens
      
      let x = 0;
      let raf;
      // if speed > 0, items move left (reading order). if speed < 0, items move right.
      // Wait, user asked for "dari kiri ke kanan" (left to right), so items move right. So speed > 0 makes it move right.
      let speed = autoScrollSpeed > 0 ? 1 : -1;
      
      // Since it moves right, we need to start translated left so we don't show blank space
      if (speed > 0) {
         x = -track.scrollWidth / 3;
      }

      function step() {
        x += speed * 1.5; // pixel per frame
        
        // Loop conditions
        if (speed < 0 && Math.abs(x) >= track.scrollWidth / 3) {
          x = 0;
        } else if (speed > 0 && x >= 0) {
          x = -track.scrollWidth / 3;
        }
        
        track.style.transition = 'none';
        track.style.transform = `translateX(${x}px)`;
        raf = requestAnimationFrame(step);
      }
      
      raf = requestAnimationFrame(step);
      
      track.parentElement.addEventListener('mouseenter', () => cancelAnimationFrame(raf));
      track.parentElement.addEventListener('mouseleave', () => { raf = requestAnimationFrame(step); });
      
      // hide buttons since it's a marquee
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
      return;
    }

    if (!prevBtn || !nextBtn) return;
    const cards = track.children;
    let currentIndex = 0;

    function getVisible() {
      const outerWidth = track.parentElement.clientWidth;
      const cardWidth = cards[0] ? cards[0].offsetWidth + 19 : 280;
      return Math.max(1, Math.floor(outerWidth / cardWidth));
    }

    function maxIndex() {
      return Math.max(0, cards.length - getVisible());
    }

    function updateCarousel(animate = true) {
      const cardWidth = cards[0] ? cards[0].offsetWidth + 19 : 280;
      const offset = currentIndex * cardWidth;
      track.style.transition = animate ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none';
      track.style.transform = `translateX(-${offset}px)`;

      prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
      nextBtn.style.opacity = currentIndex >= maxIndex() ? '0.3' : '1';
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) { currentIndex--; updateCarousel(); }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < maxIndex()) { currentIndex++; updateCarousel(); }
    });

    window.addEventListener('resize', () => {
      currentIndex = Math.min(currentIndex, maxIndex());
      updateCarousel(false);
    });

    updateCarousel(false);
  }

  /* ---- INIT ALL CAROUSELS ---- */

  // Landing page — Projects
  initCarousel('projTrack', 'projPrev', 'projNext', 1);

  // About — Saudara
  initCarousel('saudaraTrack', 'saudaraPrev', 'saudaraNext');

  // Favorit — Food
  initCarousel('foodTrack', 'foodPrev', 'foodNext');

  // Favorit — Music
  initCarousel('musicTrack', 'musicPrev', 'musicNext', 1);

  // Hobbies — Novels
  initCarousel('novelTrack', 'novelPrev', 'novelNext', 1);

  // Hobbies — Games
  initCarousel('gameTrack', 'gamePrev', 'gameNext', 1);

  // Hobbies — Manhwa
  initCarousel('manhwaTrack', 'manhwaPrev', 'manhwaNext', 1);

  /* ---- INTERACTIVE DOTS BACKGROUND ---- */
  const canvas = document.createElement('canvas');
  canvas.id = 'bgCanvas';
  canvas.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -5; background: #ffffff;';
  document.body.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  let mouseX = -1000;
  let mouseY = -1000;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  let offsetX = 0;
  let offsetY = 0;
  let time = 0;
  const spacingX = 40;
  const spacingY = 40;

  function animateDots() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(139, 92, 246, 0.25)'; // Sangat transparan agar tidak mendistraksi
    time += 0.025; // Lebih lambat
    
    offsetX += 0.2; // Scroll lebih lambat
    offsetY += 0.2; 
    
    // We use a large buffer to ensure the slanted grid covers all corners (top-right, bottom-left)
    const buffer = 25;
    const startCol = Math.floor(-offsetX / spacingX) - buffer;
    const endCol   = startCol + Math.ceil(width / spacingX) + buffer * 2;
    
    const startRow = Math.floor(-offsetY / spacingY) - buffer;
    const endRow   = startRow + Math.ceil(height / spacingY) + buffer * 2;
    
    for (let i = startCol; i < endCol; i++) {
      for (let j = startRow; j < endRow; j++) {
        // Slanted grid calculation
        let x = i * spacingX + (j * spacingY * 0.5) + offsetX;
        let y = j * spacingY + offsetY;
        
        const baseRadius = 2.5; // Sedikit dikurangi dari 3.5 agar lebih elegan
        let drawX = x;
        let drawY = y;
        let radius = baseRadius;
        
        // Crater effect for depth
        const dx = mouseX - x;
        const dy = mouseY - y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const craterRadius = 250;
        
        if (dist < craterRadius) {
          const depth = 1 - (dist / craterRadius); // 1 at center, 0 at edge
          
          // Dots sink inwards (become smaller)
          radius = baseRadius * (1 - (depth * 0.85));
          
          // Push dots towards the edge to form the crater rim
          const pushForce = Math.sin(depth * Math.PI) * 30; 
          
          if (dist > 0) {
            drawX -= (dx / dist) * pushForce;
            drawY -= (dy / dist) * pushForce;
          }
        }
        
        // Only draw if visible
        if (drawX > -20 && drawX < width + 20 && drawY > -20 && drawY < height + 20) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, Math.max(0.1, radius), 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    requestAnimationFrame(animateDots);
  }
  animateDots();

  /* ---- SMOOTH HOVER TILT on cards ---- */
  document.querySelectorAll('.tease-card, .funfact-card, .project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-5px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---- DUPLICATE MARQUEE for seamless loop ---- */
  document.querySelectorAll('.marquee-track').forEach(track => {
    // Clone existing content and append for seamless loop
    const clone = track.innerHTML;
    track.innerHTML = clone + clone;
  });

  /* ---- PROJECT CARD SEE MORE ---- */
  document.querySelectorAll('.see-more-btn').forEach(btn => {
    // Hide button if text is not overflowing
    const desc = btn.previousElementSibling;
    if (desc && desc.scrollHeight <= desc.clientHeight) {
      btn.style.display = 'none';
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest('.project-card');
      if (!card) return;
      card.classList.toggle('expanded');
      btn.textContent = card.classList.contains('expanded') ? 'See Less' : 'See More';
    });
  });

});
