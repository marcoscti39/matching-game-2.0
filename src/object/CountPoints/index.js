function CountPoints($player1Points, $player2Points){
    let player1ContainerPoints = document.querySelector(".player1")
    let player2ContainerPoints = document.querySelector(".player2")

    if($player1Points == 1){
        player1ContainerPoints.children[0].style.backgroundColor = "var(--color-light-green)"
    }
    if($player1Points == 2){
        player1ContainerPoints.children[0].style.backgroundColor = "var(--color-light-green)"
        player1ContainerPoints.children[1].style.backgroundColor = "var(--color-light-green)"
    }
    if($player1Points == 3){
        player1ContainerPoints.children[0].style.backgroundColor = "var(--color-light-green)"
        player1ContainerPoints.children[1].style.backgroundColor = "var(--color-light-green)"
        player1ContainerPoints.children[2].style.backgroundColor = "var(--color-light-green)"
    }
    
    if($player2Points == 1){
        player2ContainerPoints.children[0].style.backgroundColor = "var(--color-light-green)"
    }
    if($player2Points == 2){
        player2ContainerPoints.children[0].style.backgroundColor = "var(--color-light-green)"
        player2ContainerPoints.children[1].style.backgroundColor = "var(--color-light-green)"
    }
    if($player2Points == 3){
        player2ContainerPoints.children[0].style.backgroundColor = "var(--color-light-green)"
        player2ContainerPoints.children[1].style.backgroundColor = "var(--color-light-green)"
        player2ContainerPoints.children[2].style.backgroundColor = "var(--color-light-green)"
    }
}

export default CountPoints