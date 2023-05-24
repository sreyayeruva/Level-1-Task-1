const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (event) => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username === '' || password === '') {
    event.preventDefault();
    alert('Please fill in all required fields.');
  }
});

signupForm.addEventListener('submit', (event) => {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    event.preventDefault();
    alert('Please fill in all required fields.');
  } else if (password !== confirmPassword) {
    event.preventDefault();
    alert('Passwords do not match. Please try again.');
  }
});
