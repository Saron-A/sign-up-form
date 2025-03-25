let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confPassword = document.querySelector("#confpass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    input.setCustomValidity(""); // Resetting the custom validity message
  });
  inputs.forEach((input) => {
    if (input.value === "") {
      input.setCustomValidity("This field is required");
    }
  });
  checkInputs();

  if (form.checkValidity()) {
    alert("Form submitted successfully");
  } else form.reportValidity();
});

function checkInputs() {
  const namePattern = /[A-Z][a-z]+/;

  // Validate first name and last name
  if (!namePattern.test(fname.value)) {
    fname.setCustomValidity("First name must start with a capital letter");
  }
  if (!namePattern.test(lname.value)) {
    lname.setCustomValidity("Last name must start with a capital letter");
  }

  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email");
  }
  if (password.value.length < 8) {
    password.setCustomValidity(
      "Password must contain at least 8 characters, including UPPER/lowercase and numbers"
    );
  }
  if (password.value !== confPassword.value) {
    confPassword.setCustomValidity("Passwords don't match");
  }
}
