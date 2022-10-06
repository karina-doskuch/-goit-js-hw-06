const validationInput = document.querySelector("#validation-input");
const dataLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", (event) => {
  if (dataLength === event.target.value.length) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
