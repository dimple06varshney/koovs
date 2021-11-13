var cartProduct = JSON.parse(localStorage.getItem("cartItem")) || [];
cartLength = cartProduct.length;
var wishlistItem = JSON.parse(localStorage.getItem("wishListItem")) || [];
wishlistLength = wishlistItem.length;
console.log(wishlistLength);
if(wishlistLength == 0){
    document.getElementById("wishlistLength").style.display ="none";
}else{
    document.getElementById("wishlistLength").textContent = wishlistLength;
    document.getElementById("wishlistLength").style.display ="inline-block";
}

if(cartLength == 0){
    document.getElementById("cartLength").style.display ="none";
}else{
    document.getElementById("cartLength").textContent = cartLength;
    document.getElementById("cartLength").style.display ="inline-block";
}