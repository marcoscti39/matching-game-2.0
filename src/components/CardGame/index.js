import "./style.css";
function CardGame(icon){
    return /* html*/`
    <article class="card-container">
        <div class="card-front-and-back">
            <img class="card-game-back-icon" src="./assets/imgs/back-card.png">
            <img class="card-game-front-icon" src="./assets/imgs/${icon}.png">
        </div>

    </article>`
};

export default CardGame;