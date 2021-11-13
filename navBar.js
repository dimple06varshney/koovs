document.getElementById("Dsearch").addEventListener("focusin",displaySearch)
document.getElementById("Dsearch").addEventListener("focusout",removeSearch)
function displaySearch()
{
    document.getElementById("Dshow").style.display="block";
    // console.log("here");
}
function removeSearch()
{
    document.getElementById("Dshow").style.display="none"
    // console.log("bye");
}
document.getElementById("DHamBurger").addEventListener("click",showSideNav)
function showSideNav()
{
    document.getElementById("dOverlay").style.display="block"
    document.getElementById("DleftNavBox").style.display="block"
    console.log("block");
}
document.getElementById("dOverlay").addEventListener("click",hideNav)
function hideNav()
{
    document.getElementById("dOverlay").style.display="none"
    document.getElementById("DleftNavBox").style.display="none"
}


//Man Product list 
document.getElementById("Dproducts").addEventListener("click",productList)
 var clickProduct=0
function productList(e)
{
    e.stopPropagation();
    clickProduct++
    if(clickProduct%2===1)
    {
        console.log("Men Product");
        document.getElementById("DproductIcon").style.backgroundPosition="-81px -4px"
        document.getElementById("productSubList").style.display="block"
        document.getElementById("Dproducts").style.backgroundColor="#e8e8e8"
        document.getElementById("Dprod").style.color="#0a2a76"
    }
    else{
        document.getElementById("DproductIcon").style.backgroundPosition="-57px -4px"
        document.getElementById("productSubList").style.display="none"
        document.getElementById("Dproducts").style.backgroundColor="#f4f4f4"
        document.getElementById("Dprod").style.color="black"
    }
   
}
    //men Brand list
document.getElementById("Dbrand").addEventListener("click",brandList)
var clickBarnd=0;
function brandList(e)
{
    e.stopPropagation()
    console.log("Hello");
    clickBarnd++;
    if(clickBarnd%2===1)
    {
        document.getElementById("DBrandIcon").style.backgroundPosition="-81px -4px" 
        document.getElementById("DBrandSubList").style.display="block"
        document.getElementById("Dbrand").style.backgroundColor="#e8e8e8"
        document.getElementById("BRAND").style.color="#0a2a76"
    }
    else{
        document.getElementById("DBrandIcon").style.backgroundPosition="-57px -4px"
        document.getElementById("DBrandSubList").style.display="none"
        document.getElementById("Dbrand").style.backgroundColor="#f4f4f4"
        document.getElementById("BRAND").style.color="black"
    }
}
    //men Shop By Edit
    document.getElementById("Dedit").addEventListener("click",editList)
    var clickedit=0;
    function editList(e)
    {
        e.stopPropagation()
        clickedit++;
        if(clickedit%2===1)
        {
            document.getElementById("DeditIcon").style.backgroundPosition="-81px -4px" 
            document.getElementById("DeditSubList").style.display="block"
            document.getElementById("Dedit").style.backgroundColor="#e8e8e8"
            document.getElementById("SHOP").style.color="#0a2a76"
        }
        else{
            document.getElementById("DeditIcon").style.backgroundPosition="-57px -4px"
            document.getElementById("DeditSubList").style.display="none"
            document.getElementById("Dedit").style.backgroundColor="#f4f4f4"
            document.getElementById("SHOP").style.color="black"
        }
    }
    //Men MuST HAVES
    document.getElementById("Dmust").addEventListener("click",mustList)
    var clickMust=0;
    function mustList(e)
    {
        e.stopPropagation()
        clickMust++;
        if(clickMust%2===1)
        {
            document.getElementById("DmustIcon").style.backgroundPosition="-81px -4px" 
            document.getElementById("DmustSubList").style.display="block"
            document.getElementById("Dmust").style.backgroundColor="#e8e8e8"
            document.getElementById("MUST").style.color="#0a2a76"
        }
        else{
            document.getElementById("DmustIcon").style.backgroundPosition="-57px -4px"
            document.getElementById("DmustSubList").style.display="none"
            document.getElementById("Dmust").style.backgroundColor="#f4f4f4"
            document.getElementById("MUST").style.color="black"
        }
    }
 //Man List
var clicked=0
document.getElementById("menMenuCont").addEventListener("click",changeIconMan)
var collapseIcon= document.getElementById("DcolapseIcon")
var subList =document.getElementById("DsubListExpand")
function changeIconMan(e)
{
   
    clicked++
   if(clicked%2===1)
   {
    collapseIcon.style.backgroundPosition=" -81px -4px"
    subList.style.display="block"
    document.getElementById("menMenuCont").style.backgroundColor="#f4f4f4"
    document.getElementById("DwriteMan").style.color="#0a2a76"
   }
    else{
        collapseIcon.style.backgroundPosition="-57px -4px"
        subList.style.display="none"
        document.getElementById("menMenuCont").style.backgroundColor="white"
        document.getElementById("DwriteMan").style.color="black"
    }
   console.log(clicked);
}
//Women List
document.getElementById("womenMenuCont").addEventListener("click",changeWomenCont)
var clickWomen=0;
function changeWomenCont()
{
    clickWomen++;
    if(clickWomen%2===1)
    {
        document.getElementById("DwomencolapseIcon").style.backgroundPosition="-81px -4px"
        document.getElementById("DwomensubListExpand").style.display="block"
        document.getElementById("womenMenuCont").style.backgroundColor="#f4f4f4"
        document.getElementById("Dwritewomen").style.color="#0a2a76"
    }
    else{
        document.getElementById("DwomencolapseIcon").style.backgroundPosition="-57px -4px"
        document.getElementById("DwomensubListExpand").style.display="none"
        document.getElementById("womenMenuCont").style.backgroundColor="white"
        document.getElementById("Dwritewomen").style.color="black"
    }
}
// Women Product list
document.getElementById("Dwomenproducts").addEventListener("click",womenprodList)
 var clickwomenProd=0
function womenprodList(e)
{
    e.stopPropagation();
    clickwomenProd++
    if(clickwomenProd%2===1)
    {
        document.getElementById("DwomenprodIcon").style.backgroundPosition="-81px -4px"
        document.getElementById("womenprodSubList").style.display="block"
        document.getElementById("Dwomenproducts").style.backgroundColor="#e8e8e8"
        document.getElementById("Dwomenprod").style.color="#0a2a76"
    }
    else{
        document.getElementById("DwomenprodIcon").style.backgroundPosition="-57px -4px"
        document.getElementById("womenprodSubList").style.display="none"
        document.getElementById("Dwomenproducts").style.backgroundColor="#f4f4f4"
        document.getElementById("Dwomenprod").style.color="black"
    }
   
}
    //men Brand list
    document.getElementById("Dwomenbrand").addEventListener("click",womenbrandList)
    var clickwomenBarnd=0;
    function womenbrandList(e)
    {
        e.stopPropagation()
        console.log("Hello");
        clickwomenBarnd++;
        if(clickwomenBarnd%2===1)
        {
            document.getElementById("DwomenBrandIcon").style.backgroundPosition="-81px -4px" 
            document.getElementById("DwomenBrandSubList").style.display="block"
            document.getElementById("Dwomenbrand").style.backgroundColor="#e8e8e8"
            document.getElementById("womenBRAND").style.color="#0a2a76"
        }
        else{
            document.getElementById("DwomenBrandIcon").style.backgroundPosition="-57px -4px"
            document.getElementById("DwomenBrandSubList").style.display="none"
            document.getElementById("Dwomenbrand").style.backgroundColor="#f4f4f4"
            document.getElementById("womenBRAND").style.color="black"
        }
    }
    // women Edit List
    document.getElementById("Dwomenedit").addEventListener("click",woeditList)
    var clickwoedit=0;
    function woeditList(e)
    {
        e.stopPropagation()
        clickwoedit++;
        if(clickwoedit%2===1)
        {
            document.getElementById("DwomeneditIcon").style.backgroundPosition="-81px -4px" 
            document.getElementById("DwomeneditSubList").style.display="block"
            document.getElementById("Dwomenedit").style.backgroundColor="#e8e8e8"
            document.getElementById("womenSHOP").style.color="#0a2a76"
        }
        else{
            document.getElementById("DwomeneditIcon").style.backgroundPosition="-57px -4px"
            document.getElementById("DwomeneditSubList").style.display="none"
            document.getElementById("Dwomenedit").style.backgroundColor="#f4f4f4"
            document.getElementById("womenSHOP").style.color="black"
        }
    }