import "./generics/reset.css"
import "./style/settings/colors.css"
import "./style/settings/base.css"
import CardContainer from "./src/object/BoardGame";

const $root = document.getElementById("root");
const $cardContainer = CardContainer();


$root.insertAdjacentHTML("beforeend", $cardContainer)




