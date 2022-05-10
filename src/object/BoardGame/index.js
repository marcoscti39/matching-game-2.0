import CardGame from "../../components/CardGame"
import ScoreBoard from "../ScoreBoard"
import "./style.css"
function CardContainer(){
    let $htmlCard = CardGame("css") + CardGame('html') + CardGame("javascript")
    return /*html*/`
    <main>
        ${ScoreBoard()}
        <section class="card-wrap">
            ${$htmlCard.repeat(2)}
        </section>
    </main>`
    
}

                                                                                                                                                                                                         
export default CardContainer