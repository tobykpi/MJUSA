(() => {
  const flyer = document.querySelector('.event-flyer');
  if (!flyer || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('flyer-visible', entry.isIntersecting));
  }, { threshold: 0.12 });
  flyer.classList.add('flyer-ready');
  observer.observe(flyer);
})();
