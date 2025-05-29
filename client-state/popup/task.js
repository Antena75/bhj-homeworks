const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

window.addEventListener('load', () => {
    if (getCookie('modal') != 'close') {
        modal.classList.add('modal_active');
    }
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modal', 'close');
})

function setCookie(name, value) {
    document.cookie = name + '=' + value;
}

function getCookie(name) {
    if (document.cookie) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + "="));
    return cookie.substring(name.length + 1, cookie.length);
    }
}