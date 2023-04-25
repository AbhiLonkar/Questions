//using selectors inside the element

var questions = document.querySelectorAll(".question");   // get the questions article list
// console.log(questions)

questions.forEach(function(clickedQuestion){
    var btn = clickedQuestion.querySelector(".question-btn")
    console.log(btn)
    btn.addEventListener("click",function(){
        
        // Make the answer disappear when another question is clicked

        questions.forEach(function(currentQuestion){
            if (currentQuestion!= clickedQuestion){
                currentQuestion.classList.remove("show-text")
            }
        })

        // Toggle answer
        clickedQuestion.classList.toggle("show-text")
    })

})











// traversing the dom

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click",function(event){
        // console.log(this)
        // const question = this.parentElement.parentElement;

//         const question = event.currentTarget.parentElement.parentElement;
//         console.log(question)
//         question.classList.toggle("show-text")
//     })
// })































































// $(".plus-icon").on("click",function(){
//     $(".question").addClass("show-text")
// })

// $(".minus-icon").on("click",function(){
//     $(".question").removeClass("show-text")
// })