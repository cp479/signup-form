
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirm-password");
const warning = document.querySelector("#warning");
const lightBoder = getComputedStyle(document.body).getPropertyValue("--light-border");

function checkSameValue(event, target) {
  return event.target.value === target.value;
}

// Check matching passwords

function setInvalidState() {
  passwordInput.setCustomValidity("Passwords do not match.");
  passwordInput.style.borderColor = "red";
  confirmInput.style.borderColor = "red";
  warning.textContent = "* Passwords do not match"
}

function setValidState() {
  passwordInput.setCustomValidity("");
  passwordInput.style.borderColor = lightBoder;
  confirmInput.style.borderColor = lightBoder;
  warning.textContent = "";
}

passwordInput.addEventListener('change', (e) => {
  if (!checkSameValue(e, confirmInput)) {
    setInvalidState();
    return;
  }
  setValidState();
})

confirmInput.addEventListener('change', (e) => {
  if (!checkSameValue(e, passwordInput)) {
    setInvalidState();
    return;
  }
  setValidState();
})