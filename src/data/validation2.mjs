let descriptionValidation = false
let nameValidation = false
let linkValidation = false

//проверка содержания description
function addConditionDescription(description) {

    if (description.value.length > 2 && description.value.length < 200) {
        descriptionValidation = true
        description.classList.remove('warning')
    } else {
        descriptionValidation = false
        description.classList.add('warning')

    }
}

//проверка содержания name
function addConditionName(name) {

    if (name.value.length > 2 && name.value.length < 40) {
        nameValidation = true
        name.classList.remove('warning')

    } else {
        nameValidation = false
        name.classList.add('warning')

    }

}

//проверка ссылки
function addConditionLink(link) {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/
    if (urlPattern.test(link.value)) {
        linkValidation = true
        link.classList.remove('warning')
    } else {
        linkValidation = false
        link.classList.add('warning')
    }
}


//блокировка кнопки
function setButtonValidation(inputs, button) {
    for (let input of inputs) {
        if (input.classList.contains('warning')) {
            return true
        }
    }
    return false
}

const editProfileInputsValidation = () => {
    const forms = document.querySelectorAll('form')
    for (let form of forms) {
        setValidationForm(form)
    }
}


//валидация
function setValidationForm(form) {


    console.log(form)

    let inputs = form.querySelectorAll('input[type="text"]')
    let buttonSubmitForm = form.querySelector('input[type="submit"]')

    buttonSubmitForm.disabled = true

    for (let input of inputs) {
        input.classList.add('warning')
        input.oninput = () => {
            if (input.dataset.inputcontain === 'name') {
                addConditionName(input)
            }
            if (input.dataset.inputcontain === 'description') {
                addConditionDescription(input)
            }
            if (input.dataset.inputcontain === 'link') {
                addConditionLink(input)
            }

            buttonSubmitForm.disabled = setButtonValidation(inputs, buttonSubmitForm)
        }
    }
}


export { editProfileInputsValidation }









