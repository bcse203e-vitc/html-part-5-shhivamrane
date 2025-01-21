const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = 'Switch to Light Theme';
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Theme';
    }
});
