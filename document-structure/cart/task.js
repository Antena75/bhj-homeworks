const cartProducts = document.querySelector(".cart__products");

function addToCart(productId, productImageSrc, quantity) {    
    const product = cartProducts.querySelector(`[data-id="${productId}"]`);

    if (product) {
        const count = product.querySelector(".cart__product-count");
        count.textContent = parseInt(count.textContent) + quantity;
    } else {
        const newProduct = document.createElement("div");
        newProduct.classList.add("cart__product");
        newProduct.dataset.id = productId;

        newProduct.innerHTML = `
            <img class="cart__product-image" src="${productImageSrc}">
            <div class="cart__product-count">${quantity}</div>
            <div class="cart__product-remove">&times</div>`;
            
        cartProducts.appendChild(newProduct);
        
        const productRemove = newProduct.querySelector(".cart__product-remove");
        productRemove.addEventListener("click", () => {
            newProduct.remove();
        });     
        // newProduct.addEventListener("click", (e) => {
        //     if  (e.target.classList.contains("cart__product-remove")) {
        //         newProduct.remove();
        //     }
        // });        
    }      
}

const quanityControls = document.querySelectorAll(".product__quantity-controls");
quanityControls.forEach(control => {
    const decButton = control.querySelector(".product__quantity-control_dec");
    const incButton = control.querySelector(".product__quantity-control_inc");
    const quantity = control.querySelector(".product__quantity-value");
    const addButton = control.parentElement.querySelector(".product__add");

    decButton.addEventListener("click", () => {
        if (parseInt(quantity.textContent) > 1) {
            quantity.textContent = parseInt(quantity.textContent) - 1;
        }
    });

    incButton.addEventListener("click", () => {
        quantity.textContent = parseInt(quantity.textContent) + 1;
    });

    addButton.addEventListener("click", () => {
        const productId = control.closest(".product").dataset.id;
        const productImageSrc = control.closest(".product").querySelector(".product__image").src;

        addToCart(productId, productImageSrc, parseInt(quantity.textContent));
    });
});

// cartProducts.addEventListener("click", (e) => {
//     if  (e.target.classList.contains("cart__product-remove")) {
//         e.target.closest(".cart__product").remove();
//     }
// });
