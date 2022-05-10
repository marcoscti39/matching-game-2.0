import "./generics/reset.css"
import "./style/settings/colors.css"
import "./style/settings/base.css"
import CardContainer from "./src/object/BoardGame";
import ScoreBoard from "./src/object/ScoreBoard";

const $root = document.getElementById("root");
const $cardContainer = CardContainer();
const $scoreBoard = ScoreBoard()


$root.insertAdjacentHTML("beforeend", `
${$cardContainer}
`)




