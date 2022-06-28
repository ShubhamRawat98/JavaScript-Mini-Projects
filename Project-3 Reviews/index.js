//local data
const reviews=[
{
    id: 1,
    author:"Shubham Rawat",
    job:"Web Developer",
    img:"https://i.pinimg.com/564x/6e/41/06/6e4106b7186667a9905924232f452d8f.jpg",
    text:"lLorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid rerum at veritatis non facilis qui, officia iste quos nesciunt necessitatibus odio in distinctio impedit, exercitationem atque autem dignissimos eveniet?",
},
{
    id: 2,
    author:"Shubhangi",
    job:"Sister",
    img:"https://logos.textgiraffe.com/logos/logo-name/Shubhangi-designstyle-smoothie-m.png",
    text:"lLorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid rerum at veritatis non facilis qui, officia iste quos nesciunt necessitatibus odio in distinctio impedit, exercitationem atque autem dignissimos eveniet?",
},
{
    id: 3,
    author:"Dharam Singh Rawat",
    job:"Father",
    img:"https://upload.wikimedia.org/wikipedia/commons/1/18/DR_logo.svg",
    text:"lLorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid rerum at veritatis non facilis qui, officia iste quos nesciunt necessitatibus odio in distinctio impedit, exercitationem atque autem dignissimos eveniet?",
},
{
    id: 4,
    author:"Meena Rawat",
    job:"Mother",
    img:"https://logos.textgiraffe.com/logos/logo-name/Meena-designstyle-smoothie-m.png",
    text:"lLorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid rerum at veritatis non facilis qui, officia iste quos nesciunt necessitatibus odio in distinctio impedit, exercitationem atque autem dignissimos eveniet?",
},

]

//select elements
const img =document.getElementById("photo");
const author =document.getElementById("author");
const job =document.getElementById("job");
const text =document.getElementById("info");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const supriseBtn = document.getElementById("suprise");

// set starting item
let currentItem=0;

//load initial item
window.addEventListener("DOMContentLoaded",function(){ showPerson(currentItem)});

//show person based on item
const showPerson=(person)=>{
    const item= reviews[person]
    img.src= item.img
    job.textContent= item.job
    author.textContent= item.author
    text.textContent= item.text
}

// show next person
nextBtn.addEventListener("click",function(){ 
    currentItem++;
    if(currentItem>(reviews.length-1)){
        currentItem=3
        alert("Maximum Reviews")
    }
    showPerson(currentItem);

// show previous person    
});
prevBtn.addEventListener("click",function(){ 
    currentItem--;
    if(currentItem<0){
        currentItem=0
        alert("Maximum Reviews")
    }
    showPerson(currentItem);
});

// show random person
supriseBtn.addEventListener("click",function(){
    const currentItem= randomNumber();
    showPerson(currentItem)
})

const randomNumber=()=>{
return Math.floor(Math.random()*reviews.length)
}





