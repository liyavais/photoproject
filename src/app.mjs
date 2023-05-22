import { renderCardsList } from './modules/render-cards.mjs'
// import { initialCards } from './data/cards-list.mjs'
// import { inputValidationHandler } from './data/validation.mjs'
import { editProfileInputsValidation } from './data/validation2.mjs'
import { renderCats } from './modules/render-cats.mjs'


const buttonNewImage = document.querySelector('.profile__add-new-image-button')
const popUpGroup = document.querySelector('.popup-group')
const buttonsPopupClose = document.querySelectorAll('.popup__button-close')
const catButton = document.querySelector('.button__cat')

for (let button of buttonsPopupClose) {
    button.onclick = closeAllPopups
}

function closeAllPopups() {
    console.log('закрыт')
    const popUpContainerList = document.querySelectorAll('.popup__container')

    for (let item of popUpContainerList) {
        item.classList.remove('popup__container--active')
    }

    popUpGroup.classList.remove('popup--active')
}

function openNeededPopup(element) {
    const neededPopupContainer = element.dataset.idofcontainer
    const neededPopup = document.getElementById(neededPopupContainer)
    neededPopup.classList.add('popup__container--active')
    popUpGroup.classList.add('popup--active')
}

const addNewNamePopup = document.getElementById('edit-profile')
const addNewNameButton = addNewNamePopup.querySelector('#add-new-name')

addNewNameButton.onclick = (evt) => {
    evt.preventDefault()
    const inputName = document.getElementById('input-name')
    const inputProfileDescription = document.getElementById('input-description')
    const nameUser = document.querySelector('h1')
    const descriptionUser = document.querySelector('.profile__job')

    nameUser.innerHTML = inputName.value
    descriptionUser.innerHTML = inputProfileDescription.value
    closeAllPopups()
    addNewNamePopup.querySelector('form').reset()
}


const addNewImagePopup = document.getElementById('add-new-image-profile')
const addNewImageButton = addNewImagePopup.querySelector('#add-new-image')

addNewImageButton.onclick = (evt) => {
    evt.preventDefault()
    const placeName = document.getElementById('place-name')
    const linkByUser = document.getElementById('link-by-user')
    console.log(placeName.value, linkByUser.value)
    const newObject = {
        name: placeName.value,
        link: linkByUser.value
    }
    console.log(newObject)
    initialCards.push(newObject)
    renderCardsList()
    closeAllPopups()
    addNewImagePopup.querySelector('form').reset()

}

catButton.onclick = renderCats


async function postCards(cards) {
fetch('https://photoproject-63711-default-rtdb.firebaseio.com/db/cards-list.json', {
    method: 'POST',
    body: JSON.stringify(cards)
})
}

// async function getCards() {
//     fetch('https://photoproject-63711-default-rtdb.firebaseio.com/database/cards-list.json', {
//         method: 'GET'
//         })
//         .then(response => response.json())
//         .then(response => console.log(response))
           
//     }


// postCards(initialCards)


async function getCards() {
    const getData = async (url) => {
        const res = await fetch(url)
        const json = await res.json()
        // console.log(json)
        return json
    }

    const url = 'https://photoproject-63711-default-rtdb.firebaseio.com/database/cards-list.json'
    

    const cardsListFromDatabase = await getData(url)
    return cardsListFromDatabase
}

const cardsNew = await getCards()
console.log(cardsNew)


for (let key in cardsNew){
    console.log(cardsNew[key])
    renderCardsList(cardsNew[key])
}

// window.addEventListener('DOMContentLoaded', inputValidationHandler)

window.addEventListener('DOMContentLoaded', editProfileInputsValidation)

console.log(renderCardsList)

window.openNeededPopup = openNeededPopup



