

let codeToDOM = `<div class="layout-container" id="layout-container">
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
        <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"/>
    </svg>  
</button>

<div id="expandable-section" style="display:none">
        <!-- Lists/Listitems -->
    <button id = "lists-btn" class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
            <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
        </svg>
    </button>
    <!-- Alternative text -->
    <button id = 'image-alt-text-btn' class="centered btn-dark toolkit-btn" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
            <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
        </svg>
        <i class="fa-regular fa-image fa-lg"></i>
    </button>
    <!-- Null alternative text -->
    <button id = 'image-null-alt-text-btn' class="centered btn-dark toolkit-btn" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
            <path d="M160 80H512c8.8 0 16 7.2 16 16V320c0 8.8-7.2 16-16 16H490.8L388.1 178.9c-4.4-6.8-12-10.9-20.1-10.9s-15.7 4.1-20.1 10.9l-52.2 79.8-12.4-16.9c-4.5-6.2-11.7-9.8-19.4-9.8s-14.8 3.6-19.4 9.8L175.6 336H160c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16zM96 96V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px" fill="white">
            <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/>
        </svg>
    </button>
    <!-- Focus indicator -->
    <button id ='focus-indicator-btn' class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
            <path d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z"/>
        </svg>
        
    </button>
    <!-- currently focused-->
    <button id ='currently-focused-btn' class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px" fill="white">
            <path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"/>
        </svg>
    </button>
    <!-- Text spacing -->
    <button id ='text-spacing-btn' class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
            <path d="M64 128V96h64l0 320H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H192l0-320h64v32c0 17.7 14.3 32 32 32s32-14.3 32-32V80c0-26.5-21.5-48-48-48H160 48C21.5 32 0 53.5 0 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32zM502.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h32V352H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H512V160h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64z"/></svg>
        <i class="fa-solid fa-text-height"></i>
    </button>
    <!-- Aria-label -->
    <button id = "aria-labels-btn" class="centered btn-dark toolkit-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="20px" height="20px" fill="white">
            <path d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-66.7 160-13.3 32c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L66.7 224h90.7l5.1 12.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-13.3-32-66.7-160C136.6 7.8 124.9 0 112 0zm18.7 160H93.3L112 115.2 130.7 160zM256 32v96 96c0 17.7 14.3 32 32 32h80c44.2 0 80-35.8 80-80c0-23.1-9.8-43.8-25.4-58.4c6-11.2 9.4-24 9.4-37.6c0-44.2-35.8-80-80-80H288c-17.7 0-32 14.3-32 32zm96 64H320V64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16zm-32 64h32 16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320V160zM566.6 310.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L352 434.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l192-192z"/>
        </svg>
    </button>
    <!-- Page title -->
    <button id="page-title-btn" class="centered btn-dark toolkit-btn" >
        Title
    </button>
</div>

<button id = "expand-collapse-btn" class="centered btn-dark toolkit-btn" style="border-bottom: none;" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20px" height="20px" fill="white">
        <path d="M214.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 402.7 329.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 210.7 329.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"/>
    </svg> 
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
addJSFile('https://use.fontawesome.com/7a2b195f7b.js')
//addJS(toolkitScript)
addCss("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css")
addCss('https://cdn.jsdelivr.net/gh/ernesto-code/floating-script-picker/style.css')


