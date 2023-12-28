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
const elements = document.querySelectorAll('.hidden, .hidden2, .hidden3, .intro');
elements.forEach((el) => observer.observe(el));

window.onload = function() {
  setTimeout(function() {
      const delayedText = document.querySelector('.delayed-text');
      delayedText.style.visibility = 'visible';
      delayedText.classList.add('visible');
  }, 1000); // Delay of 1 second
};

const topEl = document.querySelector('.top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    topEl.classList.add('top-scrolled');
  }  else if (window.scrollY < 20) {
    topEl.classList.remove('top-scrolled');
  }
});
