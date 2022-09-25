var numberOfQuestion = document.querySelectorAll(".question").length;

for(let i=0; i <numberOfQuestion; i++ ){
    document.querySelectorAll(".question")[i].addEventListener("click", () => {
        document.querySelectorAll(".answer")[i].classList.toggle("show-answer");
        
        document.querySelectorAll(".arrow")[i].classList.toggle("up-arrow");
    });
}

