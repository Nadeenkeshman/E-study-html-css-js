
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function () {
    links.classList.toggle("show_nav");
})
document.addEventListener('DOMContentLoaded', function () {
    // Get values from local storage
    // let localuser = localStorage.getItem('username');
    // let localpass = localStorage.getItem('password');
    // let localemail = localStorage.getItem('email');
    let localuser =  sessionStorage.getItem('username');
    let localemail = sessionStorage.getItem('email');
    let localpass =  sessionStorage.getItem('password');
    // Display values on the webpage
    document.getElementById("username").textContent = localuser;
    document.getElementById("email").textContent = localemail;
    document.getElementById("password").textContent = localpass;

    // Create a session and save the values
  
  
    // Display the values from session storage
    // document.getElementById("sessionUsername").textContent = sessionStorage.getItem('sessionUsername');
    // document.getElementById("sessionEmail").textContent = sessionStorage.getItem('sessionEmail');
    // document.getElementById("sessionPassword").textContent = sessionStorage.getItem('sessionPassword');

    // Create a button to clear the session
});


//  signup home page

let signupButtonNav = document.getElementById('ccccc')
    signupButtonNav.addEventListener('click', function () {

      window.location.href = '/signup/jason.html';

  });
  let loginButtonNav =document.getElementById('loginButtonNav');
  loginButtonNav.addEventListener('click' , function(){
    window.location.href = '/loginpage/login.html';
  })



  const attemptQuizButtons = document.getElementsByClassName('cardsButtonsHTML');

  // Convert the HTMLCollection to an array for easier iteration
  const buttonArray = Array.from(attemptQuizButtons);
  
  buttonArray.forEach((button) => {
      button.addEventListener('click', () => {
          // Check the 'isLoggedIn' value in localStorage
          const isLoggedIn = localStorage.getItem('isLoggedIn');
  
          if (isLoggedIn === 'true') {
              // User is logged in, so proceed to the quiz page
              window.location.href = '/exploreCourses/brefcard-b.html';
          } else {
              // User is not logged in, redirect to the login page
              window.location.href = '/loginpage/login.html';
          }
      });
  });
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    loginButtonNav.style.display='none'
    signupButtonNav.textContent= 'LOG OUT'
    signupButtonNav.addEventListener('click' ,(e) =>{

        localStorage.clear();

    window.location.href = '/home.html'
    localStorage.setItem('isLoggedIn' ,'false' );
    })
} 
let profileButton = document.getElementById('profileButton');
profileButton.addEventListener('click', () => {
    window.location.href = '/exploreCourses/brefcard-b.html';
});



// function isUserLoggedIn() {
//     const isLoggedIn = localStorage.getItem('isLoggedIn') === 'false';
//     return isLoggedIn;
//   }
  
//   // Check if the user is not logged in and redirect to the login page
//   if (!isUserLoggedIn()) {
//     window.location.href = '/loginpage/login.html';
//   }
  
//   // Rest of your existing code
//   // const navToggle = document.querySelector(".navbar_toggle");
//   // const links = document.querySelector(".main_nav");
  
//   navToggle.addEventListener('click', function () {
//     links.classList.toggle("show_nav");
//   })
let HOME= document.getElementById('HOME')
HOME.addEventListener('click',()=>{
    window.location.href='/home.html';
})