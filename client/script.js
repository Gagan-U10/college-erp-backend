document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');
  const registerContainer = document.getElementById('register-container');
  const loginContainer = document.getElementById('login-container');
  const switchToLogin = document.getElementById('switch-to-login');
  const switchToRegister = document.getElementById('switch-to-register');

  // Switch to login form
  if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      registerContainer.style.display = 'none';
      loginContainer.style.display = 'block';
    });
  }

  // Switch to register form
  if (switchToRegister) {
    switchToRegister.addEventListener('click', (e) => {
      e.preventDefault();
      loginContainer.style.display = 'none';
      registerContainer.style.display = 'block';
    });
  }

  // Handle registration
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        });
        const data = await response.json();
        if (response.ok) {
          alert(data.message || 'Registration successful!');
          registerForm.reset();
          // Switch to login form
          registerContainer.style.display = 'none';
          loginContainer.style.display = 'block';
        } else {
          alert(data.error || 'Registration failed');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        alert('Unable to connect to the server: ' + err.message);
      }
    });
  }

  // Handle login
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
          localStorage.setItem('token', data.token);
          alert('Login successful!');
          window.location.href = '/client/dashboard.html';
        } else {
          alert(data.error || 'Login failed');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        alert('Unable to connect to the server: ' + err.message);
      }
    });
  }
});