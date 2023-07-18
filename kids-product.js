// -------------------------------------------------------------------------
                         // redirecting code to single product page
// --------------------------------------------------------------------------


let product = document.querySelectorAll('.product-cont');


for (let i = 0; i < product.length; i++) {
  product[i].addEventListener('click', () => {
    window.location.href = "kids-product.html?productIndex=" + i;
  });
}


// -------------------------------------------------------------------------------------------------------
          //single product page receiving the selected product number and show the product
// -------------------------------------------------------------------------------------------------------



const urlParams = new URLSearchParams(window.location.search);
const productIndex = parseInt(urlParams.get('productIndex'));

// Select and display the single product element
let singleProduct = document.querySelectorAll('.single-product');
singleProduct[productIndex].style.display = "block";


// -------------------------------------------------------------------------------
                         // product image to zoom in
// ----------------------------------------------------------------------------

// Get the modal
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}





// -------------------------------------------------------------------------
                 // wishlist button operation
// --------------------------------------------------------------------------

let wishlistBtn = document.querySelectorAll(".wishlist");
let icon = document.querySelectorAll(".wishlist-fill")
let count = document.querySelector(".count");

changecolorOn = ()=>{
    icon[productIndex].name="heart";
    icon[productIndex].classList.add('fill-color');
    
}

changecolorOff = ()=>{
    icon[productIndex].name="heart-outline";
    icon[productIndex].classList.remove('fill-color');
    
}


wishlistBtn[productIndex].addEventListener('click', ()=>{
  if(icon[productIndex].classList.contains('fill-color')){
    wishlistRemove();
    changecolorOff();
  }
  else{
    wishlistAdd();
    changecolorOn();
  }
})

let wishlistAdd = ()=>{
  let itemsNumber = parseInt(localStorage.getItem("wishlist"));
  
  if(itemsNumber){
  localStorage.setItem('wishlist',itemsNumber = 1);
  count.innerHTML = itemsNumber
  }else{
      localStorage.setItem('wishlist', 1);
      count.innerHTML = 1
  }
    
}

let wishlistRemove = ()=>{
  localStorage.removeItem('wishlist')
  count.innerHTML=0
}
