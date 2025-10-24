// Theme management for STOP GAMBLING NU website
(function() {
  'use strict';
  
  function initTheme() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  function setTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }
  
  // Initialize theme immediately when script loads (before DOM ready)
  initTheme();
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initTheme(); // Ensure icons are updated after DOM is loaded
  });
  
  // Make functions globally available
  window.toggleTheme = toggleTheme;
  window.setTheme = setTheme;
})();