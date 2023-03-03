
const headingBtn = document.getElementById('headings-btn')

// Event listener adding
headingBtn.addEventListener("click",(evt)=>{
    console.log("showing headings")
    activateStyle(evt.target)
})

//Event handlers


// Functions
const activateStyle = (elm) => {
    elm.classList.add('toolkit-active-btn')
}




const codeToDOM = `<div class="layout-container">
<div class="toolkit">
    <button id = "headings-btn" class="centered btn-dark toolkit-btn" title="Show Headings"><!--i class="fa-light fa-heading"></i--> H</button>
    <button id = "list-btn" class="centered btn-dark toolkit-btn" title="Show Lists"><!--i class="fa-light fa-heading"></i--> Ul</button>
    <button class="centered btn-dark toolkit-btn" title="Currently Focused element while tabbing"><!--i class="fa-light fa-heading"></i--> F</button>
</div>
</div>`




const bodyElement = document.querySelector('body')

// Adding container for the identification divs

const divContainer = document.createElement("div")

/*divContainer.style.position = 'fixed'
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

*/