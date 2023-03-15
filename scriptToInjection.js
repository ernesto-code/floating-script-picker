

let codeToDOM = `   <div class="layout-container" id="layout-container">
<div id="marked-headings"></div>
<div id="marked-listslistitems"></div>
<div id="marked-brs"></div>
<div id="marked-liveregions"></div>
<div id="marked-images-alt-text"></div>
<div id="marked-images-null-alt-text"></div>
<div id="marked-hrefs"></div>
<div id="marked-aria-label"></div>
</div>

<!--div id='page-title-container' class="tooltip">
<div class="tooltip-text"> Page title: <strong>Starbucks Home page</strong> </div>
<button id="close-page-title-btn" class="tooltip-btn"><i class="fa-solid fa-times"></i></button>
</div-->
<div class="toolkit">
<!-- Tooltip -->
<!--div class="tooltip">
    <div class="tooltip-icon"><i class="fa-solid fa-caret-left"></i></div>
    <div class="tooltip-text">Heading asdasdas das</div>
</div   -->
<!-- Headings -->
<button id = "headings-btn" class="centered btn-dark toolkit-btn">
    <i class="fa-solid fa-h"></i>
</button>
<!-- Lists/Listitems -->
<button id = "lists-btn" class="centered btn-dark toolkit-btn">
    <i class="fa-solid fa-list-ul"></i>
</button>
<!-- Alternative text -->
<button id = 'image-alt-text-btn' class="centered btn-dark toolkit-btn" >
    <i class="fa-regular fa-image fa-lg"></i>
</button>
<!-- Null alternative text -->
<button id = 'image-null-alt-text-btn' class="centered btn-dark toolkit-btn" >
    <i class="fa-regular fa-images fa-lg"></i>
</button>
<!-- href -->
<button id='href-btn' class="centered btn-dark toolkit-btn">
    href
</button>
<!-- Br finder -->
<button id='brfinder-btn' class="centered btn-dark toolkit-btn" >
    Br
</button>
<!-- Live regions -->
<button id = 'liveregions-btn' class="centered btn-dark toolkit-btn">
    <i class="fa-solid fa-ear-listen fa-lg"></i>
</button>
<!-- Focus indicator -->
<button id ='focus-indicator-btn' class="centered btn-dark toolkit-btn">
    <i class="fa-solid fa-vector-square"></i>
</button>
<!-- currently focused-->
<button id ='currently-focused-btn' class="centered btn-dark toolkit-btn">
    <i class="fa-solid fa-expand"></i>
</button>
<!-- Text spacing -->
<button id ='text-spacing-btn' class="centered btn-dark toolkit-btn">
    <i class="fa-solid fa-text-height"></i>
</button>
<!-- Aria-label -->
<button id = "aria-labels-btn" class="centered btn-dark toolkit-btn">
    <i class="fa-solid fa-spell-check fa-lg"></i>
</button>
<!-- Page title -->
<button id="page-title-btn" class="centered btn-dark toolkit-btn" style="border-bottom: none;">
    Title
</button>
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

/*function addJS(code) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    try {
      s.appendChild(document.createTextNode(code));
      document.body.appendChild(s);
    } catch (e) {
      s.text = code;
      document.body.appendChild(s);
    }
}*/

function addJSFile(urlCDN) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = urlCDN
  try {
    s.appendChild(document.createTextNode(code));
    document.body.appendChild(s);
  } catch (e) {
    s.text = urlCDN;
    document.body.appendChild(s);
  }
}

addJSFile('https://cdn.jsdelivr.net/gh/ernesto-code/floating-script-picker/script.js')
//addJS(toolkitScript)
addCss('https://cdn.jsdelivr.net/gh/ernesto-code/floating-script-picker/style.css')

