/*
 * # Reversi
 */

// game element is stored as a variable
var gameEl = document.getElementById("game");
var black = "#464646"; //style="background-color: rgb(70, 70, 70)";
var white = "#EBEBEB"; //style="background-color: rgb(235, 235, 235)";


// write a function for clearing the board's elements!
var clearCells = function() {
  var cells = document.getElementsByClassName("cells");
  for (var i = 0; i < squares.length; i++) {
    cells[i].textContent = "";
  }
  clearTheBoard(); // model
  return true;
};

gameEl.onclick = function(event) {
  // log useful debugging info to the user
  console.log("clicked: ", event, event.target.id);

  // get the actual div that was clicked...
  var cellsEl = event.target;

  // split out the coordinates based on the id
  var cellsCoordinates = cellsEl.id.split(",");

  // save the text for the player who's turn it is...
  var cellsColor = nextTurn;

 // fills cell with current move name
  cellsEl.style.backgroundColor = cellsColor;

  // alternates turns
  if (nextTurn === black) {
  nextTurn = white;
  $(cellsEl).attr("value", function() {
    return "X";
  });
  } else {
  nextTurn = black;
  $(cellsEl).attr("value", function(){
    return "O";
  })
  }
}

var gameIsBeingPlayed = false; // true
var nextTurn = black;          // white
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

// Get a cell's value (change null to "_" and exchange variable values for
// "X"/"O" on console's board for readability)
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
  var cells = $('.cells');
  console.log(cells);
  // console.log( "  0 1 2 3 4 5 6 7");
  // for (var i = 0; i < 8; i++) {
  //   console.log(
  //     i + " " +
  //     getValueOf(i, 0) + " " +
  //     getValueOf(i, 1) + " " +
  //     getValueOf(i, 2) + " " +
  //     getValueOf(i, 3) + " " +
  //     getValueOf(i, 4) + " " +
  //     getValueOf(i, 5) + " " +
  //     getValueOf(i, 6) + " " +
  //     getValueOf(i, 7)
  //   );
  // }
  // return true;
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

// get a Diagonal's value
var getDiagonal = function(y,x) {
  for (var i = 0; i < 8; i++) {
    var diagonalLR = getValueOf((y + 1), x);
    return diagonalLR;
  }
  for (var j = 0; j < 8; j++) {
    var diagonalRL = getValueOf(y, (x + 1));
    return diagonalRL;
  }
}

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

// Clear board
var clearTheBoard = function() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      board[i][j] = null;
    }
  }
  nextTurn = black // reset to black
  return true;
};

// Decide if the move is legal or not.
var moveIsLegal = function(y, x) {
  if (gameIsBeingPlayed === false) {
    return false; // game hasn't begun...
  } else if (y > 7 || y < 0 || x > 7 || x < 0) {
    return false; // squares not in play...
  } else if (getValueOf(y, x) !== "_") {
    return false; // move has already been made...
  } else {
    return true;
  }
}
