// ---------------------------------------------------------------------------------
//             getting items to bag
// ---------------------------------------------------------------------------------

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems =JSON.parse(cartItems)
    let productDetails = document.querySelector('.cart-item')

    if (cartItems && productDetails){
        Object.values(cartItems).map(item =>{
            productDetails.innerHTML += `
            <div class="CartItemimg ">
                <div class="product-img">
                        <img class="img-actual" src="${item.img}">
                </div>
                <div class="product-details">
                    <h3 class="brand">${item.brandName}</h3>
                    
                    <p class="pro-name">${item.productdesc}</p>
                    <h5 class="ProductDescription__priceHolder">${item.cost}</h5>
                    <span class="ProductDescription__MRP">MRP: </span>
                    <span class="ProductDescription__priceCancelled">${item.mrp}</span>
                    <p class="size-item">Size : ${item.size}</p>
                   
                    <div class="delivery">
                    <div class="delivery-offer">
                        <span class="delivery-name">Delivery :</span>
                        <span class="delivery-text"> Free</span>
                    </div>
                    <div class="quantity">
                       <div class="quantity-word">Quantity : </div>
                       
                        <span>${item.incart}</span>
                        
                    </div>
                    </div>
                </div>
                <div>
                    <div class="delete-btn" onclick = "removeCartItem('${item.productdesc}')"><ion-icon class="cart-delete" name="close-circle"></ion-icon></div>
                </div>
            </div>`
        })
    }else{
        productDetails.style.width = "100%"
        document.querySelector("#cart").innerHTML = `
        <div class='CartItemimg1'>
           <div class='empty-cart'>Your bag is empty! Let's fill it up shall we?</div>
          <div class="cont-btn">
            <a href='index.html'>
            <button class="continueshopping-btn">Continue Shopping</button>
            </div>
        </div>
        `
    }
   
}

displayCart()


function totalCart(){
    let discountPrice = localStorage.getItem("discountprice");
    let mrpCost = localStorage.getItem("MrpPrice")
    let offerCost = localStorage.getItem("offerPrice")
    let totalBill = document.querySelector('.cart-total')

    if(discountPrice != null){

    totalBill.innerHTML=`
    <div class="cart-bill">
            <div class="total-row">
                <div class="bagTotal-label">Bag Total</div>
                <div class="bagTotal-amount">₹${mrpCost}.00</div>
            </div>
            <div class="total-row">
                <div class="bagTotal-label">Processing Fees</div>
                <div class="bagTotal-amount delivery-text">Free</div>
            </div>
            <div class="total-row">
                <div class="bagTotal-label">Bag Subtotal</div>
                <div class="bagTotal-amount">₹${mrpCost}.00</div>
            </div>
            <div class="total-row">
                <div class="bagTotal-label">Product Discount</div>
                <div class="bagTotal-amount">-₹${discountPrice}</div>
            </div>
            <p class="delivery-text">You will save ₹${discountPrice} on this order </p>
    </div>
    <div class="cart-bill">
        <div class="total-row"> 
            <h3>Your Total = ₹${offerCost}.00</h3>
            <button class="checkout-btn">Place Order</button>
        </div>
    </div>
`
    }else{
        document.querySelector('.cart-total').style.display = 'none';
    }

}

totalCart()






// ---------------------------------------------------------------------------------
//           removing item
// ---------------------------------------------------------------------------------

function removeCartItem(item) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems =JSON.parse(cartItems)
    cartNum(cartItems,item)
    cost(cartItems,item)
    newMrp(cartItems,item)
    discountPrice()

  
    let newCart = Reflect.deleteProperty(cartItems, item)

    localStorage.setItem('productsInCart', JSON.stringify(cartItems))
    
    check()
    location.reload()
    }
    
// ---------------------------------------------------------------------------------
//           removing cart item
// ---------------------------------------------------------------------------------



function cartNum(cartItems,item){
    let cartNum = localStorage.getItem("cartnumbers")
    let quantity = cartItems[item].incart

    let newCartNum = cartNum - quantity
    localStorage.setItem('cartnumbers', newCartNum);
    bagCount.innerHTML = newCartNum
}


// ---------------------------------------------------------------------------------
//           removing total price item
// ---------------------------------------------------------------------------------

function cost(cartItems,item){
      let price = cartItems[item].cost.split("₹");
      let quantity = cartItems[item].incart
      price = parseInt(price[1]);
      
      newPrice = price*quantity
      let cartCost = localStorage.getItem('offerPrice')
       
      cartCost = parseInt(cartCost);
      localStorage.setItem('offerPrice', cartCost - newPrice);

}

// ---------------------------------------------------------------------------------
//           removing MRP price item
// ---------------------------------------------------------------------------------

function newMrp(cartItems,item){
      let price = cartItems[item].mrp.split("₹");
      let quantity = cartItems[item].incart
      price = parseInt(price[1]);
      
      newPrice = price*quantity
      let cartCost = localStorage.getItem('MrpPrice')
       
      cartCost = parseInt(cartCost);
      localStorage.setItem('MrpPrice', cartCost - newPrice);

}

// ---------------------------------------------------------------------------------
//           removing discount price item
// ---------------------------------------------------------------------------------

function discountPrice(){
    let totalPrice = localStorage.getItem('offerPrice')
    let mrpprice = localStorage.getItem('MrpPrice')

    totalPrice = parseInt(totalPrice)
    mrpprice = parseInt(mrpprice)
    discountPriceCal = (mrpprice - totalPrice);
    localStorage.setItem('discountprice', discountPriceCal );
}



// ---------------------------------------------------------------------------------
//           checking cart has anything item
// ---------------------------------------------------------------------------------
 

let checkOut = document.querySelector('.checkout-btn')

checkOut.addEventListener('click',()=>{
    localStorage.clear()
    const sizeSection = document.querySelector('#size-alert-modal')
    const sizeBtn = document.querySelector('.size-close-btn')
    sizeSection.style.display='block'
            sizeBtn.addEventListener('click',()=>{
                sizeSection.style.display='none'
                location.reload()
            })
    
})



// ---------------------------------------------------------------------------------
//           checking cart has anything item
// ---------------------------------------------------------------------------------

function check(){
    let cartNum = localStorage.getItem("cartnumbers")
    console.log(cartNum)
    if(cartNum == 0){
        localStorage.clear()
    }
}

