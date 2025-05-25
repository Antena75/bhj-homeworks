const items = document.getElementById("items");
const loader = document.getElementById("loader");
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
        let response = xhr.response;
        //let response = JSON.parse(xhr.response);
        let valute = response.response.Valute;
        loader.classList.remove("loader_active");

        for (let key in valute) {
            let charCode = valute[key].CharCode;
            let value = valute[key].Value; 

            items.insertAdjacentHTML("beforeend", `
                <div class="item">
                    <div class="item__code">${charCode}</div>
                    <div class="item__value">${value}</div>
                    <div class="item__currency">руб.</div>
                </div>`
            );                  
        }
    }
}); 

xhr.onerror = () => {
    console.error("Ошибка");
    loader.classList.remove("loader_active");
};

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.send();
