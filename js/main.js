//  ____                         _
// |  _ \ _____   _____ _ __ ___(_)
// | |_) / _ \ \ / / _ \ '__/ __| |
// |  _ <  __/\ V /  __/ |  \__ \ |
// |_| \_\___| \_/ \___|_|  |___/_|


// game element is stored as a variable
var $gameEl = $("#game");

// Set to true when game starts
var gameIsBeingPlayed = false;

// Piece constructor function
var piece = function(name) {
  this.count = 2;
  this.name = name;
}

// Number of cells taken by each player
var $xCellsNum;
var $oCellsNum;

// Number of cells played
var $playedCellsNum;

// Create Players
var playerX = new piece("X");
var playerO = new piece("O");

// Current Turn varaible
var currentTurn = playerX;       // playerO

// Board model
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

// Regex for finding valid moves
var validXReg = /\bO+X/g;
var validOReg = /\bX+O/g;

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
  currentTurn = playerX;         // reset to playerX
  return true;
};

function searchBoard(y, x, dir, str = '') {
  if ((y < 7 && y > 0) && (x < 8 && x >= 0)) {
    if (dir === "n") {
      y -= 1;
    } else if (dir === "nw") {
      y -= 1;
      x -= 1;
    } else if (dir === "w") {
      x -= 1;
    } else if (dir === "sw") {
      y += 1;
      x -= 1;
    } else if (dir === "s") {
      y += 1;
    } else if (dir === "se") {
      y += 1;
      x += 1;
    } else if (dir === "e") {
      x += 1;
    } else if (dir === "ne") {
      x += 1;
      y -= 1;
    }
    str += board[y][x] || '_';
    return searchBoard(y, x, dir, str);
  } else {
    return str;
  }
}

function collectDirections(y, x) {
  let obj = {n: '', ne: '', e: '', se: '', s: '', sw: '', w: '', nw: ''};
  Object.keys(obj).forEach(key => {
    obj[key] = searchBoard(y,x,key);
  })
  return obj;
}

function switchPlayer() {
  currentTurn === playerX ? currentTurn = playerO
                          : currentTurn = playerX;
}

clearTheBoard();
printTheBoard();
