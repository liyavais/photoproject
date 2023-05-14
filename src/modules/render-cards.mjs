import { initialCards } from "../data/cards-list.mjs"

const cardContainer = document.querySelector('.card-container')

function renderCard(card) {


   let newCard = document.createElement('div')
   let image = document.createElement('img')
   let cardDescription = document.createElement('div')
   let cardName = document.createElement('p')
   let likeImage = document.createElement('img')

   newCard.classList.add('card')
   image.classList.add('card__img')
   cardDescription.classList.add('card__description')
   cardName.classList.add('card__name')
   likeImage.classList.add('card__like')

   cardName.innerHTML = card.name
   image.src = card.link 
   likeImage.src = './src/images/Vector.svg'

   newCard.append(image)
   newCard.append(cardDescription)

   cardDescription.append(cardName)
   cardDescription.append(likeImage)

   cardContainer.append(newCard)
}



function renderCardsList() {
   cardContainer.innerHTML = ''
   for (let card of initialCards) {
      renderCard(card) 
   }
}

export { renderCardsList }
