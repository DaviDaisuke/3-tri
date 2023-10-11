const form = document.querySelector("form")
const resp = document.querySelector("h3")

form =addEventListener("submit", (e) =>{
    e.preventDefault()

    const permitida = Number(form.inPermitida.value)
    const condutor = Number(form.inCondutor.value)
    let leve = permitida + (permitida * 0.2)
    if (condutor <= permitida) {
        resp.innerText = `situação: sem multa`
    } else if(condutor <= leve){
        resp.innerText = `situação: multa leve`
    }else {
        resp.innerText = `situação: multa grave`
    }
})