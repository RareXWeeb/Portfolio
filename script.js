// script.js

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for user's preferred theme from local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    // Toggle dark class on the body
    document.body.classList.toggle('dark');

    // Update local storage
    let theme = 'light';
    if (document.body.classList.contains('dark')) {
        theme = 'dark';
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    localStorage.setItem('theme', theme);
});
