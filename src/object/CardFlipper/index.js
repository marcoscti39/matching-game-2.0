function CardFlipper(element){
    let clicks = 0;
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
                setTimeout(()=>{
                    element.forEach(card =>{
                        card.childNodes[1].classList.remove("flip-card")
                    })
                },500)
                clicks = 0;
    
            }
        })
    })
}



export default CardFlipper