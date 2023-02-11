$('.signup-show').click(function(){
    $('.registration-form').show();
    $('.login-form').hide();
})

$('.login-show').click(function(){
    $('.login-form').show();
    $('.registration-form').hide();
});

var firstNameInput = document.querySelector("#firstName");
var lastNameInput = document.querySelector("#lastName");
var emailInput = document.querySelector("#email-2");
var passwordInput = document.querySelector("#password-2");
var signUpButton = document.querySelector("#signup-btn");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");
var loginButton = document.querySelector("#login-btn");
var userEmail = document.querySelector("#email").value;
var userPassword = document.querySelector("#password").value;

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }


signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var email = document.querySelector("#email-2").value;
    var password = document.querySelector("#password-2").value;


  
    if (firstName === "") {
      displayMessage("error", "First name cannot be blank");
    } else if (lastName === "") {
      displayMessage("error", "Last name cannot be blank");
    } else if (email === "") {
        displayMessage("error", "Email cannot be blank");
    } else if (password === "") {
        displayMessage("error", "Password cannot be blank");
    }
    else {
      displayMessage("success", "Registered successfully");
  
      localStorage.setItem("first", firstName);
      localStorage.setItem("last", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    }

});

loginButton.addEventListener("click", function(event) {
event.preventDefault();

var savedEmail = (localStorage.getItem("email"));
var savedPwd = (localStorage.getItem("password")); 

var userEmail = document.getElementById("email").value;
var userPassword = document.getElementById("password").value;

  if (savedEmail === userEmail && savedPwd === userPassword) {
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("id").style.display = "block";
  document.getElementById("card1").style.display = "flex";
  document.getElementById("deck1").style.display = "flex";
} else {
  alert("Incorrect email or password. Please try again.");

}
  });
