const inputChange = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputChange.addEventListener('input', event => {
    spanText.style.fontSize = `${event.target.value }px`
});