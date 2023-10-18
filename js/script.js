let player1 = "Player1";
let player2 = "Player2";

function editNames() {
    let newPlayer1 = prompt("Change Player1 Name");
    let newPlayer2 = prompt("Change Player2 Name");

    if (newPlayer1.length < 1 || newPlayer2.length < 1) {
        alert('Please enter valid names');
        return;
    }

    player1 = newPlayer1; 
    player2 = newPlayer2;

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src", "IMG/dice.gif");
    diceNum2.setAttribute("src", "IMG/dice.gif");

    let result = document.querySelector('h1');
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src', 'IMG/dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src', 'IMG/dice' + randomNumber2 + '.png');

        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!";
        } else if (randomNumber1 < randomNumber2) {
            result.innerHTML = (player2 + " WINS!");
        } else {
            result.innerHTML = (player1 + " WINS!");
        }
    }, 2500);
}