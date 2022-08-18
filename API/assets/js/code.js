let api_rm = "https://rickandmortyapi.com/api/character"
let consumo = fetch(api_rm)
consumo.then(res_gatito => res_gatito.json())
    .then((data_api) => {
        console.log(data_api)
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
    })