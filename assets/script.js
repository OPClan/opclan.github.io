const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector('.icon');
const label = toggleBtn.querySelector('.label');
const body = document.body;

function applyTheme(isLight) {
  if (isLight) {
    body.classList.add('light-theme');
    icon.textContent = '🌙';
    label.textContent = 'Mode sombre';
  } else {
    body.classList.remove('light-theme');
    icon.textContent = '☀️';
    label.textContent = 'Mode clair';
  }
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Au chargement
applyTheme(localStorage.getItem('theme') === 'light');

toggleBtn.addEventListener('click', () => {
  const isLight = !body.classList.contains('light-theme');
  applyTheme(isLight);
});
