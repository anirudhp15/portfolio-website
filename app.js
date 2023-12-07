const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
        entry.target.classList.remove('visible');
    }
  });
});
const elements = document.querySelectorAll('.hidden, .header');
elements.forEach((el) => observer.observe(el));

window.onload = function() {
  setTimeout(function() {
      const delayedText = document.querySelector('.delayed-text');
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach((item) => item.classList.add('nav-item-visible'));
      delayedText.style.visibility = 'visible';
      delayedText.classList.add('visible');
  }, 1000); // Delay of 1 second
};
