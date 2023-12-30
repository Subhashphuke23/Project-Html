let isDarkMode = false;

function toggleMode() {
  const body = document.body;
  const toggleText = document.getElementById('toggleText');
  const toggleButton = document.getElementById('toggleButton');

  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.style.backgroundColor = '#222';
    body.style.color = '#fff';
    toggleButton.style.backgroundColor = '#222';
    toggleButton.style.color = '#fff';
    toggleText.textContent = 'Dark Mode';
  } else {
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
    toggleButton.style.backgroundColor = '#f8f8f8';
    toggleButton.style.color = '#333';
    toggleText.textContent = 'Light Mode';
  }
}
