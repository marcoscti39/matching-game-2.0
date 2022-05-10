import PlayerGame from "../../components/PlayerGame"
import PointMaker from "../../components/PointMaker"
import VersusIcon from "../../components/VersusIcon"
import "./style.css"
function ScoreBoard(){
    return `
    <header>
        ${PlayerGame("Player 1")}
        ${PointMaker()}
        ${VersusIcon()}
        ${PointMaker()}
        ${PlayerGame("player 2")}
    </header>`
}



export default ScoreBoard