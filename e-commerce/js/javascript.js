
// const cards = document.querySelector(".cards");
// let card = JSON.parse(localStorage.getItem('card')) || [];
// let data = '';

// if (typeof items === "undefined") {
//     console.error("items is not defined — check that items-data.js is loaded BEFORE javascript.js in your HTML.");
// } else {
//     onload();
// }
// countshow();

// function onload() {
//     for (let i = 0; i < items.length; i++) {
//         data += `<div class="card"> <img
//             src="${items[i].imageUrl}" alt="">
//             <h3>${items[i].name}</h3>
//             <p class="men">${items[i].description}</p>
//             <div class="price">
//                 <span class="discounted-price">${items[i].discountedPrice}</span>
//                 <span class="original-price">${items[i].originalPrice}</span>
//                 <span class="discount">${items[i].discount}</span>
//             </div>
//             <button class="add-to-bag" data-id="${items[i].id}">add to card</button>
//         </div>
// `;
//     }
//     cards.innerHTML = data;
//     attachAddToBagListeners();
// }

// function attachAddToBagListeners() {
//     document.querySelectorAll(".add-to-bag").forEach((button) => {
//         button.addEventListener("click", () => {
//             const data_id = button.getAttribute("data-id");
//             if (!card.includes(data_id)) {
//                 card.push(data_id);
//                 localStorage.setItem("card", JSON.stringify(card));
//             }
//             countshow();
//         });
//     });
// }

// function countshow() {
//     const itemcount = document.querySelector("#itemcount");
//     if (!itemcount) return;
//     itemcount.textContent = card.length;
//     itemcount.style.display = card.length > 0 ? "block" : "none";
// }






const cards = document.querySelector(".cards");
 let card = JSON.parse(localStorage.getItem("card")) || [];

 function countshow() {
     const itemcount = document.querySelector("#itemcount");
     if (!itemcount) return;

     itemcount.textContent = card.length;
     itemcount.style.display = card.length ? "block" : "none";
 }

function loadCards() {

    if (!cards) {
        console.log("Cards section not found");
        return;
     }

     let html = "";

    items.forEach(item => {

        html += `
         <div class="card">
             <img src="${item.imageUrl}" alt="">
             <h3>${item.name}</h3>

            <p class="men">${item.description}</p>

             <div class="price">
                 <span class="discounted-price">${item.discountedPrice}</span>
                 <span class="original-price">${item.originalPrice}</span>
                 <span class="discount">${item.discount}</span>
             </div>

             <button class="add-to-bag" data-id="${item.id}">
                 Add To Cart
             </button>
         </div>
         `;

     });

     cards.innerHTML = html;

    document.querySelectorAll(".add-to-bag").forEach(button => {

         button.addEventListener("click", () => {

            const id = button.dataset.id;

             if (!card.includes(id)) {
                card.push(id);
                localStorage.setItem("card", JSON.stringify(card));
                 countshow();
             }

         });

     });

   }

 loadCards();
countshow();





















