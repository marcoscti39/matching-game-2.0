import CardGame from "../../components/CardGame"

function CardContainer(){
    let $htmlCard = CardGame()
    return (
        `<main>
            ${$htmlCard.repeat(6)}
        </main>`
    )
}


export default CardContainer