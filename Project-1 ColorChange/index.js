const colors = ["red","green","rgba(133,122,200)","#f15025"]
const btn = document.getElementById("button")
const color = document.getElementById("colorName");

btn.addEventListener("click", function(){
    const randomNumber= getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = colors[randomNumber];

})
const getRandomNumber = () =>{
    return Math.floor(Math.random()*colors.length);

}
