// all elements

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPssword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");

const showError = (input,message) => {

  let parentElement = input.parentElement;
  parentElement.classList = 'form-control error';
  const small = parentElement.querySelector ("small");
  const successIcon = parentElement.querySelectorAll("i")[1];
  [0];
  const errorIcon = parentElement.querySelectorAll("i")[1];
  errorIcon.style.visibility = 'visible';
  successIcon.style.visibility = 'hidden';
  small.innerText = message;
}

const showSuccess = (input,) => {

  let parentElement = input.parentElement;
  parentElement.classList = 'form-control success';
  const small = parentElement.querySelector ("small");
  const successIcon = parentElement.querySelectorAll("i")[1];
  [0];
  const errorIcon = parentElement.querySelectorAll("i")[1];
  errorIcon.style.visibility = 'hidden';
  successIcon.style.visibility = 'visible';
  small.innerText = message;
}

const checkEmpy = (elements)=> {

  elements.forEach((elements) => {
    if(elements.value === '') {
      elements.parentElement.classList = 'form-control error';
      showError(element,'input required');
    }else{
      showSuccess(elements);
    }
  });
}

const checkEmail = (email) => {
    const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (reg.test(email.value)){
      showSuccess(email);
    }else{
      showError(email, 'Invalid Email');

    }
}

const checkPsswordLength = (Password, input, min , max ) => {
  if(input.value.length < min ) {
    showError (input, 'Password atleast 6 character ');
  } else if (input.value.length > max  ) {
    showError( input , 'Password maximum character is 10')
  }else {
    showSuccess(input );
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkEmpty([username ,email, Password, confirmPassword]);
  checkEmail(email);

  checkPsswordLength(Password, 6,10);

});
