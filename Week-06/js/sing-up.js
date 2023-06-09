//TODOS LOS CAMPOS REQUERIDOS

var nameInput = document.getElementById("name");
var lastNameInput = document.getElementById("lastName");
var dniInput = document.getElementById("dni");
var birthDateInput = document.getElementById("birthDate");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var locationInput = document.getElementById("location");
var postCodeInput = document.getElementById("postCod");
var emailInput = document.getElementById("email");
var password1Input = document.getElementById("password1");
var password2Input = document.getElementById("password2");

var nameInputValue = nameInput.value;
var lastNameInputValue = lastNameInput.value;
var dniInputValue = dniInput.value;
var birthDateInputValue = birthDateInput.value;
var phoneInputValue = phoneInput.value;
var addressInputValue = addressInput.value;
var locationInputValue = locationInput.value;
var postCodeInputValue = postCodeInput.value;
var emailInputValue = emailInput.value;
var password1InputValue = password1Input.value;
var password2InputValue = password2Input.value;

// ON CLICK

function nameErrorFunction() {
  nameValue = nameInput.value.trim();
  if (nameValue) {
    if (!validateCharCodeNameAndLastName(nameValue) || nameValue.length <= 3) {
      return false;
    } else {
      return true;
    }
  }
}

function lastNamedErrorFunction() {
  lastNameValue = lastNameInput.value.trim();
  if (lastNameValue) {
    if (
      !validateCharCodeNameAndLastName(lastNameValue) ||
      lastNameValue.length <= 3
    ) {
      return false;
    } else {
      return true;
    }
  }
}

function dniErrorFunction() {
  dniValue = dniInput.value.trim();
  if (dniValue) {
    if (!validateCharCodeDNI(dniValue) || dniValue.length <= 7) {
      return false;
    } else {
      return true;
    }
  }
}

function birthDatedErrorFunction() {
  var date = birthDateInput.value;
  console.log(date);
  var birthDate = new Date(birthDateInput.value);
  var currentDate = new Date();
  if (birthDate) {
    if (birthDate.getTime() >= currentDate.getTime() || date == "") {
      return false;
    } else {
      return true;
    }
  }
}

function phoneErrorFunction() {
  phoneValue = phoneInput.value.trim();
  if (phoneValue) {
    if (!validateCharCodePhone(phoneValue) || phoneValue.length !== 10) {
      return false;
    } else {
      return true;
    }
  }
}

function addressErrorFunction() {
  addressValue = addressInput.value.trim();
  var stringsList = addressValue.split(" ");
  if (addressValue) {
    if (addressOk(stringsList) === false) {
      return false;
    } else {
      return true;
    }
  }
}

function locationErrorFunction() {
  locationValue = locationInput.value.trim();
  if (locationValue) {
    if (!validateCharCode(locationValue) || locationValue.length < 3) {
      return false;
    } else {
      return true;
    }
  }
}

function postCodeErrorFunction() {
  postCodeValue = postCodeInput.value.trim();
  if (postCodeValue) {
    if (
      !validateCharCodePostCode(postCodeValue) ||
      postCodeValue.length < 4 ||
      postCodeValue.length > 5
    ) {
      return false;
    } else {
      return true;
    }
  }
}

function emailErrorFunction() {
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue) {
    if (!emailRegex.test(emailValue)) {
      return false;
    } else {
      return true;
    }
  }
}

var validateInformation = function () {
  var arrayErrors = [];
  if (!nameErrorFunction()) {
    arrayErrors.push("There is an error in the name format");
  }
  if (!lastNamedErrorFunction()) {
    arrayErrors.push("\nThere is an error in the last name format");
  }
  if (!dniErrorFunction()) {
    arrayErrors.push("\nThere is an error in the DNI format");
  }
  if (!birthDatedErrorFunction()) {
    arrayErrors.push("\nThere is an error in the birth date format");
  }
  if (!phoneErrorFunction()) {
    arrayErrors.push("\nThere is an error in the phone format");
  }
  if (!addressErrorFunction()) {
    arrayErrors.push("\nThere is an error in the address format");
  }
  if (!locationErrorFunction()) {
    arrayErrors.push("\nThere is an error in the location format");
  }
  if (!postCodeErrorFunction()) {
    arrayErrors.push("\nThere is an error in the post code format");
  }
  if (!emailErrorFunction()) {
    arrayErrors.push("\nThere is an error in the email format");
  }

  return arrayErrors;
};

document
  .getElementById("sing-up-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (validateInformation() == "") {
      alert(
        "name: " +
          nameInputValue +
          " " +
          "last name: " +
          lastNameInputValue +
          " " +
          "DNI: " +
          dniInputValue +
          " " +
          "birth date: " +
          birthDateInputValue +
          " " +
          "phone: " +
          phoneInputValue +
          " " +
          "address: " +
          addressInputValue +
          " " +
          "location: " +
          locationInputValue +
          " " +
          "post code: " +
          postCodeInputValue +
          " " +
          "email: " +
          emailInputValue +
          " " +
          "password 1: " +
          password1InputValue +
          " " +
          "password 2: " +
          password2InputValue
      );
    } else {
      alert(validateInformation());
    }
  });

//VALIDAR NAME
//Nombre: Solo letras y debe tener más de 3 letras.

var nameError = document.getElementById("name-error");

function validateCharCodeNameAndLastName(nameValue) {
  for (var i = 0; i < nameValue.length; i++) {
    var charCode = nameValue.charCodeAt(i);
    if (
      charCode > 47 &&
      charCode < 58 &&
      !(charCode > 64 && charCode < 91) &&
      !(charCode > 96 && charCode < 123)
    ) {
      return false;
    }
  }
  return true;
}

nameInput.addEventListener("blur", function () {
  nameValue = nameInput.value.trim();

  if (nameValue === "") {
  } else {
    if (!validateCharCodeNameAndLastName(nameValue) || nameValue.length <= 3) {
      nameInput.classList.add("error");
      nameError.textContent = "Wrong name format.";
    } else {
      nameInput.classList.remove("error");
      nameError.textContent = "";
    }
  }
});

nameInput.addEventListener("focus", function () {
  nameInput.classList.remove("error");
  nameError.textContent = "";
});

//VALIDAR LAST NAME
//Apellido: Solo letras y debe tener más de 3 letras.

var lastNameError = document.getElementById("last-name-error");

lastNameInput.addEventListener("blur", function () {
  lastNameValue = lastNameInput.value.trim();

  if (lastNameValue === "") {
  } else {
    if (
      !validateCharCodeNameAndLastName(lastNameValue) ||
      lastNameValue.length <= 3
    ) {
      lastNameInput.classList.add("error");
      lastNameError.textContent = "Wrong last name format.";
    } else {
      lastNameInput.classList.remove("error");
      lastNameError.textContent = "";
    }
  }
});

lastNameInput.addEventListener("focus", function () {
  lastNameInput.classList.remove("error");
  lastNameError.textContent = "";
});

//VALIDAR DNI
//DNI: Solo números y debe tener más de 7 números.

var dniError = document.getElementById("dni-error");
function validateCharCodeDNI(dniValue) {
  for (var i = 0; i < dniValue.length; i++) {
    var charCode = dniValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

dniInput.addEventListener("blur", function () {
  dniValue = dniInput.value.trim();
  if (dniValue === "") {
  } else {
    if (!validateCharCodeDNI(dniValue) || dniValue.length <= 7) {
      dniInput.classList.add("error");
      dniError.textContent = "Wrong DNI format.";
    } else {
      dniInput.classList.remove("error");
      dniError.textContent = "";
    }
  }
});

dniInput.addEventListener("focus", function () {
  dniInput.classList.remove("error");
  dniError.textContent = "";
});

//VALIDAR BIRTH DATE
//Fecha de Nacimiento: Con formato dd/mm/aaaa.

var birthDateError = document.getElementById("birth-date-error");
var date = birthDateInput.value;
function valDate() {
  if (!birthDateInput.value) {
    return false;
  }
  var birthDate = new Date(birthDateInput.value);
  var currentDate = new Date();
  if (birthDate.getTime() >= currentDate.getTime()) {
    birthDateInput.classList.add("error");
    birthDateError.textContent = "Wrong date format.";
  } else {
    birthDateInput.classList.remove("error");
    birthDateError.textContent = "";
  }
}

birthDateInput.addEventListener("change", function () {
  valDate(date);
});

//VALIDAR PHONE
//Teléfono: Solo números y debe tener 10 números.

var phoneError = document.getElementById("phone-error");
function validateCharCodePhone(phoneValue) {
  for (var i = 0; i < phoneValue.length; i++) {
    var charCode = phoneValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

phoneInput.addEventListener("blur", function () {
  phoneValue = phoneInput.value.trim();
  if (phoneValue === "") {
  } else {
    if (!validateCharCodePhone(phoneValue) || phoneValue.length !== 10) {
      phoneInput.classList.add("error");
      phoneError.textContent = "Wrong phone format.";
    } else {
      phoneInput.classList.remove("error");
      phoneError.textContent = "";
    }
  }
});

phoneInput.addEventListener("focus", function () {
  phoneInput.classList.remove("error");
  phoneError.textContent = "";
});

//VALIDAR ADRRESS
//Dirección: Al menos 5 caracteres con letras, números y un espacio en el medio.

function addressOk(stringsList) {
  if (stringsList.length > 2 || stringsList.length === 1) {
    return false;
  } else {
    if (
      stringsList[0].length >= 5 &&
      validateCharCode(stringsList[0]) &&
      validateCharCode(stringsList[1])
    ) {
      true;
    } else {
      false;
    }
  }
}

var addressError = document.getElementById("address-error");
addressInput.addEventListener("blur", function () {
  var addressValue = addressInput.value.trim();
  var stringsList = addressValue.split(" ");

  if (addressOk(stringsList) === false) {
    addressInput.classList.add("error");
    addressError.textContent = "Wrong address format.";
  } else {
    addressInput.classList.remove("error");
    addressError.textContent = "";
  }
});

addressInput.addEventListener("focus", function () {
  addressInput.classList.remove("error");
  addressError.textContent = "";
});

//VALIDAR LOCATION
//Localidad: Texto alfanumérico y debe tener más de 3 letras.

var locationError = document.getElementById("location-error");
function validateCharCodeLocation(locationValue) {
  for (var i = 0; i < locationValue.length; i++) {
    var charCode = locationValue.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) &&
      !(charCode > 64 && charCode < 91) &&
      !(charCode > 96 && charCode < 123)
    ) {
      return false;
    }
  }
  return true;
}
locationInput.addEventListener("blur", function () {
  locationValue = locationInput.value.trim();
  if (locationValue === "") {
  } else {
    if (!validateCharCode(locationValue) || locationValue.length < 3) {
      locationInput.classList.add("error");
      locationError.textContent = "Wrong location format.";
    } else {
      locationInput.classList.remove("error");
      locationError.textContent = "";
    }
  }
});

postCodeInput.addEventListener("focus", function () {
  locationInput.classList.remove("error");
  locationError.textContent = "";
});

//VALIDAR POST CODE
//Código Postal: Solo números y debe tener entre 4 y 5 números.

var postCodeError = document.getElementById("post-code-error");
function validateCharCodePostCode(postCodeValue) {
  for (var i = 0; i < postCodeValue.length; i++) {
    var charCode = postCodeValue.charCodeAt(i);
    if (charCode < 48 || charCode > 57) {
      return false;
    }
  }
  return true;
}

postCodeInput.addEventListener("blur", function () {
  postCodeValue = postCodeInput.value.trim();

  if (postCodeValue === "") {
  } else {
    if (
      !validateCharCodePostCode(postCodeValue) ||
      postCodeValue.length < 4 ||
      postCodeValue.length > 5
    ) {
      postCodeInput.classList.add("error");
      postCodeError.textContent = "Wrong post code format.";
    } else {
      postCodeInput.classList.remove("error");
      postCodeError.textContent = "";
    }
  }
});

postCodeInput.addEventListener("focus", function () {
  postCodeInput.classList.remove("error");
  postCodeError.textContent = "";
});

//VALIDAR EMAIL
//Email: Debe tener un formato de email válido.

var emailError = document.getElementById("email-error");
emailInput.addEventListener("blur", function () {
  var emailValue = emailInput.value.trim();
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
  } else {
    if (!emailRegex.test(emailValue)) {
      emailInput.classList.add("error");
      emailError.textContent = "Wrong email format.";
    } else {
      emailInput.classList.remove("error");
      emailError.textContent = "";
    }
  }
});

emailInput.addEventListener("focus", function () {
  emailInput.classList.remove("error");
  emailError.textContent = "";
});

//VALIDAR PASSWORD
//Contraseña: Al menos 8 caracteres, formados por letras y números.
// función para chequear que sean solo números o letras

//VALIDAR REPEAT PASSWORD
//Repetir Contraseña: Al menos 8 caracteres, formados por letras y números.

function validateCharCode(password1Value) {
  for (var i = 0; i < password1Value.length; i++) {
    var charCode = password1Value.charCodeAt(i);
    if (
      !(charCode > 47 && charCode < 58) &&
      !(charCode > 64 && charCode < 91) &&
      !(charCode > 96 && charCode < 123)
    ) {
      return false;
    }
  }
  return true;
}

var password2Input = document.getElementById("password2");
var password1Error = document.getElementById("password1-error");
var password2Error = document.getElementById("password2-error");

function validatePasswords() {
  var password1Value = password1Input.value.trim();
  var password2Value = password2Input.value.trim();

  if (password1Value === "" || password2Value === "") {
    return false;
  }

  if (password1Value !== password2Value) {
    password2Input.classList.add("error");
    password2Error.textContent = "Not coincident password.";
    return false;
  }

  if (password1Value.length < 8 || !validateCharCode(password1Value)) {
    password1Input.classList.add("error");
    password1Error.textContent = "Wrong password format.";
    return false;
  }

  password1Input.classList.remove("error");
  password1Error.textContent = "";
  password2Input.classList.remove("error");
  password2Error.textContent = "";
  return true;
}

password1Input.addEventListener("blur", validatePasswords);
password2Input.addEventListener("blur", validatePasswords);

password1Input.addEventListener("focus", function () {
  password1Input.classList.remove("error");
  password1Error.textContent = "";
});

password2Input.addEventListener("focus", function () {
  password2Input.classList.remove("error");
  password2Error.textContent = "";
});
