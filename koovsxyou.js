var images=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg",
           "img10.jpg","img11.jpg","img12.jpg","img13.jpg","img14.jpg","img15.jpg","img16.jpg","img17.jpg","img18.jpg",
           "img19.jpg","img20.jpg","img21.jpg","img22.jpg","img23.jpg","img24.jpg","img25.jpg","img26.jpg","img27.jpg",
           "img28.jpg","img29.jpg","img30.jpg","img31.jpg","img32.jpg","img33.jpg","img34.jpg","img35.jpg","img36.jpg"
           ,"img37.jpg","img38.jpg","img39.jpg","img40.jpg","img41.jpg","img42.jpg","img43.jpg","img44.jpg","img45.jpg",
           "img46.jpg","img47.jpg","img48.jpg","img49.jpg", "img50.jpg","img51.jpg","img52.jpg","img53.jpg","img54.jpg",
           "img55.jpg","img56.jpg","img57.jpg","img58.jpg","img59.jpg","img60.jpg","img61.jpg","img62.jpg","img63.jpg",
           "img64.jpg","img65.jpg","img66.jpg","img67.jpg","img68.jpg","img69.jpg","img70.jpg","img71.jpg","img72.jpg",
        ];

 var productArr = [
    product1={
        link1:"products.html",
        brand1:"SHELTR",
        product1:"Front Print Round Neck",
        currentPrice1:"210",
        previousPrice1:"699",
        image1:"https://product.koovs.com/158150_4c89632f7dfc4bc587b594ce9bcd524c_image1_super_zoom.jpg",
        link2:"https://www.koovs.com/koovs-mens-mens-shorts-146114-163264.html",
        brand2:"K DENIM",
        product2:"KOOVS mid-wash",
        currentPrice2:"719",
        previousPrice2:"1199",
        image2:"https://product.koovs.com/163264_28b8605fc0644a34bb27834fc184c1ce_image1_super_zoom.jpg",
        link3:"null" 
    },
    product2={
        link1:"https://www.koovs.com/blue-saint-mens-tshirts-138323-155313.html",
        brand1:"BLUE SAINT",
        product1:"long sleeve slim polo",
        currentPrice1:"350",
        previousPrice1:"699",
        image1:"https://product.koovs.com/155313_7f1d377ddd56495b85fb784d1abef6a8_image1_super_zoom.jpg",
        link2:"null",
        link3:"null"   
    },
    product3={
        link1:"https://www.koovs.com/yellow-and-plum-wind-breaker-jacket-151799-169021.html",
        brand1:"FUGAZEE",
        product1:"color block patch jacket",
        currentPrice1:"900",
        previousPrice1:"1999",
        image1:"https://product.koovs.com/169021_41135af899d04d0ea4ddf7e44b2815fb_image1_super_zoom.jpg",
        link2:"https://www.koovs.com/yellow--plum-lightweight-sweatpants-151843-169065.html",
        brand2:"FUGAZEE",
        product2:"multi check slogan",
        currentPrice2:"1599",
        previousPrice2:"1999",
        image2:"https://product.koovs.com/169065_ace55ee17f1c4f51ab4c0c64e08ae0bb_image1_super_zoom.jpg",
        link3:"null" 
    },
    product4={
        link1:"https://www.koovs.com/koovs-men-casual-shirts-152396-169627.html",
        brand1:"KOOVS",
        product1:"polka dot casual shirt",
        currentPrice1:"899",
        previousPrice1:"1499",
        image1:"https://product.koovs.com/169627_4a761c015faf431eab3b080cfbb2516e_image1_super_zoom.jpg",
        link2:"https://www.koovs.com/onezero-by-koovs-men-men-shorts-150412-167630.html",
        brand2:"ONE/ZERO BY KOOVS",
        product2:"Athleisure Sports Shorts",
        currentPrice2:"539",
        previousPrice2:"899",
        image2:"https://product.koovs.com/207x230/167630_e01d068be3b146ea9ff5a2b3c0703749_image1_super_zoom.jpg",
        link3:"https://www.koovs.com/blue-saint-men-casual-shoes-153050-170284.html",
        brand3:"Blue Saint",
        product3:"Contrast Striped Casual Shoes",
        currentPrice3:"750",
        previousPrice3:"2499",
        image3:"https://product.koovs.com/170284_c1afa5a129504c9bbcf7428802eb269b_image1_super_zoom.webp" 

    },
    product5={
        link1:"https://www.koovs.com/high-neck-bodysuit-248-119972-134442.html",
        brand1:"KOOVS",
        product1:"basic high neck",
        currentPrice1:"699",
        previousPrice1:"",
        image1:"https://product.koovs.com/119972_82b64123fd9a0921cc3b23351c68c5e3.jpg",
        link2:"https://www.koovs.com/button-detail-skirt-129372-144964.html",
        brand2:"EMMACLOTH",
        product2:"Scalloped Hem Button-Front Skirt",
        currentPrice2:"1199",
        previousPrice2:"1999",
        image2:"https://product.koovs.com/129372_48a7216625871decf7bbf5a998b921db.webp",
        link3:"https://www.koovs.com/koovs-lace-up-chunky-sole-trainer-119236-133783.html",
        brand3:"KOOVS",
        product3:"Holographic Panel Chunky Sole Trainers",
        currentPrice3:"1249",
        previousPrice3:"2499",
        image3:"https://product.koovs.com/119236_489638b39b5ad22c22c07eff20217eab.webp" 
    },
    product6={
        link1:"https://www.koovs.com/blue-saint-over-dyed-denim-jacket-196-126585-141796.html",
        brand1:"BLUE SAINT",
        product1:"overdyed denim jacket",
        currentPrice1:"849",
        previousPrice1:"1699",
        image1:"https://product.koovs.com/126585_b414f18730a303649b1cfce8657c21f7.webp",
        link2:"https://www.koovs.com/shivan--narresh-x-koovs-satin-all-over-print-utility-jacket-130670-146467.html",
        brand2:"Shivan & Narresh X",
        product2:"koovs",
        currentPrice2:"3999",
        previousPrice2:"6999",
        image2:"https://product.koovs.com/130670_4179d399da05bba9413113fb4b00a77b.jpg",
        link3:"https://www.koovs.com/men-classic-culture-273-127614-142970.html",
        brand3:"361 degree",
        product3:"Classic Culture Suede Knitted Trainers",
        currentPrice3:"2999",
        previousPrice3:"5999",
        image3:"https://product.koovs.com/127614_dbaee035f10f441b26671249529e3a22.webp"

    },
    product7={
        link1:"https://www.koovs.com/shivan--narresh-x-koovs-satin-all-over-print-utility-jacket-130670-146467.html",
        brand1:"Shivan & Narresh X KOOVS",
        product1:"koovs",
        currentPrice1:"3999",
        previousPrice1:"",
        image1:"https://product.koovs.com/130670_4179d399da05bba9413113fb4b00a77b.jpg",
        link2:"https://www.koovs.com/koovs-stripe-sneakers-120676-135212.html",
        brand2:"KOOVS",
        product2:"knitted trainers",
        currentPrice2:"1699",
        previousPrice2:"2999",
        image2:"https://product.koovs.com/120676_ba259281ea761ec8b3c807957972366b.jpg",
        link3:"https://www.koovs.com/koovs-slim-fit-jogpants-126039-141199.htmlnull",
        brand3:"KOOVS",
        product3:"Basic Slim Fit Joggers",
        currentPrice3:"999",
        previousPrice3:"1999",
        image3:"https://product.koovs.com/126039_c652ff49877e60c454def810f437184c.webp"   
    },
    product8={
        link1:"https://www.koovs.com/koovs-shivan-and-narresh-x-koovs-summer-night-bodycon-dress-131108-146943.html",
        brand1:"Shivan & Narresh X KOOVS",
        product1:"",
        currentPrice1:"1049",
        previousPrice1:"2999",
        image1:"https://product.koovs.com/131108_88814823b6cdad55c6a29fe8c8461eac.webp",
        link2:"https://www.koovs.com/style-fiesta-marble-deisgn-top-with-tassel-earrings-123574-138393.html",
        brand2:"STYLE FIESTA",
        product2:"marble design tassle",
        currentPrice2:"249",
        previousPrice2:"499",
        image2:"https://product.koovs.com/123574_da0a46c587ba58cb35bbc5701b0b578d.jpg",
        link3:"null"      
    },
    product9={
        link1:"https://www.koovs.com/oversize-half-sleeve-cuban-collar-126720-141931.html",
        brand1:"SPRING BREAK",
        product1:"vertical stripe cuban",
        currentPrice1:"999",
        previousPrice1:"",
        image1:"https://product.koovs.com/207x230/126720_9387c2da71cbcce0b38d01c8d34372ac.jpg",
        link2:"https://www.koovs.com/k-denim-knee-rip-skinny-jeans-267-126898-142133.html",
        brand2:"K-DENIM",
        product2:"Skinny Jeans",
        currentPrice2:"749",
        previousPrice2:"1499",
        image2:"https://product.koovs.com/207x230/126898_2cb6b93186d2c0fe741a325c7e09b187.jpg",
        link3:"null"      
    },
    product10={
        link1:"https://www.koovs.com/koovs-one-shoulder-maxi-dress-3-128553-144003.html",
        brand1:"KOOVS",
        product1:" Tropical Palm Print Asymmetric Dress",
        currentPrice1:"749",
        previousPrice1:"1499",
        image1:"https://product.koovs.com/128553_fa4fdbec858cb496e4c96c242655bf52.jpg",
        link2:"https://www.koovs.com/intoto-ankle-strap-metallic-hardware-detail-heels-118380-132554.html",
        brand2:"Intoto",
        product2:"Crystal Embellished Strap Heeled Sandals",
        currentPrice2:"729",
        previousPrice2:"2099",
        image2:"https://product.koovs.com/118380_296df1877a390fb2b10c6fc3c6ef362a.jpg",
        link3:"https://www.koovs.com/stye-fiesta-twisted-hoops-129692-145300.html",
        brand3:"Style fiesta",
        product3:"Twisted Hoops",
        currentPrice3:"499",
        previousPrice3:"999",
        image3:"https://product.koovs.com/129692_9c5055b745902d79bc08ae6b943f2945.jpg"     
    },
    product11={
        link1:"https://www.koovs.com/style-fiesta-retro-solid-red-sunglasses-120514-135021.html",
        brand1:"style fiesta",
        product1:"Coloured Lens Oversized Retro Sunglasses",
        currentPrice1:"1499",
        previousPrice1:"2999",
        image1:"https://product.koovs.com/120514_f5e0e3e8808026d68eea373bffa5c7aa.webp",
        link2:"https://www.koovs.com/eulalie-124280-139194.html",
        brand2:"Blue Saint",
        product2:"Striped Frayed Hem Shorts",
        currentPrice2:"1499",
        previousPrice2:"1500",
        image2:"https://product.koovs.com/124280_de577cff0989e851c1b7cc8d368b9358.webp",
        link3:"https://www.koovs.com/koovs-crew-neck-summer-vacay-vest-125669-140767.html",
        brand3:"KOOVS",
        product3:"Summer Vacay Placement Print Vest",
        currentPrice3:"349",
        previousPrice3:"699",
        image3:"https://product.koovs.com/125669_9a381e80ca7d9ba75152234a3b015df5.webp"     
    },
    product12={
        link1:"https://www.koovs.com/shivan--narresh-x-koovs-mangnolia-print-utility-track-jogger-130671-146468.html",
        brand1:"Shivan & Narresh X KOOVS ",
        product1:"Magnolia Flower Print Utility Joggers",
        currentPrice1:"1999",
        previousPrice1:"2000",
        image1:"https://product.koovs.com/130671_1c3319a77d0b31b04c0e99cc64e89c32.webp",
        link2:"https://www.koovs.com/men-classic-culture-273-127614-142970.html",
        brand2:"361 degree",
        product2:"Classic Culture Suede Knitted Trainers",
        currentPrice2:"2999",
        previousPrice2:"5999",
        image2:"https://product.koovs.com/127614_dbaee035f10f441b26671249529e3a22.webp",
        link3:"https://www.koovs.com/giordano-men-hs-hs-oxford-shirt-129652-145259.html",
        brand3:"Giordano",
        product3:"Basic Oxford Short Sleeve Shirt",
        currentPrice3:"1999",
        previousPrice3:"2000",
        image3:"https://product.koovs.com/129652_2e936d93a6c2e3c55a35763fb6848b0f.jpg"     
    }
];       

        var storedImage = JSON.parse(localStorage.getItem("shoppingBag")) || [];
        
        
        var imageContainer1 = document.createElement("div");
        imageContainer1.setAttribute("class","imgContainer1");
        var imageContainer2 = document.createElement("div");
        imageContainer2.setAttribute("class","imgContainer1");
        var imageContainer3 = document.createElement("div");
        imageContainer3.setAttribute("class","imgContainer1");
        var imageContainer4 = document.createElement("div");
        imageContainer4.setAttribute("class","imgContainer1");
        
        var count =0;
        
        if(images.length > storedImage.length){
            images.forEach((item,index) =>{
                var productData = {
                    img:item,
                    indexNo:index+1
                }
                storedImage.push(productData);
              localStorage.setItem("shoppingBag",JSON.stringify(storedImage));
            })
        }
        
        var pageNo = 1;
         document.querySelector("#load").addEventListener("click",loadPage);
        
         function loadPage(){ 
             pageNo++;
             loadingAnimation();
             displayItem(storedImage);
         }

         displayItem(storedImage);      
         function displayItem(storedImage){
        
        storedImage.forEach((item,index) => {
            count++;
            var div = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("src",`koovsxyou-images/${item.img}`);


            var idNumber= (index) % 18;
            div.setAttribute("id",`imgBox${idNumber+1}`);
            div.setAttribute("class","imgBox");
              var shopNow = document.createElement("div");
              shopNow.setAttribute("id","shopNow");
              shopNow.textContent="SHOP NOW >";
              if(idNumber == 1 || idNumber == 0 || idNumber == 6 || idNumber == 7 || idNumber == 14 || idNumber == 15 ){
                 shopNow.style.margin = "12% 0 0 9%";
              }
            div.append(shopNow,img,);
        
        if(count <= 18){
            imageContainer1.append(div);
        }
        else if(count <= 36){
            imageContainer2.append(div);
        }else if(count <= 54){
            imageContainer3.append(div);
        }else if(count <= 72){
            imageContainer4.append(div);
        }
           
        });
        
        
        if(pageNo == 1){
            document.body.querySelector("#koovsxContainer").append(imageContainer1);
            var koovsxContainer = document.getElementById("koovsxContainer");
            showAdditionalPage(koovsxContainer);
         }
         if(pageNo == 2){
            document.body.querySelector("#koovsxContainer").append(imageContainer2);  
            var koovsxContainer = document.getElementById("koovsxContainer");
            showAdditionalPage(koovsxContainer);
         }
        if(pageNo == 3){
            document.body.querySelector("#koovsxContainer").append(imageContainer3);  
            var koovsxContainer = document.getElementById("koovsxContainer");
            showAdditionalPage(koovsxContainer);
        }
        if(pageNo == 4){
            document.querySelector("#load").removeAttribute("id","load");
            document.querySelector(".loadMore").setAttribute("id","removeButton");
            document.body.querySelector("#koovsxContainer").append(imageContainer4);
            var koovsxContainer = document.getElementById("koovsxContainer");
            showAdditionalPage(koovsxContainer);
        
        }
        }
        
        var preLoader = document.getElementById("loading");
        function loadingAnimation(){
        preLoader.style.display = "none";
        }
        
        
       function showAdditionalPage(koovsxContainer){
        var images = koovsxContainer.querySelectorAll("img");
       
        images.forEach((item,index) =>{ 
            item.addEventListener("click",function(){
                    showSelectPage(item,index);
                    selectColor(item,index);
                })   

         item.addEventListener("mouseover",function(){
            item.style.opacity="0.2";
        var shopNowButton = item.previousSibling;
        shopNowButton.style.display="inline";

      })

          item.addEventListener("mouseout",function(){
          item.style.opacity="1";
          var shopNowButton = item.previousSibling;
        shopNowButton.style.display="none";
        })

        });
                
    }   
     
        function showSelectPage(item,index){
            var koovsxContainer =  document.getElementById("koovsxContainer");
            koovsxContainer.style.pointerEvents="none";
            var additionalPage = document.getElementById("koovsAdditionalPage");
            additionalPage.style.display="grid";
            document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
            var box1Link = document.getElementById("box1Link");
            var box1Brand = document.getElementById("additionalPageBrand1");
            var box1Product = document.getElementById("additionalPageProduct1");
            var box1CurrentPrice = document.getElementById("currentPrice1");
            var box1PreviousPrice = document.getElementById("previousPrice1");
            var box1img = document.getElementById("additionalBox1Image1");
            var colorOption = document.getElementById("firstOption");
            var box2Link = document.getElementById("box2Link");
            var box2Brand = document.getElementById("additionalPageBrand2");
            var box2Product = document.getElementById("additionalPageProduct2");
            var box2CurrentPrice = document.getElementById("currentPrice2");
            var box2previousPrice = document.getElementById("previousPrice2");
            var box2img = document.getElementById("additionalBox2Image");
            var box3Link = document.getElementById("box3Link");
            var box3Brand = document.getElementById("additionalPageBrand3");
            var box3Product = document.getElementById("additionalPageProduct3");
            var box3CurrentPrice = document.getElementById("currentPrice3");
            var box3previousPrice = document.getElementById("previousPrice3");
            var box3img = document.getElementById("additionalBox3Image");

            var reminder = index % 12;
            var productBox = productArr[reminder];
           
            box1Link.href = productBox.link1;
            box1Brand.textContent = productBox.brand1;
            box1Product.textContent = productBox.product1;
            box1CurrentPrice.textContent = `RS. ${productBox.currentPrice1}`;
            box1PreviousPrice.textContent = `RS. ${productBox.previousPrice1}`;
            box1img.src = productBox.image1;
            if(productBox.link2 == "null"){
                document.getElementById("addBox2").style.display="none";
            }else{
                document.getElementById("addBox2").style.display="inline-block";
            }
                box2Link.href = productBox.link2;
                box2Brand.textContent = productBox.brand2;
                box2Product.textContent = productBox.product2;
                box2CurrentPrice.textContent = `RS. ${productBox.currentPrice2}`;
                box2previousPrice.textContent = `RS. ${productBox.previousPrice2}`;
                box2img.src = productBox.image2;
            if(productBox.link3 == "null"){
                document.getElementById("addBox3").style.display="none";
            }else{
                document.getElementById("addBox3").style.display="inline-block";
            }
                box3Link.href = productBox.link3;
                box3Brand.textContent = productBox.brand3;
                box3Product.textContent = productBox.product3;
                box3CurrentPrice.textContent = `RS. ${productBox.currentPrice3}`;
                box3previousPrice.textContent = `RS. ${productBox.previousPrice3}`;
                box3img.src = productBox.image3;    
               
            
        document.getElementById("additionslPageAddtoCart").addEventListener("mouseover",changeHeaderBox1);
        document.getElementById("additionalPageAddtoWishlist").addEventListener("mouseover",changeHeaderBox1);

        document.getElementById("additionslPageAddtoCart2").addEventListener("mouseover",changeHeaderBox2);
        document.getElementById("additionalPageAddtoWishlist2").addEventListener("mouseover",changeHeaderBox2);

        function changeHeaderBox1(){
            box1Link.href = "";
            box1Brand.textContent = "select size & color";
            document.getElementById("additionalPageBrand1").style.marginTop="47px";
            box1Product.textContent = "";
        }
        function changeHeaderBox2(){
            box2Link.href = "";
            box2Brand.textContent = "select size & color";
            document.getElementById("additionalPageBrand2").style.marginTop="47px";
            box2Product.textContent = "";
        }

        document.getElementById("additionslPageAddtoCart").addEventListener("mouseout",originalHeaderBox1);
        document.getElementById("additionalPageAddtoWishlist").addEventListener("mouseout",originalHeaderBox1);

        document.getElementById("additionslPageAddtoCart2").addEventListener("mouseout",originalHeaderBox2);
        document.getElementById("additionalPageAddtoWishlist2").addEventListener("mouseout",originalHeaderBox2);

        function originalHeaderBox1(){
            box1Link.href = productBox.link1;
            box1Brand.textContent = productBox.brand1;
            document.getElementById("additionalPageBrand1").style.marginTop="16px";
            box1Product.textContent = productBox.product1;
        }
        function originalHeaderBox2(){
            box2Link.href = productBox.link2;
            box2Brand.textContent = productBox.brand2;
            box2Product.textContent = productBox.product2;
            document.getElementById("additionalPageBrand2").style.marginTop="16px";
        }


        }

   document.getElementById("closeAdditionalPage").addEventListener("click",closeAdditionalPage);

    function closeAdditionalPage(){
        koovsxContainer.style.pointerEvents="auto";
        var additionalPage = document.getElementById("koovsAdditionalPage");
            additionalPage.style.display="none";
            document.body.style.backgroundColor = "#fff";
    }  
        
document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
})



function selectColor(item,index){
    var availableColor = document.getElementById("availableColor");
    if(index % 9 == 0){
        
        availableColor.style.display="inline";
        console.log(index);
    } 
    else{
        availableColor.style.display="none"; 
    } 
}

document.querySelector("form").addEventListener("submit",showMessage);



function showMessage(){
    var additionalBox = document.getElementById("addBox1");

    additionalBox.style.display="none";
var showSuccessMessage = setInterval(function(){ 
    additionalBox.style.display="inline-block";
}, 3000);

setInterval(function(){
    clearInterval(showSuccessMessage);
},3000);

}


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