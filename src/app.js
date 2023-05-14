// import { renderCards } from './modules/render-cards.mjs'
// import { initialCards } from './data/cards-list.mjs'

document.addEventListener("DOMContentLoaded", function () {
  console.log('123')


  const buttonNewImage = document.querySelector('.profile__add-new-image-button')
  const popUpGroup = document.querySelector('.popup-group')
  const buttonsPopupClose = document.querySelectorAll('.popup__button-close')


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

  const addNewImagePopup = document.getElementById('edit-profile')
  const addNewImageButton = addNewImagePopup.querySelector('.popup__button-submit')

  addNewImageButton.onclick = (evt) => {
    evt.preventDefault()
    const inputName = document.getElementById('input-name')
    const inputProfileDescription = document.getElementById('input-description')
    const nameUser = document.querySelector('h1')
    const descriptionUser = document.querySelector('.profile__job')

    nameUser.innerHTML = inputName.value
    descriptionUser.innerHTML = inputProfileDescription.value
    closeAllPopups()
    addNewImagePopup.querySelector('form').reset()

  }


})