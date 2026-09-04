  // cursor glow
  const glow = document.getElementById('glow');
  window.addEventListener('mousemove', (e)=>{
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // mobile menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburgerBtn.addEventListener('click', ()=>{
    const isOpen = mobileMenu.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      mobileMenu.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded','false');
    });
  });

  // active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const activeObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link=>{
          link.classList.toggle('active', link.getAttribute('href') === '#'+id);
        });
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  sections.forEach(s=>activeObserver.observe(s));

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  reveals.forEach(r=>revealObserver.observe(r));