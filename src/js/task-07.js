const inputChange = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputChange.addEventListener('change', event => {
    spanText.style.fontSize = `${event.target.value }px`
});