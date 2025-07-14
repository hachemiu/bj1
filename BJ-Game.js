
let messageEl= document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
let player = {
    name: "🎉💰Jackpot!!💰🎉",
    chips: 1000
}
playerEl.textContent= player.name+ ": $"+ player.chips

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

function startgame(){
    
    isAlive =true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard;
    rendergame()
}

function newcard(){
    
    if(isAlive === true && hasBlackJack === false){
    let card= getRandomCard()
    sum+= card 
    
    cards.push(card)
    rendergame()
    }

}
    

function rendergame(){

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent= "Sum: "+sum

    if(sum <= 20){
        message = "do u want to draw a new card!? "
        document.getElementById("player-el").style.display ="none";
        messageEl.style.color="white"
        
    } 
    

    else if(sum === 21){message="Whoo,You've got a BlackJack!!!"
        hasBlackJack=true
        document.getElementById("player-el").style.display ="block";
        messageEl.style.color="red"

    }

    else{
        message="You're out of the game!"
        isAlive=false
        document.getElementById("player-el").style.display ="none";
        messageEl.style.color="white"

    }

    messageEl.textContent=message
   
    
    
}






console.log(cards)