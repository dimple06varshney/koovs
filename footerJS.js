document.querySelectorAll(".uaboutbutton").forEach(button =>{
    button.addEventListener("click",()=>{
        button.classList.toggle('uaboutbutton--active');
       });
});
document.querySelectorAll(".uabbutton").forEach(button =>{
    button.addEventListener("click",()=>{
        button.classList.toggle('uabbutton--active');
       });
});    