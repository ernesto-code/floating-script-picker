
const layoutContainer = document.getElementById('layout-container')

const headingBtn = document.getElementById('headings-btn')
const listsBtn = document.getElementById('lists-btn')
const brFinderBtn = document.getElementById('brfinder-btn')
const liveRegionsBtn = document.getElementById('liveregions-btn')
const imageAltText = document.getElementById('image-alt-text-btn')
const imageNullAltTextbtn = document.getElementById('image-null-alt-text-btn')
const hrefBtn = document.getElementById('href-btn')
const focusIndicatorBtn = document.getElementById('focus-indicator-btn')
const currentlyFocusedBtn = document.getElementById('currently-focused-btn')
const textSpacingBtn = document.getElementById('text-spacing-btn')
const ariaLabelsBtn = document.getElementById('aria-labels-btn')
//const closePageTitleBtn = document.getElementById('close-page-title-btn')
const pageTitleBtn = document.getElementById('page-title-btn')
let pageTitleContainer = ""


let tooltip = null
let tooltipCoords = null

let topStyle = "top:-28px;left:-4px;border-bottom-left-radius:0;"
let leftStyle = "top:-4px;left:-28px;"

let parentElementLayoutContainer = null
let linksHref = []

// Focus indicator
let cssRule = `a:focus, *:focus {
    box-shadow: rgb(0 255 255) 0px 0px 0px 8px;
    outline: rgb(255, 0, 0) solid 4px !important;
    outline-offset: 1px !important;
    border-radius: 2px;
}`
let style = document.createElement("style")
style.appendChild(document.createTextNode(""))
document.head.appendChild(style)

// for removing event
const controller = new AbortController()


// Functions
const scrollToTop = () => {
    window.scrollTo(0, 0)
}
const activateStyle = (elm) => {
    elm.classList.add('toolkit-active-btn')
}
const toggleButton =(elm)=>{
    if(elm.classList.contains('toolkit-active-btn')){
        elm.classList.remove('toolkit-active-btn')
    }
    else
        {elm.classList.add('toolkit-active-btn')
    }
}
const showTooltip = (textToShow,targetButton, coords)=>{
    coords = calculateTooltipCoords(targetButton)
    tooltip = document.getElementById('button-tooltip')
    if(!tooltip){ 
        const tooltipContainer = document.createElement("div")
        tooltipContainer.innerHTML = `<div class="tooltip" id='button-tooltip' style='position:fixed; top:${coords[0]}px;left:${coords[1]}px'>
        <div class="tooltip-text">${textToShow}</div>
        </div>`
        targetButton.insertAdjacentElement('afterend',tooltipContainer)
    }
}
const hideTooltip = ()=>{
    tooltip = document.getElementById('button-tooltip')
        if(tooltip) tooltip.parentElement.remove()
}
const calculateTooltipCoords = (elm) => {
    targetElmCoords = elm.getBoundingClientRect()
    return [targetElmCoords.top , targetElmCoords.left + targetElmCoords.width + 15]
    
}
const calculateCoordsForMarker = (elm) => {
    let markerCoords = elm.getBoundingClientRect()
    return {
        top: markerCoords.top - 5,
        left: markerCoords.left - 5,
        width: markerCoords.width + 5,
        height: markerCoords.height + 5
    }
}
const markElement = (elm, color, style, containerId) => {
    
    let coords = calculateCoordsForMarker(elm)
    const outlineDiv = document.createElement("div")
    parentElementLayoutContainer = document.getElementById(containerId)
    //position = top / left

    outlineDiv.style.position = "absolute"
    outlineDiv.style.top = `${coords.top}px`
    outlineDiv.style.left = `${coords.left}px`
    outlineDiv.style.width = `${coords.width}px`
    outlineDiv.style.height = `${coords.height}px`
    outlineDiv.style.borderRadius = "3px"
    outlineDiv.style.borderTopLeftRadius = "0"

    outlineDiv.style.outline = `${color} 2px solid`
    outlineDiv.style.outlineOffset = "2px"

    outlineDiv.innerHTML = `<div style="
    position:absolute;${style}width:fit-content;height:25px;padding:0 3px;
    border-radius:3px;background-color:${color};color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    ${elm.tagName}
    </div>`

    parentElementLayoutContainer.insertAdjacentElement("beforeend",outlineDiv)
    //layoutContainer.insertAdjacentElement("beforeend",outlineDiv)
}
const markElementDisplayAttribute = (elm, attribute, color, style, containerId) => {
    
    let coords = calculateCoordsForMarker(elm)
    const outlineDiv = document.createElement("div")
    parentElementLayoutContainer = document.getElementById(containerId)
    //position = top / left

    outlineDiv.style.position = "absolute"
    outlineDiv.style.top = `${coords.top}px`
    outlineDiv.style.left = `${coords.left}px`
    outlineDiv.style.width = `${coords.width}px`
    outlineDiv.style.height = `${coords.height}px`
    outlineDiv.style.borderRadius = "3px"
    outlineDiv.style.borderTopLeftRadius = "0"

    outlineDiv.style.outline = `${color} 2px solid`
    outlineDiv.style.outlineOffset = "2px"

    outlineDiv.innerHTML = `<div style="
    position:absolute;${style}width:max-content;height:25px;padding:0 3px;
    border-radius:3px;background-color:${color};color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <strong style="text-transform: capitalize;filter: invert(1);">${attribute}: </strong>${elm.getAttribute(attribute)}
    </div>`

    parentElementLayoutContainer.insertAdjacentElement("beforeend",outlineDiv)
    //layoutContainer.insertAdjacentElement("beforeend",outlineDiv)
}
const markElementDisplayAttributeValue = (elm, attribute, color, style, containerId) => {
    
    let coords = calculateCoordsForMarker(elm)
    const outlineDiv = document.createElement("div")
    parentElementLayoutContainer = document.getElementById(containerId)
    //position = top / left

    outlineDiv.style.position = "absolute"
    outlineDiv.style.top = `${coords.top}px`
    outlineDiv.style.left = `${coords.left}px`
    outlineDiv.style.width = `${coords.width}px`
    outlineDiv.style.height = `${coords.height}px`
    outlineDiv.style.borderRadius = "3px"
    outlineDiv.style.borderTopLeftRadius = "0"

    outlineDiv.style.outline = `${color} 2px solid`
    outlineDiv.style.outlineOffset = "2px"

    outlineDiv.innerHTML = `<div style="
    position:absolute;${style}width:max-content;height:25px;padding:0 3px;
    border-radius:3px;background-color:${color};color:white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    ${elm.getAttribute(attribute)}
    </div>`

    parentElementLayoutContainer.insertAdjacentElement("beforeend",outlineDiv)
    //layoutContainer.insertAdjacentElement("beforeend",outlineDiv)
}
const clearOverlay = (containerId) => {
    parentElementLayoutContainer = document.getElementById(containerId)
    parentElementLayoutContainer.innerHTML=''
}
const isActivatedTheBtn = (btn) => {
    if(!btn.classList.contains('toolkit-active-btn')) 
        return true
    else
        return false
}


// Marking Functions

const markHeadings = () => {
    const pageHeadings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6"))
    const ariaHeadings = null

    pageHeadings.forEach((heading)=>{
        markElement(heading,"red",topStyle,'marked-headings')
    })
}
const markListsListitems = () => {
    const pageLists = Array.from(document.querySelectorAll("ul,ol"))
    const ariaListsListitems = null
    const pageListitems = Array.from(document.querySelectorAll("li"))

    pageLists.forEach((elm)=>{
        markElement(elm,"blue",topStyle,'marked-listslistitems')
    })
    pageListitems.forEach((elm)=>{
        markElement(elm,"green",leftStyle,"marked-listslistitems")
    })
}
const markBrs = () =>{

    const brElements = document.querySelectorAll("br")
     brElements.forEach(elm=>{
        markElement(elm,"red",topStyle,"marked-brs")
    })
    console.clear()
    console.log(brElements.length + ' br elements found on the page')
}
const markLiveRegions = () =>{
    const liveRegions = document.querySelectorAll("[aria-live='polite'],[aria-live='assertive'],[role='status'],[role='alert']")
    liveRegions.forEach(elm=>{
        markElement(elm,"red",topStyle,"marked-liveregions")
    })
    console.clear()
    console.log(liveRegions.length + ' live regions elements found on the page')
}
const markImageAltText = () =>{
    const images = document.querySelectorAll("img")
    const ariaImages = document.querySelectorAll("[role='img']")
    
    images.forEach(elm=>{
        markElementDisplayAttribute(elm,"alt","red",topStyle,"marked-images-alt-text")
    })
    ariaImages.forEach(elm=>{
        markElementDisplayAttribute(elm,"aria-label","red",topStyle,"marked-images-alt-text")
    })
    console.clear()
    console.log(images.length + ariaImages.length + ' images found on the page')
}
const markImageNullAlt = () =>{
    let counter = 0
    const images = document.querySelectorAll("img")

    images.forEach(elm=>{
        if(!elm.getAttribute("alt")){
            markElementDisplayAttribute(elm,"alt","red",topStyle,"marked-images-null-alt-text")
            counter++
        }
    })
    console.clear()
    console.log(counter + ' images found on the page with null attribute.')
}
const markHrefs = () =>{
    let linksSameUrls = 0
    const links = document.querySelectorAll("a")

    links.forEach(elm=>{
        if(elm.getAttribute("href")){
            
            if(linksHref.includes(elm.getAttribute('href'))){
                markElementDisplayAttribute(elm,"href","red",topStyle,"marked-hrefs")
                linksSameUrls++
            }
            else {
                linksHref.push(elm.getAttribute('href'))
                markElement(elm,"blue",topStyle,'marked-hrefs')
            }
                
        }
    })
    console.clear()
    console.log(links.length + ' links found on the page.')
    console.log(linksSameUrls + ' links with the same URL than the original one.')


}
const markAriaLabels = () =>{
    const elementsWithAriaLabel = document.querySelectorAll("[aria-label]")
    elementsWithAriaLabel.forEach(elm=>{
        markElementDisplayAttributeValue(elm,"aria-label","tomato",topStyle,"marked-aria-label")
    })
    
    console.clear()
    console.log(elementsWithAriaLabel.length + ' elements found on the page with aria-label attribute.')
}


// Buttons calls

const headings = () =>{

    scrollToTop()
    if(isActivatedTheBtn(headingBtn)) 
        markHeadings()
    else 
        clearOverlay('marked-headings')

    toggleButton(headingBtn)
}
const listsListitems = () =>{

    scrollToTop()
    if(isActivatedTheBtn(listsBtn)) 
        markListsListitems()
    else 
        clearOverlay('marked-listslistitems')

    toggleButton(listsBtn)
}
const brFinder = () => {

    scrollToTop()
    if(isActivatedTheBtn(brFinderBtn)) 
        markBrs()
    else 
        clearOverlay('marked-brs')

    toggleButton(brFinderBtn)
}
const liveRegions = () => {

    scrollToTop()
    if(isActivatedTheBtn(liveRegionsBtn)) 
        markLiveRegions()
    else 
        clearOverlay('marked-liveregions')

    toggleButton(liveRegionsBtn)
}
const imageAlText = () =>{
    scrollToTop()
    if(isActivatedTheBtn(imageAltText)) 
        markImageAltText()
    else 
        clearOverlay('marked-images-alt-text')

    toggleButton(imageAltText)
}
const imageWithNullAltText = () =>{
    scrollToTop()
    if(isActivatedTheBtn(imageNullAltTextbtn)) 
        markImageNullAlt()
    else 
        clearOverlay('marked-images-null-alt-text')

    toggleButton(imageNullAltTextbtn)
}
const hrefs = () =>{
    scrollToTop()
    if(isActivatedTheBtn(hrefBtn)) 
        markHrefs()
    else 
        clearOverlay('marked-hrefs')

    toggleButton(hrefBtn)
}
const focusIndicator = () => {

    if(isActivatedTheBtn(focusIndicatorBtn))
        style.sheet.insertRule(cssRule, 0);
    
    else 
        style.sheet.deleteRule(0)

    toggleButton(focusIndicatorBtn)
}

const currentlyFocused = () =>{

    if(isActivatedTheBtn(currentlyFocusedBtn)) {
        document.addEventListener("keydown", () => {
            setTimeout(() => {
                console.clear()
                console.log("Current Focused Element:")
                console.log(document.activeElement)
            }, 55)
        },
            { signal: controller.signal }
        )
    }
    else {
        controller.abort()
    }
    
    toggleButton(currentlyFocusedBtn)
    
}
const textSpacing = () => {

    if(isActivatedTheBtn(textSpacingBtn)) {

        document.querySelectorAll("*").forEach((el)=>{
            el.style.setProperty('word-spacing','0.16em','important')
            el.style.setProperty('line-height','1.5','important')
            el.style.setProperty('letter-spacing','0.12em','important')
        
        })
    }
    else{
        document.querySelectorAll("*").forEach((el)=>{
            el.style.removeProperty('word-spacing')
            el.style.removeProperty('line-height')
            el.style.removeProperty('letter-spacing')
        
        })

    }

    toggleButton(textSpacingBtn)


    
}
const ariaLabels = () => {

    scrollToTop()
    if(isActivatedTheBtn(ariaLabelsBtn)){
        markAriaLabels()
    }
    else{
        clearOverlay('marked-aria-label')
    }

    toggleButton(ariaLabelsBtn)
}
const pageTitle = () => {
    const titleElement = document.getElementsByTagName("title")[0]
    pageTitleContainer = `<div id='page-title-container' class="tooltip">
    <div class="tooltip-text"> Page title: <strong>${titleElement.innerHTML}</strong> </div>
    </div>`
    const titleContainer = document.createElement("div")
    const titleContainerInDOM = document.getElementById('page-title-container')

    if( !titleContainerInDOM ){
        titleContainer.innerHTML = pageTitleContainer
        document.querySelector('body').appendChild(titleContainer)
    }
    else{
        if(isActivatedTheBtn(pageTitleBtn)){
            titleContainerInDOM.style = 'display:flex'
        }
        else{
            console.log('Hiding ...'+ titleContainerInDOM.innerHTML)
            titleContainerInDOM.style = 'display:none'
        }

    }

    
    toggleButton(pageTitleBtn)
}
const closePageTitle = () =>{
    pageTitleContainer.style = 'display:none'
}

// Listeners templates

const clickEventListenerAssigner = (elm, type, funct) => {
    elm.addEventListener(type,()=>{
       funct(elm)
    })
}
const mouseoverEventListenerAssigner = (elm, type, funct,text,coords) => {
    elm.addEventListener(type,()=>{ 
       funct(text,elm, coords)
    })
}
const mouseoutEventListenerAssigner = (elm, type, funct) => {
    elm.addEventListener(type,()=>{
    funct()
    })
}

// Listeners calls

clickEventListenerAssigner(headingBtn,"click", headings )
mouseoverEventListenerAssigner(headingBtn,"mouseover", showTooltip,'Headings' )
mouseoutEventListenerAssigner(headingBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(listsBtn,"click", listsListitems )
mouseoverEventListenerAssigner(listsBtn,"mouseover", showTooltip,'Lists / Listitems' )
mouseoutEventListenerAssigner(listsBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(brFinderBtn,"click", brFinder )
mouseoverEventListenerAssigner(brFinderBtn,"mouseover", showTooltip,'Br finder' )
mouseoutEventListenerAssigner(brFinderBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(liveRegionsBtn,"click", liveRegions )
mouseoverEventListenerAssigner(liveRegionsBtn,"mouseover", showTooltip,'Live Regions finder' )
mouseoutEventListenerAssigner(liveRegionsBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(imageAltText,"click", imageAlText )
mouseoverEventListenerAssigner(imageAltText,"mouseover", showTooltip,'Images alt text' )
mouseoutEventListenerAssigner(imageAltText,"mouseout", hideTooltip )

clickEventListenerAssigner(imageNullAltTextbtn,"click", imageWithNullAltText )
mouseoverEventListenerAssigner(imageNullAltTextbtn,"mouseover", showTooltip,'Images with null alt' )
mouseoutEventListenerAssigner(imageNullAltTextbtn,"mouseout", hideTooltip)

clickEventListenerAssigner(hrefBtn,"click", hrefs )
mouseoverEventListenerAssigner(hrefBtn,"mouseover", showTooltip,'Link / Equal hrefs' )
mouseoutEventListenerAssigner(hrefBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(focusIndicatorBtn,"click", focusIndicator )
mouseoverEventListenerAssigner(focusIndicatorBtn,"mouseover", showTooltip,'Focus indicator' )
mouseoutEventListenerAssigner(focusIndicatorBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(currentlyFocusedBtn,"click", currentlyFocused )
mouseoverEventListenerAssigner(currentlyFocusedBtn,"mouseover", showTooltip,'Print currently focused element in console' )
mouseoutEventListenerAssigner(currentlyFocusedBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(textSpacingBtn,"click", textSpacing )
mouseoverEventListenerAssigner(textSpacingBtn,"mouseover", showTooltip,'Text spacing' )
mouseoutEventListenerAssigner(textSpacingBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(ariaLabelsBtn,"click", ariaLabels )
mouseoverEventListenerAssigner(ariaLabelsBtn,"mouseover", showTooltip,'Aria labels' )
mouseoutEventListenerAssigner(ariaLabelsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(pageTitleBtn,"click", pageTitle )
mouseoverEventListenerAssigner(pageTitleBtn,"mouseover", showTooltip,'Page title' )
mouseoutEventListenerAssigner(pageTitleBtn,"mouseout", hideTooltip)

//clickEventListenerAssigner(closePageTitleBtn,"click",closePageTitle)

// --------------

/*
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

*/