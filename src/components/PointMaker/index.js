import "./style.css"
function PointMaker(player){
    return /*html */`
    <section class="${player} points-container">
        <div class="point 1"></div>
        <div class="point 2"></div>
        <div class="point 3"></div>
    </section>`
}

export default PointMaker