// API-image-of-the-day
$('#display-image').on('click', function (event) {
  event.preventDefault();

  const APIkey = "Tx4PO85BITHWuJbaJLa8RIsdAxPLDPf7LdPV9kaj";
  let queryURL = `https://api.nasa.gov/planetary/apod?api_key=${APIkey}`


  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      console.log(response)

      const image = $('<img>').attr('src', response.url);
      const date = $('<h2>').append(response.date)
      const explanation = $('<p>').append(response.explanation)
      
      $('#image-of-the-day').append(image, date, explanation)
  })
})

//jQuery effects - hide and show added to login and registration forms//
$('.signup-show').click(function(){
    $('.registration-form').show();
    $('.login-form').hide();
})

$('.login-show').click(function(){
    $('.login-form').show();
    $('.registration-form').hide();
});

//jQuery effects - hide and show app content details//
$('#login-btn').click(function(){
  $('.login-form').hide();
  $('.nav').show();
  $('.jumbotron').show();
  $('.text-black').show();
  $('.card-deck').show();
})

//jQuery effects - hide and show quiz//
$('#btn-quiz').click(function(){
  $('.quiz').show();
  $('.text-black').hide();
  $('.card-deck').hide();
})

$('#submit').click(function(){
  $('.quiz').hide();
  $('.text-black').show();
  $('.card-deck').show();
})

//HTML elements selected//
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

//displayMessage added for incorrect user registration input//
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  }

//user input saved to localStorage//
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

//User able to login using saved registration details//
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




// $('#image-gallery').on('click', function (event) {
//   event.preventDefault();

//   const nasa_id = "PIA18033"
//   let queryURL = `https://images-api.nasa.gov/asset/${nasa_id}`


//   $.ajax({
//       url: queryURL,
//       method: "GET"
//   }).then(function (response) {
//       console.log(response)

//       const image = $('<img>').attr('src', response.collection.items[3].href);
//       $('#display-photo').append(image)
//   })
// })

