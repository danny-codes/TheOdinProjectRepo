let form = document.getElementById('myForm');
let email = document.getElementById('email');
let country = document.getElementById('country');
let postal = document.getElementById('postal');
let password = document.getElementById('password');
let passwordConfirm = document.getElementById('passwordConfirm');

function checkEmail() {
    email.setCustomValidity("");

    if (email.validity.valueMissing) {
        email.setCustomValidity('Please enter your email..');
    } else if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address.');
    } else if (email.validity.tooShort) {
        email.setCustomValidity(`Email needs to be at least ${email.minLength} characters; you entered ${email.value.length}.`);
    }

    else if (!email.validity.valid) {
    email.setCustomValidity('Not a valid email address. E.g. of a valid email example@example.com');
    }
    email.reportValidity();
};

function checkPostalCode() {
  const constraints = {
    US: [
      "^\\d{5}(?:[-\\s]\\d{4})?$",
      "US postal code must have 5 digits: e.g. 50000",
    ],
    CA: [
        "^[ABCEGHJKLMNPRSTVXY]{1}\\d{1}[A-Z]{1} *\\d{1}[A-Z]{1}\\d{1}$",
        "Canadian postal codes must have 6 characters. It follows a format of A1A 1A1, where A is a letter and 1 is a digit.",
    ],
    GB: [
      "[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}",
      "UK postal codes usually contain letters, numbers, and a space (e.g. SW1A 1AA)",
    ],
    AU: ["^(0[289][0-9]{2})|([1-9][0-9]{3})$", "Australian postal code is a four-digit number: e.g. 2000"],
  };

  const country = document.getElementById("country").value;
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  if (constraint.test(postal.value)) {
    postal.setCustomValidity("");
  } else {
    postal.setCustomValidity(constraints[country][1]);
  }
  console.log("Postal validity:", postal.checkValidity());
  postal.reportValidity();
};

window.onload = () => {
    email.onchange = checkEmail;
    document.getElementById('country').onchange = checkPostalCode;
    document.getElementById('postal').oninput = checkPostalCode;
    document.getElementById('password').oninput = passwordCheck;
    passwordConfirm.oninput = confirmPassword;
};

function passwordCheck() {
  password.setCustomValidity("");

  if (password.validity.valueMissing) {
    password.setCustomValidity("Please enter your password.");
  } else if (password.validity.tooShort) {
    password.setCustomValidity(
      `Password must be at least ${password.minLength} characters; you entered ${password.value.length}.`
    );
  } else {
    password.setCustomValidity('');
  }
  password.reportValidity();
}

function confirmPassword() {
  passwordConfirm.setCustomValidity("");
  if (passwordConfirm.value !== password.value) {
    passwordConfirm.setCustomValidity("Passwords must match");
  } else {
    passwordConfirm.setCustomValidity("");
  }
  passwordConfirm.reportValidity();
}

email.addEventListener('blur', checkEmail);
country.addEventListener('blur', checkPostalCode);
postal.addEventListener('blur', checkPostalCode);
password.addEventListener('blur', passwordCheck);
passwordConfirm.addEventListener('blur', confirmPassword);


form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
  alert("All inputs are valid! You can proceed.");
} else {
    form.reportValidity();
  }
});