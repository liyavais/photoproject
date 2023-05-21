async function renderCats() {

    const getData = async (url) => {
        const res = await fetch(url)
        const json = await res.json()
        return json
    }

    const url = 'https://api.thecatapi.com/v1/images/search?limit=10'

    async function getCatsArray() {
        try {
            return await getData(url)
        } catch (error) {
            console.log(error.message)
        }
    }

    const catsArray = await getCatsArray()
    console.log(catsArray)

    const images = document.querySelectorAll('.card__img')
    for (let i = 0; images.length > i; i++) {
        images[i].src = catsArray[i].url
    }

}

export { renderCats }
