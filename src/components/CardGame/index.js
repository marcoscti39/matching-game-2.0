import "./style.css";
function CardGame(icon){
    return /* html*/`
    <article class="card-container">
        <div class="card-front-and-back">
            <div class="card-back">
                <img class="image" src="./assets/imgs/back-card.png">
            </div>
            <div class="card-front">
                <img class="image" src="./assets/imgs/${icon}.png">
            </div>
        </div>

    </article>`
};

export default CardGame;