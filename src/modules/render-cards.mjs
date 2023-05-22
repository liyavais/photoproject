
import { initialCards } from "../data/cards-list.mjs"
// import { cardsNew } from "../app.mjs"


const cardContainer = document.querySelector('.card-container')

function renderCard(card) {

   let newCard = document.createElement('div')
   let image = document.createElement('img')
   let cardDescription = document.createElement('div')
   let cardName = document.createElement('p')
   let likeButton = document.createElement('button')
   let deleteButton = document.createElement('button')


   newCard.classList.add('card')
   image.classList.add('card__img')
   cardDescription.classList.add('card__description')
   cardName.classList.add('card__name')
   likeButton.classList.add('card__like')
   deleteButton.classList.add('card__delete')


   cardName.innerHTML = card.name
   image.src = card.link

   newCard.append(image)
   newCard.append(deleteButton)
   newCard.append(cardDescription)

   cardDescription.append(cardName)
   cardDescription.append(likeButton)

   cardContainer.append(newCard)


   image.onclick = function () {
      console.log('тык')
      let popUpGroup = document.querySelector('.popup-group')
      let popUpImageContainer = document.getElementById('current-image-container')
      let image = document.getElementById('current-image')
      

      console.log(card.link)

      image.src = card.link
      popUpGroup.classList.add('popup--active')
      popUpImageContainer.classList.add('popup__container--active')
   }

   likeButton.onclick = function () {
      likeButton.classList.toggle('added_like')
   }

   deleteButton.onclick = function () {
      let i = cardsNew.indexOf(card)
      console.log(i)
      cardsNew.splice(i, 1)
      renderCardsList()
   }

}

function renderCardsList(cardsNew) {
   cardContainer.innerHTML = ''
   for (let card of cardsNew) {
      console.log(card)
      renderCard(card)
   }
}



export { renderCardsList }
