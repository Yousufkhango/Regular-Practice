// hitesh github api
const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
// hitesh Image
const imgUrl = 'https://images.pexels.com/photos/7699321/pexels-photo-7699321.jpeg?auto=compress&cs=tinysrgb&w=600'
// hitesh followers
const hiteshFollowers = 'Hello world'

// Html start
function cont(){
    let div = document.createElement('div')
    document.body.appendChild(div)
    document.querySelector('div').setAttribute('class', 'container')
}
cont()

function card(){
    let div = document.createElement('div')
    let cont = document.querySelector('.container')
    cont.appendChild(div)
    cont.querySelector('div').setAttribute('class', 'card')
}
card()

function img(){
    let img = document.createElement('img')
    let card = document.querySelector('.card')
    card.appendChild(img)
    card.querySelector('img').setAttribute('src', `${imgUrl}`)
}
img()

function followers(){
    let p = document.createElement('p')
    let card = document.querySelector('.card')
    card.appendChild(p)
    card.querySelector('p').setAttribute('class', 'followers')
    card.querySelector('.followers').innerHTML = `${hiteshFollowers}`
}
followers()

// Html start


// XML HTTP REQUEST
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.github.com/users/hiteshchoudhary')
xhr.onReadyStatechange = () => {
    console.log(xhr.readyState);
}