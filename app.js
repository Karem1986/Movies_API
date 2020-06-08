fetch( 'https://ghibliapi.herokuapp.com/films')
.then(response => { //JSON data feed URL loads my films in json
    return response.json()//converts JSON data into Javascript data 
})

.then(data => {
     //Display the cards for the movies here 
 data.forEach(movie => {
     const card = document.createElement('div')
     card.setAttribute('class', 'card')

     const h1 = document.createElement('h1')
    h1.textContent = movie.title

    const p = document.createElement('p')
    movie.description = movie.description.substring(0, 300)
    p.textContent = `${movie.description}...`

     container.appendChild(card)
     card.appendChild(h1)
     card.appendChild(p)
 });


})

.catch(err => {
    console.log(err)
})

//UI//

const app = document.getElementById('root')

//create logo image
const  logo =  document.createElement('img')
logo.src = 'logo.png'

//create container 
const container = document.createElement('div')
container.setAttribute('class', 'container')

//append logo to container 
app.appendChild(logo)
app.appendChild(container)




