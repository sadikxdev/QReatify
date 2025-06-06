
const header = document.getElementById("header");

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        header.classList.add("headscroll");
    }
    else {
        header.classList.remove("headscroll");
    }
})


const form = document.getElementById("form");


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
      item.classList.toggle('active');
  });
});