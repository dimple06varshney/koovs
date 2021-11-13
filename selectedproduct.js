var allProducts =  JSON.parse(localStorage.getItem("productData"));
var selectedItemArray = JSON.parse(localStorage.getItem("selectedItem"));
var itemNo = selectedItemArray[0].productNo;
var selectedItem = allProducts[itemNo];
console.log(selectedItem);
    
var count =0;
var size = "";
document.querySelector(".size1").addEventListener("click",function(){
    size = this.textContent;
    console.log(size);
 this.style.backgroundColor="midnightblue";
 this.style.color = "white";
 document.querySelector(".size2").style.backgroundColor="white";
 document.querySelector(".size2").style.color="black";
 document.querySelector(".size3").style.backgroundColor="white";
 document.querySelector(".size3").style.color="black";
 count++;
});

document.querySelector(".size2").addEventListener("click",function(){
    size = this.textContent;
    console.log(size);
    this.style.backgroundColor="midnightblue";
    this.style.color = "white";
    document.querySelector(".size1").style.backgroundColor="white";
    document.querySelector(".size1").style.color="black";
    document.querySelector(".size3").style.backgroundColor="white";
    document.querySelector(".size3").style.color="black";
    count++;
   });
   
   document.querySelector(".size3").addEventListener("click",function(){
    size = this.textContent;
    console.log(size);
    this.style.backgroundColor="midnightblue";
    this.style.color = "white";
    document.querySelector(".size2").style.backgroundColor="white";
    document.querySelector(".size2").style.color="black";
    document.querySelector(".size1").style.backgroundColor="white";
    document.querySelector(".size1").style.color="black";
    count++;
   });

var box1Brand = document.getElementById("addBrand");
var box1Product = document.getElementById("addName");
var box1CurrentPrice = document.getElementById("addCurrentPrice");
var box1PreviousPrice = document.getElementById("addPreviousPrice");
var box1Discount = document.getElementById("addDiscount");
var box1img = document.getElementById("additionalBox1Image1");
var box2img = document.getElementById("additionalBox1Image2");
var box3img = document.getElementById("additionalBox1Image3");
var box4img = document.getElementById("additionalBox1Image4");
var bigImg = document.getElementById("bigImage");

box1Brand.textContent = selectedItem.brand;
box1Product.textContent = selectedItem.name;
box1CurrentPrice.textContent ="₹"+ selectedItem.currentPrice;
box1PreviousPrice.textContent ="₹" + selectedItem.previousPrice;
box1Discount.textContent = selectedItem.discount+"% OFF";
box1img.src = selectedItem.url1;
box2img.src = selectedItem.url2;
box3img.src = selectedItem.url3;
box4img.src = selectedItem.url4;
bigImg.src = selectedItem.url1;


box1img.addEventListener("mouseover",function(){
  

    bigImg.src = selectedItem.url1;
    box1img.setAttribute("class","addBoxShadow");
    box2img.removeAttribute("class","addBoxShadow");
    box3img.removeAttribute("class","addBoxShadow");
    box4img.removeAttribute("class","addBoxShadow");
    
});
box2img.addEventListener("mouseover",function(){
  
    bigImg.src = selectedItem.url2;
    box1img.removeAttribute("class","addBoxShadow");
    box2img.setAttribute("class","addBoxShadow");
    box3img.removeAttribute("class","addBoxShadow");
    box4img.removeAttribute("class","addBoxShadow");
});
box3img.addEventListener("mouseover",function(){

    bigImg.src = selectedItem.url3;
    box1img.removeAttribute("class","addBoxShadow");
    box2img.removeAttribute("class","addBoxShadow");
    box3img.setAttribute("class","addBoxShadow");
    box4img.removeAttribute("class","addBoxShadow");
});
box4img.addEventListener("mouseover",function(){
    bigImg.src = selectedItem.url4;
    box1img.removeAttribute("class","addBoxShadow");
    box2img.removeAttribute("class","addBoxShadow");
    box3img.removeAttribute("class","addBoxShadow");
    box4img.setAttribute("class","addBoxShadow");
});


document.querySelector("#inputDiv").addEventListener("submit",function(e){
    e.preventDefault();
   var message = document.getElementById("availableMessage");
   message.textContent = "Expected delivery in between 7days. Actual delivery date may vary.";
   message.style.color = "green";
});

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



document.getElementById("addToBag").addEventListener("click",function(){

        if(count > 0){
    var element = selectedItem;
    console.log(selectedItem);
    console.log(element);
    var cartProducts = JSON.parse(localStorage.getItem("cartItem")) || [];
    
        var product = {
          type: element.type ,
          size:size,
          brand:element.brand,
          name: element.name,
          currentPrice: element.currentPrice,
          previousPrice: element.previousPrice,
          discount: element.discount,
          added: new Date(),
          url1: element.url1 ,
          url2: element.url2 ,
          url3: element.url3 ,
          url4: element.url4 ,
          
        }
        cartProducts.push(product);
    
    
    localStorage.setItem("cartItem",JSON.stringify(cartProducts));

    document.getElementById("addToBag").style.display="none";
    document.getElementById("goToBag").style.display="inline-block";
    var cartProduct = JSON.parse(localStorage.getItem("cartItem")) || [];
    cartLength = cartProduct.length;
    var wishlistItem = JSON.parse(localStorage.getItem("wishListItem")) || [];
    wishlistLength = wishlistItem.length;

    if(cartLength == 0){
        document.getElementById("cartLength").style.display ="none";
    }else{
        document.getElementById("cartLength").textContent = cartLength;
        document.getElementById("cartLength").style.display ="inline-block";
    }

}
})

document.getElementById("goToBag").addEventListener("click",function(){
    window.location.href="cart.html";
})

document.getElementById("addToWishlist").addEventListener("click",function(){

this.textContent = "🤍";
this.style.fontSize = "30px";
this.style.paddingTop = "10px";
setInterval(function(){
    document.getElementById("addToWishlist").textContent="♡";
},2000)
var element = selectedItem;
var wishlistProducts = JSON.parse(localStorage.getItem("wishListItem")) || [];
console.log(element);
console.log(wishlistProducts);
    var product = {
      type: element.type,
      brand:element.brand,
      name: element.name,
      currentPrice: element.currentPrice,
      previousPrice: element.previousPrice,
      discount: element.discount,
      added: new Date(),
      url1: element.url1 ,
      url2: element.url2 ,
      url3: element.url3 ,
      url4: element.url4 ,
      
    }
    wishlistProducts.push(product);


localStorage.setItem("wishListItem",JSON.stringify(wishlistProducts));
    
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

});


document.querySelector(".DwishList").addEventListener("click",function(){
    // window.location.href="cart.html";
    alert("hello");
})
document.querySelector(".Dbag").addEventListener("click",function(){
    window.location.href="cart.html";
});

document.getElementById("buyNow").addEventListener("click",function(){
    var element = selectedItem;

    //add to buy now
    var buyNowProducts = JSON.parse(localStorage.getItem("buyNowProduct")) || [];
    
        var product = {
          type: element.type ,
          size:size,
          brand:element.brand,
          name: element.name,
          currentPrice: element.currentPrice,
          previousPrice: element.previousPrice,
          discount: element.discount,
          added: new Date(),
          url1: element.url1 ,
          url2: element.url2 ,
          url3: element.url3 ,
          url4: element.url4 ,
          
        }
        buyNowProducts.push(product);
    
    
    localStorage.setItem("buyNowProduct",JSON.stringify(buyNowProducts));

//add to cart
    var cartProducts = JSON.parse(localStorage.getItem("cartItem")) || [];
    
    var product = {
      type: element.type ,
      size:size,
      brand:element.brand,
      name: element.name,
      currentPrice: element.currentPrice,
      previousPrice: element.previousPrice,
      discount: element.discount,
      added: new Date(),
      url1: element.url1 ,
      url2: element.url2 ,
      url3: element.url3 ,
      url4: element.url4 ,
      
    }
    cartProducts.push(product);


localStorage.setItem("cartItem",JSON.stringify(cartProducts));



window.location.href="buynow.html";
})