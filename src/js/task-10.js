function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let size = 30;
  let divs = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    size += 10;
    div.style.background = getRandomHexColor();
    divs.push(div);
  }
  divBoxesRef.append(...divs);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}

const inputRef = document.querySelector("div#controls > input");
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");
const divBoxesRef = document.querySelector("div#boxes");

buttonCreateRef.addEventListener("click", (event) => {
  const amount = parseInt(inputRef.value);
  createBoxes(amount);
});

buttonDestroyRef.addEventListener("click", (event) => {
  destroyBoxes();
});
