const editNav = () => {
  let nav = document.getElementById("myTopnav");
  nav.className = (nav.className === "topnav") ? "topnav responsive" : "topnav";
};

// DOM Elements
const modalbg = document.getElementById("form");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//FERME LA MODAL
modalClose.addEventListener("click", closePls)
function closePls() {
  modalbg.style.display = "none";
}

document.getElementById("form-register").addEventListener("submit", (e) => {
  e.preventDefault();

  let checkFirstname = () => {

    const firstName = document.getElementById("firstName");
    const firstNameValue = firstName.value.trim();

  }

  function checkLastname() {

    const userName = document.getElementById("userName");
    const userNameValue = userName.value.trim();

  }

  function checkEmail() {
    const emailElement = document.getElementById("email");
    const emailValue = emailElement.value.trim();

  }

  function checkTournament() {

    const eventInput = document.getElementById("eventsNbr");
    const eventValue = parseInt(eventInput.value, 10);

  }

  function checkCity() {
    const radios = document.querySelectorAll('input[name="location"]');

  }

  function checkBirthday() {
    const birthdayElement = document.getElementById('birthday');
    const birthdayValue = birthdayElement.value;

  }

  function checkTerms() {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox1Valid = checkbox1.checked;
  }

  checkTerms();
  checkBirthday();
  checkCity();
  checkTournament();
  checkEmail();
  checkFirstname();
  checkLastname();

});