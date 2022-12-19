function scrollToTopOrBottom() {
  const button = document.getElementById('scroll-button');
  if (window.scrollY > window.innerHeight / 2) {
    // Scroll to top
    button.classList.add('top');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Scroll to bottom
    button.classList.remove('top');
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
}
