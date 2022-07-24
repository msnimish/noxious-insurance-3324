let signupBtn = document.querySelector("#btn_signup");
let signupBtnScroll = document.querySelector("#scroll_btn_signup");
let scrollTopBtn = document.querySelector("#scroll_to_top");

scrollTopBtn.addEventListener("click", scrollTopFunction);

function scrollTopFunction() {
    console.log("hi");
  document.documentElement.scrollTop = 0;
}

signupBtnScroll.addEventListener("click", function () {
  window.location.href = "./welcome.html";
});
signupBtn.addEventListener("click", function () {
  window.location.href = "./welcome.html";
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.querySelector(".scroll_header").style.top = "0";
  } else {
    document.querySelector(".scroll_header").style.top = "-150px";
  }
}


