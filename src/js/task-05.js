const textInput = document.querySelector("#name-input");
const outputInput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    let text = event.target.value;

    if (text === "") {
      text = "Anonymous";
    }

    outputInput.textContent = text;
});
