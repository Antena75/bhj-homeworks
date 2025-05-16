const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("tab_active"));
        contents.forEach(content => content.classList.remove("tab__content_active"));

        tab.classList.add("tab_active");
        contents[tabs.indexOf(tab)].classList.add("tab__content_active");
    });
});    