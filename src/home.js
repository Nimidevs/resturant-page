
export function makeHeader(){
    const header = document.createElement('header');
    const headerH2 = document.createElement('h2');
    headerH2.innerText = "Mozzafiato";
    const divNav = document.createElement('div');
    divNav.classList.add('nav')
    const homeButton = document.createElement('button');
    homeButton.classList.add('home-button')
    homeButton.classList.add('active')
    homeButton.innerText = "Home";
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button')
    menuButton.innerText = "Menu";
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact-button')
    contactButton.innerText = "contact"
    divNav.append(homeButton);
    divNav.append(menuButton);
    divNav.append(contactButton);
    header.append(headerH2)
    header.append(divNav)

    return header
}
export function makeMain(){
    const main = document.createElement('main')
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home')
    const pBest = document.createElement('p')
    pBest.innerText = "Best pizza in your country"
    const pMade = document.createElement('p')
    pMade.innerText = "Made with passion since 1992"
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    img.src = "images/chef.png"
    divImg.appendChild(img)
    const pOrder = document.createElement('p')
    pOrder.innerText = "order online or visit us"
    homeDiv.append(pBest)
    homeDiv.append(pMade)
    homeDiv.append(divImg)
    homeDiv.append(pOrder)
    main.append(homeDiv)

    return main
}
 export function makeFooter(){
    const footer = document.createElement('footer')
    footer.innerText = 'copyright \u00A9 2022 NimiDev';

    return footer
}
