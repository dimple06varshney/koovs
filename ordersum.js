var cartItem = JSON.parse(localStorage.getItem("cartItem"));
localStorage.removeItem("itemquantity");
var container = document.getElementById("container");
document.getElementById("num").textContent = cartItem.length + " item";

cartItem.forEach((item,index) =>{
var productContainer = document.createElement("div");
productContainer.setAttribute("id","productContainer");

var imgDiv = document.createElement("div");
imgDiv.setAttribute("id","imgDiv");
var img = document.createElement("img"); // img src
img.setAttribute("id","im");
img.setAttribute("src",item.url1)
imgDiv.append(img);

var singleContainer = document.createElement("div");
singleContainer.setAttribute("id","singleContainer");

var productName = document.createElement("div");//brand
productName.setAttribute("id","productName");
productName.textContent = item.brand; 
var span = document.createElement("span"); //product name
span.setAttribute("id","subname");
span.textContent= item.name;
productName.append(span);

var sizeQty = document.createElement("div");
sizeQty.setAttribute("id","sizeqty");
var sz = document.createElement("div");
sz.setAttribute("id","sz");
sz.textContent = "Size:";

var sizeBox = document.createElement("div");
sizeBox.setAttribute("id","sizeBox");
var size = document.createElement("select");
size.setAttribute("id","size");
var s = document.createElement("option");
s.setAttribute("value","small");
s.textContent="S";
var m = document.createElement("option");
m.setAttribute("value","medium");
m.textContent="M";
var l = document.createElement("option");
l.setAttribute("value","large");
l.textContent="L";
var xl = document.createElement("option");
xl.setAttribute("value","xlarge");
xl.textContent="XL";
size.append(s,m,l,xl);
sizeBox.append(size);

var qty = document.createElement("div");
qty.setAttribute("id","qty");
qty.textContent = "Qty:";

//product count increase decrease
var productCount = 1;
var counter = document.createElement("div");
counter.setAttribute("id","counter");

var count = document.createElement("div");
count.setAttribute("id","count");
count.textContent = productCount;

var itemQuantity= JSON.parse(localStorage.getItem("itemquantity")) || [];
var product = {
  itemNo:index,
  quantity:1
}
itemQuantity.push(product);
localStorage.setItem("itemquantity",JSON.stringify(itemQuantity));
var dec = document.createElement("div");
dec.setAttribute("id","dec");
dec.addEventListener("click",function(){
  quantity =this.parentNode.children.item(1).textContent 
  if(quantity != 0){
    productCount--;
  }
 console.log(quantity);
  count.textContent = productCount;

  var itemQuantity= JSON.parse(localStorage.getItem("itemquantity")) || [];
  var available = false;
  availableIndex = 0;
itemQuantity.forEach((element,indexNo)=>{
  if(element.itemNo == index){
    available= true;
    availableIndex = indexNo;
  }
})
if(!available){
  var product = {
    itemNo:index,
    quantity:quantity
  }
  itemQuantity.push(product);
}else{
  itemQuantity[availableIndex].quantity = productCount;
}
itemQuantity = itemQuantity.sort((a,b) => a.itemNo - b.itemNo);
localStorage.setItem("itemquantity",JSON.stringify(itemQuantity));

 calculateBill(quantity,index);
})
var i = document.createElement("i");
i.textContent = "-";
i.style.fontWeight = "bold";
i.style.fontSize = "22px";
dec.append(i);

count.style.paddingTop = "5px";




var inc = document.createElement("div");
inc.setAttribute("id","inc");
inc.addEventListener("click",function(){
  productCount++;
  count.textContent = productCount;
  quantity = this.parentNode.children.item(1).textContent;
 
    
  var itemQuantity= JSON.parse(localStorage.getItem("itemquantity")) || [];
  var available = false;
  availableIndex = 0;
itemQuantity.forEach((element,indexNo)=>{
  if(element.itemNo == index){
    available= true;
    availableIndex = indexNo;
  }
})
if(!available){
  var product = {
    itemNo:index,
    quantity:quantity
  }
  itemQuantity.push(product);
}else{
  itemQuantity[availableIndex].quantity = productCount;
}
itemQuantity = itemQuantity.sort((a,b) => a.itemNo - b.itemNo);
localStorage.setItem("itemquantity",JSON.stringify(itemQuantity));

   calculateBill(quantity,index);
})
var i2 = document.createElement("i");
i2.textContent = "+";
i2.style.fontWeight = "bold";
i2.style.fontSize = "22px";
inc.append(i2);

counter.append(dec,count,inc);


sizeQty.append(sz,sizeBox,qty,counter);

var rate = document.createElement("div");
rate.setAttribute("id","rate");

var currentPrice = document.createElement("div");
currentPrice.setAttribute("id","currentPrice");
currentPrice.textContent = "₹ "+ item.currentPrice;

var previousPrice = document.createElement("div");
previousPrice.setAttribute("id","previousPrice");
previousPrice.textContent = "₹ "+ item.previousPrice;

var discount = document.createElement("div");
discount.setAttribute("id","discount");
discount.textContent = item.discount + "% OFF";

rate.append(currentPrice,previousPrice,discount);

singleContainer.append(productName,sizeQty,rate);

var crossDiv = document.createElement("div");
crossDiv.setAttribute("id","crossDiv");
var cross = document.createElement("i");
cross.setAttribute("id","cross");
cross.setAttribute("class","fas fa-times fa-lg");
crossDiv.append(cross);

var heartDiv = document.createElement("div");
heartDiv.setAttribute("id","heartDiv");
var heart = document.createElement("i");
heart.setAttribute("class","far fa-heart fa-lg");
heart.setAttribute("id","heart");
heartDiv.append(heart);

productContainer.append(imgDiv,singleContainer,crossDiv,heartDiv);

container.append(productContainer);
})


var amount = document.getElementById("amount");

var totalBill = cartItem.reduce((ac,pv) =>{
  return ac + (pv.currentPrice);
},0)
amount.textContent = totalBill;

localStorage.removeItem("amount");
var totalAmount = JSON.parse(localStorage.getItem("amount")) || [];

var product = {
 total:totalBill
}
totalAmount.push(product);

localStorage.setItem("amount",JSON.stringify(totalAmount));



console.log(totalBill);
function calculateBill(index){
  var itemQuantity= JSON.parse(localStorage.getItem("itemquantity")) || [];

  var totalBill = cartItem.reduce((ac,pv,currentIndex) =>{ 
    var quantity = itemQuantity[currentIndex].quantity; 

    console.log(Number(quantity));

      return ac + (pv.currentPrice* (quantity || 1) );
    
   
  },0)
  amount.textContent = totalBill;
  localStorage.removeItem("amount");
var totalAmount = JSON.parse(localStorage.getItem("amount")) || [];

var product = {
 total:totalBill
}
totalAmount.push(product);

localStorage.setItem("amount",JSON.stringify(totalAmount));
}


document.getElementById("promobtn").addEventListener("click",function(){
  var promoCode = document.getElementById("promo").value;
  if(promoCode =="HELLO30"){
    amount.textContent = totalBill*70/100;
  }
})

document.getElementById("lastbtn").addEventListener("click",function(){
  window.location.href="payment1.html";
});


var address = JSON.parse(localStorage.getItem("addressDetail")) || [];

document.getElementById("Name").textContent = address[0].name;
document.getElementById("Pincode").textContent = address[0].pincode;
document.getElementById("Address").textContent = address[0].address;
document.getElementById("Address1").textContent = address[0].city + "," + address[0].state + ", India" ;
document.getElementById("Phone").textContent= address[0].phone;
document.getElementById("Email").textContent = address[0].email;

