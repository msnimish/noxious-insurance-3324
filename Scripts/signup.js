let form = document.querySelector("form");
let backBtn = document.querySelector(".container>span");
backBtn.addEventListener("click", function () {
  window.location.href = "welcome.html";
});

form.addEventListener("submit", signup);

let userData = JSON.parse(localStorage.getItem("userData")) || [];
function signup(event) {
  event.preventDefault();
  let details = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
  };
  // console.log(details);
  let isSame = false;
  userData.forEach(function (e) {
    if (e.email === details.email) {
      isSame = true;
    }
  });
  if (isSame) {
    alert("Email id already registered. Please Log In");
  } else {
    userData.push(details);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href = "login.html";
  }
}
