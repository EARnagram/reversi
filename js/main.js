/*
 * # Reversi
 */

// game element is stored as a variable
var $gameEl = $("#game");

var gameIsBeingPlayed = false; // true
var piece = function(cssClass) {
  this.count = 2;
  this.cssClass = cssClass;
}

// Create Players
var playerX = new piece("X");
var playerO = new piece("O");

var currentTurn = playerO;       // playerX
var board = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, "O", "X", null, null, null],
  [null, null, null, "X", "O", null, null, null],
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
  return "It is player " + currentTurn + "'s turn.";
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

// Get a diagonal's value (from left to right)
var getDiagonalLR = function(y,x) {
  var z = y;
  var w = x;
  var diagonalPlusPlus = '';
  var diagonalMinusMinus = '';
  while (z<8 && w<8) {
    diagonalPlusPlus += getValueOf(z, w).toString();
    z++;
    w++;
  }
  z = y-1;
  w = x-1;
  while (z>=0 && w>=0) {
    diagonalMinusMinus += getValueOf(z, w).toString();
    z--;
    w--;
  }
  diagonalMinusMinus = diagonalMinusMinus.split('').reverse().join('');
  var diagonalLR = diagonalMinusMinus.concat(diagonalPlusPlus);
  return diagonalLR;
}


// Get a diagonal's value (from right to left)
var getDiagonalRL = function(y,x) {
  var z = y;
  var w = x;
  var diagonalPlusMinus = '';
  var diagonalMinusPlus = '';
  while (z>=0 && w<8) {
    diagonalMinusPlus += getValueOf(z, w).toString();
    z--;
    w++;
  }
  z = y+1;
  w = x-1;
  while (z<8 && w>=0) {
    diagonalPlusMinus += getValueOf(z, w).toString();
    z++;
    w--;;
  }
  diagonalMinusPlus = diagonalMinusPlus.split('').reverse().join('');
  var diagonalRL = diagonalMinusPlus.concat(diagonalPlusMinus);
  return diagonalRL;
}

// Regex for finding valid moves
var validXStr = /O+X/g;
var validOStr = /X+O/g;

// Clear board
var clearTheBoard = function() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      board[i][j] = null;
      board[3][4] = "X";
      board[4][3] = "X";
      board[3][3] = "O";
      board[4][4] = "O";
    }
  }
  //currentTurn === playerX// reset to playerX
  return true;
};

// clear Cells to restart game
var clearCells = function() {
  var cells = document.getElementsByClassName("cells");
  for (var i = 0; i < squares.length; i++) {
    cells[i].textContent = "";

  }
  clearTheBoard(); // model
  return true;
};
