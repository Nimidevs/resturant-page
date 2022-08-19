export function makeContact(){
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact')

    const contactP = document.createElement('p')
    contactP.innerText = "📞 123 456 789"

    const adressP = document.createElement('p')
    adressP.innerText = "🏠 Hollywood Boulevard 42, Los Angeles, USA"

    const imageP = document.createElement('img')
    imageP.src = "images/restaurant-location.png"

    contactDiv.append(contactP)
    contactDiv.append(adressP)
    contactDiv.append(imageP)

    return contactDiv
}