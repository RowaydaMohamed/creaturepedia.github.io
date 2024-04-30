function loginAndValidate() {
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const maleRadio = document.getElementById('male');
  const femaleRadio = document.getElementById('female');

  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const gender = maleRadio.checked ? "Male" : (femaleRadio.checked ? "Female" : "");

  // Validate email format
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  if (!emailRegex.test(email)) {
      document.getElementById("emailError").innerText = "Invalid email format";
      return false;
  } else {
      document.getElementById("emailError").innerText = "";
  }

  // Validate password
  if (password.length < 8) {
      document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
      return false;
  } else {
      document.getElementById("passwordError").innerText = "";
  }

  // Store username if not already stored
  if (!localStorage.getItem('username')) {
      localStorage.setItem('username', username);
      alert(`Welcome, ${username}!`);
  } else {
      alert(`Welcome back, ${localStorage.getItem('username')}!`);
  }

  return true;
}

function myFunction() {
    alert("Congratultions for being a human!\nWelcome to Creaturepedia – Where Curiosity Meets Discovery!");
  }
const audioOrca = document.getElementById('audio');
const audioButton = document.getElementById('audioButton');

// Add click event listener to the image
if(audioButton)
{
audioButton.addEventListener('click', function() {
  // Check if audio is paused or not
  if (audioOrca.paused) {
    audioOrca.play();
  } else {
    audioOrca.pause();
  }
});
}


const backgrounds = ['../Images/orcabackground3.jpeg', '../Images/sea_background.png'];
let currentBackgroundIndex = 0;

// Function to change background image
function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
}

// Add event listener to the button
if(document.getElementById('various-backgrounds'))
document.getElementById('various-backgrounds').addEventListener('click', changeBackground);
function mOver(obj) {
  obj.innerHTML = "Polar bears are actually black,It only looks white because it reflects visible light, This allows them to blend into their surroundings and catch unsuspecting seals."
  }
  
  function mOut(obj) {
  obj.innerHTML = "Mouse Over Me to know me more."
  }


  function displayTextWithTypingEffect() {
    const typingElement = document.getElementById("vtyping-effect");
    let index = 0;
  
    // Function to add one character at a time with delay
    function addCharacter() {
      if(typingElement)
      {
      typingElement.textContent += text[index];
      index++;
      }
  
    }
  
    // Start typing effect
    addCharacter();
  }
  


  function my2ndFunction() {
    alert("Hi There! Dive into the vibrant world of avian species through mesmerizing courtship displays, graceful gliding flights, and epic migratory journeys.  ");
  }
  function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // email format validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        return false;
    } else {
        document.getElementById("emailError").innerText = "";
    }
    // Validate password
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long";
        return false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }
    // Form is valid
    return true;
}


function toggleCaption() {
  var caption1 = document.getElementsByClassName('mcaption1')[0];
  var caption2 = document.getElementById('mcaption2');
  
  caption1.classList.toggle('hidden');
  caption2.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll('.mslide');
  var index = 0;

  // Show the first slide
  slides[index].style.display = 'block';

  // Change slide every 3 seconds
  setInterval(function() {
    // Hide the current slide
    slides[index].style.display = 'none';

    index = (index + 1) % slides.length;

    // Show the next slide
    slides[index].style.display = 'block';
  }, 3000);
});

//oct salma
if(document.getElementById('image1'))
image.addEventListener('mouseover', function() {
  if(document.getElementById('image1'))
  document.getElementById('image1').src = '../Images/Oct2.png';
});
if(document.getElementById('image1'))
image.addEventListener('mouseout', function() {
  if(document.getElementById('image1'))
  document.getElementById('image1').src = '../Images/Oct3.jpg';
});


if(document.getElementById('playButton'))
document.getElementById('playButton').addEventListener('click', function() {
  var audioa = document.getElementById('audiooct');
  audioa.play();
});

  displayTextWithTypingEffect();
  document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll('.mslide');
    var index = 0;
  
    if(document.querySelectorAll('.mslide'))
    {slides[index].style.display = 'block';
  
    setInterval(function() {
      slides[index].style.display = 'none';
  
      index = (index + 1) % slides.length;
  
      slides[index].style.display = 'block';
    }, 3000);}
  });



