import arr from './modules/db.js'

let cont = document.querySelector('.container')

function reload(arr) {
    for (let item of arr) {
        let box = document.createElement('div')
        let box_img = document.createElement('img')
        let black = document.createElement('div')
        let texts = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('h1')
        let icons = document.createElement('div')
        let dollar_img = document.createElement('img')
        let price = document.createElement('p')
        let stars_img = document.createElement('img')
        let stars = document.createElement('p')
        let box_icon = document.createElement('img')
        let icon_box = document.createElement('p')
        let btn = document.createElement('button')

        box.classList.add('box')
        btn.classList.add('btn')
        box_img.src = item.image
        black.classList.add('black')
        icons.classList.add('icons')
        texts.classList.add('texts')
        dollar_img.src = './img/dollar.svg'
        stars_img.src = './img/stars.svg'
        box_icon.src = './img/box.svg'

        h1.innerHTML = item.category
        p.innerHTML = item.description.slice(0, 90)
        price.innerHTML = item.price
        stars.innerHTML = item.rating.rate
        icon_box.innerHTML = item.rating.count
        btn.innerHTML = 'В избранное'

        function clicks(btn) {
            btn.onclick = () => {
                btn.innerHTML = 'Добавлено'
                btn.style.backgroundColor = '#1F86FF'
                btn.style.color = 'white'
                btn.style.border = '2px solid #1F86FF'
                btn.onclick = () => {
                    btn.innerHTML = 'В избранное'
                    btn.style.backgroundColor = 'white'
                    btn.style.color = 'black'
                    clicks(btn)
                }
            }
        }

        clicks(btn)


        cont.append(box)
        box.append(box_img, black)
        texts.append(h1, p)
        black.append(texts, icons, btn)
        icons.append(dollar_img, price, stars_img, stars, box_icon, icon_box)
    }
}

let tovar = document.querySelector('body h1')
tovar.innerHTML = `В корзине: ${arr.length} товар`

let five = document.querySelector('.five')
let all = document.querySelector('.all')

function scolko(reload) {
    five.onclick = (event) => {
        event.preventDefault();
        reload(arr[0 - 4])
    }
    all.onclick = () => {
        event.preventDefault();
        reload(arr)
    }
}

scolko(reload)

let menu = document.querySelector('.menu')
let active = document.querySelector('.active')

function openClose() {
    menu.onclick = () => {
        active.style.left = '73%'
        active.style.transition = '1s ease'
        menu.onclick = () => {
            active.style.left = '100%'
            active.style.transition = '1s ease'
            openClose()
        }
    }
}

openClose()