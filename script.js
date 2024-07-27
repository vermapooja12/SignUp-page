document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signUpForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const togglePassword = document.getElementById('togglePassword');
    const toggleLockIcon = document.getElementById('toggleLockIcon');
    const errorMessage = document.getElementById('errorMessage');
    const haveAccount = document.getElementById('haveAccount');
    const number = document.getElementById('number')


    let showPassword = false;
    togglePassword.addEventListener('click', () => {
        showPassword = !showPassword;
        password.type = showPassword ? 'text' : 'password';

        // Toggle the eye icon
        togglePassword.innerHTML = showPassword ? 
            `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                <path d="M10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
            </svg>` :
            `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
            </svg>`;

        // Toggle the lock icon
        toggleLockIcon.innerHTML = showPassword ? 
            `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2"/>
            </svg>` :
            `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
            </svg>`;
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if(number.value.length !== 10){
            errorMessage.textContent = 'Number should be Must 10-Digit';
            return;
        }
    
        if (password.value !== confirmPassword.value) {
            errorMessage.textContent = 'Password & Confirm Password must be the same';
            return;
        }
        if (password.value.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters';
            return;
        }
        if (!/[A-Z]/.test(password.value)) {
            errorMessage.textContent = 'Password must have at least 1 capital letter';
            return;
        }
        if (!/[a-z]/.test(password.value)) {
            errorMessage.textContent = 'Password must have at least 1 small letter';
            return;
        }
        if (!/[0-9]/.test(password.value)) {
            errorMessage.textContent = 'Password must have at least 1 number';
            return;
        }
        if (!/[!@#$%&*]/.test(password.value)) {
            errorMessage.textContent = 'Password must have at least 1 special character';
            return;
        }

        errorMessage.textContent = '';
        alert('Sign Up Successfully...');
        form.reset();
    });

    haveAccount.addEventListener('click', () => {
        window.location.href = '/login';
    });
});
