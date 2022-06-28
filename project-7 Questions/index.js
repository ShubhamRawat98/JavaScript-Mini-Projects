// using selectors

const questions=document.querySelectorAll(".questionBox")

questions.forEach(function(question) {
    const btn=question.querySelector(".show-hide")
    // console.log(btn)
    btn.addEventListener("click",function(){
        questions.forEach(function(questionArticle){
           if(questionArticle!=question){
            questionArticle.classList.remove("showAnswer")
           }

        })

        question.classList.toggle("showAnswer")


    })
    
});














//traversing the dom

// const btns= document.querySelectorAll(".show-hide")

// btns.forEach(function (btn) {
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement
//         question.classList.toggle("showAnswer")
//     })  
// })