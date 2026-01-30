function toggleMenu() {
  document.querySelector(".sidebar").classList.toggle("closed");
  document.querySelector(".content").classList.toggle("shifted");
}
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // stop default jump

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
