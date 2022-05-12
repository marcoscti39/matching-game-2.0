import CountPoints from "../CountPoints";

function CardFlipper(element, arrow){
    let clicks = 0;
    let arrowMove = true;
    let TwoCardsFlipped = [];
    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    let playerOneTurn = false;

    element.forEach(card =>{
        card.addEventListener("click", (e) =>{
            let rightElementToFlip;
            if(e.target.classList[0] === "image"){
                rightElementToFlip = e.target.parentElement.parentElement;
                if(rightElementToFlip.classList.contains("flip-card")){
                    return;
                }
                clicks++
            } else{
                clicks++
                rightElementToFlip = e.target.parentElement;
                if(rightElementToFlip.classList.contains("flip-card")){
                    return;
                }
            }
            rightElementToFlip.classList.add("flip-card")
            
            if(clicks === 2){
                if(arrowMove){
                    setTimeout(() =>{
                        arrow.style.left = "61%"
                    },500)
                    arrowMove = false;
                } else if (!arrowMove){
                    setTimeout(() =>{
                        arrow.style.left = "34%"
                    },500)
                    arrowMove = true;
                }
                if(playerOneTurn){
                    playerOneTurn = false
                } else if (!playerOneTurn){
                    playerOneTurn = true;
                }
                
                setTimeout(()=>{
                    element.forEach(card =>{
                        if(card.childNodes[1].classList.contains("flip-card")){
                            let cardFlipped = card.childNodes[1].childNodes[3].
                                childNodes[1].src.split("/")[5];
                                
                            TwoCardsFlipped.push(cardFlipped)

                            if(TwoCardsFlipped.length === 2){
                                if(TwoCardsFlipped[0] === TwoCardsFlipped[1]){
                                    if(playerOneTurn){
                                        playerOnePoints ++;
                                        console.log(`player 1: ${playerOnePoints} points`)
                                    } else if (!playerOneTurn){
                                        playerTwoPoints ++;
                                        console.log(`player 2: ${playerTwoPoints} points`)
                                    }
                                CountPoints(playerOnePoints, playerTwoPoints)
                                }
                                TwoCardsFlipped.splice(0, 2)

                            }
                        }

                        card.childNodes[1].classList.remove("flip-card")
                        
                    })
                },500)
                clicks = 0;
    
            }
        })
    })
}



export default CardFlipper