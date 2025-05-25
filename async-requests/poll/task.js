const pollAnswers = document.getElementById("poll__answers");
const pollTitle = document.getElementById("poll__title");
const xhr = new XMLHttpRequest();

xhr.onload = () => {
    if (xhr.status === 200) {
        let response = xhr.response;
        pollTitle.textContent = response.data.title;
        response.data.answers.forEach((answer) => {
            let button = document.createElement("button");
            button.className = "poll__answer";
            button.textContent = answer;
            pollAnswers.appendChild(button);

            button.onclick = () => {
                alert("Спасибо, ваш ответ засчитан!");
            };
        });
                         
    } else {
      console.error("Ошибка");
    }
};

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();