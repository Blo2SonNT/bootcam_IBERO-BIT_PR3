let bodyPagina = document.querySelector("body")
let navbar = document.createElement("nav")
navbar.classList.add("navbar", "navbar-expand-lg", "bg-dark", "navbar-dark")
bodyPagina.appendChild(navbar)

let divHijoNavbar = document.createElement("div")
divHijoNavbar.className = "container"
navbar.appendChild(divHijoNavbar)

let aHijoDiv = document.createElement("a")
aHijoDiv.className = "navbar-brand"
aHijoDiv.setAttribute("href", "#")
divHijoNavbar.appendChild(aHijoDiv)

let imgHijoA = document.createElement("img")
imgHijoA.setAttribute("src", "img/logo.svg")
imgHijoA.className = "w-25"
aHijoDiv.appendChild(imgHijoA)

let botonHijoMenuHamburguesa = document.createElement("button")
botonHijoMenuHamburguesa.type = "button"
botonHijoMenuHamburguesa.setAttribute("data-bs-toggle", "collapse")
botonHijoMenuHamburguesa.setAttribute("data-bs-target", "#navbarSupportedContent")
botonHijoMenuHamburguesa.setAttribute("aria-controls", "navbarSupportedContent")
botonHijoMenuHamburguesa.setAttribute("aria-expanded", "false")
botonHijoMenuHamburguesa.setAttribute("aria-label", "Toggle navigation")
botonHijoMenuHamburguesa.className = "navbar-toggler"
divHijoNavbar.appendChild(botonHijoMenuHamburguesa)

let spanHijoBotonHamburguesa = document.createElement("span")
spanHijoBotonHamburguesa.className = "navbar-toggler-icon";
// spanHijoBotonHamburguesa.innerText = "Explorar"
botonHijoMenuHamburguesa.appendChild(spanHijoBotonHamburguesa)

// let spanHijoBotonHamburguesa = document.createElement("i")
// spanHijoBotonHamburguesa.className = "fa-solid fa-bug"
// botonHijoMenuHamburguesa.appendChild(spanHijoBotonHamburguesa)


let divContenedorOpciones = document.createElement("div")
divContenedorOpciones.id = "navbarSupportedContent"
divContenedorOpciones.className = "collapse navbar-collapse"
divHijoNavbar.appendChild(divContenedorOpciones)

let ulDivContenedor = document.createElement("ul")
ulDivContenedor.className = "navbar-nav me-auto mb-2 mb-lg-0"
divContenedorOpciones.appendChild(ulDivContenedor)

let opciones_menu = ["inicio", "series", "peliculas", "categorias"]
    // opciones_menu.forEach(opcionLi => {
    //     let liLista = document.createElement("li")
    //     liLista.innerText = opcionLi
    //     liLista.className = "nav-item"
    //     ulDivContenedor.appendChild(liLista)
    // });

for (const elemento of opciones_menu) {
    let liLista = document.createElement("li")
    liLista.innerText = elemento
    liLista.className = "nav-item text-white px-2"
    ulDivContenedor.appendChild(liLista)
}


let divSliderGeneral = document.createElement("div")
divSliderGeneral.setAttribute("data-bs-ride", "true")
divSliderGeneral.id = "carouselExampleIndicators"
divSliderGeneral.className = "carousel slide"
bodyPagina.appendChild(divSliderGeneral)

let divContenedorIndicadoresSlider = document.createElement("div")
divContenedorIndicadoresSlider.className = "carousel-indicators"
divSliderGeneral.appendChild(divContenedorIndicadoresSlider)

for (let botonIndicador = 1; botonIndicador <= 4; botonIndicador++) {
    let botonIndicadorSlider = document.createElement("button")
    botonIndicadorSlider.type = "button"
    botonIndicadorSlider.setAttribute("data-bs-target", "#carouselExampleIndicators")
    botonIndicadorSlider.setAttribute("data-bs-slide-to", botonIndicador - 1)
    botonIndicadorSlider.setAttribute("aria-label", `Slide ${botonIndicador}`)
    if (botonIndicador == 1) {
        botonIndicadorSlider.classList.add("active")
            // botonIndicadorSlider.className = "active"
        botonIndicadorSlider.setAttribute("aria-current", "true")
    }
    divContenedorIndicadoresSlider.appendChild(botonIndicadorSlider)

}


let divImagnesSlider = document.createElement("div")
divImagnesSlider.className = "carousel-inner"
divSliderGeneral.appendChild(divImagnesSlider)

let imagenesSlider = [
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_SH_IAmYourMan/44712f10-b053-493c-80b8-4b693719a635._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_HuntingAvaBravo/66eca13e-408a-4d8c-897b-eaf80501c30d._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_AddamsFamily2/5e379f6f-7067-4f30-b212-30cedda8464f._UR3000,600_SX1500_FMwebp_.jpeg",
    "https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheCraftLegacy/5dcafb89-2e3f-4d87-9e3e-822f8e129468._UR3000,600_SX1500_FMwebp_.jpeg"
]

imagenesSlider.forEach((imgenSliderData, indice) => {
    let SliderDivimg = document.createElement("div")
    SliderDivimg.className = "carousel-item"
    if (indice == 0) {
        SliderDivimg.classList.add("active")
    }
    divImagnesSlider.appendChild(SliderDivimg)

    let imgSlider = document.createElement("img")
    imgSlider.src = imgenSliderData
    imgSlider.className = "d-block w-100"
    SliderDivimg.appendChild(imgSlider)

});

let btnSliderPosicion = ["prev", "next"]
btnSliderPosicion.forEach(botonSlider => {
    let botonSliderDiv = document.createElement("button")
    botonSliderDiv.type = "button"
    botonSliderDiv.setAttribute("data-bs-target", "#carouselExampleIndicators")
    botonSliderDiv.setAttribute("data-bs-slide", botonSlider)
    divSliderGeneral.appendChild(botonSliderDiv)

    let spanBtn1 = document.createElement("span")
    spanBtn1.setAttribute("aria-hidden", "true")
    spanBtn1.className = `carousel-control-${botonSlider}-icon`

    let spanBtn2 = document.createElement("span")
    spanBtn2.className = "visually-hidden"
    spanBtn2.innerText = (botonSlider == "prev") ? "Previous" : "Next"

    divSliderGeneral.appendChild(spanBtn1)
    divSliderGeneral.appendChild(spanBtn2)
});