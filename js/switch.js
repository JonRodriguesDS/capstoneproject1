function toggleTheme() {
    const body = document.body;
    const theme = body.getAttribute('data-bs-theme');

    if (theme === 'dark') {
      body.setAttribute('data-bs-theme', 'light');
    } else {
      body.setAttribute('data-bs-theme', 'dark');
    }
  }