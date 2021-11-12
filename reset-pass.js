var resetbtn=document.querySelector(".resetBtn");
resetbtn.addEventListener("submit",function(e){
    e.preventDefault();
})

// resetbtn.addEventListener("submit",resetForm);
function resetForm(){
    window.location.href="resetform.html"
}
      var regUsers=JSON.parse(localStorage.getItem("userData"));
      resetbtn.addEventListener("submit",resetin);
      function resetin(){
        var email=document.querySelector('#Remail').value;
        var userData = JSON.parse(localStorage.getItem("userData"));
        

        var count =0;
    userData.forEach(element => {
        if(element.emailAddress == email){
            window.location.href="resetform.html";
            count++;
        }
        });
        if(count == 0){
            alert("Email not found");
        }
        }