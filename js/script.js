// ===== CONFIG: replace these placeholders with real business details =====
  const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // country code + number, no + or spaces
  const WHATSAPP_MESSAGE = "Hi, I would like to enquire about a trip with Travels Guru Munish Tours & Travels.";

  function buildWhatsappLink(){
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);
  }
  const waLink = buildWhatsappLink();
  ["waIconBtn","ctaWhatsapp","floatWhatsapp"].forEach(id=>{
    const el = document.getElementById(id);
    if(el){ el.setAttribute("href", waLink); el.setAttribute("target","_blank"); el.setAttribute("rel","noopener"); }
  });

  // ===== Sticky navbar on scroll =====
  const navHeader = document.getElementById('navHeader');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 60){ navHeader.classList.add('scrolled'); }
    else{ navHeader.classList.remove('scrolled'); }
  });

  // ===== Mobile menu =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // ===== Scroll reveal animations =====
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  },{threshold:0.15});
  revealEls.forEach(el=>io.observe(el));

  // ===== Gallery filter =====
  const filters = document.querySelectorAll('.gfilter');
  const gItems = document.querySelectorAll('#masonry .g-item');
  filters.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      gItems.forEach(item=>{
        item.style.display = (cat==='all' || item.dataset.cat===cat) ? '' : 'none';
      });
    });
  });

  // ===== Contact form (front-end only, no backend configured) =====
  const form = document.getElementById('enquiryForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formMsg.classList.add('show');
    form.reset();
    setTimeout(()=>formMsg.classList.remove('show'), 6000);
  });
