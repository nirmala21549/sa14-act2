document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(function(error) {
        error.textContent = '';
    });

    // Get form inputs
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Validate username
    if (usernameInput.value.length < 6) {
        document.getElementById('username-error').textContent = 'Username must be at least 6 characters long';
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Invalid email format';
        return;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long and contain at least one capital letter and one number';
        return;
    }

    // If all validations pass, the form is valid
    alert('Registration successful!');
});
