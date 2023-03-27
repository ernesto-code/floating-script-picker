
const layoutContainer = document.getElementById('layout-container')

// Testing toolkit 
const headingBtn = document.getElementById('headings-btn')
const expandCollapseBtn = document.getElementById('expand-collapse-btn')
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
const elementInspectorBtn = document.getElementById('element-inspector-btn')


const utestToolkitBtn = document.getElementById('utest-toolkit-btn')

// UTest toolkit 
const testingToolkitBtn = document.getElementById('testing-toolkit-btn')
const testCasePreviewBtn = document.getElementById('test-case-preview-btn')
const unclaimedTestCaseBtn = document.getElementById('unclaimed-test-case-btn')
const boldTitleColumnSeparatorBtn = document.getElementById('bold-title-column-btn')
const boldTitleSlashSeparatorBtn = document.getElementById('bold-title-slash-btn')
const usbFilterByComponentsBtn = document.getElementById('usb-filter-by-components')
const hideMyBugsBtn = document.getElementById('hide-my-bugs-btn')
const issuesWithPlus1Btn = document.getElementById('issues-with-plus-1-btn')
const filterSelectedBugsBtn = document.getElementById('filter-selected-bugs-btn')
const markRowByDblClickBtn = document.getElementById('mark-row-dbl-click-btn')
const bbvaSessionExtentionBtn = document.getElementById('bbva-session-extension-btn')

// MISC
const expandableSection = document.getElementById('expandable-section')
const toolkitElement = document.getElementById('toolkit')
const utestToolkit = document.getElementById('utest-toolkit')
const testingToolkit = document.getElementById('testing-toolkit')

const pageTitleBtn = document.getElementById('page-title-btn')
let pageTitleContainer = ""

let tooltip = null
let tooltipCoords = null

let topStyle = "top:-28px;left:-4px;border-bottom-left-radius:0;"
let leftStyle = "top:-4px;left:-28px;"
let innerStyle = "top:-2px;left:-2px;border-bottom-left-radius:0;"

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

    if(elm.classList.contains('light-blue')){
        if(elm.classList.contains('light-blue-toolkit-active-btn')) 
            elm.classList.remove('light-blue-toolkit-active-btn')
        else
            elm.classList.add('light-blue-toolkit-active-btn')
    }
    else{

        if(elm.classList.contains('toolkit-active-btn')) 
            elm.classList.remove('toolkit-active-btn')
        else
            elm.classList.add('toolkit-active-btn')
        
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
    return [targetElmCoords.top , targetElmCoords.left + targetElmCoords.width + 5]
    
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
    //outlineDiv.style.borderTopLeftRadius = "0"

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
const toggleButtonSection = ()=>{

    if(expandableSection.style.display == "block"){
        expandableSection.style.display = "none"
        //toolkitElement.classList.remove("expanded")

    }else{
        expandableSection.style.display = "block"
       // toolkitElement.classList.add("expanded")
    }
}
const toggleIconRotation = (elm)=>{
    if(!elm.style.transform || elm.style.transform == 'rotate(0deg)'){
        elm.style.transform = 'rotate(180deg)'
    }
    else{
        elm.style.transform = 'rotate(0deg)'
    }
}

const displayUtestToolkit = () =>{
    utestToolkit.style.display = 'block'
    testingToolkit.style.display = 'none'
    toolkitElement.classList.add('light-blue')
    expandCollapseBtn.classList.add('light-blue')

}
const displayTestingToolkit = () =>{
    utestToolkit.style.display = 'none'
    testingToolkit.style.display = 'block'
    toolkitElement.classList.remove('light-blue')
    expandCollapseBtn.classList.remove('light-blue')
}   


// Marking Functions

const markHeadings = () => {
    const pageHeadings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6"))
    const ariaHeadings = null

    pageHeadings.forEach((heading)=>{
        markElement(heading,"red",innerStyle,'marked-headings')
    })
}
const markListsListitems = () => {
    const pageLists = Array.from(document.querySelectorAll("ul,ol"))
    const ariaListsListitems = null
    const pageListitems = Array.from(document.querySelectorAll("li"))

    pageLists.forEach((elm)=>{
        markElement(elm,"blue",innerStyle,'marked-listslistitems')
    })
    pageListitems.forEach((elm)=>{
        markElement(elm,"green",innerStyle,"marked-listslistitems")
    })
}
const markBrs = () =>{

    const brElements = document.querySelectorAll("br")
     brElements.forEach(elm=>{
        markElement(elm,"red",innerStyle,"marked-brs")
    })
    console.clear()
    console.log(brElements.length + ' br elements found on the page')
}
const markLiveRegions = () =>{
    const liveRegions = document.querySelectorAll("[aria-live='polite'],[aria-live='assertive'],[role='status'],[role='alert']")
    liveRegions.forEach(elm=>{
        markElement(elm,"red",innerStyle,"marked-liveregions")
    })
    console.clear()
    console.log(liveRegions.length + ' live regions elements found on the page')
}
const markImageAltText = () =>{
    const images = document.querySelectorAll("img")
    const ariaImages = document.querySelectorAll("[role='img']")
    
    images.forEach(elm=>{
        markElementDisplayAttribute(elm,"alt","red",innerStyle,"marked-images-alt-text")
    })
    ariaImages.forEach(elm=>{
        markElementDisplayAttribute(elm,"aria-label","red",innerStyle,"marked-images-alt-text")
    })
    console.clear()
    console.log(images.length + ariaImages.length + ' images found on the page')
}
const markImageNullAlt = () =>{
    let counter = 0
    const images = document.querySelectorAll("img")

    images.forEach(elm=>{
        if(!elm.getAttribute("alt")){
            markElementDisplayAttribute(elm,"alt","red",innerStyle,"marked-images-null-alt-text")
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
                markElementDisplayAttribute(elm,"href","red",innerStyle,"marked-hrefs")
                linksSameUrls++
            }
            else {
                linksHref.push(elm.getAttribute('href'))
                markElement(elm,"blue",innerStyle,'marked-hrefs')
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
const expandCollapse = () =>{

    toggleButtonSection()
    toggleButton(expandCollapseBtn)
    toggleIconRotation(expandCollapseBtn.firstElementChild)
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
            //console.log('Hiding ...'+ titleContainerInDOM.innerHTML)
            titleContainerInDOM.style = 'display:none'
        }

    }

    
    toggleButton(pageTitleBtn)
}
const closePageTitle = () =>{
    pageTitleContainer.style = 'display:none'
}


const testCasePreview = ()=>{
    const details = document.getElementsByClassName('details')[0];
    details.style.setProperty('white-space', 'pre-wrap', 'important');

    function extractInfo(html) {
        var result = {};
        // Extract Action Details
        var actionDetails = html.match(/----\sACTION\sDETAILS\s----([\s\S]*?)(?=----\sENVIRONMENT\s----)/);
        result.actionDetails = actionDetails[1].trim().replace(/:\n/g, ":\n\n")

        // Extract Environment
        var environment = html.match(/----\sENVIRONMENT\s----([\s\S]*?)(?=----\sAPPLAUSE\sPROPERTIES\s----)/);
        result.environment = environment[1].trim().replace(/:\n/g, ":\n\n")

        // Extract Applause Properties
        var applauseProperties = /----\sAPPLAUSE\sPROPERTIES\s----([\s\S]*?)----\sAPPLAUSE\sATTACHMENT\(S\)\s----/.exec(html);
        result.applauseProperties = applauseProperties[0].trim();

        // Extract Applause Attachments
        var attachments = html.match(/(https:\/\/[^\s]+)/g);
        result.attachments = attachments.join(" ");

        //Make links
        result.attachments = result.attachments.replace(/(https:\/\/[^\s]+)/g, function(link){
        return "<a href='" + link + "' style='width: 500px;'>" + link + "</a>";
        });
        return result;
    }
    var html = details.innerHTML;
    var info = extractInfo(html);
    details.innerHTML = info.actionDetails + info.environment + info.applauseProperties + info.attachments;
}
const unclaimedTestCase = () =>{
    const claimsTd = Array.prototype.slice.call(document.querySelectorAll("[ng-if='ctrl.isTTL']"))
    const testCases = claimsTd.map(elt => elt.innerHTML == '0')
    const unclaimedTCs = testCases.filter(Boolean)
    console.log('Total TCs: ',testCases.length) 
    console.log('Unclaimed TCs : ',unclaimedTCs.length)

    // Display only the unclaimed Testcases

    document.getElementsByClassName('responsive-table-head')[1].nextElementSibling.innerHTML =`<b>Showing ' + ${unclaimedTCs.length} +' unclaimed TCs of ${testCases.length}</b>`
    const rowsTC = document.getElementsByTagName("tbody")[1].children

    let index = 0

    for(index=0; rowsTC.length > index; index++){
        if (rowsTC[index].children[6].innerHTML != "0")
        rowsTC[index].style.display = 'none'
    }
}
const boldTitleColumnSeparator = ()=>{
    // BOLD TITLES in platforms
console.log('Bolding ...')
    var index;
    var first;
    var second;
    let obtenerDato = document.getElementsByTagName("td");
    let title = ''
    let titleDesc =''
    let arrTitle =[]
    for (index = 0; index < obtenerDato.length; index++ ){    
        if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
        first= obtenerDato[index].childNodes;    
        second = first[3].childNodes; 
        //console.log(second[2])
        title = second[2].innerHTML
        arrTitle = title.split(':')
        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
        arrTitle.pop()
        arrTitle.push(titleDesc)
        second[2].innerHTML = arrTitle.join(':')
        }

    }
}

const boldTitleSlashSeparator = ()=>{
    // BOLD TITLES in platforms
    console.log('Bolding ...')
    var index;
    var first;
    var second;
    let obtenerDato = document.getElementsByTagName("td");
    let title = ''
    let titleDesc =''
    let arrTitle =[]
    for (index = 0; index < obtenerDato.length; index++ ){    
        if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
        first= obtenerDato[index].childNodes;    
        second = first[3].childNodes; 
        //console.log(second[2])
        title = second[2].innerHTML
        arrTitle = title.split(':')
        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
        arrTitle.pop()
        arrTitle.push(titleDesc)
        second[2].innerHTML = arrTitle.join(':')
        }

    }
}
const usbFilterByComponents = () =>{
    // Version 1.0
// Filter Layout
const targetElement = document.querySelector("#issueListTitle")
const newItem = document.createElement("div")
const itemsAmount = document.getElementsByTagName("table")[0].nextElementSibling

let checkbox = null
let selectComponent = null
var index;

newItem.id = "select-filter-script"
newItem.style.padding = "1em"
newItem.style.outline = "rgb(6, 107, 177) 1px solid"

// Layout set and adding to DOM
let obtenerDato = document.getElementsByTagName("a");
var resultfinal = []

for (var index = 0; index < obtenerDato.length; index++ ){  
    if(obtenerDato[index].getAttribute('ng-if')==='!ctrl.parent.insideTestCycle || !ctrl.parent.isFromKnownIssueList(row)'){
        var result = obtenerDato[index].firstChild.textContent
        var element = result.split('/');
        resultfinal.push(element[0])
    }  
}
var unicos = [... new Set(resultfinal)];
var unicoscoincidencia = []

for (index = 0; index < unicos.length; index++ ){
    unicoscoincidencia[index] = []
    valor = unicos[index];
    valor2 = valor.split(' ');
    for (index1 = index+1; index1 < unicos.length; ){
        valorlist = unicos[index1];
        valorlist2 = valorlist.split(' ');
        if(valor2[0] === valorlist2[0]){
        if(valor.length > valorlist.length) {
                unicoscoincidencia[index].push(valorlist)
                unicos = unicos.filter((item) => item !== valorlist);
        }
        else{
                unicoscoincidencia[index].push(valor)
                unicos = unicos.filter((item) => item !== valor);
        }
        } else {
            index1++;
        }
    }
}


var selectHTML = '<select id="select-component"><option disabled selected>Select a component</option>'
    
for (let component of unicos) {
    selectHTML += 
    `<option>`+component+`</option>`   
    }

selectHTML += '</select><button id="clear-button">Clear</button><button id="remove-button">Remove</button><label style="display:inline;margin-left:3em;"><input type="checkbox" id="bold-text-checkbox" style="display:inline;"> Bolded titles</label>'
newItem.innerHTML = selectHTML         
console.log(newItem.innerHTML);
targetElement.insertAdjacentElement("afterend",newItem)

// Event listeners adding
setTimeout(()=>{
    checkbox = document.querySelector("#bold-text-checkbox")
    selectComponent = document.querySelector("#select-component")
    clearButton = document.querySelector("#clear-button")
    removeButton = document.querySelector("#remove-button")

    let obtenerDato = document.getElementsByTagName("td");
    let tableRows =   document.getElementsByTagName("tr");
    var tdArray = Array.prototype.slice.call(document.getElementsByTagName("td"))

    // Bolded text
    checkbox.addEventListener('click',()=>{
        var first;
        var second;
        let title = ''
        let titleDesc =''
        let arrTitle =[]
        for (index = 0; index < obtenerDato.length; index++ ){    
                if(obtenerDato[index].getAttribute('data-column-title')=='Title '){
                    first= obtenerDato[index].childNodes;    
                    second = first[3].childNodes; 
                    title = second[2].innerHTML
                    arrTitle = title.split('/')
                    if(checkbox.checked)
                        titleDesc = '<b>'+ arrTitle[arrTitle.length -1]+'</b>'
                    else
                        titleDesc = arrTitle[arrTitle.length -1]
                    arrTitle.pop()
                    arrTitle.push(titleDesc)
                    second[2].innerHTML = arrTitle.join('/')
                }
        }
        
    })

    // Display issues per selected component
    clearButton.addEventListener('click',()=>{
        // Showing all issues
        let issuesCount = 0
        console.log('showing ....')
        for (index = 1; index < tableRows.length; index++ ){ 
            tableRows[index].style.display = 'table-row'
            issuesCount++
        }
        selectComponent.selectedIndex = 0;
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all except '+ tableRows.length + '</b> component.'
    })

    // Display issues of all components except selected component
    removeButton.addEventListener('click',()=>{
        const selectElement = document.querySelector("#select-component")
        let comps = []
        let title = null
        let comp = null
        let issuesCount = 0
        let selectedComp = selectElement.options[selectElement.selectedIndex].text
        let selectedValue = selectElement.value
        console.log(selectedComp)
        console.log(selectedValue)

        for (index = 1; index < tableRows.length; index++ ){    
            title = tableRows[index].children[1].children[0].children[0].innerText
            if(!title.includes(selectedValue)) {
                encontrado = false;
                for (indexC = 0; indexC < unicoscoincidencia[selectElement.selectedIndex-1].length; indexC++) {
                    if (title.includes(unicoscoincidencia[selectElement.selectedIndex-1][indexC]))
                        encontrado = true; 
                }
                if (encontrado)
                    tableRows[index].style.display = 'none'
                else {
                    tableRows[index].style.display = 'table-row'
                    issuesCount++
                }
            } else 
                tableRows[index].style.display = 'none'
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>all except '+ selectedComp + '</b> component.'

    })
    
    // Filter by components
    selectComponent.addEventListener('change',(event)=>{
        for (index = 1; index < tableRows.length; index++ ){ 
            tableRows[index].style.display = 'table-row'
        }
        
        const selectElement = event.target
        let comps = []
        let title = null
        let comp = null
        let issuesCount = 0
        let selectedComp = selectElement.options[selectElement.selectedIndex].text
        let selectedValue = selectElement.value
        console.log(selectedComp)
        console.log(selectedValue)

        for (index = 1; index < tableRows.length; index++ ){    
            title = tableRows[index].children[1].children[0].children[0].innerText
            if(!title.includes(selectedValue)) {
                encontrado = false;
                for (indexC = 0; indexC < unicoscoincidencia[selectElement.selectedIndex-1].length; indexC++) {
                    if(title.includes(unicoscoincidencia[selectElement.selectedIndex-1][indexC])) {
                        encontrado = true;
                        break;
                    }
                }
                if (!encontrado) 
                    tableRows[index].style.display = 'none'
                else
                    issuesCount++;
            } else 
                issuesCount++
        }
        itemsAmount.innerHTML = 'Showing '+issuesCount+' for <b>'+ selectedComp + '</b> component.'
    })
})
}
const hideMyBugs = () =>{
    // Version 1.0
    const targetElement = document.querySelector("#issueListTitle")
    const checkbox = document.createElement('input');

    // Crea un elemento de etiqueta para el checkbox
    const label = document.createElement('label');
    label.htmlFor = ' bold-text-checkbox';
    label.innerHTML = 'Hide Yours';

    // Agrega el checkbox y la etiqueta al DOM
    targetElement.appendChild(checkbox);
    targetElement.appendChild(label);

    // Estiliza el checkbox
    checkbox.style.marginLeft = '10px';

    checkbox.type = 'checkbox';
    checkbox.id = 'bold-text-checkbox';

    let isHidden = false;
    checkbox.addEventListener('click', () => {
    // Obtiene todos los elementos que tienen el atributo ng-if con el valor 'row.testerId !== ctrl.parent.currentUser.id'
    let elements = document.querySelectorAll('[ng-if="row.testerId === ctrl.parent.currentUser.id"]');
    if (!isHidden) {
        // Oculta los elementos
        for (let element of elements) {
        element.parentNode.parentNode.style.display = 'none';
        }
    } else {
        // Muestra los elementos
        for (let element of elements) {
        element.parentNode.parentNode.style.display = '';
        }
    }
    isHidden = !isHidden;
    });
}
const issuesWithPlus1 = () =>{
    console.log("issuesWithPlus1")
    // Version 1.0
    let obtenerDatos = document.getElementsByTagName("span");
    var result;
    var result2 = [];
    var mostrar;

    for (index = 0; index < obtenerDatos.length; index++ ){
        result= obtenerDatos[index].innerText;
        if((obtenerDatos[index].getAttribute('class') !='bug-status status-11'||
        obtenerDatos[index].getAttribute('class') !='bug-status status-2' ||
        obtenerDatos[index].getAttribute('class') !='bug-status status-12'||
        obtenerDatos[index].getAttribute('class') !='bug-status status-3' || 
        obtenerDatos[index].getAttribute('class') =='bug-status status-1')  && 
        (obtenerDatos[index].getAttribute('ng-if') =='row.numberOfReproducers > 0' && (result == '1'))){
            mostrar = obtenerDatos[index].parentNode.parentNode;
            mostrar.setAttribute('style', 'display:none');
        }
        console.log(mostrar);
    }

}
const filterSelectedBugs = () =>{
    console.log("filterSelectedBugs")
    // Encontrar la tabla
    let table = document.querySelector(".responsive-table");

    // Agregar una columna con checkbox al inicio de cada fila, excluyendo la primera fila
    let rows = table.querySelectorAll("tbody tr:not(:first-child)");
    for (let row of rows) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let td = document.createElement("td");
    td.appendChild(checkbox);
    row.insertBefore(td, row.firstChild);
    }

    // Agregar un botón filter
    let filterButton = document.createElement("button");
    filterButton.innerHTML = "Filter";
    filterButton.onclick = function() {
    let filteredRows = [];
    for (let row of rows) {
        let checkbox = row.querySelector("input[type='checkbox']");
        if (!checkbox.checked) {
        filteredRows.push(row);
        }
    }
    for (let row of filteredRows) {
        row.style.display = "none";
    }
    issuesCount = rows.length - filteredRows.length;
    itemsAmount.innerHTML = 'Showing '+issuesCount+' issues.';
    };

    // Agregar un botón Clear
    let clearButton = document.createElement("button");
    clearButton.innerHTML = "Clear";
    clearButton.onclick = function() {
    for (let row of rows) {
        let checkbox = row.querySelector("input[type='checkbox']");
        checkbox.checked = false;
        row.style.display = "table-row";
    }
    issuesCount = rows.length;
    itemsAmount.innerHTML = 'Showing '+issuesCount+' issues.';
    };

    // Agregar contenedor para los botones y fijarlos al principio de la tabla
    let buttonContainer = document.createElement("div");
    buttonContainer.appendChild(filterButton);
    buttonContainer.appendChild(clearButton);
    table.parentNode.insertBefore(buttonContainer, table);

    // Ocultar el elemento de paginación
    let paginationDiv = table.nextElementSibling;
    if (paginationDiv && paginationDiv.classList.contains("responsive-table-pagination")) {
    paginationDiv.style.display = "none";
    }

    // Agregar un elemento para mostrar la cantidad de elementos que se están mostrando
    let issuesCount = rows.length;
    let selectedComp = "Selected Component";
    let itemsAmount = document.createElement("p");
    itemsAmount.innerHTML = 'Showing '+issuesCount+' issues.';
    buttonContainer.insertBefore(itemsAmount, buttonContainer.firstChild);

    // Agregar el checkbox a la primera fila de la tabla y ocultarlo visualmente
    let firstRow = table.querySelector("tbody tr:first-child");
    let firstCheckbox = document.createElement("input");
    firstCheckbox.type = "checkbox";
    firstCheckbox.setAttribute("hidden", true);
    let firstTD = document.createElement("td");
    firstTD.appendChild(firstCheckbox);
    firstRow.insertBefore(firstTD, firstRow.firstChild);
}
const markRowDblClick = () =>{
    document.addEventListener('dblclick',(ev)=>{
        const targetElm = ev.target
        const parentElement = ev.target.parentElement
        console.log(targetElm)
        if(targetElm.tagName == 'TD'){
            console.log(parentElement.style.background)
            if(parentElement.style.background == "rgb(189, 223, 255)"){
                console.log('remove background')
                parentElement.style.background = "none";
            }
            else{
                parentElement.style.background = "rgb(189, 223, 255)";
                console.log('add background')
            }
                
        }
            
    })
}
const bbvaSessionExtention = ()=>{
    // ==UserScript==
    // @name         BBVA timeout killer
    // @author       Antoine Ferreira
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  kill the bbva 60 second session timeout
    // @author       You
    // @match        https://web.bbva.es/*
    // @icon         https://www.google.com/s2/favicons?domain=bbva.es
    // @grant        none
    // @require http://code.jquery.com/jquery-3.6.0.min.js
    // ==/UserScript==
    (function() {
        'use strict';
        $(document).ready(function() {
            setInterval(function() {
                var button = $('span:contains("Seguir en bbva.es")');
                if (!!button[0]){
                    button[0].click();
                }
            }, 5000);
        })
    })();
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

// Testing toolkit
clickEventListenerAssigner(headingBtn,"click", headings )
mouseoverEventListenerAssigner(headingBtn,"mouseover", showTooltip,'Headings' )
mouseoutEventListenerAssigner(headingBtn,"mouseout", hideTooltip )

clickEventListenerAssigner(expandCollapseBtn,"click", expandCollapse )
mouseoverEventListenerAssigner(expandCollapseBtn,"mouseover", showTooltip,'Expand/Collapse Toolkit' )
mouseoutEventListenerAssigner(expandCollapseBtn,"mouseout", hideTooltip )

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



// UTest toolkit


clickEventListenerAssigner(utestToolkitBtn,"click", displayUtestToolkit )
mouseoverEventListenerAssigner(utestToolkitBtn,"mouseover", showTooltip,'UTest Toolkit' )
mouseoutEventListenerAssigner(utestToolkitBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(testingToolkitBtn,"click", displayTestingToolkit )
mouseoverEventListenerAssigner(testingToolkitBtn,"mouseover", showTooltip,'Testing Toolkit' )
mouseoutEventListenerAssigner(testingToolkitBtn,"mouseout", hideTooltip)


clickEventListenerAssigner(testCasePreviewBtn,"click", testCasePreview )
mouseoverEventListenerAssigner(testCasePreviewBtn,"mouseover", showTooltip,'Test Case preview' )
mouseoutEventListenerAssigner(testCasePreviewBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(unclaimedTestCaseBtn,"click", unclaimedTestCase )
mouseoverEventListenerAssigner(unclaimedTestCaseBtn,"mouseover", showTooltip,'Unclaimed Testcases' )
mouseoutEventListenerAssigner(unclaimedTestCaseBtn,"mouseout", hideTooltip)


clickEventListenerAssigner(boldTitleColumnSeparatorBtn,"click", boldTitleColumnSeparator )
mouseoverEventListenerAssigner(boldTitleColumnSeparatorBtn,"mouseover", showTooltip,'Bold title for \':\' separator' )
mouseoutEventListenerAssigner(boldTitleColumnSeparatorBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(boldTitleSlashSeparatorBtn,"click", boldTitleSlashSeparator )
mouseoverEventListenerAssigner(boldTitleSlashSeparatorBtn,"mouseover", showTooltip,'Bold title for \' \\  \' separator' )
mouseoutEventListenerAssigner(boldTitleSlashSeparatorBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(usbFilterByComponentsBtn,"click", usbFilterByComponents )
mouseoverEventListenerAssigner(usbFilterByComponentsBtn,"mouseover", showTooltip,'USBank filter by components' )
mouseoutEventListenerAssigner(usbFilterByComponentsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(hideMyBugsBtn,"click", hideMyBugs )
mouseoverEventListenerAssigner(hideMyBugsBtn,"mouseover", showTooltip,'Hide my bugs from issues list' )
mouseoutEventListenerAssigner(hideMyBugsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(issuesWithPlus1Btn,"click", issuesWithPlus1 )
mouseoverEventListenerAssigner(issuesWithPlus1Btn,"mouseover", showTooltip,'Issues with +1s' )
mouseoutEventListenerAssigner(issuesWithPlus1Btn,"mouseout", hideTooltip)

clickEventListenerAssigner(filterSelectedBugsBtn,"click", filterSelectedBugs )
mouseoverEventListenerAssigner(filterSelectedBugsBtn,"mouseover", showTooltip,'Filter selected bugs' )
mouseoutEventListenerAssigner(filterSelectedBugsBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(markRowByDblClickBtn,"click", markRowDblClick )
mouseoverEventListenerAssigner(markRowByDblClickBtn,"mouseover", showTooltip,'Mark row by double clicking' )
mouseoutEventListenerAssigner(markRowByDblClickBtn,"mouseout", hideTooltip)

clickEventListenerAssigner(bbvaSessionExtentionBtn,"click", bbvaSessionExtention )
mouseoverEventListenerAssigner(bbvaSessionExtentionBtn,"mouseover", showTooltip,'BBVA Session extension' )
mouseoutEventListenerAssigner(bbvaSessionExtentionBtn,"mouseout", hideTooltip)




// Props popup

const propsPopup = document.getElementById("props-popup")
const propsPopupCloseBtn = document.getElementById("props-popup-close-btn")


const toggleElement = (element) =>{
    if ( element.style.display == 'none')
        element.style.display = 'block'
    else
        element.style.display = 'none'
}

const getHtmlRole = (elm) => {
    let role = null
    let tag = elm.tagName.toLowerCase()
    
    const hasMap = new Map([
        ["h1", "heading"],
        ["h2", "heading"],
        ["h3", "heading"],
        ["h4", "heading"],
        ["h5", "heading"],
        ["h6", "heading"],
        ["ul", "list"],
        ["ol", "list"],
        ["li", "listitem"],
        ["a", "link"],
        ["img", "image"],
        ["select", "combobox"],
        ["input", "TBD"],
        ["input-only", "textbox"],
        ["textarea", "textbox"],
        ["input-pwd", "textbox"],
        ["input-number", "spinButton"],
        ["input-radio", "radio"],
        ["input-email", "textbox"],
        ["input-checkbox", "checkbox"]
    ])

if(hasMap.get(tag)){
    switch (tag) {
        case "input":{
            if(elm.type){
                switch (elm.type) {
                    case "password":return hasMap.get("input-pwd");break;
                    case "number":return hasMap.get("input-number");break;
                    case "radio":return hasMap.get("input-radio");break;
                    case "checkbox":return hasMap.get("input-checkbox");break;
                    case "email":return hasMap.get("input-email");break;
                    default: return hasMap.get("input-only");break;
                }
            }
            else return 0
        }
        default:{
            return hasMap.get(tag)
        }
            
    }

}else{
    console.log("Getting the role by tagName")
    return tag
}



    
}
const collectDataFromElement = (element) => {
    let tag,htmlRole,href, ariaRole,alt,ariaLabel

    tag = element.tagName
    //htmlRole = 

}

const elementInspector = () =>{
    toggleElement(propsPopup)

    if(isActivatedTheBtn(elementInspectorBtn)) {
        document.addEventListener("click", (evt) => {
            if(evt.altKey){
                // set data in popup
                console.log(getHtmlRole(evt.target))
                // set new position
            }
        },
            { signal: controller.signal }
        )
    }
    else {
        controller.abort()
    }
    toggleButton(elementInspectorBtn)

    
}

clickEventListenerAssigner(elementInspectorBtn,"click", elementInspector )
mouseoverEventListenerAssigner(elementInspectorBtn,"mouseover", showTooltip,'Element inspector (alt + click)' )
mouseoutEventListenerAssigner(elementInspectorBtn,"mouseout", hideTooltip)


propsPopupCloseBtn.addEventListener("click",()=>{
    toggleElement(propsPopup)
})






