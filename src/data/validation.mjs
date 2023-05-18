let forms = document.querySelectorAll('form')

const inputValidationHandler = () => {
    for (let form of forms) {
        inputLengthValidation(form, 5, 20)
    }
function inputLengthValidation(form, min, max) {
    let inputs = form.querySelectorAll('input[type="text"]')
    let buttonSubmit = form.querySelector('input[type="submit"]')
    let link = form.querySelector('#link-by-user')
    let linkPattern = /^(ftp|http|https):\/\/[^ "]+$/
    buttonSubmit.disabled = true

    for (let input of inputs) {

        input.oninput = () => {
            if (input.value.length > max || input.value.length <= min) {
                input.classList.add('warning')
                buttonSubmit.disabled = true
            } else {
                input.classList.remove('warning')
                buttonSubmit.disabled = false
            }
        }

        // input.oninput = () => {
        //     if (link.value != linkPattern) {
        //         input.classList.add('warning')
        //         buttonSubmit.disabled = true  
        //     } else {
        //         input.classList.remove('warning')
        //         buttonSubmit.disabled = false
        //     }

       
    }
}}

export { inputValidationHandler }