const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","E","F"];
const btn = document.getElementById("button")
const colorText = document.getElementById("colorText")

btn.addEventListener("click", function(){
    let hexColor = "#";
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()]
    }
  colorText.textContent=hexColor;
  document.body.style.backgroundColor=hexColor;  
})
getRandomNumber=()=>{
    return Math.floor(Math.random()*hex.length)
}