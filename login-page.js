// var regUsers=JSON.parse(localStorage.getItem("userData"));
//     document.querySelector("button").addEventListener("submit",signin);

//     function signin(){
//         var email=document.querySelector("#Lemail").value;
//         var pass=document.querySelector("#Lpass").value;

//         if(email=="admin"&& pass=="admin"){
//             window.location.href="admin.html"
//         } else{
//             for(var i=0;i<regUsers.length;i++){
//                 if(regUsers[i].emailAddress==email && regUsers[i].password==pass){
//                     window.location.href="prod.html"
//                 } else if(regUsers[i].emailAddress!=email && regUsers[i].password!=pass){
//                     alert("Username or Password is incorrect")
//                 }
//             }
//         }
//     }
    var btn=document.querySelector("button");
    btn.addEventListener("click",function(e){
        e.preventDefault();
      });
      var regUsers=JSON.parse(localStorage.getItem("userData"));
      btn.addEventListener("click",signin);
      function signin(){
        var email=document.querySelector('#Lemail').value;
        var pass=document.querySelector('#Lpass').value;

        if(email=="admin"&& pass=="admin"){
            window.location.href="admin.html"
        }
        // else{
        //                 for(var i=0;i<regUsers.length;i++){
        //                     if(regUsers[i].emailAddress==email && regUsers[i].password==pass){
        //                         window.location.href="prod.html"
        //                     } else{
        //                         alert("Username or Password is incorrect")
        //                     }
        //                 }
        //             }
        //         }
        var userData = JSON.parse(localStorage.getItem("userData"));
        

        var count =0;
    userData.forEach(element => {
        if(element.emailAddress == email && element.password == pass){
            alert("Log In Successfully");
            window.location.href="products.html";
            count++;
        }
        });
        if(count == 0){
            alert("Invalid User");
        }
        }
        
                var state=false;
                function toggle(){
                    if(state){
                     document.getElementById("Lpass").setAttribute("type","password");
                     document.getElementById("eye").style.color='#7a797e';
                     state=false;
                    }else{
                     document.getElementById("Lpass").setAttribute("type","text");
                     document.getElementById("eye").style.color='#5887ef'
                     state=true;
                    }
                }

        