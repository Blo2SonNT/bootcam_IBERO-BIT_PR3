function consumo_api_total(url_a_consumir) {
    // let api_rm = "https://rickandmortyapi.com/api/character?page=32"
    let consumo = fetch(url_a_consumir)
    consumo.then(res_gatito => res_gatito.json())
        .then((data_api) => {
            console.log(data_api)
            document.querySelector("#cartas-personajes").innerHTML = ''
            for (const personajes_api of data_api.results) {
                document.querySelector("#cartas-personajes").innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${personajes_api.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${personajes_api.name}</h5>
                            <p class="card-text">${personajes_api.species}</p>
                        </div>
                    </div>
                </div>
            `
            }
            crear_botones(data_api.info.next, data_api.info.prev)
        })
}

function crear_botones(url_pagina_siguiente, url_pagina_anterior) {
    let div_paginacion = document.querySelector("#paginacion")
    div_paginacion.innerHTML = ''
    let boton_siguiente = document.createElement("button")
    boton_siguiente.className = "btn btn-dark"
        // boton_siguiente.classList.add("btn", "btn-dark")
    boton_siguiente.innerText = "Siguiente pagina"
    if (url_pagina_siguiente != null) {
        boton_siguiente.setAttribute("onclick", `consumo_api_total('${url_pagina_siguiente}')`)
    } else {
        boton_siguiente.setAttribute("disabled", '')
    }
    div_paginacion.appendChild(boton_siguiente)


    let boton_anterior = document.createElement("button")
    boton_anterior.classList.add("btn", "btn-primary")
    boton_anterior.innerText = "Pagina anterior"
    if (url_pagina_anterior != null) {
        boton_anterior.setAttribute("onclick", `consumo_api_total('${url_pagina_anterior}')`)
    } else {
        boton_anterior.setAttribute("disabled", '')
    }
    div_paginacion.appendChild(boton_anterior)
}

consumo_api_total("https://rickandmortyapi.com/api/character")


let btnBusqueda = document.querySelector("#btn-busqueda-api")
btnBusqueda.addEventListener("click", () => {
    let estado = document.querySelector("#estado").value
    let busqueda = document.querySelector("#busquedaTexto").value
    if (estado == '') {
        consumo_api_total("https://rickandmortyapi.com/api/character/?name=" + busqueda)
    } else {
        consumo_api_total(`https://rickandmortyapi.com/api/character/?name=${busqueda}&status=${estado}`)
    }
})