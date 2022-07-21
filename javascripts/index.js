const coffeeBtn = document.getElementById("coffee-btn");
const cakesBtn = document.getElementById("cakes-btn");
const shakesBtn = document.getElementById("shakes-btn");


const coffeeSection = document.getElementById("section-left1");
const cakesSection = document.getElementById("section-left2");
const shakesSection = document.getElementById("section-left3");


/* <=====================================================
        buttons work
=====================================================> */

coffeeBtn.addEventListener("click", () => {
    // alert("hi coffee");
    // console.log(coffeeSection);

    coffeeSection.style.display = "block";
    cakesSection.style.display = "none";
    shakesSection.style.display = "none";

});

cakesBtn.addEventListener("click", (el) => {
    // alert("hi cakes");
    // console.log(cakesSection);

    coffeeSection.style.display = "none";
    cakesSection.style.display = "block";
    shakesSection.style.display = "none";


});

shakesBtn.addEventListener("click", (elem) => {
    // alert("hi shakes");
    // console.log(shakesSection);

    coffeeSection.style.display = "none";
    cakesSection.style.display = "none";
    shakesSection.style.display = "block";

});

//Quantity Changed function

function quantitychanged(event) {
    var inputnum = event.target;
    if (isNaN(inputnum.value) || inputnum.value <= 0) {
        inputnum.value = 1;
    }
    updatetotal()
}

// Remove Cart Box 

function removeCartItems(event) {
    var buttonClicked = event.target
    var a = buttonClicked.parentElement;
    buttonClicked.parentElement.remove();
    // console.log(a)
    updatetotal()
}

//button buy function
var btnBuy = document.getElementById('btn-buy');

btnBuy.addEventListener("click",()=>{
    alert("Thank You For Ordering \r\nHave a Nice a Day")
    location.reload();
})



/* <=====================================================
        add to cart button functions
=====================================================> */

var addButtonCart = document.getElementsByClassName('btn-add-prod');
var cartContainer = document.getElementsByClassName('addprod-cart')[0];

for (var i = 0; i < addButtonCart.length; i++) {
    var addButton = addButtonCart[i];
    addButton.addEventListener('click', addproductcart)
}




function addproductcart(e) {
    var cureentaddtoCartButton = e.target;
    var productcontainer = cureentaddtoCartButton.parentElement.parentElement.parentElement;
    var productTitle = productcontainer.getElementsByClassName('prod-title')[0].innerText;
    var productPrice = productcontainer.getElementsByClassName('prod-price')[0].innerText;
    var productImg = productcontainer.getElementsByClassName('img-edit')[0].src;
    // console.log(productTitle, productPrice, productImg);


    // Product not repeat Logic

    var cartTitle = cartContainer.getElementsByClassName('cart-prod-title');

    for (var i = 0; i < cartTitle.length; i++) {
        if (cartTitle[i].innerText == productTitle) {
            alert("Already Product Added to Cart");

            return;
        }

    }

    addingproductcart(productTitle, productPrice, productImg);

    updatetotal()

}

/* <=====================================================
        add to cart proccess
=====================================================> */

function addingproductcart(productTitle, productPrice, productImg) {



    var cartDiv = document.createElement("div");
    cartDiv.classList.add("cart-box");


    var cartBoxInside = `
    <img src=${productImg} alt="" class="cart-img">
<span class="product-inf">
    <span class="cart-prod-title">${productTitle}</span>
    <span class="cart-price">${productPrice}</span>
    <input type="number" value="1" class="cart-quantity">
</span>
<!-- Remove product -->
<ion-icon name="trash" class="cart-remove"></ion-icon>`;
    cartDiv.innerHTML = cartBoxInside;
    cartContainer.appendChild(cartDiv)

    // Remove Cart Box proccess

    var removeCartButtons = document.getElementsByClassName("cart-remove");
    for (var i = 0; i < removeCartButtons.length; i++) {
        var removeButton = removeCartButtons[i];
        removeButton.addEventListener('click', removeCartItems)
    }

    //Quantity Changed process

    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantitychanged)
    }

    updatetotal()

}

/* <=====================================================
//           quantity or price cart functions update
// =====================================================> */


function updatetotal() {
    var cartContainer = document.getElementsByClassName('addprod-cart')[0];
    var cartProdboxes = cartContainer.getElementsByClassName('cart-box');
    var totalPrice = 0;
    for (var i = 0; i < cartProdboxes.length; i++) {
        var cartbox = cartProdboxes[i];

        var cartProdPrice = cartbox.getElementsByClassName('cart-price')[0];
        // console.log(cartProdPrice);


        var cartProdQuantity = cartbox.getElementsByClassName('cart-quantity')[0];
        // console.log(cartProdQuantity)

        var price = parseFloat(cartProdPrice.innerHTML);

        var quantity = cartProdQuantity.value;

        var totalPrice = totalPrice + price * quantity;

        totalPrice = Math.round(totalPrice * 100) / 100;

        // console.log(totalPrice);

        var totalAllProdPrice = document.getElementsByClassName('total-price')[0].innerText = totalPrice;

        var gstprice = parseInt(17);
        var percentage = parseInt(100);

        var qw = percentage + gstprice;
        var asd = qw / percentage;
        var gstIncludingPrice = totalAllProdPrice * asd;
        gstIncludingPrice = Math.round(gstIncludingPrice * 100) / 100;

        var gstAmount = document.getElementsByClassName('total-includ-gst')[0].innerHTML = gstIncludingPrice;


    }

}











































// function updatetotal() {
//     var cartContent = document.getElementsByClassName('addprod-cart')[0];
//     var cartBoxes = cartContent.getElementsByClassName('cart-box');
//     var total = 0;

//     for (var i = 0; i < cartBoxes.length; i++) {
//         var cartBox = cartBoxes[i]
//         var cartPrice = cartBoxes.getElementsByClassName('cart-price')[0];
//         var cartQuantity = cartBoxes.getElementsByClassName('cart-quantity')[0];
//         var price = parseFloat(cartPrice.innerText.replace("$", ""));
//         var Quantity = cartQuantity.value;
//         total = total + (Quantity * price);
//     }

//     document.getElementsByClassName('total-price').innerText = '$' + total;

// }




