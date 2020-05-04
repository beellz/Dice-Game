

let diceImage = document.querySelector(".buttonall").addEventListener("click", throwDice );


function throwDice () {
    
    let randomNum = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".img1").setAttribute("src" , `./images/dice${randomNum}.png`);
}