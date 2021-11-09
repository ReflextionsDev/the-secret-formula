const btn = document.querySelector('button')
const input = document.querySelector('#testInput')


btn.addEventListener('click', () => {
    alert(input.value)
})