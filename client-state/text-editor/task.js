const key = 'textContent';
const editor = document.getElementById('editor');

window.addEventListener('load', () => {
    editor.value = localStorage.getItem(key);
});

editor.addEventListener('input', () => {
    localStorage.setItem(key, editor.value);
});

const button = document.createElement('button');
button.textContent = 'Очистить';
document.querySelector('.card').appendChild(button);

button.addEventListener('click', () => {
    editor.value = '';
    localStorage.removeItem(key);
});