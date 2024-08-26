const themeToggleButton = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
}
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const reviewItem = this.closest('.review-item');
            const shortText = reviewItem.querySelector('.short-text');
            const fullText = reviewItem.querySelector('.full-text');
            if (fullText.style.display === 'none') {
                fullText.style.display = 'block';
                shortText.style.display = 'none';
                this.textContent = 'Show Less';
                reviewItem.style.height = 'auto';
            } 
            else {
                fullText.style.display = 'none';
                shortText.style.display = 'block';
                this.textContent = 'Read Full Review';
                reviewItem.style.height = 'auto';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
    });
});