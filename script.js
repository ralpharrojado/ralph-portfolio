// Simple nav toggle + current year
document.getElementById('year').textContent = new Date().getFullYear();

const nav = document.getElementById('nav');
const toggle = document.getElementById('nav-toggle');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      nav.classList.remove('open');
    }
  });
});
