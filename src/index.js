import { makeHeader, makeMain, makeFooter } from "./home";
import {makeMenu} from "./menu";
import { makeHome } from "./mainhome";
import { makeContact } from "./contact";
const content = document.getElementById('content')


const _header = makeHeader()
const _main = makeMain()
const _footer = makeFooter()

const _homePage = makeHome()
const _menuPage = makeMenu();
const _contactPage = makeContact()
function removeCell(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

content.append(_header)
content.append(_main)
content.append(_footer)

const main  = document.querySelector('main')
const homeButton = document.querySelector('.home-button')
const menuButton = document.querySelector('.menu-button')
const contactButton = document.querySelector('.contact-button')

homeButton.addEventListener('click', function(){
    contactButton.classList.remove('active')
    menuButton.classList.remove('active')
    homeButton.classList.add('active')
    removeCell(main)
    main.append(_homePage)
})
menuButton.addEventListener('click', function(){
    homeButton.classList.remove('active')
    contactButton.classList.remove('active')
    menuButton.classList.add('active')
    removeCell(main)
    main.append(_menuPage)
})
contactButton.addEventListener('click', function(){
    menuButton.classList.remove('active')
    homeButton.classList.remove('active')
    contactButton.classList.add('active')
    removeCell(main)
    main.append(_contactPage)
})

