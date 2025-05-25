const form = document.getElementById("form");
const progress = document.getElementById("progress");
const fileInput = document.getElementById("file");

fileInput.addEventListener("change", () => {
    progress.value = 0.0;  
});

form.addEventListener("submit", function(e) {
    e.preventDefault();  
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
            progress.value = e.loaded / e.total;
            if (progress.value === 1) {
                setTimeout (() => {
                    alert("Файл успешно загружен на сервер")
                }, 200)
            }
        }
    });

    xhr.addEventListener("load", () => {
        if (xhr.status === 201) {
            console.log("Файл успешно загружен на сервер:", xhr.response);
        } else {
            console.error("Ошибка:", xhr.status);
        }
    });

    xhr.upload.addEventListener("error", () => {
        console.error("Произошла ошибка");
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formData);
    

});