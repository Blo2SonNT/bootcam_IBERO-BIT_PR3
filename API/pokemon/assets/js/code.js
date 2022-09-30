async function consumoApi(urlAPI) {
    let consumo = await fetch(urlAPI)
    if (consumo.ok) {
        return consumo.json()
    }
}

async function procesarInfo(urlAPI, busqueda = false) {
    if (busqueda) {
        try {
            document.querySelector("#grilla-pokemon").innerHTML = ``
            let dataApi = await consumoApi(urlAPI)
            document.querySelector("#grilla-pokemon").innerHTML += `
                    <h1>${dataApi.name}</h1>`
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            let dataApi = await consumoApi(urlAPI)
            for (const pepe of dataApi.results) {
                document.querySelector("#grilla-pokemon").innerHTML += `
                    <h1>${pepe.name}</h1>`
            }
        } catch (error) {
            console.log(error)
        }
    }
}

procesarInfo("https://pokeapi.co/api/v2/pokemon")

document.querySelector('#btnBusqueda').addEventListener('click', () => {
    let campo = document.querySelector("#busquedaCampo").value
    procesarInfo(`https://pokeapi.co/api/v2/pokemon/${campo}`, true)
})