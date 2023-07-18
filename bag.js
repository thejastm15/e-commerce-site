let cart = document.querySelectorAll(".addToBag")
let bagCount = document.querySelector(".bag-count")


//---------------------------------------------------------------------------------
//           getting data from selected product and creating an object
//---------------------------------------------------------------------------------

let brand = document.querySelectorAll(".brand")
let productDesc = document.querySelectorAll(".pro-name")
let rate = document.querySelectorAll(".ProductDescription__priceHolder")
let img = document.querySelectorAll("#productImg" )
let mrp = document.querySelectorAll('.ProductDescription__priceCancelled')

img = img[productIndex * 5].getAttribute("src")

brandName = brand[productIndex].textContent;
productDesc = productDesc[productIndex].textContent;
cost = rate[productIndex].textContent;
mrp = mrp[productIndex].textContent;

function productData(brand,product,rate , image, mrp, productIndex,productsize){
    this.brandName = brand;
    this.productdesc = product;
    this.cost = rate;
    this.size = productsize;
    this.incart = 0;
    this.img = image;
    this.mrp = mrp;
    this.id = productIndex;
}

function gettingSelectSize (){
    let productsize = document.querySelectorAll(".productSize");
    size = productsize[productIndex].value;
    return size;
}

size = gettingSelectSize()

const productDetail = new productData(brandName, productDesc, cost, img , mrp, productIndex, size);

//---------------------------------------------------------------------------------
//           add to bag button operation
//---------------------------------------------------------------------------------



for(i=0;i<cart.length;i++){
    cart[i].addEventListener("click",()=>{
        let productsize = document.querySelectorAll(".productSize");
        size = productsize[productIndex].value;
        console.log(size)
        if(size == "Select Size"){
            const sizeSection = document.querySelector('#size-alert-modal')
            const sizeBtn = document.querySelector('.size-close-btn')
            sizeSection.style.display='block'
            sizeBtn.addEventListener('click',()=>{
                sizeSection.style.display='none'
            })
        }else{
        cartNumber(productDetail);
        totalCost(productDetail);
        mrpCost(productDetail);
        discountPrice()
        }
    })
}



//---------------------------------------------------------------------------------
//                     adding cart number when button is clicked
//---------------------------------------------------------------------------------


let cartNumber = (productDetail)=>{
    let itemsNumber = parseInt(localStorage.getItem("cartnumbers"));
    
    if(itemsNumber){
    localStorage.setItem('cartnumbers',itemsNumber += 1);
    bagCount.innerHTML = itemsNumber
    }else{
        localStorage.setItem('cartnumbers', 1);
        bagCount.innerHTML = 1
    }

    setItems(productDetail);
}




// ---------------------------------------------------------------------------------
//           adding selected add to bag product to local storage
// ---------------------------------------------------------------------------------


function setItems(productDetail){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    size = gettingSelectSize()
    
    if(cartItems != null){
        if(cartItems[productDetail.productdesc] == undefined){
            cartItems={
                ...cartItems,
                [productDetail.productdesc] : productDetail
            }
        }
        cartItems[productDetail.productdesc].incart +=1;
    } 
    else{
        productDetail.size = size
        productDetail.incart = 1;
        cartItems ={
            [productDetail.productdesc] : productDetail
        }
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}


// ---------------------------------------------------------------------------------
//           Offer price total
// ---------------------------------------------------------------------------------

function totalCost(productDetail){
    const cost = productDetail.cost.split("₹");
    const price = parseInt(cost[1]);

    let cartCost = localStorage.getItem('offerPrice');
    

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('offerPrice', cartCost + price);
    }
    else{
        localStorage.setItem('offerPrice', price);
    }
}




// ---------------------------------------------------------------------------------
//           MRP total
// ---------------------------------------------------------------------------------


function mrpCost(productDetail){
    const cost = productDetail.mrp.split("₹");
    const price = parseInt(cost[1]);

    let cartCost = localStorage.getItem('MrpPrice');
    

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('MrpPrice', cartCost + price);
    }
    else{
        localStorage.setItem('MrpPrice', price);
    }
}


// ---------------------------------------------------------------------------------
//           discount price
// ---------------------------------------------------------------------------------

function discountPrice(){
let totalPrice = localStorage.getItem('offerPrice')
let mrpprice = localStorage.getItem('MrpPrice')

totalPrice = parseInt(totalPrice)
mrpprice = parseInt(mrpprice)

discountPriceCal = (mrpprice - totalPrice);

let discountPrice = localStorage.getItem('discountprice')

if(discountPrice != null){
    localStorage.setItem('discountprice', discountPriceCal );
}
else{
    localStorage.setItem('discountprice', discountPriceCal)
}


}














