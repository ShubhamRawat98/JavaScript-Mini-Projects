let count=0;

const number=document.getElementById("number");
const buttons=document.querySelectorAll(".btn");

buttons.forEach(function(btns){
    btns.addEventListener('click', function(e){
         const classStyle = e.currentTarget.classList;
        //  console.log(classStyle)
    //   TWO WAYS TO APPLY CONDITIONS

         if(classStyle.contains("decrease"))
         {
             count--;
         }
         else if(classStyle.contains("increase")){
             count++;
         }
         else{
             count=0;
         }

        // if(classStyle!="increase" && classStyle!="reset")
        // {
        //     count--;
        // }
        // else if(classStyle!="decrease" && classStyle!="reset"){
        //     count++;
        // }
        // else if(classStyle!="increase" && classStyle!="decrease")
        // {
        //     count=0;
        // }
    
        if(count<0){
        number.style.color="red"
        }
        else if(count>0){
        number.style.color="green"
        }
       
        else if(count==0){
        number.style.color="black"
        }
        number.textContent=count;
        
       
    })
    
});

