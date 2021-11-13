
var address = JSON.parse(localStorage.getItem("addressDetail")) || [];

  document.getElementById("Name").textContent = address[0].name;
  document.getElementById("Address").textContent =address[0].address;
  document.getElementById("City").textContent = address[0].city;
  document.getElementById("State").textContent = address[0].state;
  document.getElementById("Pincode").textContent = address[0].pincode;
  document.getElementById("Phone").textContent= address[0].phone;
  document.getElementById("Email").textContent = address[0].email;


  document.getElementById("confirmBtn").addEventListener("click",function(){
      window.location.href="orderSuccessful.html";
  })

  var totalAmount = JSON.parse(localStorage.getItem("amount")) || [];

document.getElementById("amount").textContent = totalAmount[0].total;