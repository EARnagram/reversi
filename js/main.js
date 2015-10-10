/*
 * # REVERSI
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

var currentTurn = playerX;       // playerX
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

// Get right row's value.
var getRightRow = function(y, x){
  var xSearch = x + 1;
  var row = '';
  while (xSearch < 8) {
    row += getValueOf(y, xSearch);
    xSearch++;
  }
  return row;
};

// Get left row's value.
var getLeftRow = function(y, x){
  var xSearch = x - 1;
  var row = '';
  while (xSearch > -1) {
    row += getValueOf(y, xSearch);
    xSearch--
  }
  return row;
};

// Get down column's value.
var getColumnDown = function(y,x){
  var ySearch = y + 1;
  var column = '';
  while(ySearch < 8) {
    column += getValueOf(ySearch, x);
    ySearch++;
  }
  return column;
};

// Get up column's value.
var getColumnUp = function(y,x){
  var ySearch = y - 1;
  var column = '';
  while(ySearch > -1) {
    column += getValueOf(ySearch, x);
    ySearch--;
  }
  return column;
};


// Get a diagonal's value (from left to right)
var getDiagonalDownLR = function(y,x) {
  var z = y+1;
  var w = x+1;
  var diagonalPlusPlus = '';

  while (z<8 && w<8) {
    diagonalPlusPlus += getValueOf(z, w).toString();
    z++;
    w++;
  }
  return diagonalPlusPlus;
}

var getDiagonalUpLR = function(x,y) {
  var diagonalMinusMinus = '';
  var z = y-1;
  var w = x-1;
  while (z>=0 && w>=0) {
    diagonalMinusMinus += getValueOf(z, w).toString();
    z--;
    w--;
  }
  diagonalMinusMinus = diagonalMinusMinus.split('').reverse().join('');
  return diagonalMinusMinus;
}


// Get a diagonal's value (from right to left)
var getDiagonalUpRL = function(y,x) {
  var z = y-1;
  var w = x+1;
  var diagonalMinusPlus = '';
  while (z>=0 && w<8) {
    diagonalMinusPlus += getValueOf(z, w).toString();
    z--;
    w++;
  }
  diagonalMinusPlus = diagonalMinusPlus.split('').reverse().join('');
  return diagonalMinusPlus;
}

var getDiagonalDownRL = function(y,x) {
  var z = y+1;
  var w = x-1;
  var diagonalPlusMinus = '';
  while (z<8 && w>=0) {
    diagonalPlusMinus += getValueOf(z, w).toString();
    z++;
    w--;
  }
  return diagonalPlusMinus;
}

// Regex for finding valid moves
var validXReg = /\bO+X/g;
var validOReg = /\bX+O/g;

var validXMove = function(y,x){
  var valid = [
               validXReg.test(getDiagonalDownRL(y,x)),
               validXReg.test(getDiagonalDownLR(y,x)),
               validXReg.test(getDiagonalUpLR(y,x)),
               validXReg.test(getDiagonalUpRL(y,x)),
               validXReg.test(getRightRow(y,x)),
               validXReg.test(getLeftRow(y,x)),
               validXReg.test(getColumnDown(y,x)),
               validXReg.test(getColumnUp(y,x))
              ];
  return valid.some(function(regTest) {
    return regTest;
  });
}

var validOMove = function(y,x){
  var valid = [
               validOReg.test(getDiagonalDownRL(y,x)),
               validOReg.test(getDiagonalDownLR(y,x)),
               validOReg.test(getDiagonalUpLR(y,x)),
               validOReg.test(getDiagonalUpRL(y,x)),
               validOReg.test(getRightRow(y,x)),
               validOReg.test(getLeftRow(y,x)),
               validOReg.test(getColumnDown(y,x)),
               validOReg.test(getColumnUp(y,x))
              ];
  return valid.some(function(regTest) {
    return regTest;
  });
}

$gameEl.children().click(function(event) {
  var $elIdArr = event.target.id.split(',');
  var y = parseInt($elIdArr[0]);
  var x = parseInt($elIdArr[1]);
  if (currentTurn === playerO && validOMove(y,x)) {
    board[y][x] = "O";
    currentTurn = playerX;
  } else if (currentTurn === playerX && validXMove(y,x)) {
    board[y][x] = "X";
    currentTurn = playerO;
  } else {
    console.log("That move is not allowed");
  }
})


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
