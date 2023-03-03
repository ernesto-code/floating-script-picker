const bodyElement = document.querySelector('body')

// Adding container for the identification divs
const divContainer = document.createElement("div")
divContainer.style.position = 'fixed'
divContainer.style.top = '0'
divContainer.style.left = '0'
divContainer.style.visibility = 'visible'
divContainer.style.zIndex = '2147483646'

//divContainer.style.backgroundColor = 'rgba(255,255,255,0.5)'

// Creating the identification divs according to the HTML element
const divIdentifier = document.createElement("div")
divIdentifier.style.width = "50px"
divIdentifier.style.height = "90vh"
divIdentifier.style.backgroundColor = "#3e3e3e"
divIdentifier.style.margin = "20px"
divIdentifier.style.borderRadius = "5px"



//divIdentifier.innerHTML = { `<p>Identifier</p>`}

// Adding divs to container
divContainer.appendChild(divIdentifier)

// Insering container in DOM

bodyElement.appendChild(divContainer)