let btnPremium=document.querySelector(".banner_premium>button");

btnPremium.addEventListener("click", function(){
    window.location.href="./articles.html";
})

let form= document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("hi");
    window.location.href = "./welcome.html";
  });