const weight = document.querySelector("#weight")
const height = document.querySelector("#height")



function  openClick(event){
    event.preventDefault()
    validar()
    
}


function  closeClick(event){
    document.querySelector(".modal-wrapper").classList.remove("open")

}

function aulixiar(){
    let imc = Number(weight.value) / ((Number(height.value) * Number(height.value)) /10000)
    document.querySelector(".modal h1").innerText = "seu IMC é "+imc.toFixed(2)
    document.querySelector(".modal-wrapper").classList.add("open")
    document.querySelector(".alert-erro").classList.remove("open")
}

function validar(){
    if(isNaN(Number(weight.value)) ||isNaN(Number(height.value))){
        document.querySelector(".alert-erro").classList.add("open")
    }else{
        aulixiar()
    }
}