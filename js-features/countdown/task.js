let timer = 59; 
const timerInterval = setInterval(countdown, 1000); 
const timerElement = document.getElementById('timer');

function countdown() {         
    if (timer <= 0) { 
        clearInterval(timerInterval); 
        alert("Вы победили в конкурсе!"); 
    } else {
        timer--; 
        timerElement.textContent = timer;   
    }
}