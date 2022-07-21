let form=document.querySelector('form');
let backBtn=document.querySelector(".container>span");
backBtn.addEventListener("click", function(){
    window.location.href ="welcome.html";
})

form.addEventListener('submit', signup);

let userData=JSON.parse(localStorage.getItem("userData"))||[];
function signup(event){
    event.preventDefault();
    let details={
        name:form.name.value,
        email:form.email.value,
        password:form.password.value
    }
    console.log(details);
    userData.forEach(function(e){
        if(e.email===details.email){
            alert("Email id already registered. Please Log In");
            return;
        }
    });
    userData.push(details);
    localStorage.setItem("userData", JSON.stringify(userData));
    window.location.href="login.html";
    
}