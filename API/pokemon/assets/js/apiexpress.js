async function consumoApi(urlAPI) {
    let consumo = await fetch(urlAPI)
    if (consumo.ok) {
        return consumo.json()
    }
}


async function procesarInfo(urlAPI) {
    try {
        let dataApi = await consumoApi(urlAPI)
        console.log(dataApi)
        for (const pepe of dataApi) {
            document.querySelector("#productoproyecto").innerHTML += `
                <h1>${pepe.nombre}</h1>`
        }
    } catch (error) {
        console.log(error)
    }

}

procesarInfo("http://localhost:4000/api/productos")