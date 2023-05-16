let inputTextList = document.querySelectorAll('input[type="text"]')

const inputLengthValidation = (input, min, max) => {
    input.oninput = () => {
        if (input.value.length > max || input.value.length <= min) {
            input.classList.add('warning')
        } else {
            input.classList.remove('warning')
        }
    }
}

for (let textInput of inputTextList) {
    inputLengthValidation(textInput, 5, 20)
}



export { inputLengthValidation }