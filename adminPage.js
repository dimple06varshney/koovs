document.getElementById("gender").addEventListener("focusout",changeCategory)

function changeCategory()
{
    var gen = form.gender.value
    console.log(gen);
    if(gen=="women")
    {
        document.getElementById("catewomen").style.display="block"
        document.getElementById("catemen").style.display="none"
        console.log("women show");
    }
    else{
        document.getElementById("catemen").style.display="block"
        document.getElementById("catewomen").style.display="none"
        console.log("men show");
    }
}
document.getElementById("form").addEventListener("submit",addItems)
var data = JSON.parse(localStorage.getItem("data")) || []
 var n=0   
function addItems(event)
{
    n++
    event.preventDefault();
    var itm = { type: "ListItem", position: n,  brand:form.brand.value, name:form.desc.value, currentPrice:form.offer.value, 
    previousPrice:form.price.value, discount:form.offer.value,  added:1, 
    url1: form.img_url1.value,               
     url2: form.img_url2.value,
      url3: form.img_url3.value,
     url4: form.img_url4.value}
    
     data.push(itm)
     localStorage.setItem("data",JSON.stringify(data))
    
}