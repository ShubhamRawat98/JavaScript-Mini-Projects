



const btn= document.querySelector(".switchButtons");
const video = document.querySelector(".videoBox");

btn.addEventListener("click",function(){
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else{
        btn.classList.remove("slide")
        video.play();
    }
})