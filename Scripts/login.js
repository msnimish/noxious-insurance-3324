let form = document.querySelector("form");
let backBtn = document.querySelector(".container>span");
backBtn.addEventListener("click", function () {
  window.location.href = "signup.html";
});

form.addEventListener("submit", signup);

let userData = JSON.parse(localStorage.getItem("userData")) || [];

function signup(event) {
  event.preventDefault();
  let userEmail = form.email.value;
  let userPassword = form.password.value;
  console.log(userEmail, userPassword);
  let success = false;
  if (userEmail == "" || userPassword == "") {
    alert("Please fill all details");
  }
  userData.forEach(function (e) {
    if (e.email === userEmail && e.password === userPassword) {
      success = true;
    }
  });
  if (success) {
    alert("Log In Successful!");
    window.location.href = "index.html";
  } else {
    alert("Credentials Invalid!");
  }
}
