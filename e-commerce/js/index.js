async function getData() {

    try {
        let Loading = document.querySelector('.load');
        Loading.style.visibility = 'visible';

        let resource = await fetch('https://dummyjson.com/products')
        let pData = await resource.json();
        let data = pData.products;

        Loading.style.visibility = 'hidden';
        onLoad(data);

    }
    catch (error) {
        console.log("can't fetch the data");
    }


    function onLoad(data) {
        let product_section = document.querySelector(".product-section");

        let item = ""

        data.forEach(i => {
            item += `<div class="products">
                <img
                    src="${i.thumbnail}">
                <div class="product-details">
                    ${i.brand ? `<h3 class="product-brand">${i.brand}</h3>` : ''}
                    <h4 class="product-title">${i.title}</h4>
                    <p class="product-description">${i.description}</p>
                    <span class="product-Price">${i.price}</span>
                    <span class="product-discountPercentage">(${i.discountPercentage}%)</span>
                    <button class="addCart" item-id="${i.id}">Add To Cart</button>
                </div>
            </div>`
        });
        product_section.innerHTML = item;



        let buttons = document.querySelectorAll(".addCart");

        let cart = JSON.parse(localStorage.getItem("cartItems")) ? JSON.parse(localStorage.getItem("cartItems")) : [];

        if (cart.length != 0)
            document.querySelector(".cart_count").innerText = cart.length;

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                let itemId = Number(button.getAttribute("item-id"));
                if (!cart.includes(itemId)) {
                    cart.push(itemId);
                    document.querySelector(".cart_count").innerText = cart.length;

                    localStorage.setItem("cartItems", JSON.stringify(cart));
                }

            })
        })

    }




    let input = document.getElementById('input');
    input.addEventListener('input', () => {
        let inputValue = document.getElementById("input").value.toLowerCase();
        let products = document.querySelectorAll(".products");


        products.forEach(item => {
            let title = item.querySelector('h4');
            let brand = item.querySelector('h3');
            if (title.textContent.toLowerCase().includes(inputValue) || brand.textContent.toLowerCase().includes(inputValue)) {
                item.style.display = 'block';
            }
            else {
                item.style.display = 'none';
            }
        })

    })



}
getData();