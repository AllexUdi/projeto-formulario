const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSucessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "O nome de usuário é obrigatório.");
  } else {
    setSucessFor(email);
  }
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha deve ter no mínimo 7 caracteres.");
  } else if (!/^[^a-zA-Z0-9][A-Z][a-zA-Z].{4,}$/.test(passwordValue)) {
    setErrorFor(
      password,
      "A senha deve começar com caractere especial, seguida de letra maiúscula e ter no mínimo 7 caracteres."
    );
  } else {
    setSucessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória");
  } else if (passwordValue != passwordConfirmationValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem");
  } else {
    setSucessFor(passwordConfirmation);
  }

  // Verifica se todos os .form-control têm a classe 'sucess'
  const formControls = document.querySelectorAll(".form-control");
  const allValid = Array.from(formControls).every((formControl) =>
    formControl.classList.contains("sucess")
  );

  if (allValid) {
    alert("Enviado!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //Adiciona a mensagem de erro
  small.innerText = message;

  //Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;

  //Adiciona a classe de sucesseo
  formControl.className = "form-control sucess";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
