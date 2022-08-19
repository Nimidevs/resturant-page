export function makeHome(){
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('home')
    const pBest = document.createElement('p')
    pBest.innerText = "Best pizza in your country"
    const pMade = document.createElement('p')
    pMade.innerText = "Made with passion since 1992"
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    img.src = "../dist/images/chef.png"
    divImg.appendChild(img)
    const pOrder = document.createElement('p')
    pOrder.innerText = "order online or visit us"
    homeDiv.append(pBest)
    homeDiv.append(pMade)
    homeDiv.append(divImg)
    homeDiv.append(pOrder)

    return homeDiv
}