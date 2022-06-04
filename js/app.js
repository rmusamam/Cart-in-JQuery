// show cart

(function () {
  //const cartInfo = document.getElementById("cart-info");
  const cartInfo = $("#cart-info");

  //const cart = document.getElementById("cart");
  const cart = $("#cart");

  cartInfo.click(function () {
    cart.toggleClass("show-cart");
  });
})();

//add items in to cart

(function () {
  //const cartBtn = document.querySelectorAll(".store-item-icon");
  let cartBin = $(".store-item-icon");

  //cartBtn.forEach(function (btn)
  cartBin.each(function (btn) {
    //btn.addEventListener("click", function (event)
    $(this).click(function (event) {
      //console.log(event.target.parentElement.classList)
      // if (event.target.parentElement.classList.contains("store-item-icon")) {
      if ($(this).hasClass("store-item-icon")) {
        //let fullPath = event.target.parentElement.previousElementSibling.src;
        let fullPath = $(this).prev().attr('src');
        //let pos = fullPath.indexOf("img") + 3;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);
        const item = {};
        item.img = `img-cart${partPath}`;

        let name = $(this).parent().next().children(':first').children(':first').text();

        let price =
          //event.target.parent().parent().next().children[0].children[1].textContent;
          $(this).parent().next().children(':first').children(':first').text();
          
        let finalPrice = price.slice(1).trim();

        item.name = name;
        item.price = finalPrice;

        // console.log(item);

        const cartItem = document.createElement("div");
        $(cartItem).addClass("cart-Item d-flex justify-content-between text-capitalize my-3");

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

        const cart = $("#cart");
        const total = $(".cart-total-container");

        total.before(cartItem)
        // cart.insertBefore(cartItem, total);
        alert("Item added to cart");

        showTotals();
      }
    });
  });

  //show total
  function showTotals() {
    const total = [];
    //debugger;
  
    const items = $(".cart-item-price");
    items.each(function (item) {
      total.push(parseFloat(item.textContent));
    });

    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);
    // console.log(finalMoney)

    $("#cart-total").text = finalMoney;
    $(".item-total").text = finalMoney;
    $("#item-count").text = total.length;
  }
})();

// clear Cart

(function () {
  let clr = $("#clear-cart");

  clr.on("click", function () {
    $(".item-total").text = 0;
    $("#cart-total").text = 0;
    let clearCartItem = $(".cart-Item"); // HTMLCollection

    

    clearCartItem.each(function(){
      $(this).remove()
    })

    // Array.from(clearCartItem).forEach(function (el) {
    //   el.remove();
    // });
  });
})();

// (function () {
//   let bin = document.getElementById("cart-item-remove");
//   // console.log(bin)
//   bin.addEventListener("click", function (event) {
//     console.log(event.target.parentElement.parentElement);
//   });
// })();
