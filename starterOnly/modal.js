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

// FERME LA MODAL
modalClose.addEventListener("click", closePls)
function closePls() {
  modalbg.style.display = "none";
}

let error = 0;

let checkFirstname = () => {

  const firstName = document.getElementById("firstName");
  const firstNameValue = firstName.value.trim();
  let parentElement = firstName.parentNode;

  const validCharacters = /^[a-zA-Z\-]+$/;

  if (firstNameValue.length < 2) {

    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Veuillez entrer au minimum 2 caractères');
    error++
  } else if (!validCharacters.test(firstNameValue)) {

    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Aucun chiffre autorisé');
    error++
  } else {
    parentElement.setAttribute('data-error-visible', 'false');
    console.log(firstName.parentNode);
  }
}

let checkLastname = () => {

  const userName = document.getElementById("userName");
  const userNameValue = userName.value.trim();
  let parentElement = userName.parentNode;

  const validCharacters = /^[a-zA-Z\-]+$/;

  if (userNameValue.length < 2) {

    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Veuillez entrer au minimum 2 caractères');
    error++
  } else if (!validCharacters.test(userNameValue)) {

    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Aucun chiffre autorisé');
    error++
  } else {
    parentElement.setAttribute('data-error-visible', 'false');
    console.log(userName.parentNode);

  }
}
let checkBirthday = () => {
  const birthdayElement = document.getElementById('birthday');
  const birthdayValue = birthdayElement.value;
  const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  let parentElement = birthdayElement.parentNode;
  const birthDate = new Date(birthdayValue);
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthDate.getFullYear();

  if (!dateRegex.test(birthdayValue) && birthdayValue.trim() === '') {
    console.log('trim test');
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Veuillez saisir une DATE valide.');
    error++
  } else if (isNaN(birthDate.getTime())) {
    console.log('is nan');
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'La DATE n\'existe pas.');
    error++
  } else if (age < 16) {
    console.log('inférieur 16');
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Vous devez avoir plus de 16 ans');
    error++
  } else {
    console.log('else');
    parentElement.setAttribute('data-error-visible', 'false');
  }
}
let checkEmail = () => {

  const emailElement = document.getElementById("email");
  const emailValue = emailElement.value.trim();
  let parentElement = emailElement.parentNode;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(emailValue)) {
    mailValid = true;
    parentElement.setAttribute('data-error-visible', 'false');
    console.log(emailElement.parentNode);

  } else {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Email invalide !');
    error++
  }
}

let checkTournament = () => {

  const eventInput = document.getElementById("eventsNbr");
  const eventValue = parseInt(eventInput.value, 10);
  let parentElement = eventInput.parentNode;

  if (eventValue > 0) {
    parentElement.setAttribute('data-error-visible', 'false');

  } else {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Veuillez saisir une valeur');
    error++
  }
}

let checkCity = () => {

  const radios = document.querySelectorAll('input[name="location"]');
  let isValidOption = false;

  radios.forEach(function (radio) {
    if (radio.checked) {
      isValidOption = true;
    }
  });

  if (isValidOption) {
    console.log(radios[0].parentNode);
    let parentElement = radios[0].parentNode;

    parentElement.setAttribute('data-error-visible', 'false');

  } else {
    let parentElement = radios[0].parentNode;
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Sélectionnez au moins une option !');
    error++
  }
}



let checkTerms = () => {
  const checkbox1 = document.getElementById("checkbox1");
  const checkbox1Valid = checkbox1.checked;
  let parentElement = checkbox1.parentNode;
  if (!checkbox1Valid) {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', "Veuillez accepter les conditions d'utilisation");
    error++
  } else {
    parentElement.setAttribute('data-error-visible', 'false');
    console.log(checkbox1.parentNode);

  }
}

let registerForm = document.getElementById("form-register")
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();




  validateForm();
  console.log(error)


});

let validateForm = () => {
  error = 0;
  checkTerms();
  checkBirthday();
  checkCity();
  checkTournament();
  checkEmail();
  checkFirstname();
  checkLastname();

  if (error == 0) {
    modalbg.style.display = "none";
    /*
    let allInputs = document.querySelectorAll('#form input')
    allInputs.forEach(input => {
      input.value = "";
    });
    */
    registerForm.reset();
    createConfirmationModal();
  }
}

const createConfirmationModal = () => {
  // Eléments de la modal
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const message = document.createElement("p");
  message.textContent = 'Merci ! Votre réservation a été reçue.';

  const closeButton = document.createElement("button");
  closeButton.textContent = 'Fermer';

  // Ajout elements à la modal
  modal.appendChild(message);
  modal.appendChild(closeButton);

  // Ajout modal à l'overlay
  modalOverlay.appendChild(modal);

  // Ajout overlay à la page
  document.body.appendChild(modalOverlay);

  // Ajout evenement pour fermer la modal
  closeButton.addEventListener("click", () => {
    document.body.removeChild(modalOverlay);
  });
}