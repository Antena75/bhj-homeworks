const signinForm = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

const currentUserId = localStorage.getItem('current_user_id');
if (currentUserId) {
    userId.textContent = currentUserId;
    showWelcome();
} else {
    showSignin();
}

signinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(signinForm);

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem('current_user_id', data.user_id);
            userId.textContent = data.user_id;
            showWelcome();
            signinForm.reset();
        } else {
            alert('Неверный логин/пароль');
        }
    })
    .catch(error => {
        console.error('Ошибка при отправке запроса:', error);
    });
});

function showSignin() {
    signin.classList.add('signin_active');
    welcome.classList.remove('welcome_active');
}

function showWelcome() {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
}