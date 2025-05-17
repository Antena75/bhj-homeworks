const book = document.querySelector(".book");
//const content = document.querySelector(".book__content");
const fontSizes = Array.from(document.getElementsByClassName("font-size"));


book.addEventListener("click", (e) => {
    if (e.target.tagName != 'A') return;
    e.preventDefault();
    fontSizes.forEach(fontSize => fontSize.classList.remove("font-size_active"));
    book.classList.remove("book_fs-small", "book_fs-big");

    e.target.classList.add("font-size_active");
    if (e.target.dataset.size === "small") {
        book.classList.add("book_fs-small")
    } else if (e.target.dataset.size === "big") {
        book.classList.add("book_fs-big")
    }
});


// fontSizes.forEach(fontSize => {
//     fontSize.addEventListener("click", (e) => {
//         e.preventDefault();
//         fontSizes.forEach(fontSize => fontSize.classList.remove("font-size_active"));
//         content.classList.remove("book_fs-small", "book_fs-big");

//         fontSize.classList.add("font-size_active");
//         if (fontSize.dataset.size === "small") {
//             content.classList.add("book_fs-small")
//         } else if (fontSize.dataset.size === "big") {
//             content.classList.add("book_fs-big")
//         }
//     });
// });