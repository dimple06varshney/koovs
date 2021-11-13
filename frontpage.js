var video=document.getElementById("vmyvideo");
var count=1;
function playvid(){
    // console.log("sucessful");
    count++;
    if(count%2==0)
    {
        video.play();
    }
    else{
        video.pause();
    }
}