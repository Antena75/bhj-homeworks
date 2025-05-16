let clickCount = 0;
const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

function counter() {
    cookie.width = ++clickerCounter.textContent % 2 ? 250 : 200;
    // clickCount++;
    // clickerCounter.textContent = clickCount;
    // clickCount % 2 === 0 ? cookie.style.width = "200px" : cookie.style.width = "250px";   
}

cookie.onclick = counter;