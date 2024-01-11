const editNav = () => {
  let nav = document.getElementById("myTopnav");
  nav.className = (nav.className === "topnav") ? "topnav responsive" : "topnav";
};

// DOM Elements
const modalbg = document.getElementById("form");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// FERME LA MODAL
modalClose.addEventListener("click", closeModal)
function closeModal() {
  modalbg.style.display = "none";
}

// Vérifie si le prenom est > à 2 caractères, contient uniquement des lettres et "-"
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
  }
}

// Vérifie si le nom est > à 2 caractères, contient uniquement des lettres et "-"
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

  }
}

// Vérifie si l'email est conforme
let checkEmail = () => {

  const emailElement = document.getElementById("email");
  const emailValue = emailElement.value.trim();
  let parentElement = emailElement.parentNode;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(emailValue)) {
    mailValid = true;
    parentElement.setAttribute('data-error-visible', 'false');
    //console.log(emailElement.parentNode);
  } else {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Email invalide !');
    error++
  }
}

// Vérifie si la date n'est pas vide, si il n'y a que des valeurs numériques 
// et calcule l'âge qui doit être supérieur à 16 ans
let checkBirthday = () => {
  const birthdayElement = document.getElementById('birthday');
  const birthdayValue = birthdayElement.value;
  const dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

  let parentElement = birthdayElement.parentNode;

  const birthDate = new Date(birthdayValue);
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthDate.getFullYear();

  if (!dateRegex.test(birthdayValue) && birthdayValue.trim() === '') {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Veuillez saisir une DATE valide.');
    error++
  } else if (isNaN(birthDate.getTime())) {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'La DATE n\'existe pas.');
    error++
  } else if (age < 16) {
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Vous devez avoir plus de 16 ans');
    error++
  } else {
    parentElement.setAttribute('data-error-visible', 'false');
  }
}

// Verifie si au moins une valeurs numérique est reçu
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

// Verifie si au moins une checkbox est coché
let checkCity = () => {

  const radios = document.querySelectorAll('input[name="location"]');
  let isValidOption = false;

  radios.forEach(function (radio) {
    if (radio.checked) {
      isValidOption = true;
    }
  });

  if (isValidOption) {
    let parentElement = radios[0].parentNode;
    parentElement.setAttribute('data-error-visible', 'false');

  } else {
    let parentElement = radios[0].parentNode;
    parentElement.setAttribute('data-error-visible', 'true');
    parentElement.setAttribute('data-error', 'Sélectionnez au moins une option !');
    error++
  }
}


// Verifie si la checkbox "checkbox1" correspondant aux conditions d'utilisation est coché
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
  }
}

// Ecouteur d'evenement submit sur l'ensemble du formulaire. 
// Empêche la réinitialisation par defaut et garde les données entrées
let registerForm = document.getElementById("form-register")
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

// Appel toutes les fonctions correspondant à chaque champ. 
// Si la varible "error" n'a pas été incrémenter ( = à 0) alors : fermeture de la modal +
// réinitialisation du formulaire + appel de la fonction de confirmation
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
    registerForm.reset();
    createConfirmationModal();
  }
}

// Creation de la modal de confirmation 

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