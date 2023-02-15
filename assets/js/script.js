
//jQuery effects - hide and show added to login and registration forms//
$('.signup-show').click(function(){
  $('.registration-form').show();
  $('.login-form').hide();
});

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
});

//jQuery effects - hide and show quiz//
$('#btn-quiz').click(function(){
  $('.quiz').show();
  $('.text-black').hide();
  $('.card-deck').hide();
});

$('#submit').click(function(){
  $('.quiz').hide();
  $('.text-black').show();
  $('.card-deck').show();
});

//jQuery effects - hide and show image-of-the-day//
$('#display-image').click(function(){
  $('#image-of-the-day').show();
  $('#img-title').show();
  $('.text-black').hide();
  $('#img-card').hide();
  $('#videos').hide();
  $('#facts').hide();
});

//jQuery effects - hide and show fact-of-the-day//
$('#display-facts').click(function(){
  $('#image-facts').show();
  $('.text-black').hide();
  $('#img-card').hide();
  $('#videos').hide();
  $('#facts').hide();
});

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
  
  // API-image-of-the-day
  $('#display-image').on('click', function (event) {
    event.preventDefault();
  
    const APIkey = "Tx4PO85BITHWuJbaJLa8RIsdAxPLDPf7LdPV9kaj";
    let queryURL = `https://api.nasa.gov/planetary/apod?api_key=${APIkey}`
  
  
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
  
        const date = $('<h2>').addClass('api-title-day').append(response.date)
        const image = $('<img>').addClass('api-image-day').attr('src', response.url);
        const explanation = $('<p>').addClass('api-explanation-day').append(response.explanation)
        
        $('#image-of-the-day').append(image, date, explanation)
    })
  })
  
  //NASA facts and images
  const factsCtn = $('#image-facts');

  function displayFacts1() {
    const nasa_1 = "PIA18033"
    let queryURL1 = `https://images-api.nasa.gov/asset/${nasa_1}`
  
    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        
        const data1 = $('<h2>').text('2012-01-30')
        const image1 = $('<img>').attr('src', response.collection.items[3].href);
        const fact1 = $('<p>').text('Behold one of the more detailed images of the Earth yet created. This Blue Marble Earth montage shown above -- created from photographs taken by the Visible/Infrared Imager Radiometer Suite (VIIRS) instrument on board the new Suomi NPP satellite -- shows many stunning details of our home planet. The Suomi NPP satellite was launched last October and renamed last week after Verner Suomi, commonly deemed the father of satellite meteorology. The composite was created from the data collected during four orbits of the robotic satellite taken earlier this month and digitally projected onto the globe. Many features of North America and the Western Hemisphere are particularly visible on a high resolution version of the image.')
        factsCtn.append(data1, image1, fact1)
    })
}

function displayFacts2() {
    const nasa_2 = "S65-34635"
    let queryURL2 = `https://images-api.nasa.gov/asset/${nasa_2}`
  
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        
        const data2 = $('<h2>').text('1965-06-03')
        const image2 = $('<img>').attr('src', response.collection.items[3].href);
        const fact2 = $('<p>').text("Astronaut Edward H. White II, pilot on the Gemini-Titan 4 spaceflight, is shown during his egress from the spacecraft. His face is covered by a shaded visor to protect him from the unfiltered rays of the sun. White became the first American astronaut to walk in space. He remained outside the spacecraft for 21 minutes during the third revolution of the Gemini-4 mission. He wears a specially designed spacesuit for the extravehicular activity (EVA). In his right hand, he carries a Hand-Held Self-Maneuvering Unit (HHSMU) with which he controlled his movements while in space. He was attached to the spacecraft by a 25-feet umbilical line and a 23-feet tether line, both wrapped together with gold tape to form one cord. He wears an emergency oxygen supply chest pack. Astronaut James A. McDivitt is command pilot for the Gemini-4 mission. EDITOR'S NOTE: Astronaut Edward H. White II died in the Apollo/Saturn 204 fire at Cape Kennedy on Jan. 27, 1967")
        factsCtn.append(data2, image2, fact2)
    })
}

function displayFacts3() {
  const nasa_3 = "behemoth-black-hole-found-in-an-unlikely-place_26209716511_o"
  let queryURL3 = `https://images-api.nasa.gov/asset/${nasa_3}`

  $.ajax({
      url: queryURL3,
      method: "GET"
  }).then(function (response) {
      
      const data3 = $('<h2>').text('2016-04-06');
      const image3 = $('<img>').attr('src', response.collection.items[3].href);
      const fact3 = $('<p>').text("This computer-simulated image shows a supermassive black hole at the core of a galaxy. The black region in the center represents the black hole’s event horizon, where no light can escape the massive object’s gravitational grip. The black hole’s powerful gravity distorts space around it like a funhouse mirror. Light from background stars is stretched and smeared as the stars skim by the black hole. Credits: NASA, ESA, and D. Coe, J. Anderson, and R. van der Marel (STScI) More info: Astronomers have uncovered a near-record breaking supermassive black hole, weighing 17 billion suns, in an unlikely place: in the center of a galaxy in a sparsely populated area of the universe. The observations, made by NASA’s Hubble Space Telescope and the Gemini Telescope in Hawaii, may indicate that these monster objects may be more common than once thought. Until now, the biggest supermassive black holes – those roughly 10 billion times the mass of our sun – have been found at the cores of very large galaxies in regions of the universe packed with other large galaxies. In fact, the current record holder tips the scale at 21 billion suns and resides in the crowded Coma galaxy cluster that consists of over 1,000 galaxies.")
      factsCtn.append(data3, image3, fact3);
  })
}

function displayFacts4() {
  const nasa_4 = "as16-113-18339"
  let queryURL4 = `https://images-api.nasa.gov/asset/${nasa_4}`

  $.ajax({
      url: queryURL4,
      method: "GET"
  }).then(function (response) {
      
      const data4 = $('<h2>').text('1971-04-20');
      const image4 = $('<img>').attr('src', response.collection.items[3].href);
      const fact4 = $('<p>').text("Astronaut John W. Young, commander of the Apollo 16 lunar landing mission, leaps from the lunar surface as he salutes the United States flag at the Descartes landing site during the first Apollo 16 extravehicular activity (EVA). Astronaut Charles M. Duke Jr., lunar module pilot, took this picture. The Lunar Module (LM) 'Orion' is on the left. The Lunar Roving Vehicle (LRV) is parked beside the LM. The object behind Young (in the shade of the LM) is the Far Ultraviolet Camera/Spectrograph (FUC/S). Stone Mountain dominates the background in this lunar scene. While astronauts Young and Duke descended in the LM to explore the Descartes highlands landing site on the moon, astronaut Thomas K. Mattingly II, command module pilot, remained with the Command and Service Modules (CSM) 'Casper' in lunar orbit.");
      factsCtn.append(data4, image4, fact4);
  })
}

function displayFacts5() {
  const nasa_5 = "PIA19821"
  let queryURL5 = `https://images-api.nasa.gov/asset/${nasa_5}`

  $.ajax({
      url: queryURL5,
      method: "GET"
  }).then(function (response) {
      
      const data5 = $('<h2>').text('2015-07-08');
      const image5 = $('<img>').attr('src', response.collection.items[3].href);
      const fact5 = $('<p>').text("Flaring, active regions of our sun are highlighted in this image combining observations from several telescopes. High-energy X-rays from NASA's Nuclear Spectroscopic Telescope Array (NuSTAR) are shown in blue; low-energy X-rays from Japan's Hinode spacecraft are green; and extreme ultraviolet light from NASA's Solar Dynamics Observatory (SDO) is yellow and red. All three telescopes captured their solar images around the same time on April 29, 2015. The NuSTAR image is a mosaic made from combining smaller images. The active regions across the sun's surface contain material heated to several millions of degrees. The blue-white areas showing the NuSTAR data pinpoint the most energetic spots. During the observations, microflares went off, which are smaller versions of the larger flares that also erupt from the sun's surface. The microflares rapidly release energy and heat the material in the active regions. NuSTAR typically stares deeper into the cosmos to observe X-rays from supernovas, black holes and other extreme objects. But it can also look safely at the sun and capture images of its high-energy X-rays with more sensitivity than before. Scientists plan to continue to study the sun with NuSTAR to learn more about microflares, as well as hypothesized nanoflares, which are even smaller. In this image, the NuSTAR data shows X-rays with energies between 2 and 6 kiloelectron volts; the Hinode data, which is from the X-ray Telescope instrument, has energies of 0.2 to 2.4 kiloelectron volts; and the Solar Dynamics Observatory data, taken using the Atmospheric Imaging Assembly instrument, shows extreme ultraviolet light with wavelengths of 171 and 193 Angstroms. Note the green Hinode image frame edge does not extend as far as the SDO ultraviolet image, resulting in the green portion of the image being truncated on the right and left sides.");
      factsCtn.append(data5, image5, fact5);
  })
}

function displayFacts6() {
  const nasa_6 = "as11-44-6551"
  let queryURL6 = `https://images-api.nasa.gov/asset/${nasa_6}`

  $.ajax({
      url: queryURL6,
      method: "GET"
  }).then(function (response) {
      
      const data6 = $('<h2>').text('1969-07-20');
      const image6 = $('<img>').attr('src', response.collection.items[3].href);
      const fact6 = $('<p>').text("This view from the Apollo 11 spacecraft shows the Earth rising above the moon's horizon. The lunar terrain pictured is in the area of Smyth's Sea on the nearside. Coordinates of the center of the terrain are 85 degrees east longitude and 3 degrees north latitude. While astronauts Neil A. Armstrong, commander, and Edwin E. Aldrin Jr., lunar module pilot, descended in the Lunar Module (LM) 'Eagle' to explore the Sea of Tranquility region of the moon, astronaut Michael Collins, command module pilot, remained with the Command and Service Modules (CSM) 'Columbia' in lunar orbit.");
      factsCtn.append(data6, image6, fact6);
  })
}

  // SpaceX missions

function displayMissions() {
  let queryURL = `https://api.spacexdata.com/v3/rockets`
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function (response) {
      
      const spaceXtitle = $('<h2>').text("SpaceX rockets:")
      factsCtn.append(spaceXtitle);

      for (let i = 0; i < response.length; i++) {
          const rocket = $('<h2>').append(response[i].rocket_name)
          const image = $('<img>').attr('src', response[i].flickr_images[0])
          const description = $('<p>').append(response[i].description);
          factsCtn.append(rocket, image, description)
      }
  })
}

$('#display-facts').on('click', function (event) {
    event.preventDefault();
    const nasaTitle = $('<h3>').text("NASA interesting facts and related image:")
    factsCtn.append(nasaTitle);
    displayFacts1();
    displayFacts2();
    displayFacts3();
    displayFacts4();
    displayFacts5();
    displayFacts6();
    displayMissions();
  })
  