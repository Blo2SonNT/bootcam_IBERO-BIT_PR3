let consumo_disney = fetch("https://api.disneyapi.dev/characters")
consumo_disney.then(res => res.json())
    .then(personajesDisney => {
        let grilla = document.querySelector("#grillaDisney")
        for (const personaje of personajesDisney.data) {
            console.log(personaje.imageUrl)
            grilla.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="${personaje.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                    </div>
                </div>
            </div>
            `
        }
    })

let apiGato = fetch("https://api.thecatapi.com/v1/images/search")
apiGato.then(res => res.json())
    .then(imagenesGatos => {
        console.log(imagenesGatos)
        let contenedorIMG = document.querySelector("#contenedorGatos")
        let imagenGato = document.createElement("img")
        imagenGato.setAttribute("src", imagenesGatos[0].url)
        contenedorIMG.appendChild(imagenGato)
    })