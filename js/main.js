
/*
 * # Reversi
 */

var gameIsBeingPlayed = false; // true
var nextTurn = "X";            // "O"
var board = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];

/*
 * State-related helper functions can help us to understand the state of the
 * game at any point in time.
 *
 * 1. Get a square's value.
 * 2. Get a nice print out of the next user.
 * 3. Get a row's value.
 * 4. Get a column's value.
 * 5. Print the board (console.log).
 * 6. Print the whole state of the game (console.log).
 * 7. Clear the board model.
 *
 */

 // Get a square's value (change null to "_" so that it's easier to see...)
var getValueOf = function(y, x){
  var value = board[y][x];
  if (value) {
    return value;
  } else {
    return "_";
  }
  return true;
};

//  Get a nice print out of the next user.
var nextPlayerString = function() {
  return "It is player " + nextTurn + "'s turn.";
}

// Print the board.
var printTheBoard = function(){
  console.log( "  0 1 2 3 4 5 6 7");
  for (var i = 0; i < 8; i++) {
    console.log(
      i + " " +
      getValueOf(i, 0) + " " +
      getValueOf(i, 1) + " " +
      getValueOf(i, 2) + " " +
      getValueOf(i, 3) + " " +
      getValueOf(i, 4) + " " +
      getValueOf(i, 5) + " " +
      getValueOf(i, 6) + " " +
      getValueOf(i, 7)
    );
  }
  return true;
};

// Get a row's value.
var getRow = function(y){
  var row =
    getValueOf(y, 0) +
    getValueOf(y, 1) +
    getValueOf(y, 2) +
    getValueOf(y, 3) +
    getValueOf(y, 4) +
    getValueOf(y, 5) +
    getValueOf(y, 6) +
    getValueOf(y, 7);
  return row;
};

// Get a column's value.
var getColumn = function(x){
  var row =
    getValueOf(0, x) +
    getValueOf(1, x) +
    getValueOf(2, x) +
    getValueOf(3, x) +
    getValueOf(4, x) +
    getValueOf(5, x) +
    getValueOf(6, x) +
    getValueOf(7, x);
  return row;
};

// Print the whole state of the game.
var printTheGame = function(){
  if (gameIsBeingPlayed) {
    printTheBoard();
    console.log(nextPlayerString());
  } else {
    console.log("The game is not currently being played.");
  }
  return true;
};

// Clear the board model.
var clearTheBoard = function() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      board[i][j] = null;
    }
  }
  nextTurn = "X"; // reset to first player!
  return true;
};

