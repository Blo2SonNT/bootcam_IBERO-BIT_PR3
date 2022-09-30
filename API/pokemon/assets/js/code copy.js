// async function traduccion_estadistica(tipo_estadistica) {
//     let data_estadistica_info = ''
//     traduccion = ''
//     switch (tipo_estadistica) {
//         case "vida":
//             data_estadistica_info = fetch("https://pokeapi.co/api/v2/stat/1/")
//             break;
//         case "defensa":
//             data_estadistica_info = fetch("https://pokeapi.co/api/v2/stat/3/")
//             break;
//         case "ataque":
//             data_estadistica_info = fetch("https://pokeapi.co/api/v2/stat/2/")
//             break;
//     }

//     await data_estadistica_info.then(res3 => res3.json())
//         .then(data_estadistica => {
//             this.traduccion = data_estadistica[5].name
//         })

//     setTimeout(() => {
//         return traduccion
//     }, 2000);
// }


function consumo_pokemon_api(url_api) {
    // let ulr_api = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
    let consumo = fetch(url_api)
    consumo.then(res => res.json())
        .then(data_pokemon => {
            console.log(data_pokemon)
            document.querySelector("#grilla-pokemon").innerHTML = ''
            for (const pokemon of data_pokemon.results) {
                let ingreso_data_pokemon = fetch(pokemon.url)
                ingreso_data_pokemon.then(res2 => res2.json())
                    .then(pokemon_info => {
                        let vida_pokemon = pokemon_info.stats[0].base_stat
                        let ataque_pokemon = pokemon_info.stats[1].base_stat
                        let defensa_pokemon = pokemon_info.stats[2].base_stat
                        let nombre_estadistica_hp = pokemon_info.stats[0].stat.name
                        let nombre_estadistica_atque = pokemon_info.stats[1].stat.name
                        let nombre_estadistica_defensa = pokemon_info.stats[2].stat.name
                        document.querySelector("#grilla-pokemon").innerHTML += `
                            <div class="col">
                                <div class="card">
                                    <img src="${pokemon_info.sprites.other.home.front_default}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${pokemon_info.name}</h5>
                                        <div class="row">
    
    
                                            <div class="col-3">
                                                <label>${nombre_estadistica_hp}</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="progress">
                                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Example with label" style="width: ${vida_pokemon}%;" aria-valuenow="${vida_pokemon}" aria-valuemin="0" aria-valuemax="100">${vida_pokemon}%</div>
                                                </div>
                                            </div>
    
    
                                        </div>
                                        <div class="row">
                                            <div class="col-3">
                                                <label>${nombre_estadistica_atque}</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="progress">
                                                    <div class="progress-bar bg-primary" role="progressbar" aria-label="Example with label" style="width: ${ataque_pokemon}%;" aria-valuenow="${ataque_pokemon}" aria-valuemin="0" aria-valuemax="100">${ataque_pokemon}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3">
                                                <label>${nombre_estadistica_defensa}</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="progress">
                                                    <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style="width: ${defensa_pokemon}%;" aria-valuenow="${defensa_pokemon}" aria-valuemin="0" aria-valuemax="100">${defensa_pokemon}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    })
            }
            crear_botones_paginacion(data_pokemon.next, data_pokemon.previous)
        })
}

function crear_botones_paginacion(url_pagina_siguiente, url_pagina_anterior) {
    let div_paginacion = document.querySelector("#paginacion")
    div_paginacion.innerHTML = ''


    //creamos el boton pagina anterior
    let btn_anterior = document.createElement("button")
    if (url_pagina_anterior != null) {
        btn_anterior.setAttribute("onclick", `consumo_pokemon_api('${url_pagina_anterior}')`)
    } else {
        btn_anterior.setAttribute("disabled", ``)
        btn_anterior.classList.add("prohibido")
    }

    btn_anterior.classList.add("btn", "btn-dark")
    btn_anterior.innerText = "Página anterior"
    div_paginacion.appendChild(btn_anterior)

    //creamos boton pagina siguiente
    let btn_siguiente = document.createElement("button")
    if (url_pagina_siguiente != null) {
        btn_siguiente.setAttribute("onclick", `consumo_pokemon_api('${url_pagina_siguiente}')`)
    } else {
        btn_siguiente.setAttribute("disabled", ``)
        btn_siguiente.classList.add("prohibido")
    }

    btn_siguiente.classList.add("btn", "btn-dark")
    btn_siguiente.innerText = "Página siguiente"
    div_paginacion.appendChild(btn_siguiente)
}

consumo_pokemon_api("https://pokeapi.co/api/v2/pokemon")


document.querySelector("#btnBusqueda").addEventListener("click", () => {
    let busquedaUsuario = document.querySelector("#busquedaCampo").value
    let consumo = fetch("https://pokeapi.co/api/v2/pokemon/" + busquedaUsuario)
    console.log(consumo)
    consumo.then(res => res.json())
        .then(pokemon_info => {
            document.querySelector("#grilla-pokemon").innerHTML = ''
            let vida_pokemon = pokemon_info.stats[0].base_stat
            let ataque_pokemon = pokemon_info.stats[1].base_stat
            let defensa_pokemon = pokemon_info.stats[2].base_stat
            let nombre_estadistica_hp = pokemon_info.stats[0].stat.name
            let nombre_estadistica_atque = pokemon_info.stats[1].stat.name
            let nombre_estadistica_defensa = pokemon_info.stats[2].stat.name
            document.querySelector("#grilla-pokemon").innerHTML += `
                            <div class="col">
                                <div class="card">
                                    <img src="${pokemon_info.sprites.other.home.front_default}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${pokemon_info.name}</h5>
                                        <div class="row">
    
    
                                            <div class="col-3">
                                                <label>${nombre_estadistica_hp}</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="progress">
                                                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Example with label" style="width: ${vida_pokemon}%;" aria-valuenow="${vida_pokemon}" aria-valuemin="0" aria-valuemax="100">${vida_pokemon}%</div>
                                                </div>
                                            </div>
    
    
                                        </div>
                                        <div class="row">
                                            <div class="col-3">
                                                <label>${nombre_estadistica_atque}</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="progress">
                                                    <div class="progress-bar bg-primary" role="progressbar" aria-label="Example with label" style="width: ${ataque_pokemon}%;" aria-valuenow="${ataque_pokemon}" aria-valuemin="0" aria-valuemax="100">${ataque_pokemon}%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3">
                                                <label>${nombre_estadistica_defensa}</label>
                                            </div>
                                            <div class="col-9">
                                                <div class="progress">
                                                    <div class="progress-bar bg-success" role="progressbar" aria-label="Example with label" style="width: ${defensa_pokemon}%;" aria-valuenow="${defensa_pokemon}" aria-valuemin="0" aria-valuemax="100">${defensa_pokemon}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
        })
})



function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let consumo = fetch("https://pokeapi.co/api/v2/pokemon/" + busquedaUsuario)
    const result = await consumo;
    console.log(result);
    // expected output: "resolved"
}

asyncCall();