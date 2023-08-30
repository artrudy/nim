// 1. two players game:
//    1.1. ask the name of first player;
//    1.1.1. save the input as firstPlayerName;
//    1.2. ask the name of the srecond playr;
//    1.2.1. save the input as secondPlayerName;
//    1.3. define who goes first;
//    1.4. using while loop ask users to take marches from table;
//    1.5. the user who have to take the last of matches loose.

// 2. one player game
//    2. ask user to choose level of difficulty;
//    2.1. if it's easy:
//       2.1.1 inside while loop computer takes randome quantity of matches from 1 to 3;
//       2.1.2. user can take from 1 to 3 matches;
//       2.1.3 last who takes -- loose;

//    2.2. -//- medium :
//       2.2.1. inside while loop computer takes randome quantity of matches from 1 to 3;
//       2.2.2. user can take from 1 to 3 matches;
//       2.2.3. ????????????
//    2.3.

//     4. ask player/s for quantity of matches and save it in variable matches

function nimGame() {
  let matches = 13;

  function howManyPlayers() {
    const numberOfPlayers = prompt("How many players are playing?");
    console.log(numberOfPlayers, typeof numberOfPlayers);

    switch (numberOfPlayers) {
      case "1":
        console.log("1");
        break;

      case "2":
        console.log("2");
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

    let quantityOfMatches: number = Number(
      prompt("How many matches are in the game?")
    );

    if (isNaN(quantityOfMatches) || quantityOfMatches <= 0) {
      twoPlayerGame();
    } else {
      matches = quantityOfMatches;
    }

    const firstPlayerName = prompt(
      "Please enter the name of the first player:"
    );

    const secondPlayerName = prompt(
      "Please enter the name of the second player:"
    );

    let turn = Math.floor(Math.random() * 2 + 1);

    let userTurn = turn === 1 ? firstPlayerName : secondPlayerName;

    while (matches > 1) {
      alert(`Now it's turn of player ${userTurn}. Matches left ${matches}.`);

      let userTakesMatches: number = Number(
        prompt(`How many matches ${userTurn} wants to take?`)
      );

      if (userTakesMatches <= 3 && userTakesMatches >= 1) {
        matches = matches - userTakesMatches;

        if (userTurn === firstPlayerName) {
          userTurn = secondPlayerName;
        } else {
          userTurn = firstPlayerName;
        }
      }
    }
    
    if (matches === 1) {
      const winner =
        userTurn === firstPlayerName ? secondPlayerName : firstPlayerName;
      alert(`${winner} wins!`);
    }
  }
}

nimGame();
