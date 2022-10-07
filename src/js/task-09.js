function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const changeColor = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColor.addEventListener('click', event => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  colorSpan.textContent = color;

});








