function nimGame() {
    var matches = 13;
    function howManyPlayers() {
        var numberOfPlayers = prompt("How many players are playing?");
        switch (numberOfPlayers) {
            case "1":
                onePlayerGame();
                break;
            case "2":
                twoPlayerGame();
                break;
            default:
                howManyPlayers();
                break;
        }
    }
    howManyPlayers();
    //
    function twoPlayerGame() {
        var quantityOfMatches = Number(prompt("How many matches are in the game?"));
        if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
            twoPlayerGame();
        }
        else {
            matches = quantityOfMatches;
        }
        var firstPlayerName = prompt("Please enter the name of the first player:");
        var secondPlayerName = prompt("Please enter the name of the second player:");
        var turn = Math.floor(Math.random() * 2 + 1);
        var userTurn = turn === 1 ? firstPlayerName : secondPlayerName;
        while (matches > 1) {
            alert("Now it's turn of player " + userTurn + ". Matches left " + matches + ".");
            var userTakesMatches = Number(prompt("How many matches " + userTurn + " wants to take?"));
            if (userTakesMatches <= 3 && userTakesMatches >= 1) {
                matches = matches - userTakesMatches;
                if (userTurn === firstPlayerName) {
                    userTurn = secondPlayerName;
                }
                else {
                    userTurn = firstPlayerName;
                }
            }
        }
        if (matches === 1) {
            var winner = userTurn === firstPlayerName ? secondPlayerName : firstPlayerName;
            alert(winner + " wins!");
        }
    }
}
function onePlayerGame() {
    var gameLevel = prompt("Please select the dificulty level of the game: \n 1. Easy.\n 2. Medium.\n 3. Impossible.");
    var level = gameLevel === null || gameLevel === void 0 ? void 0 : gameLevel.toLowerCase().trim();
    switch (level) {
        case "1":
        case "easy":
            // console.log('easy level');
            onePlayerGameEasy();
            break;
        case "2":
        case "medium":
            // console.log('hard level');
            onePlayerGameMedium();
            break;
        case "3":
        case "impossible":
            // console.log('impossible level');
            break;
        default:
            // console.log('Default');
            onePlayerGame();
    }
}
function onePlayerGameEasy() {
    var quantityOfMatches = Number(prompt("How many matches are in the game?"));
    if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
        onePlayerGameEasy();
    }
    else {
        matches = quantityOfMatches;
    }
    var userTurn = "computer";
    while (matches > 1) {
        alert("Now it's turn of player " + userTurn + ". Matches left " + matches + ".");
        if (userTurn === "computer") {
            var userTakesMatches = Math.floor(Math.random() * 3 + 1);
            alert("Computer takes " + userTakesMatches + " matches.");
            matches = matches - userTakesMatches;
            userTurn = "gamer";
        }
        else {
            var userTakesMatches = Number(prompt("How many matches do you want to take?"));
            if (userTakesMatches <= 3 && userTakesMatches >= 1) {
                matches = matches - userTakesMatches;
                userTurn = "computer";
            }
        }
    }
    if (matches === 1) {
        var resultOfTheGame = userTurn === "computer" ? "You are win!" : "You are loose.";
        alert(resultOfTheGame);
    }
}
function onePlayerGameMedium() {
    var quantityOfMatches = Number(prompt("How many matches are in the game?"));
    if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
        onePlayerGameEasy();
    }
    else {
        matches = quantityOfMatches;
    }
    var userTurn = "computer";
    var turnOfComputer = 1;
    while (matches > 1) {
        alert("Now it's turn of player " + userTurn + ". Matches left " + matches + ".");
        if (userTurn === "computer" && turnOfComputer === 1) {
            var userTakesMatches = Math.floor(Math.random() * 3 + 1);
            alert("Computer takes " + userTakesMatches + " matches.");
            matches = matches - userTakesMatches;
            userTurn = "gamer";
        }
        else {
            var userTakesMatches = Number(prompt("How many matches do you want to take?"));
            if (userTakesMatches <= 3 && userTakesMatches >= 1) {
                matches = matches - userTakesMatches;
                userTurn = "computer";
            }
        }
    }
    if (matches === 1) {
        var resultOfTheGame = userTurn === "computer" ? "You are win!" : "You are loose.";
        alert(resultOfTheGame);
    }
}
nimGame();
