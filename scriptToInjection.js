

let codeToDOM = `<div class="layout-container">
<div class="toolkit">
    <button id = "headings-btn" class="centered btn-dark toolkit-btn" title="Show Headings"><!--i class="fa-light fa-heading"></i--> H</button>
    <button id = "list-btn" class="centered btn-dark toolkit-btn" title="Show Lists"><!--i class="fa-light fa-heading"></i--> Ul</button>
    <button class="centered btn-dark toolkit-btn" title="Currently Focused element while tabbing"><!--i class="fa-light fa-heading"></i--> F</button>
</div>
</div>`

let toolkitScript = `const headingBtn = document.getElementById('headings-btn')

// Event listener adding
headingBtn.addEventListener("click",(evt)=>{
    console.log("showing headings")
    activateStyle(evt.target)
})

//Event handlers


// Functions
const activateStyle = (elm) => {
    elm.classList.add('toolkit-active-btn')
}`

const bodyElement = document.querySelector('body')

const divContainer = document.createElement("div")
divContainer.innerHTML = codeToDOM
bodyElement.appendChild(divContainer)

// Functions
function addCss(url) {

    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
  
    head.appendChild(link);
  }

function addJS(code) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    try {
      s.appendChild(document.createTextNode(code));
      document.body.appendChild(s);
    } catch (e) {
      s.text = code;
      document.body.appendChild(s);
    }
}

addJS(toolkitScript)
addCss('https://cdn.jsdelivr.net/gh/ernesto-code/floating-script-picker/style.css')

