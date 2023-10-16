const form = document.querySelector("form")
const form = document.querySelector("#outResp")
const form = document.querySelector("#outResp1")

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    const ladoC = Number(form.inLadoC.value)

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoC)){
        alert{"essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois"}
        form.inLadoA.focus()
        form.inLadoB.focus()
        form.inLadoC.focus()
        return
    }

    Response.innerText =
})