
function parsePrice(str) {
    
    return parseInt(str.replace(/[₹,]/g, ""), 10);
}

function getCart() {
    return JSON.parse(localStorage.getItem("card")) || [];
}

function saveCart(cart) {
    localStorage.setItem("card", JSON.stringify(cart));
}

function renderBag() {
    const cart = getCart();
    const itemsDetailsContainer = document.querySelector(".items-details");
    const cartItems = items.filter((item) => cart.includes(item.id));

    if (cartItems.length === 0) {
        itemsDetailsContainer.innerHTML = `<p style="padding:20px; text-align:left;">Your bag is empty.</p>`;
    } else {
        itemsDetailsContainer.innerHTML = cartItems.map((item) => `
            <div class="single-item" data-id="${item.id}">
                <div class="image-container">
                    <img src="${item.imageUrl}" alt="${item.name}" />
                </div>
                <div class="items-details-conts">
                    <h3 class="vebno">${item.name}</h3>
                    <p class="topic">${item.description}</p>
                    <div class="price">
                        <span class="discounted-price">${item.discountedPrice}</span>
                        <span class="original-price">${item.originalPrice}</span><br>
                        <span class="discount">${item.discount}</span>
                    </div>
                    <div class="return">
                        <span class="material-symbols-outlined">mode_of_travel</span>
                        14 days return available
                    </div>
                </div>
                <div class="remove" data-id="${item.id}">
                    <span class="material-symbols-outlined">close</span>
                </div>
            </div>
        `).join("");
    }

    updateTotals(cartItems);
    attachRemoveHandlers();
}

function updateTotals(cartItems) {
    const totalMRP = cartItems.reduce((sum, item) => sum + parsePrice(item.originalPrice), 0);
    const totalDiscounted = cartItems.reduce((sum, item) => sum + parsePrice(item.discountedPrice), 0);
    const discount = totalMRP - totalDiscounted;

    document.querySelector(".mrp span:last-child").textContent = `₹${totalMRP}`;
    document.querySelector(".dis span.g").textContent = `-₹${discount}`;
    document.querySelector(".total span:last-child").textContent = `₹${totalDiscounted}`;
}

function attachRemoveHandlers() {
    document.querySelectorAll(".remove").forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const updatedCart = getCart().filter((cid) => cid !== id);
            saveCart(updatedCart);
            renderBag(); 
        });
    });
}

renderBag();