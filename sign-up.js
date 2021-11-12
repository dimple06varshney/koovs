var btn=document.querySelector("button");
btn.addEventListener("mouseover",enterbtn)
btn.addEventListener("mouseleave",leavebtn)
function enterbtn() {
    btn.style.border="5px solid green"
  }
  function leavebtn() {
    btn.style.border="5px solid red"
  }
  btn.addEventListener("click",function(e){
    e.preventDefault();
  });
  btn.addEventListener("click",signup);
  userArr=JSON.parse(localStorage.getItem("userData"))||[];
  function signup(){
    var user=document.querySelector('#username').value;
    var email=document.querySelector('#email').value;
    var pass=document.querySelector('#password').value;
    var num=document.querySelector('#number').value;
    var gen=document.querySelector("input[name=Gender]:checked").value;
    // var ref=document.querySelector(".check-box").value;
    var userCrendials={
                userName:user,
                emailAddress:email,
                password:pass,
                mobileNumber:num,
                gender:gen,
            }
            userArr.push(userCrendials);
            localStorage.setItem("userData",JSON.stringify(userArr));
            window.location.href="login-page.htm";
  }
   var state=false;
   function toggle(){
       if(state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("eye").style.color='#7a797e';
        state=false;
       }else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#5887ef'
        state=true;
       }
   }

  
  