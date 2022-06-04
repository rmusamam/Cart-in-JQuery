// show cart

(function () {
  const cartInfo = document.getElementById("cart-info");

  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();

//add items in to cart

(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");

  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      //console.log(event.target.parentElement.classList)
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        //console.log(pos);
        let partPath = fullPath.slice(pos);

        const item = {};
        item.img = `img-cart${partPath}`;

        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[0].textContent;

        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .children[0].children[1].textContent;

        let finalPrice = price.slice(1).trim();

        item.name = name;
        item.price = finalPrice;

        // console.log(item);

        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-Item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );

        cartItem.innerHTML = ` 
       <img src="${item.img}" class="img-fluid 
       rounded-circle" id="item-img" alt="">
       <div class="item-text">

         <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
         <span>$</span>
         <span id="cart-item-price" class="cart-item-price" 
         class="mb-0">${item.price}</span>
       </div>
       <a href="#" id='cart-item-remove' class="cart-item-remove">
         <i class="fas fa-trash"></i>
       </a>
     </div>`;

        // select Cart

        const cart = document.getElementById("cart");
        const total = document.querySelector(".cart-total-container");

        cart.insertBefore(cartItem, total);
        alert("Item added to cart");

        showTotals();
      }
    });
  });

  //show total
  function showTotals() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");
    items.forEach(function (item) {
      total.push(parseFloat(item.textContent));
    });

    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);
    // console.log(finalMoney)

    document.getElementById("cart-total").textContent = finalMoney;
    document.querySelector(".item-total").textContent = finalMoney;
    document.getElementById("item-count").textContent = total.length;
  }
})();

// clear Cart

(function () {
  let clr = document.getElementById("clear-cart");

  clr.addEventListener("click", function () {
    document.querySelector(".item-total").textContent = 0;
    document.querySelector("#cart-total").textContent = 0;
    let clearCartItem = document.getElementsByClassName("cart-Item"); // HTMLCollection

    Array.from(clearCartItem).forEach(function(el) {
      el.remove()
    })
  });
})();

(function(){
  let bin=document.getElementById('cart-item-remove')
  // console.log(bin)
  bin.addEventListener('click',function(event){
   console.log(event.target.parentElement.parentElement) 
  })
})();
