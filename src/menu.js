export function makeMenu() {
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')
    //Menu items
    //Menu item 1
    const menuItem1 = document.createElement("div")
    menuItem1.classList.add('menu-item')
    const item1Img = document.createElement('img')
    item1Img.src = "../images/salsiccia.png"
    const item1H2 = document.createElement('h2')
    item1H2.innerText = "Salsiccia"
    const item1P = document.createElement('p')
    item1P.innerText = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    menuItem1.append(item1Img)
    menuItem1.append(item1H2)
    menuItem1.append(item1P)

    //menu item 2
    const menuItem2 = document.createElement("div")
    menuItem2.classList.add('menu-item')
    const item2Img = document.createElement('img')
    item2Img.src = "../images/gamberi.png"
    const item2H2 = document.createElement('h2')
    item2H2.innerText = "Gamberi"
    const item2P = document.createElement('p')
    item2P.innerText = "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    menuItem2.append(item2Img)
    menuItem2.append(item2H2)
    menuItem2.append(item2P)

    //menu item 3
    const menuItem3 = document.createElement("div")
    menuItem3.classList.add('menu-item')
    const item3Img = document.createElement('img')
    item3Img.src = "../images/pepe.png"
    const item3H2 = document.createElement('h2')
    item3H2.innerText = "Pepe"
    const item3P = document.createElement('p')
    item3P.innerText = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    menuItem3.append(item3Img)
    menuItem3.append(item3H2)
    menuItem3.append(item3P)

    //Menu item 4
    const menuItem4 = document.createElement("div")
    menuItem4.classList.add('menu-item')
    const item4Img = document.createElement('img')
    item4Img.src = "../images/disgustoso.png"
    const item4H2 = document.createElement('h2')
    item4H2.innerText = "Disgustoso"
    const item4P = document.createElement('p')
    item4P.innerText = "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    menuItem4.append(item4Img)
    menuItem4.append(item4H2)
    menuItem4.append(item4P)

    //menu item 5
    const menuItem5 = document.createElement("div")
    menuItem5.classList.add('menu-item')
    const item5Img = document.createElement('img')
    item5Img.src = "../images/colorato.png"
    const item5H2 = document.createElement('h2')
    item5H2.innerText = "Colorato"
    const item5P = document.createElement('p')
    item5P.innerText = "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    menuItem5.append(item5Img)
    menuItem5.append(item5H2)
    menuItem5.append(item5P)

    //menu item 6
    const menuItem6 = document.createElement("div")
    menuItem6.classList.add('menu-item')
    const item6Img = document.createElement('img')
    item6Img.src = "../images/pomodoro.png"
    const item6H2 = document.createElement('h2')
    item6H2.innerText = "Pomodoro"
    const item6P = document.createElement('p')
    item6P.innerText = "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    menuItem6.append(item6Img)
    menuItem6.append(item6H2)
    menuItem6.append(item6P)

    //menu item 7
    const menuItem7 = document.createElement("div")
    menuItem7.classList.add('menu-item')
    const item7Img = document.createElement('img')
    item7Img.src = "../images/crema.png"
    const item7H2 = document.createElement('h2')
    item7H2.innerText = "Crema"
    const item7P = document.createElement('p')
    item7P.innerText = "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    menuItem7.append(item7Img)
    menuItem7.append(item7H2)
    menuItem7.append(item7P)

    //meny item 8
    const menuItem8 = document.createElement("div")
    menuItem8.classList.add('menu-item')
    const item8Img = document.createElement('img')
    item8Img.src = "../images/carne.png"
    const item8H2 = document.createElement('h2')
    item8H2.innerText = "Carne"
    const item8P = document.createElement('p')
    item8P.innerText = "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    menuItem8.append(item8Img)
    menuItem8.append(item8H2)
    menuItem8.append(item8P)
    
    menuDiv.append(menuItem1)
    menuDiv.append(menuItem2)
    menuDiv.append(menuItem3)
    menuDiv.append(menuItem4)
    menuDiv.append(menuItem5)
    menuDiv.append(menuItem6)
    menuDiv.append(menuItem7)
    menuDiv.append(menuItem8)

    return menuDiv
}