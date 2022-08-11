function sumatoria_ejercicio1() {
    let sumatoria_total = document.querySelector("#numero_ejercicio").value
    let operacion_total = 0
    for (let i = 1; i <= sumatoria_total; i++) {
        operacion_total = operacion_total + i
        document.querySelector("#total_sumatoria_resultado").innerHTML += `
            La sumatoria total es ${operacion_total}
        `
    }
}