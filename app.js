let mainNavi = document.querySelector(".main-nav");
let mobileNavi = document.querySelector(".mobile-navi");
function showMenuToggle() {
    mobileNavi.classList.toggle("non-visible");
    mobileNavi.classList.toggle("container-column");
    mainNavi.classList.toggle("non-visible");
    mainNavi.classList.toggle("container-row");
}

// Features 
// svg managing
featuresSVG = {
    '0': {
        url: 'url("./images/illustration-features-tab-1.svg")',
        width: '536px',
        height: '346px'
    },
    '1': {
        url: 'url("./images/illustration-features-tab-2.svg")',
        width: '480px',
        height: '393px'
    },
    '2': {
        url: 'url("./images/illustration-features-tab-3.svg")',
        width: '480px',
        height: '393px'
    }
}

// features boxes
function showFeature(option) {
    let featuresSvgContainer = document.querySelector(".features-svg-container");
    let featuresLi = document.querySelectorAll(".features-li");
    let featuresBoxText = document.querySelectorAll(".features-box-text");
    featuresBoxText.forEach(e => {
        e.classList.remove("container-column"); 
        e.classList.add("non-visible");
    });
    featuresBoxText[option].classList.add("container-column");
    featuresSvgContainer.style.backgroundImage = featuresSVG[option]['url'];
    featuresSvgContainer.style.width = featuresSVG[option]['width'];
    featuresSvgContainer.style.height = featuresSVG[option]['height'];
    featuresLi.forEach(e => e.classList.remove("active-li"));
    event.target.classList.toggle("active-li");
}

// FAQ Questions
let accordionBoxes = document.querySelectorAll(".accordion-box");
accordionBoxes.forEach(e => {
    e.querySelector(".accordion-button").addEventListener("click", () => {
        e.querySelector(".accordion-content").classList.toggle("non-visible");
        e.querySelector("i").classList.toggle("fa-angle-down");
        e.querySelector("i").classList.toggle("fa-angle-up");
    })
})