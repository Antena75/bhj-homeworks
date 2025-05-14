let clickCount = 0;
const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

function counter() {
    clickCount++;
    clickerCounter.textContent = clickCount;
    clickCount % 2 === 0 ? cookie.style.width = "200px" : cookie.style.width = "240px";   
}

cookie.onclick = counter;