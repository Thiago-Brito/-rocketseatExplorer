 const screen1 = document.querySelector("#screen1")
 const screen2 = document.querySelector("#screen2")
 let randoNumber



 document.addEventListener('keydown',function(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        openClick(event)
    }else if(e.key == 'Enter'){
        luckClick(event)
    }
 })
 
 
 
 
 function luckClick(event){
    event.preventDefault()
    randomPhrase()
    toggleScreen()
 }
 function openClick(event){
    event.preventDefault()
    toggleScreen()

 }


 function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
 }

 function randomPhrase(){
    randoNumber = Math.round(Math.random() * 5)
   
    switch(randoNumber){
        case 0:
            document.querySelector("#first p").innerText = "Não há que ser forte. Há que ser flexível."
            break
        case 1:
            document.querySelector("#first p").innerText = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
            break
        case 2:
            document.querySelector("#first p").innerText = "A vida trará coisas boas se tiveres paciência."
            break
        case 3:
            document.querySelector("#first p").innerText = "Não compense na ira o que lhe falta na razão."
            break
        case 4:
            document.querySelector("#first p").innerText = "Defeitos e virtudes são apenas dois lados da mesma moeda."
            break
        case 5:
            document.querySelector("#first p").innerText = "A maior de todas as torres começa no solo."
            break    
        default:
            document.querySelector("#first p").innerText ="Voce teve azar"
            break
    }
 }