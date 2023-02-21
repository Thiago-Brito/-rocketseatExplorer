const play = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const moreTime = document.querySelector('.moreTime')
const lessTime = document.querySelector('.lessTime')
let minutesDisplay = document.querySelector('.minutes')
let secondDisplay = document.querySelector('.seconds')
let seconds = Number(secondDisplay.textContent)
let minutes = Number(minutesDisplay.textContent)

let teste =0

function updateTime(minutes,seconds){
    secondDisplay.textContent = String(seconds).padStart(2,"0")
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
}

function setTimer(){
    seconds = Number(secondDisplay.textContent)
    minutes = Number(minutesDisplay.textContent)
}

function countDown(){
    timerTimeOut = setTimeout(function(){
        teste =1
        setTimer()

        if(minutes<=0){
            updateTime(25,00)
            return
        }

        if(seconds<=0){
            seconds = 60
            minutes--
        }

        updateTime(minutes,seconds-1)


        countDown()

    }, 1000)
}

play.addEventListener('click',function(){
    if(teste !=1){
        countDown()
    }
})

buttonStop.addEventListener('click', function(){
    teste = 0
    clearTimeout(timerTimeOut)
})

moreTime.addEventListener('click',function(){
    setTimer()
    updateTime(minutes+5,seconds)
})
lessTime.addEventListener('click',function(){
    setTimer()
    if(minutes>5){
        updateTime(minutes-5,seconds)
    }
   
})

/*sounds button*/
const forest = document.querySelector('.forest')
const rain = document.querySelector('.rain')
const coffe = document.querySelector('.coffe')
const fireplace = document.querySelector('.fireplace')

const forestsounds = new Audio("Floresta.wav")
forestsounds.loop = true


const rainsounds = new Audio("Chuva.wav")
rainsounds.loop = true

const coffesounds = new Audio("Cafeteria.wav")
coffesounds.loop = true

const fireplacesounds = new Audio("Lareira.wav")
fireplace.loop = true



function restart(){
    forest.classList.remove('soundsOn')
    rain.classList.remove('soundsOn')
    coffe.classList.remove('soundsOn')
    fireplace.classList.remove('soundsOn')
    stopSounds()
}

function stopSounds(){
    forestsounds.pause()
    rainsounds.pause()
    coffesounds.pause()
    fireplacesounds.pause()
}


forest.addEventListener('click',function(){
    if(forest.classList.contains('soundsOn')){
        restart()
    }else{
        restart()
        forestsounds.play()
        forest.classList.add('soundsOn')
    }
})
rain.addEventListener('click',function(){
    if(rain.classList.contains('soundsOn')){
        restart()
    }else{
        restart()
        rainsounds.play()
        rain.classList.add('soundsOn')
    }
    
})
coffe.addEventListener('click',function(){
    if(coffe.classList.contains('soundsOn')){
        restart()
    }else{
        restart()
        coffesounds.play()
        coffe.classList.add('soundsOn')
    }  
})
fireplace.addEventListener('click',function(){
    if(fireplace.classList.contains('soundsOn')){
        restart()
    }else{
        restart()
        fireplacesounds.play()
        fireplace.classList.add('soundsOn')
    }
})



