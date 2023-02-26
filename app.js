let mobileMenuBtn = document.querySelector(".menu"),
    openBtn = document.getElementById("open-btn"),
    closeBtn = document.getElementById("close-btn"),
    mobileMenuDiv = document.querySelector(".mobile-menu"),
    mobileMockupImg = document.getElementById("mob-mockup"),
    introTexts = document.querySelector(".intro-texts");
    body = document.querySelector("body");


mobileMenuBtn.addEventListener("click", function(){
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("show");
    mobileMockupImg.classList.toggle('hide');
    introTexts.classList.toggle("margin-move");
    mobileMenuDiv.classList.toggle("show");
    body.classList.toggle("no-scroll");
});