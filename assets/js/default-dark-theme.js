// Set dark theme as default on first visit
(function() {
  // Check if theme preference exists in localStorage
  if (localStorage.getItem('theme') === null) {
    // Set dark theme as default
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    // Apply saved theme preference
    const savedTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
})();