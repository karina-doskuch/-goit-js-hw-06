let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const conterValueText = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    conterValueText.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    conterValueText.textContent = counterValue;
});