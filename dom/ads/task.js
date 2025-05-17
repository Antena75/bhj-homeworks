const rotators = Array.from(document.querySelectorAll(".rotator"));

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll(".rotator__case");   
    let index = 0;
    cases[index].style.color = cases[index].getAttribute("data-color")

    setInterval(() => {
        cases[index].classList.remove("rotator__case_active");
        index = ++index % cases.length;
        cases[index].style.color = cases[index].dataset.color;
        cases[index].classList.add("rotator__case_active");
    }, cases[0].dataset.speed);
});