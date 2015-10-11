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
  return "It is player " + currentTurn.cssClass + "'s turn.";
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
    xSearch--;
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

var getDiagonalUpLR = function(y,x) {
  var z = y-1;
  var w = x-1;
  var diagonalMinusMinus = '';
  while (z>=0 && w>=0) {
    diagonalMinusMinus += getValueOf(z, w).toString();
    z--;
    w--;
  }
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

var checkValidMove = function(reg,y,x){
  var valid = [
               reg.test(getDiagonalDownRL(y,x)),
               reg.test(getDiagonalDownLR(y,x)),
               reg.test(getDiagonalUpLR(y,x)),
               reg.test(getDiagonalUpRL(y,x)),
               reg.test(getRightRow(y,x)),
               reg.test(getLeftRow(y,x)),
               reg.test(getColumnDown(y,x)),
               reg.test(getColumnUp(y,x))
              ];
  return valid.some(function(regTest) {
    return regTest;
  });
}

var matchLength = function(reg, str) {
  var len = str.match(reg).join('').length;
  return len;
}

var commitDDRL = function(y,x,player,lenDDRL) {
  var z = y+1;
  var w = x-1;
  var changes = [];
  for (var i = 0; i < lenDDRL; i++) {
    board[z][w] = player.cssClass;
    changes.push([z,w]);
    z++;
    w--;
  }
  return changes;
}

var commitDDLR = function(y,x,player,lenDDLR) {
  var z = y+1;
  var w = x+1;
  var changes = [];
  for (var i = 0; i < lenDDLR; i++) {
    board[z][w] = player.cssClass;
    changes.push([z,w]);
    z++;
    w++;
  }
  return changes;
}

var commitDULR = function(y,x,player,lenDULR) {
  var z = y-1;
  var w = x-1;
  var changes = [];
  for (var i = 0; i < lenDULR; i++) {
    board[z][w] = player.cssClass;
    changes.push([z,w]);
    z--;
    w--;
  }
  return changes;
}

var commitDURL = function(y,x,player,lenDURL) {
  var z = y-1;
  var w = x+1;
  var changes = [];
  for (var i = 0; i < lenDURL; i++) {
    board[z][w] = player.cssClass;
    changes.push([z,w]);
    z--;
    w++;
  }
  return changes;
}

var commitRR = function(y,x,player,lenRR) {
  var xSearch = x + 1;
  var changes = [];
  for (var i = 0; i < lenRR; i++) {
    board[y][xSearch] = player.cssClass;
    changes.push([y,xSearch]);
    xSearch++;
  }
  return changes;
}

var commitLR = function(y,x,player,lenLR) {
  var xSearch = x - 1;
  var changes = [];
  for (var i = 0; i < lenLR; i++) {
    board[y][xSearch] = player.cssClass;
    changes.push([y,xSearch]);
    xSearch--;
  }
  return changes;
}

var commitCD = function(y,x,player,lenCD) {
  var ySearch = y + 1;
  var changes = [];
  for (var i = 0; i < lenCD; i++) {
    board[ySearch][x] = player.cssClass;
    changes.push([ySearch,x]);
    ySearch++;
  }
  return changes;
}

var commitCU = function(y,x,player,lenCU) {
  var ySearch = y - 1;
  var changes = [];
  for (var i = 0; i < lenCU; i++) {
    board[ySearch][x] = player.cssClass;
    changes.push([ySearch,x]);
    ySearch--;
  }
  return changes;
}


// Replace values in model
var commitValidMove = function(reg,y,x,player) {
  var changes = [];
  if (reg.test(getDiagonalDownRL(y,x))) {
    var lenDDRL = matchLength(reg, getDiagonalDownRL(y,x));
    var newDDRL = commitDDRL(y,x,player,lenDDRL);
    changes.push(newDDRL);
  }
  if (reg.test(getDiagonalDownLR(y,x))) {
    var lenDDLR = matchLength(reg, getDiagonalDownLR(y,x));
    var newDDLR = commitDDLR(y,x,player,lenDDLR);
    changes.push(newDDLR);
  }
  if (reg.test(getDiagonalUpLR(y,x))) {
    var lenDULR = matchLength(reg, getDiagonalUpLR(y,x));
    var newDULR = commitDULR(y,x,player,lenDULR);
    changes.push(newDULR);
  }
  if (reg.test(getDiagonalUpRL(y,x))) {
    var lenDURL = matchLength(reg, getDiagonalUpRL(y,x));
    var newDURL = commitDURL(y,x,player,lenDURL);
    changes.push(newDURL);
  }
  if (reg.test(getRightRow(y,x))) {
    var lenRR = matchLength(reg, getRightRow(y,x));
    var newRR = commitRR(y,x,player,lenRR);
    changes.push(newRR);
  }
  if (reg.test(getLeftRow(y,x))) {
    var lenLR = matchLength(reg, getLeftRow(y,x));
    var newLR = commitLR(y,x,player,lenLR);
    changes.push(newLR);
  }
  if (reg.test(getColumnDown(y,x))) {
    var lenCD = matchLength(reg, getColumnDown(y,x));
    var newCD = commitCD(y,x,player,lenCD);
    changes.push(newCD);
  }
  if (reg.test(getColumnUp(y,x))) {
    var lenCU = matchLength(reg, getColumnUp(y,x));
    var newCU = commitCU(y,x,player,lenCU);
    changes.push(newCU);
  }
  //console.log(changes);
}



// Clear board
var clearTheBoard = function() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      board[i][j] = null;
    }
  }
  board[3][4] = "X";
  board[4][3] = "X";
  board[3][3] = "O";
  board[4][4] = "O";
  currentTurn === playerX         // reset to playerX
  return true;
};

var render = function() {
  for (var i = 0; i < 64; i++) {
    for (var j = 0; j < 8; j++) {
      $(document.getElementById(i + ',' + j)).attr('value', function() {
        return board[i][j];
      });
    };
  }
  $('.cells').each(function(index, element) {
    if ($(element).attr('value') === "X") {
      if ($(element).hasClass("O")) $(element).removeClass("O");
      $(element).addClass("X");
    }
    if ($(element).attr('value') === "O") {
      if ($(element).hasClass("X")) $(element).removeClass("X");
      $(element).addClass("O");
    }
  });
};

// clear Cells to restart game
var clearCells = function() {
  var cells = document.getElementsByClassName("cells");
  for (var i = 0; i < 64; i++) {
    cells[i].textContent = "";
  }
  clearTheBoard(); // model
  render();
  return true;
};


$gameEl.children().click(function(event) {
  var $elIdArr = event.target.id.split(',');
  var y = parseInt($elIdArr[0]);
  var x = parseInt($elIdArr[1]);
  if (currentTurn === playerO && checkValidMove(validOReg,y,x)) {
    board[y][x] = "O";
    commitValidMove(validOReg,y,x,currentTurn)
    currentTurn = playerX;
  } else if (currentTurn === playerX && checkValidMove(validXReg,y,x)) {
    board[y][x] = "X";
    commitValidMove(validXReg,y,x,currentTurn)
    currentTurn = playerO;
  } else {
    console.log("That move is not allowed");
  }
  printTheBoard();
  console.log(nextPlayerString());
  render();
});
