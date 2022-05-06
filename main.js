import "./generics/reset.css"
import "./style/settings/colors.css"
import CardGame from "./src/components/CardGame";
import "./style/settings/base.css"

const $root = document.getElementById("root");
const $cardGame = CardGame();



$root.insertAdjacentHTML("beforeend", $cardGame)

