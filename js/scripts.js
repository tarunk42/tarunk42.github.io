
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const scrollToTopBtn = document.getElementById("scroll-to-top");

function switchTheme(e) {
    if (e.target.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
