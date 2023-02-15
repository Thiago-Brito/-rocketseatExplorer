const randoNumber = Math.round(Math.random() * 10)

let attemps = 1


function handleClick(event){
    event.preventDefault()
    const inputNumber = document.querySelector("#teste")


    if(Number(inputNumber.value) == randoNumber){
        document.querySelector("#screen1").classList.add("hide")
        document.querySelector("#screen2").classList.remove("hide")

        document.querySelector("#screen2 h1").innerText = "Acertou em "+ attemps +" tentativas."

    }else{
        alert("Você errou tente novamente")
    }

    attemps++
}