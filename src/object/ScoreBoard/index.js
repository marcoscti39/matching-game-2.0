import ArrowPlayerTurn from "../../components/ArrowPlayerTurn"
import PlayerGame from "../../components/PlayerGame"
import PointMaker from "../../components/PointMaker"
import VersusIcon from "../../components/VersusIcon"
import "./style.css"
function ScoreBoard(){
    return /*html */`
    <header>
        ${ArrowPlayerTurn()}
        ${PlayerGame("Player 1")}
        ${PointMaker("player1")}
        ${VersusIcon()}
        ${PointMaker("player2")}
        ${PlayerGame("player 2")}
    </header>`
}



export default ScoreBoard