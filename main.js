import "./generics/reset.css"
import "./style/settings/colors.css"
import "./style/settings/base.css"
import CardContainer from "./src/object/BoardGame";
import ScoreBoard from "./src/object/ScoreBoard";
import CardFlipper from "./src/object/CardFlipper";

const $root = document.getElementById("root");
const $cardContainer = CardContainer();
const $scoreBoard = ScoreBoard()


$root.insertAdjacentHTML("beforeend", `
${$cardContainer}
`)


const cards = document.querySelectorAll(".card-container")

CardFlipper(cards)
