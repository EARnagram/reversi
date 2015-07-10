/*
 * # Reversi
 */

// game element is stored as a variable
var $gameEl = $("#game");
var black = "#464646"; //style="background-color: rgb(70, 70, 70)";
var white = "#EBEBEB"; //style="background-color: rgb(235, 235, 235)";

var gameIsBeingPlayed = false; // true
var currentTurn = black;       // white
var board = [
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "O", "X", "_", "_", "_"],
  ["_", "_", "_", "X", "O", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_", "_"]
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

$('.cells').each(function(index, element) {
  if ($(element).attr('value') === "X") {
    element.style.backgroundColor = "#464646";
  }
  if ($(element).attr('value') === "O") {
    element.style.backgroundColor = "#EBEBEB";
  }
})

var render = function() {
  for (var i = 0; i < 64; i++) {
    for (var j = 0; j < 8; j++) {
      $(document.getElementById(i + ',' + j)).attr('value', function() {
        return board[i][j];
      })
      };
    }
    $('.cells').each(function(index, element) {
  if ($(element).attr('value') === "X") {
    element.style.backgroundColor = "#464646";
  }
  if ($(element).attr('value') === "O") {
    element.style.backgroundColor = "#EBEBEB";
  }
})
  };

var changeColorPlease = function() {
  $('.cells').each(function(index, element) {
  if ($(element).attr('value') === "X") {
    element.style.backgroundColor = "#464646";
  }
  if ($(element).attr('value') === "O") {
    element.style.backgroundColor = "#EBEBEB";
  }
})
};

$gameEl.on('click', 'div', function() {
  // prevents selecting a cell twice
  if ($(this).attr("value") !== "_") {
    return false;
  } else {
        // log useful debugging info to the user
        console.log("clicked: " + this.id);

        // grabs cells for alternate turn
        var $cellsEl = $(this);

        // split out the coordinates based on the id
        var cellsCoordinates = this.id.split(",");

        // var xPlus = cellsCoordinates[1]+1;
        // var xMinus = cellsCoordinates[1]-1;
        // var yPlus = cellsCoordinates[0]+1;
        // var yMinus = cellsCoordinates[0]-1;

        var xMoveLegalUp = function() {
          var yMinus = parseInt(cellsCoordinates[0])-1;
          if (yMinus >= 0){
          if ((board[yMinus][cellsCoordinates[1]]=== "O") && (board[yMinus-1][cellsCoordinates[1]]=== "O") && (board[yMinus-2][cellsCoordinates[1]]=== "O") && (board[yMinus-3][cellsCoordinates[1]]=== "O") && (board[yMinus-4][cellsCoordinates[1]]=== "O") && (board[yMinus-5][cellsCoordinates[1]]=== "O") && (board[yMinus-6][cellsCoordinates[1]]=== "X")) {
            board[yMinus-5][cellsCoordinates[1]]= "X";
            board[yMinus-4][cellsCoordinates[1]]= "X";
            board[yMinus-3][cellsCoordinates[1]]= "X";
            board[yMinus-2][cellsCoordinates[1]]= "X";
            board[yMinus-1][cellsCoordinates[1]]= "X";
            board[yMinus][cellsCoordinates[1]]= "X";
          } else if ((board[yMinus][cellsCoordinates[1]]=== "O") && (board[yMinus-1][cellsCoordinates[1]]=== "O") && (board[yMinus-2][cellsCoordinates[1]]=== "O") && (board[yMinus-3][cellsCoordinates[1]]=== "O") && (board[yMinus-4][cellsCoordinates[1]]=== "O") && (board[yMinus-5][cellsCoordinates[1]]=== "X")) {
              board[yMinus-4][cellsCoordinates[1]]= "X";
              board[yMinus-3][cellsCoordinates[1]]= "X";
              board[yMinus-2][cellsCoordinates[1]]= "X";
              board[yMinus-1][cellsCoordinates[1]]= "X";
              board[yMinus][cellsCoordinates[1]]= "X";
          } else if ((board[yMinus][cellsCoordinates[1]]=== "O") && (board[yMinus-1][cellsCoordinates[1]]=== "O") && (board[yMinus-2][cellsCoordinates[1]]=== "O") && (board[yMinus-3][cellsCoordinates[1]]=== "O") && (board[yMinus-4][cellsCoordinates[1]]=== "X")) {
              board[yMinus-3][cellsCoordinates[1]]= "X";
              board[yMinus-2][cellsCoordinates[1]]= "X";
              board[yMinus-1][cellsCoordinates[1]]= "X";
              board[yMinus][cellsCoordinates[1]]= "X";
          } else if ((board[yMinus][cellsCoordinates[1]]=== "O") && (board[yMinus-1][cellsCoordinates[1]]=== "O") && (board[yMinus-2][cellsCoordinates[1]]=== "O") && (board[yMinus-3][cellsCoordinates[1]]=== "X")) {
              board[yMinus-2][cellsCoordinates[1]]= "X";
              board[yMinus-1][cellsCoordinates[1]]= "X";
              board[yMinus][cellsCoordinates[1]]= "X";
          } else if ((board[yMinus][cellsCoordinates[1]]=== "O") && (board[yMinus-1][cellsCoordinates[1]]=== "O") && (board[yMinus-2][cellsCoordinates[1]]=== "X")) {
              board[yMinus-1][cellsCoordinates[1]]= "X";
              board[yMinus][cellsCoordinates[1]]= "X";
          } else if ((board[yMinus][cellsCoordinates[1]]=== "O") && (board[yMinus-1][cellsCoordinates[1]]=== "X")) {
              board[yMinus][cellsCoordinates[1]]= "X";
          } else {
            return false;
          }}else {return false;}
        };

        var xMoveLegalDown = function() {
          var yPlus = parseInt(cellsCoordinates[0])+1;
          if (yPlus < 8) {
          if ((board[yPlus][cellsCoordinates[1]]=== "O") && (board[yPlus+1][cellsCoordinates[1]]=== "O") && (board[yPlus+2][cellsCoordinates[1]]=== "O") && (board[yPlus+3][cellsCoordinates[1]]=== "O") && (board[yPlus+4][cellsCoordinates[1]]=== "O") && (board[yPlus+5][cellsCoordinates[1]]=== "O") && (board[yPlus+6][cellsCoordinates[1]]=== "X")) {
              board[yPlus+5][cellsCoordinates[1]]= "X";
              board[yPlus+4][cellsCoordinates[1]]= "X";
              board[yPlus+3][cellsCoordinates[1]]= "X";
              board[yPlus+2][cellsCoordinates[1]]= "X";
              board[yPlus+1][cellsCoordinates[1]]= "X";
              board[yPlus][cellsCoordinates[1]]= "X";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "O") && (board[yPlus+1][cellsCoordinates[1]]=== "O") && (board[yPlus+2][cellsCoordinates[1]]=== "O") && (board[yPlus+3][cellsCoordinates[1]]=== "O") && (board[yPlus+4][cellsCoordinates[1]]=== "O") && (board[yPlus+5][cellsCoordinates[1]]=== "X")) {
              board[yPlus+4][cellsCoordinates[1]]= "X";
              board[yPlus+3][cellsCoordinates[1]]= "X";
              board[yPlus+2][cellsCoordinates[1]]= "X";
              board[yPlus+1][cellsCoordinates[1]]= "X";
              board[yPlus][cellsCoordinates[1]]= "X";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "O") && (board[yPlus+1][cellsCoordinates[1]]=== "O") && (board[yPlus+2][cellsCoordinates[1]]=== "O") && (board[yPlus+3][cellsCoordinates[1]]=== "O") && (board[yPlus+4][cellsCoordinates[1]]=== "X")) {
              board[yPlus+3][cellsCoordinates[1]]= "X";
              board[yPlus+2][cellsCoordinates[1]]= "X";
              board[yPlus+1][cellsCoordinates[1]]= "X";
              board[yPlus][cellsCoordinates[1]]= "X";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "O") && (board[yPlus+1][cellsCoordinates[1]]=== "O") && (board[yPlus+2][cellsCoordinates[1]]=== "O") && (board[yPlus+3][cellsCoordinates[1]]=== "X")) {
              board[yPlus+2][cellsCoordinates[1]]= "X";
              board[yPlus+1][cellsCoordinates[1]]= "X";
              board[yPlus][cellsCoordinates[1]]= "X";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "O") && (board[yPlus+1][cellsCoordinates[1]]=== "O") && (board[yPlus+2][cellsCoordinates[1]]=== "X")) {
              board[yPlus+1][cellsCoordinates[1]]= "X";
              board[yPlus][cellsCoordinates[1]]= "X";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "O") && (board[yPlus+1][cellsCoordinates[1]]=== "X")) {
              board[yPlus][cellsCoordinates[1]]= "X";
          } else {
            return false;
          }} else {return false;}
        };

        var xMoveLegalLeft = function() {
          var xMinus = parseInt(cellsCoordinates[1])-1;
          if ((board[cellsCoordinates[0]][xMinus] === "O") && (board[cellsCoordinates[0]][xMinus-1] === "O") && (board[cellsCoordinates[0]][xMinus-2] === "O") && (board[cellsCoordinates[0]][xMinus-3] === "O") && (board[cellsCoordinates[0]][xMinus-4] === "O") && (board[cellsCoordinates[0]][xMinus-5] === "O") && (board[cellsCoordinates[0]][xMinus-6] === "X")) {
              board[cellsCoordinates[0]][xMinus-5] = "X";
              board[cellsCoordinates[0]][xMinus-4] = "X";
              board[cellsCoordinates[0]][xMinus-3] = "X";
              board[cellsCoordinates[0]][xMinus-2] = "X";
              board[cellsCoordinates[0]][xMinus-1] = "X";
              board[cellsCoordinates[0]][xMinus] = "X";
            } else if ((board[cellsCoordinates[0]][xMinus] === "O") && (board[cellsCoordinates[0]][xMinus-1] === "O") && (board[cellsCoordinates[0]][xMinus-2] === "O") && (board[cellsCoordinates[0]][xMinus-3] === "O") && (board[cellsCoordinates[0]][xMinus-4] === "O") && (board[cellsCoordinates[0]][xMinus-5] === "X")) {
                board[cellsCoordinates[0]][xMinus-4] = "X";
                board[cellsCoordinates[0]][xMinus-3] = "X";
                board[cellsCoordinates[0]][xMinus-2] = "X";
                board[cellsCoordinates[0]][xMinus-1] = "X";
                board[cellsCoordinates[0]][xMinus] = "X";
            } else if ((board[cellsCoordinates[0]][xMinus] === "O") && (board[cellsCoordinates[0]][xMinus-1] === "O") && (board[cellsCoordinates[0]][xMinus-2] === "O") && (board[cellsCoordinates[0]][xMinus-3] === "O") && (board[cellsCoordinates[0]][xMinus-4] === "X")) {
                board[cellsCoordinates[0]][xMinus-3] = "X";
                board[cellsCoordinates[0]][xMinus-2] = "X";
                board[cellsCoordinates[0]][xMinus-1] = "X";
                board[cellsCoordinates[0]][xMinus] = "X";
            } else if ((board[cellsCoordinates[0]][xMinus] === "O") && (board[cellsCoordinates[0]][xMinus-1] === "O") && (board[cellsCoordinates[0]][xMinus-2] === "O") && (board[cellsCoordinates[0]][xMinus-3] === "X")) {
                board[cellsCoordinates[0]][xMinus-2] = "X";
                board[cellsCoordinates[0]][xMinus-1] = "X";
                board[cellsCoordinates[0]][xMinus] = "X";
            } else if ((board[cellsCoordinates[0]][xMinus] === "O") && (board[cellsCoordinates[0]][xMinus-1] === "O") && (board[cellsCoordinates[0]][xMinus-2] === "X")) {
                board[cellsCoordinates[0]][xMinus-1] = "X";
                board[cellsCoordinates[0]][xMinus] = "X";
            } else if ((board[cellsCoordinates[0]][xMinus] === "O") && (board[cellsCoordinates[0]][xMinus-1] === "X")) {
                board[cellsCoordinates[0]][xMinus] = "X";
            } else {
              return false;
            }
        };

        var xMoveLegalRight = function() {
          var xPlus = parseInt(cellsCoordinates[1])+1;
          if ((board[cellsCoordinates[0]][xPlus] === "O") && (board[cellsCoordinates[0]][xPlus+1] === "O") && (board[cellsCoordinates[0]][xPlus+2] === "O") && (board[cellsCoordinates[0]][xPlus+3] === "O") && (board[cellsCoordinates[0]][xPlus+4] === "O") && (board[cellsCoordinates[0]][xPlus+5] === "O") && (board[cellsCoordinates[0]][xPlus+6] === "X")) {
            board[cellsCoordinates[0]][xPlus+5] = "X";
            board[cellsCoordinates[0]][xPlus+4] = "X";
            board[cellsCoordinates[0]][xPlus+3] = "X";
            board[cellsCoordinates[0]][xPlus+2] = "X";
            board[cellsCoordinates[0]][xPlus+1] = "X";
            board[cellsCoordinates[0]][xPlus] = "X";
          } else if ((board[cellsCoordinates[0]][xPlus] === "O") && (board[cellsCoordinates[0]][xPlus+1] === "O") && (board[cellsCoordinates[0]][xPlus+2] === "O") && (board[cellsCoordinates[0]][xPlus+3] === "O") && (board[cellsCoordinates[0]][xPlus+4] === "O") && (board[cellsCoordinates[0]][xPlus+5] === "X")) {
              board[cellsCoordinates[0]][xPlus+4] = "X";
              board[cellsCoordinates[0]][xPlus+3] = "X";
              board[cellsCoordinates[0]][xPlus+2] = "X";
              board[cellsCoordinates[0]][xPlus+1] = "X";
              board[cellsCoordinates[0]][xPlus] = "X";
          } else if ((board[cellsCoordinates[0]][xPlus] === "O") && (board[cellsCoordinates[0]][xPlus+1] === "O") && (board[cellsCoordinates[0]][xPlus+2] === "O") && (board[cellsCoordinates[0]][xPlus+3] === "O") && (board[cellsCoordinates[0]][xPlus+4] === "X")) {
              board[cellsCoordinates[0]][xPlus+3] = "X";
              board[cellsCoordinates[0]][xPlus+2] = "X";
              board[cellsCoordinates[0]][xPlus+1] = "X";
              board[cellsCoordinates[0]][xPlus] = "X";
          } else if ((board[cellsCoordinates[0]][xPlus] === "O") && (board[cellsCoordinates[0]][xPlus+1] === "O") && (board[cellsCoordinates[0]][xPlus+2] === "O") && (board[cellsCoordinates[0]][xPlus+3] === "X")) {
              board[cellsCoordinates[0]][xPlus+2] = "X";
              board[cellsCoordinates[0]][xPlus+1] = "X";
              board[cellsCoordinates[0]][xPlus] = "X";
          } else if ((board[cellsCoordinates[0]][xPlus] === "O") && (board[cellsCoordinates[0]][xPlus+1] === "O") && (board[cellsCoordinates[0]][xPlus+2] === "X")) {
              board[cellsCoordinates[0]][xPlus+1] = "X";
              board[cellsCoordinates[0]][xPlus] = "X";
          } else if ((board[cellsCoordinates[0]][xPlus] === "O") && (board[cellsCoordinates[0]][xPlus+1] === "X")) {
              board[cellsCoordinates[0]][xPlus] = "X";
          } else {
              return false;
          }
        };

        var xMoveLegalDiagonalUpRight = function() {
          var xPlus = parseInt(cellsCoordinates[1])+1;
          var yMinus = parseInt(cellsCoordinates[0])-1;
          if (yMinus >= 0) {
            if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "O") && (board[yMinus-5][xPlus+5] === "O") && (board[yMinus-6][xPlus+6] === "O") && (board[yMinus-7][xPlus+7] === "X")) {
              board[yMinus-6][xPlus+6] = "X";
              board[yMinus-5][xPlus+5] = "X";
              board[yMinus-4][xPlus+4] = "X";
              board[yMinus-3][xPlus+3] = "X";
              board[yMinus-2][xPlus+2] = "X";
              board[yMinus-1][xPlus+1] = "X";
              board[yMinus][xPlus] = "X";
            } else if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "O") && (board[yMinus-5][xPlus+5] === "O") && (board[yMinus-6][xPlus+6] === "X")) {
              board[yMinus-5][xPlus+5] = "X";
              board[yMinus-4][xPlus+4] = "X";
              board[yMinus-3][xPlus+3] = "X";
              board[yMinus-2][xPlus+2] = "X";
              board[yMinus-1][xPlus+1] = "X";
              board[yMinus][xPlus] = "X";
            } else if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "O") && (board[yMinus-5][xPlus+5] === "X")) {
              board[yMinus-4][xPlus+4] = "X";
              board[yMinus-3][xPlus+3] = "X";
              board[yMinus-2][xPlus+2] = "X";
              board[yMinus-1][xPlus+1] = "X";
              board[yMinus][xPlus] = "X";
            } else if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "X")) {
              board[yMinus-3][xPlus+3] = "X";
              board[yMinus-2][xPlus+2] = "X";
              board[yMinus-1][xPlus+1] = "X";
              board[yMinus][xPlus] = "X";
            } else if (((board[yMinus][xPlus]) === "O") && ((board[yMinus-1][xPlus+1]) === "O") && ((board[yMinus-2][xPlus+2]) === "O") && ((board[yMinus-3][xPlus+3]) === "X")) {
              board[yMinus-2][xPlus+2] = "X";
              board[yMinus-1][xPlus+1] = "X";
              board[yMinus][xPlus] = "X";
            } else if (((board[yMinus][xPlus]) === "O") && ((board[yMinus-1][xPlus+1]) === "O") && ((board[yMinus-2][xPlus+2]) === "X")) {
              board[yMinus-1][xPlus+1] = "X";
              board[yMinus][xPlus] = "X";
            } else if (((board[yMinus][xPlus]) === "O") && ((board[yMinus-1][xPlus+1]) === "X")) {
              board[yMinus][xPlus] = "X";
            } else {
              return false;
            }}else {return false;}
        };

        var xMoveLegalDiagonalDownLeft = function() {
          var xMinus = parseInt(cellsCoordinates[1])-1;
          var yPlus = parseInt(cellsCoordinates[0])+1;
          if (yPlus < 8) {
            if ((board[yPlus][xMinus] === "O") && (board[yPlus+1][xMinus-1] === "O") && (board[yPlus+2][xMinus-2] === "O") && (board[yPlus+3][xMinus-3] === "O") && (board[yPlus+4][xMinus-4] === "O") && (board[yPlus+5][xMinus-5] === "O") && (board[yPlus+6][xMinus-6] === "O") && (board[yPlus+7][xMinus-7] === "X")) {
              board[yPlus+6][xMinus-6] = "X";
              board[yPlus+5][xMinus-5] = "X";
              board[yPlus+4][xMinus-4] = "X";
              board[yPlus+3][xMinus-3] = "X";
              board[yPlus+2][xMinus-2] = "X";
              board[yPlus+1][xMinus-1] = "X";
              board[yPlus][xMinus] = "X";
            } else if ((board[yPlus][xMinus] === "O") && (board[yPlus+1][xMinus-1] === "O") && (board[yPlus+2][xMinus-2] === "O") && (board[yPlus+3][xMinus-3] === "O") && (board[yPlus+4][xMinus-4] === "O") && (board[yPlus+5][xMinus-5] === "O") && (board[yPlus+6][xMinus-6] === "X")) {
              board[yPlus+5][xMinus-5] = "X";
              board[yPlus+4][xMinus-4] = "X";
              board[yPlus+3][xMinus-3] = "X";
              board[yPlus+2][xMinus-2] = "X";
              board[yPlus+1][xMinus-1] = "X";
              board[yPlus][xMinus] = "X";
            } else if ((board[yPlus][xMinus] === "O") && (board[yPlus+1][xMinus-1] === "O") && (board[yPlus+2][xMinus-2] === "O") && (board[yPlus+3][xMinus-3] === "O") && (board[yPlus+4][xMinus-4] === "O") && (board[yPlus+5][xMinus-5] === "X")) {
              board[yPlus+4][xMinus-4] = "X";
              board[yPlus+3][xMinus-3] = "X";
              board[yPlus+2][xMinus-2] = "X";
              board[yPlus+1][xMinus-1] = "X";
              board[yPlus][xMinus] = "X";
            } else if ((board[yPlus][xMinus] === "O") && (board[yPlus+1][xMinus-1] === "O") && (board[yPlus+2][xMinus-2] === "O") && (board[yPlus+3][xMinus-3] === "O") && (board[yPlus+4][xMinus-4] === "X")) {
              board[yPlus+3][xMinus-3] = "X";
              board[yPlus+2][xMinus-2] = "X";
              board[yPlus+1][xMinus-1] = "X";
              board[yPlus][xMinus] = "X";
            } else if ((board[yPlus][xMinus] === "O") && (board[yPlus+1][xMinus-1] === "O") && (board[yPlus+2][xMinus-2] === "O") && (board[yPlus+3][xMinus-3] === "X")) {
              board[yPlus+2][xMinus-2] = "X";
              board[yPlus+1][xMinus-1] = "X";
              board[yPlus][xMinus] = "X";
            } else if ((board[yPlus][xMinus] === "O") && (board[yPlus+1][xMinus-1] === "O") && (board[yPlus+2][xMinus-2] === "X")) {
              board[yPlus+1][xMinus-1] = "X";
              board[yPlus][xMinus] = "X";
            } else if ((board[yPlus][xMinus] === "O") && (board[yPlus+1][xMinus-1] === "X")) {
              board[yPlus][xMinus] = "X";
            } else {
              return false;
            }} else {return false;}
        };

        var xMoveLegalDiagonalDownRight = function() {
          var xPlus = parseInt(cellsCoordinates[1])+1;
          var yPlus = parseInt(cellsCoordinates[0])+1;
          if (yPlus < 8) {
            if ((board[yPlus][xPlus] === "O") && (board[yPlus+1][xPlus+1] === "O") && (board[yPlus+2][xPlus+2] === "O") && (board[yPlus+3][xPlus+3] === "O") && (board[yPlus+4][xPlus+4] === "O") && (board[yPlus+5][xPlus+5] === "O") && (board[yPlus+6][xPlus+6] === "O") && (board[yPlus+7][xPlus+7] === "X")) {
              board[yPlus+6][xPlus+6] = "X";
              board[yPlus+5][xPlus+5] = "X";
              board[yPlus+4][xPlus+4] = "X";
              board[yPlus+3][xPlus+3] = "X";
              board[yPlus+2][xPlus+2] = "X";
              board[yPlus+1][xPlus+1] = "X";
              board[yPlus][xPlus] = "X";
            } else if ((board[yPlus][xPlus] === "O") && (board[yPlus+1][xPlus+1] === "O") && (board[yPlus+2][xPlus+2] === "O") && (board[yPlus+3][xPlus+3] === "O") && (board[yPlus+4][xPlus+4] === "O") && (board[yPlus+5][xPlus+5] === "O") && (board[yPlus+6][xPlus+6] === "X")) {
              board[yPlus+5][xPlus+5] = "X";
              board[yPlus+4][xPlus+4] = "X";
              board[yPlus+3][xPlus+3] = "X";
              board[yPlus+2][xPlus+2] = "X";
              board[yPlus+1][xPlus+1] = "X";
              board[yPlus][xPlus] = "X";
            } else if ((board[yPlus][xPlus] === "O") && (board[yPlus+1][xPlus+1] === "O") && (board[yPlus+2][xPlus+2] === "O") && (board[yPlus+3][xPlus+3] === "O") && (board[yPlus+4][xPlus+4] === "O") && (board[yPlus+5][xPlus+5] === "X")) {
              board[yPlus+4][xPlus+4] = "X";
              board[yPlus+3][xPlus+3] = "X";
              board[yPlus+2][xPlus+2] = "X";
              board[yPlus+1][xPlus+1] = "X";
              board[yPlus][xPlus] = "X";
            } else if ((board[yPlus][xPlus] === "O") && (board[yPlus+1][xPlus+1] === "O") && (board[yPlus+2][xPlus+2] === "O") && (board[yPlus+3][xPlus+3] === "O") && (board[yPlus+4][xPlus+4] === "X")) {
              board[yPlus+3][xPlus+3] = "X";
              board[yPlus+2][xPlus+2] = "X";
              board[yPlus+1][xPlus+1] = "X";
              board[yPlus][xPlus] = "X";
            } else if ((board[yPlus][xPlus] === "O") && (board[yPlus+1][xPlus+1] === "O") && (board[yPlus+2][xPlus+2] === "O") && (board[yPlus+3][xPlus+3] === "X")) {
              board[yPlus+2][xPlus+2] = "X";
              board[yPlus+1][xPlus+1] = "X";
              board[yPlus][xPlus] = "X";
            } else if ((board[yPlus][xPlus] === "O") && (board[yPlus+1][xPlus+1] === "O") && (board[yPlus+2][xPlus+2] === "X")) {
              board[yPlus+1][xPlus+1] = "X";
              board[yPlus][xPlus] = "X";
            } else if ((board[yPlus][xPlus] === "O") && (board[yPlus+1][xPlus+1] === "X")) {
              board[yPlus][xPlus] = "X";
            } else {
              return false;
            }} else {return false;}
        };

        var xMoveLegalDiagonalUpLeft = function() {
          var yMinus = cellsCoordinates[0]-1;
          var xMinus = cellsCoordinates[1]-1;
          if (yMinus >= 0) {
          if ((board[yMinus][xMinus] === "O") && (board[yMinus-1][xMinus-1] === "O") && (board[yMinus-2][xMinus-2] === "O") && (board[yMinus-3][xMinus-3] === "O") && (board[yMinus-4][xMinus-4] === "O") && (board[yMinus-5][xMinus-5] === "O") && (board[yMinus-6][xMinus-6] === "O") && (board[yMinus-7][xMinus-7] === "X")) {
            board[yMinus-6][xMinus-6] = "X";
            board[yMinus-5][xMinus-5] = "X";
            board[yMinus-4][xMinus-4] = "X";
            board[yMinus-3][xMinus-3] = "X";
            board[yMinus-2][xMinus-2] = "X";
            board[yMinus-1][xMinus-1] = "X";
            board[yMinus][xMinus] = "X";
          } else if ((board[yMinus][xMinus] === "O") && (board[yMinus-1][xMinus-1] === "O") && (board[yMinus-2][xMinus-2] === "O") && (board[yMinus-3][xMinus-3] === "O") && (board[yMinus-4][xMinus-4] === "O") && (board[yMinus-5][xMinus-5] === "O") && (board[yMinus-6][xMinus-6] === "X")) {
            board[yMinus-5][xMinus-5] = "X";
            board[yMinus-4][xMinus-4] = "X";
            board[yMinus-3][xMinus-3] = "X";
            board[yMinus-2][xMinus-2] = "X";
            board[yMinus-1][xMinus-1] = "X";
            board[yMinus][xMinus] = "X";
          } else if ((board[yMinus][xMinus] === "O") && (board[yMinus-1][xMinus-1] === "O") && (board[yMinus-2][xMinus-2] === "O") && (board[yMinus-3][xMinus-3] === "O") && (board[yMinus-4][xMinus-4] === "O") && (board[yMinus-5][xMinus-5] === "X")) {
            board[yMinus-4][xMinus-4] = "X";
            board[yMinus-3][xMinus-3] = "X";
            board[yMinus-2][xMinus-2] = "X";
            board[yMinus-1][xMinus-1] = "X";
            board[yMinus][xMinus] = "X";
          } else if ((board[yMinus][xMinus] === "O") && (board[yMinus-1][xMinus-1] === "O") && (board[yMinus-2][xMinus-2] === "O") && (board[yMinus-3][xMinus-3] === "O") && (board[yMinus-4][xMinus-4] === "X")) {
            board[yMinus-3][xMinus-3] = "X";
            board[yMinus-2][xMinus-2] = "X";
            board[yMinus-1][xMinus-1] = "X";
            board[yMinus][xMinus] = "X";
          } else if ((board[yMinus][xMinus] === "O") && (board[yMinus-1][xMinus-1] === "O") && (board[yMinus-2][xMinus-2] === "O") && (board[yMinus-3][xMinus-3] === "X")) {
            board[yMinus-2][xMinus-2] = "X";
            board[yMinus-1][xMinus-1] = "X";
            board[yMinus][xMinus] = "X";
          } else if ((board[yMinus][xMinus] === "O") && (board[yMinus-1][xMinus-1] === "O") && (board[yMinus-2][xMinus-2] === "X")) {
            board[yMinus-1][xMinus-1] = "X";
            board[yMinus][xMinus] = "X";
          } else if ((board[yMinus][xMinus] === "O") && (board[yMinus-1][xMinus-1] === "X")) {
            board[yMinus][xMinus] = "X";
          } else {
            return false;
          }}else {return false;}
        };

        var oMoveLegalUp = function() {
          if (yMinus >= 0) {
          var yMinus = parseInt(cellsCoordinates[0])-1;
            if ((board[yMinus][cellsCoordinates[1]]=== "X") && (board[yMinus-1][cellsCoordinates[1]]=== "X") && (board[yMinus-2][cellsCoordinates[1]]=== "X") && (board[yMinus-3][cellsCoordinates[1]]=== "X") && (board[yMinus-4][cellsCoordinates[1]]=== "X") && (board[yMinus-5][cellsCoordinates[1]]=== "X") && (board[yMinus-6][cellsCoordinates[1]]=== "O")) {
              board[yMinus-5][cellsCoordinates[1]]= "O";
              board[yMinus-4][cellsCoordinates[1]]= "O";
              board[yMinus-3][cellsCoordinates[1]]= "O";
              board[yMinus-2][cellsCoordinates[1]]= "O";
              board[yMinus-1][cellsCoordinates[1]]= "O";
              board[yMinus][cellsCoordinates[1]]= "O";
            } else if ((board[yMinus][cellsCoordinates[1]]=== "X") && (board[yMinus-1][cellsCoordinates[1]]=== "X") && (board[yMinus-2][cellsCoordinates[1]]=== "X") && (board[yMinus-3][cellsCoordinates[1]]=== "X") && (board[yMinus-4][cellsCoordinates[1]]=== "X") && (board[yMinus-5][cellsCoordinates[1]]=== "O")) {
                board[yMinus-4][cellsCoordinates[1]]= "O";
                board[yMinus-3][cellsCoordinates[1]]= "O";
                board[yMinus-2][cellsCoordinates[1]]= "O";
                board[yMinus-1][cellsCoordinates[1]]= "O";
                board[yMinus][cellsCoordinates[1]]= "O";
            } else if ((board[yMinus][cellsCoordinates[1]]=== "X") && (board[yMinus-1][cellsCoordinates[1]]=== "X") && (board[yMinus-2][cellsCoordinates[1]]=== "X") && (board[yMinus-3][cellsCoordinates[1]]=== "X") && (board[yMinus-4][cellsCoordinates[1]]=== "O")) {
                board[yMinus-3][cellsCoordinates[1]]= "O";
                board[yMinus-2][cellsCoordinates[1]]= "O";
                board[yMinus-1][cellsCoordinates[1]]= "O";
                board[yMinus][cellsCoordinates[1]]= "O";
            } else if ((board[yMinus][cellsCoordinates[1]]=== "X") && (board[yMinus-1][cellsCoordinates[1]]=== "X") && (board[yMinus-2][cellsCoordinates[1]]=== "X") && (board[yMinus-3][cellsCoordinates[1]]=== "O")) {
                board[yMinus-2][cellsCoordinates[1]]= "O";
                board[yMinus-1][cellsCoordinates[1]]= "O";
                board[yMinus][cellsCoordinates[1]]= "O";
            } else if ((board[yMinus][cellsCoordinates[1]]=== "X") && (board[yMinus-1][cellsCoordinates[1]]=== "X") && (board[yMinus-2][cellsCoordinates[1]]=== "O")) {
                board[yMinus-1][cellsCoordinates[1]]= "O";
                board[yMinus][cellsCoordinates[1]]= "O";
            } else if ((board[yMinus][cellsCoordinates[1]]=== "X") && (board[yMinus-1][cellsCoordinates[1]]=== "O")) {
                board[yMinus][cellsCoordinates[1]]= "O";
            } else {
              return false;
            }}else{return false;}
        };

        var oMoveLegalDown = function() {
          var yPlus = parseInt(cellsCoordinates[0])+1;
          if (yPlus < 8) {
          if ((board[yPlus][cellsCoordinates[1]]=== "X") && (board[yPlus+1][cellsCoordinates[1]]=== "X") && (board[yPlus+2][cellsCoordinates[1]]=== "X") && (board[yPlus+3][cellsCoordinates[1]]=== "X") && (board[yPlus+4][cellsCoordinates[1]]=== "X") && (board[yPlus+5][cellsCoordinates[1]]=== "X") && (board[yPlus+6][cellsCoordinates[1]]=== "O")) {
              board[yPlus+5][cellsCoordinates[1]]= "O";
              board[yPlus+4][cellsCoordinates[1]]= "O";
              board[yPlus+3][cellsCoordinates[1]]= "O";
              board[yPlus+2][cellsCoordinates[1]]= "O";
              board[yPlus+1][cellsCoordinates[1]]= "O";
              board[yPlus][cellsCoordinates[1]]= "O";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "X") && (board[yPlus+1][cellsCoordinates[1]]=== "X") && (board[yPlus+2][cellsCoordinates[1]]=== "X") && (board[yPlus+3][cellsCoordinates[1]]=== "X") && (board[yPlus+4][cellsCoordinates[1]]=== "X") && (board[yPlus+5][cellsCoordinates[1]]=== "O")) {
              board[yPlus+4][cellsCoordinates[1]]= "O";
              board[yPlus+3][cellsCoordinates[1]]= "O";
              board[yPlus+2][cellsCoordinates[1]]= "O";
              board[yPlus+1][cellsCoordinates[1]]= "O";
              board[yPlus][cellsCoordinates[1]]= "O";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "X") && (board[yPlus+1][cellsCoordinates[1]]=== "X") && (board[yPlus+2][cellsCoordinates[1]]=== "X") && (board[yPlus+3][cellsCoordinates[1]]=== "X") && (board[yPlus+4][cellsCoordinates[1]]=== "O")) {
              board[yPlus+3][cellsCoordinates[1]]= "O";
              board[yPlus+2][cellsCoordinates[1]]= "O";
              board[yPlus+1][cellsCoordinates[1]]= "O";
              board[yPlus][cellsCoordinates[1]]= "O";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "X") && (board[yPlus+1][cellsCoordinates[1]]=== "X") && (board[yPlus+2][cellsCoordinates[1]]=== "X") && (board[yPlus+3][cellsCoordinates[1]]=== "O")) {
              board[yPlus+2][cellsCoordinates[1]]= "O";
              board[yPlus+1][cellsCoordinates[1]]= "O";
              board[yPlus][cellsCoordinates[1]]= "O";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "X") && (board[yPlus+1][cellsCoordinates[1]]=== "X") && (board[yPlus+2][cellsCoordinates[1]]=== "O")) {
              board[yPlus+1][cellsCoordinates[1]]= "O";
              board[yPlus][cellsCoordinates[1]]= "O";
          } else if ((board[yPlus][cellsCoordinates[1]]=== "X") && (board[yPlus+1][cellsCoordinates[1]]=== "O")) {
              board[yPlus][cellsCoordinates[1]]= "O";
          } else {
            return false;
          }} else {return false;}
        };

        var oMoveLegalLeft = function() {
          var xMinus = parseInt(cellsCoordinates[1])-1;
          if ((board[cellsCoordinates[0]][xMinus] === "X") && (board[cellsCoordinates[0]][xMinus-1] === "X") && (board[cellsCoordinates[0]][xMinus-2] === "X") && (board[cellsCoordinates[0]][xMinus-3] === "X") && (board[cellsCoordinates[0]][xMinus-4] === "X") && (board[cellsCoordinates[0]][xMinus-5] === "X") && (board[cellsCoordinates[0]][xMinus-6] === "O")) {
              board[cellsCoordinates[0]][xMinus-5] = "O";
              board[cellsCoordinates[0]][xMinus-4] = "O";
              board[cellsCoordinates[0]][xMinus-3] = "O";
              board[cellsCoordinates[0]][xMinus-2] = "O";
              board[cellsCoordinates[0]][xMinus-1] = "O";
              board[cellsCoordinates[0]][xMinus] = "O";
            } else if ((board[cellsCoordinates[0]][xMinus] === "X") && (board[cellsCoordinates[0]][xMinus-1] === "X") && (board[cellsCoordinates[0]][xMinus-2] === "X") && (board[cellsCoordinates[0]][xMinus-3] === "X") && (board[cellsCoordinates[0]][xMinus-4] === "X") && (board[cellsCoordinates[0]][xMinus-5] === "O")) {
                board[cellsCoordinates[0]][xMinus-4] = "O";
                board[cellsCoordinates[0]][xMinus-3] = "O";
                board[cellsCoordinates[0]][xMinus-2] = "O";
                board[cellsCoordinates[0]][xMinus-1] = "O";
                board[cellsCoordinates[0]][xMinus] = "O";
            } else if ((board[cellsCoordinates[0]][xMinus] === "X") && (board[cellsCoordinates[0]][xMinus-1] === "X") && (board[cellsCoordinates[0]][xMinus-2] === "X") && (board[cellsCoordinates[0]][xMinus-3] === "X") && (board[cellsCoordinates[0]][xMinus-4] === "O")) {
                board[cellsCoordinates[0]][xMinus-3] = "O";
                board[cellsCoordinates[0]][xMinus-2] = "O";
                board[cellsCoordinates[0]][xMinus-1] = "O";
                board[cellsCoordinates[0]][xMinus] = "O";
            } else if ((board[cellsCoordinates[0]][xMinus] === "X") && (board[cellsCoordinates[0]][xMinus-1] === "X") && (board[cellsCoordinates[0]][xMinus-2] === "X") && (board[cellsCoordinates[0]][xMinus-3] === "O")) {
                board[cellsCoordinates[0]][xMinus-2] = "O";
                board[cellsCoordinates[0]][xMinus-1] = "O";
                board[cellsCoordinates[0]][xMinus] = "O";
            } else if ((board[cellsCoordinates[0]][xMinus] === "X") && (board[cellsCoordinates[0]][xMinus-1] === "X") && (board[cellsCoordinates[0]][xMinus-2] === "O")) {
                board[cellsCoordinates[0]][xMinus-1] = "O";
                board[cellsCoordinates[0]][xMinus] = "O";
            } else if ((board[cellsCoordinates[0]][xMinus] === "X") && (board[cellsCoordinates[0]][xMinus-1] === "O")) {
                board[cellsCoordinates[0]][xMinus] = "O";
            } else {
              return false;
            }
        };

        var oMoveLegalRight = function() {
          var xPlus = parseInt(cellsCoordinates[1])+1;
          if ((board[cellsCoordinates[0]][xPlus] === "X") && (board[cellsCoordinates[0]][xPlus+1] === "X") && (board[cellsCoordinates[0]][xPlus+2] === "X") && (board[cellsCoordinates[0]][xPlus+3] === "X") && (board[cellsCoordinates[0]][xPlus+4] === "X") && (board[cellsCoordinates[0]][xPlus+5] === "X") && (board[cellsCoordinates[0]][xPlus+6] === "O")) {
            board[cellsCoordinates[0]][xPlus+5] = "O";
            board[cellsCoordinates[0]][xPlus+4] = "O";
            board[cellsCoordinates[0]][xPlus+3] = "O";
            board[cellsCoordinates[0]][xPlus+2] = "O";
            board[cellsCoordinates[0]][xPlus+1] = "O";
            board[cellsCoordinates[0]][xPlus] = "O";
          } else if ((board[cellsCoordinates[0]][xPlus] === "X") && (board[cellsCoordinates[0]][xPlus+1] === "X") && (board[cellsCoordinates[0]][xPlus+2] === "X") && (board[cellsCoordinates[0]][xPlus+3] === "X") && (board[cellsCoordinates[0]][xPlus+4] === "X") && (board[cellsCoordinates[0]][xPlus+5] === "O")) {
              board[cellsCoordinates[0]][xPlus+4] = "O";
              board[cellsCoordinates[0]][xPlus+3] = "O";
              board[cellsCoordinates[0]][xPlus+2] = "O";
              board[cellsCoordinates[0]][xPlus+1] = "O";
              board[cellsCoordinates[0]][xPlus] = "O";
          } else if ((board[cellsCoordinates[0]][xPlus] === "X") && (board[cellsCoordinates[0]][xPlus+1] === "X") && (board[cellsCoordinates[0]][xPlus+2] === "X") && (board[cellsCoordinates[0]][xPlus+3] === "X") && (board[cellsCoordinates[0]][xPlus+4] === "O")) {
              board[cellsCoordinates[0]][xPlus+3] = "O";
              board[cellsCoordinates[0]][xPlus+2] = "O";
              board[cellsCoordinates[0]][xPlus+1] = "O";
              board[cellsCoordinates[0]][xPlus] = "O";
          } else if ((board[cellsCoordinates[0]][xPlus] === "X") && (board[cellsCoordinates[0]][xPlus+1] === "X") && (board[cellsCoordinates[0]][xPlus+2] === "X") && (board[cellsCoordinates[0]][xPlus+3] === "O")) {
              board[cellsCoordinates[0]][xPlus+2] = "O";
              board[cellsCoordinates[0]][xPlus+1] = "O";
              board[cellsCoordinates[0]][xPlus] = "O";
          } else if ((board[cellsCoordinates[0]][xPlus] === "X") && (board[cellsCoordinates[0]][xPlus+1] === "X") && (board[cellsCoordinates[0]][xPlus+2] === "O")) {
              board[cellsCoordinates[0]][xPlus+1] = "O";
              board[cellsCoordinates[0]][xPlus] = "O";
          } else if ((board[cellsCoordinates[0]][xPlus] === "X") && (board[cellsCoordinates[0]][xPlus+1] === "O")) {
              board[cellsCoordinates[0]][xPlus] = "O";
          } else {
              return false;
          }
        };

        var oMoveLegalDiagonalDownLeft = function() {
          var xMinus = parseInt(cellsCoordinates[1])-1;
          var yPlus = parseInt(cellsCoordinates[0])+1;
          if (yPlus < 8) {
            if ((board[yPlus][xMinus] === "X") && (board[yPlus+1][xMinus-1] === "X") && (board[yPlus+2][xMinus-2] === "X") && (board[yPlus+3][xMinus-3] === "X") && (board[yPlus+4][xMinus-4] === "X") && (board[yPlus+5][xMinus-5] === "X") && (board[yPlus+6][xMinus-6] === "X") && (board[yPlus+7][xMinus-7] === "O")) {
              board[yPlus+6][xMinus-6] = "O";
              board[yPlus+5][xMinus-5] = "O";
              board[yPlus+4][xMinus-4] = "O";
              board[yPlus+3][xMinus-3] = "O";
              board[yPlus+2][xMinus-2] = "O";
              board[yPlus+1][xMinus-1] = "O";
              board[yPlus][xMinus] = "O";
            } else if ((board[yPlus][xMinus] === "X") && (board[yPlus+1][xMinus-1] === "X") && (board[yPlus+2][xMinus-2] === "X") && (board[yPlus+3][xMinus-3] === "X") && (board[yPlus+4][xMinus-4] === "X") && (board[yPlus+5][xMinus-5] === "X") && (board[yPlus+6][xMinus-6] === "O")) {
              board[yPlus+5][xMinus-5] = "O";
              board[yPlus+4][xMinus-4] = "O";
              board[yPlus+3][xMinus-3] = "O";
              board[yPlus+2][xMinus-2] = "O";
              board[yPlus+1][xMinus-1] = "O";
              board[yPlus][xMinus] = "O";
            } else if ((board[yPlus][xMinus] === "X") && (board[yPlus+1][xMinus-1] === "X") && (board[yPlus+2][xMinus-2] === "X") && (board[yPlus+3][xMinus-3] === "X") && (board[yPlus+4][xMinus-4] === "X") && (board[yPlus+5][xMinus-5] === "O")) {
              board[yPlus+4][xMinus-4] = "O";
              board[yPlus+3][xMinus-3] = "O";
              board[yPlus+2][xMinus-2] = "O";
              board[yPlus+1][xMinus-1] = "O";
              board[yPlus][xMinus] = "O";
            } else if ((board[yPlus][xMinus] === "X") && (board[yPlus+1][xMinus-1] === "X") && (board[yPlus+2][xMinus-2] === "X") && (board[yPlus+3][xMinus-3] === "X") && (board[yPlus+4][xMinus-4] === "O")) {
              board[yPlus+3][xMinus-3] = "O";
              board[yPlus+2][xMinus-2] = "O";
              board[yPlus+1][xMinus-1] = "O";
              board[yPlus][xMinus] = "O";
            } else if ((board[yPlus][xMinus] === "X") && (board[yPlus+1][xMinus-1] === "X") && (board[yPlus+2][xMinus-2] === "X") && (board[yPlus+3][xMinus-3] === "O")) {
              board[yPlus+2][xMinus-2] = "O";
              board[yPlus+1][xMinus-1] = "O";
              board[yPlus][xMinus] = "O";
            } else if ((board[yPlus][xMinus] === "X") && (board[yPlus+1][xMinus-1] === "X") && (board[yPlus+2][xMinus-2] === "O")) {
              board[yPlus+1][xMinus-1] = "O";
              board[yPlus][xMinus] = "O";
            } else if ((board[yPlus][xMinus] === "X") && (board[yPlus+1][xMinus-1] === "O")) {
              board[yPlus][xMinus] = "O";
            } else {
              return false;
            }} else {return false;}
        };

        var oMoveLegalDiagonalDownRight = function() {
          var xPlus = parseInt(cellsCoordinates[1])+1;
          var yPlus = parseInt(cellsCoordinates[0])+1;
          if (yPlus < 8) {
            if ((board[yPlus][xPlus] === "X") && (board[yPlus+1][xPlus+1] === "X") && (board[yPlus+2][xPlus+2] === "X") && (board[yPlus+3][xPlus+3] === "X") && (board[yPlus+4][xPlus+4] === "X") && (board[yPlus+5][xPlus+5] === "X") && (board[yPlus+6][xPlus+6] === "X") && (board[yPlus+7][xPlus+7] === "O")) {
              board[yPlus+6][xPlus+6] = "O";
              board[yPlus+5][xPlus+5] = "O";
              board[yPlus+4][xPlus+4] = "O";
              board[yPlus+3][xPlus+3] = "O";
              board[yPlus+2][xPlus+2] = "O";
              board[yPlus+1][xPlus+1] = "O";
              board[yPlus][xPlus] = "O";
            } else if ((board[yPlus][xPlus] === "X") && (board[yPlus+1][xPlus+1] === "X") && (board[yPlus+2][xPlus+2] === "X") && (board[yPlus+3][xPlus+3] === "X") && (board[yPlus+4][xPlus+4] === "X") && (board[yPlus+5][xPlus+5] === "X") && (board[yPlus+6][xPlus+6] === "O")) {
              board[yPlus+5][xPlus+5] = "O";
              board[yPlus+4][xPlus+4] = "O";
              board[yPlus+3][xPlus+3] = "O";
              board[yPlus+2][xPlus+2] = "O";
              board[yPlus+1][xPlus+1] = "O";
              board[yPlus][xPlus] = "O";
            } else if ((board[yPlus][xPlus] === "X") && (board[yPlus+1][xPlus+1] === "X") && (board[yPlus+2][xPlus+2] === "X") && (board[yPlus+3][xPlus+3] === "X") && (board[yPlus+4][xPlus+4] === "X") && (board[yPlus+5][xPlus+5] === "O")) {
              board[yPlus+4][xPlus+4] = "O";
              board[yPlus+3][xPlus+3] = "O";
              board[yPlus+2][xPlus+2] = "O";
              board[yPlus+1][xPlus+1] = "O";
              board[yPlus][xPlus] = "O";
            } else if ((board[yPlus][xPlus] === "X") && (board[yPlus+1][xPlus+1] === "X") && (board[yPlus+2][xPlus+2] === "X") && (board[yPlus+3][xPlus+3] === "X") && (board[yPlus+4][xPlus+4] === "O")) {
              board[yPlus+3][xPlus+3] = "O";
              board[yPlus+2][xPlus+2] = "O";
              board[yPlus+1][xPlus+1] = "O";
              board[yPlus][xPlus] = "O";
            } else if ((board[yPlus][xPlus] === "X") && (board[yPlus+1][xPlus+1] === "X") && (board[yPlus+2][xPlus+2] === "X") && (board[yPlus+3][xPlus+3] === "O")) {
              board[yPlus+2][xPlus+2] = "O";
              board[yPlus+1][xPlus+1] = "O";
              board[yPlus][xPlus] = "O";
            } else if ((board[yPlus][xPlus] === "X") && (board[yPlus+1][xPlus+1] === "X") && (board[yPlus+2][xPlus+2] === "O")) {
              board[yPlus+1][xPlus+1] = "O";
              board[yPlus][xPlus] = "O";
            } else if ((board[yPlus][xPlus] === "X") && (board[yPlus+1][xPlus+1] === "O")) {
              board[yPlus][xPlus] = "O";
            } else {
              return false;
            }} else {return false;}
        };

        var oMoveLegalDiagonalUpRight = function() {
          var xPlus = parseInt(cellsCoordinates[1])+1;
          var yMinus = parseInt(cellsCoordinates[0])-1;
          if (yMinus >= 0) {
            if ((board[yMinus][xPlus] === "X") && (board[yMinus-1][xPlus+1] === "X") && (board[yMinus-2][xPlus+2] === "X") && (board[yMinus-3][xPlus+3] === "X") && (board[yMinus-4][xPlus+4] === "X") && (board[yMinus-5][xPlus+5] === "X") && (board[yMinus-6][xPlus+6] === "X") && (board[yMinus-7][xPlus+7] === "O")) {
              board[yMinus-6][xPlus+6] = "O";
              board[yMinus-5][xPlus+5] = "O";
              board[yMinus-4][xPlus+4] = "O";
              board[yMinus-3][xPlus+3] = "O";
              board[yMinus-2][xPlus+2] = "O";
              board[yMinus-1][xPlus+1] = "O";
              board[yMinus][xPlus] = "O";
            } else if ((board[yMinus][xPlus] === "X") && (board[yMinus-1][xPlus+1] === "X") && (board[yMinus-2][xPlus+2] === "X") && (board[yMinus-3][xPlus+3] === "X") && (board[yMinus-4][xPlus+4] === "X") && (board[yMinus-5][xPlus+5] === "X") && (board[yMinus-6][xPlus+6] === "O")) {
              board[yMinus-5][xPlus+5] = "O";
              board[yMinus-4][xPlus+4] = "O";
              board[yMinus-3][xPlus+3] = "O";
              board[yMinus-2][xPlus+2] = "O";
              board[yMinus-1][xPlus+1] = "O";
              board[yMinus][xPlus] = "O";
            } else if ((board[yMinus][xPlus] === "X") && (board[yMinus-1][xPlus+1] === "X") && (board[yMinus-2][xPlus+2] === "X") && (board[yMinus-3][xPlus+3] === "X") && (board[yMinus-4][xPlus+4] === "X") && (board[yMinus-5][xPlus+5] === "O")) {
              board[yMinus-4][xPlus+4] = "O";
              board[yMinus-3][xPlus+3] = "O";
              board[yMinus-2][xPlus+2] = "O";
              board[yMinus-1][xPlus+1] = "O";
              board[yMinus][xPlus] = "O";
            } else if ((board[yMinus][xPlus] === "X") && (board[yMinus-1][xPlus+1] === "X") && (board[yMinus-2][xPlus+2] === "X") && (board[yMinus-3][xPlus+3] === "X") && (board[yMinus-4][xPlus+4] === "O")) {
              board[yMinus-3][xPlus+3] = "O";
              board[yMinus-2][xPlus+2] = "O";
              board[yMinus-1][xPlus+1] = "O";
              board[yMinus][xPlus] = "O";
            } else if (((board[yMinus][xPlus]) === "X") && ((board[yMinus-1][xPlus+1]) === "X") && ((board[yMinus-2][xPlus+2]) === "X") && ((board[yMinus-3][xPlus+3]) === "O")) {
              board[yMinus-2][xPlus+2] = "O";
              board[yMinus-1][xPlus+1] = "O";
              board[yMinus][xPlus] = "O";
            } else if (((board[yMinus][xPlus]) === "X") && ((board[yMinus-1][xPlus+1]) === "X") && ((board[yMinus-2][xPlus+2]) === "O")) {
              board[yMinus-1][xPlus+1] = "O";
              board[yMinus][xPlus] = "O";
            } else if (((board[yMinus][xPlus]) === "X") && ((board[yMinus-1][xPlus+1]) === "O")) {
              board[yMinus][xPlus] = "O";
            } else {
              return false;
            }}else {return false;}
        };

        var oMoveLegalDiagonalUpLeft = function() {
          var yMinus = cellsCoordinates[0]-1;
          var xMinus = cellsCoordinates[1]-1;
          if (yMinus >= 0) {
          if ((board[yMinus][xMinus] === "X") && (board[yMinus-1][xMinus-1] === "X") && (board[yMinus-2][xMinus-2] === "X") && (board[yMinus-3][xMinus-3] === "X") && (board[yMinus-4][xMinus-4] === "X") && (board[yMinus-5][xMinus-5] === "X") && (board[yMinus-6][xMinus-6] === "X") && (board[yMinus-7][xMinus-7] === "O")) {
            board[yMinus-6][xMinus-6] = "O";
            board[yMinus-5][xMinus-5] = "O";
            board[yMinus-4][xMinus-4] = "O";
            board[yMinus-3][xMinus-3] = "O";
            board[yMinus-2][xMinus-2] = "O";
            board[yMinus-1][xMinus-1] = "O";
            board[yMinus][xMinus] = "O";
          } else if ((board[yMinus][xMinus] === "X") && (board[yMinus-1][xMinus-1] === "X") && (board[yMinus-2][xMinus-2] === "X") && (board[yMinus-3][xMinus-3] === "X") && (board[yMinus-4][xMinus-4] === "X") && (board[yMinus-5][xMinus-5] === "X") && (board[yMinus-6][xMinus-6] === "O")) {
            board[yMinus-5][xMinus-5] = "O";
            board[yMinus-4][xMinus-4] = "O";
            board[yMinus-3][xMinus-3] = "O";
            board[yMinus-2][xMinus-2] = "O";
            board[yMinus-1][xMinus-1] = "O";
            board[yMinus][xMinus] = "O";
          } else if ((board[yMinus][xMinus] === "X") && (board[yMinus-1][xMinus-1] === "X") && (board[yMinus-2][xMinus-2] === "X") && (board[yMinus-3][xMinus-3] === "X") && (board[yMinus-4][xMinus-4] === "X") && (board[yMinus-5][xMinus-5] === "O")) {
            board[yMinus-4][xMinus-4] = "O";
            board[yMinus-3][xMinus-3] = "O";
            board[yMinus-2][xMinus-2] = "O";
            board[yMinus-1][xMinus-1] = "O";
            board[yMinus][xMinus] = "O";
          } else if ((board[yMinus][xMinus] === "X") && (board[yMinus-1][xMinus-1] === "X") && (board[yMinus-2][xMinus-2] === "X") && (board[yMinus-3][xMinus-3] === "X") && (board[yMinus-4][xMinus-4] === "O")) {
            board[yMinus-3][xMinus-3] = "O";
            board[yMinus-2][xMinus-2] = "O";
            board[yMinus-1][xMinus-1] = "O";
            board[yMinus][xMinus] = "O";
          } else if ((board[yMinus][xMinus] === "X") && (board[yMinus-1][xMinus-1] === "X") && (board[yMinus-2][xMinus-2] === "X") && (board[yMinus-3][xMinus-3] === "O")) {
            board[yMinus-2][xMinus-2] = "O";
            board[yMinus-1][xMinus-1] = "O";
            board[yMinus][xMinus] = "O";
          } else if ((board[yMinus][xMinus] === "X") && (board[yMinus-1][xMinus-1] === "X") && (board[yMinus-2][xMinus-2] === "O")) {
            board[yMinus-1][xMinus-1] = "O";
            board[yMinus][xMinus] = "O";
          } else if ((board[yMinus][xMinus] === "X") && (board[yMinus-1][xMinus-1] === "O")) {
            board[yMinus][xMinus] = "O";
          } else {
            return false;
          }} else {return false;}
        };

        // save the text for the player who's turn it is...
        // var cellsColor = currentTurn;

        // fills cell with current move color
        // this.style.backgroundColor = cellsColor;

        // creates function to alternate turn then runs it
        var alternateTurn = function() {
        if (currentTurn === black) {
            currentTurn = white;
            xMoveLegalDown();
            xMoveLegalUp();
            xMoveLegalLeft();
            xMoveLegalRight();
            xMoveLegalDiagonalUpRight();
            xMoveLegalDiagonalUpLeft();
            xMoveLegalDiagonalDownLeft();
            xMoveLegalDiagonalDownRight();
            $cellsEl.attr('value', function() {
              return 'X';
            });
        } else {
            currentTurn = black;
            oMoveLegalUp();
            oMoveLegalDown();
            oMoveLegalLeft();
            oMoveLegalRight();
            oMoveLegalDiagonalDownLeft();
            oMoveLegalDiagonalDownRight();
            oMoveLegalDiagonalUpRight();
            oMoveLegalDiagonalUpLeft();
            $cellsEl.attr('value', function(){
              return 'O';
            })
          }
        };

        alternateTurn();

        // X Moves functions
        // xMoveLegalDown();
        // xMoveLegalUp();
        // xMoveLegalLeft();
        // xMoveLegalRight();
        // xMoveLegalDiagonalUpRight();
        // xMoveLegalDiagonalUpLeft();
        // xMoveLegalDiagonalDownLeft();
        // xMoveLegalDiagonalDownRight();

        // O move functions
        // oMoveLegalUp();
        // oMoveLegalDown();
        // oMoveLegalLeft();
        // oMoveLegalRight();
        // oMoveLegalDiagonalDownLeft();
        // oMoveLegalDiagonalDownRight();
        // oMoveLegalDiagonalUpRight();
        // oMoveLegalDiagonalUpLeft();

        //places value on console board with ID coordinates
        var placeValue = function(y,x) {
          board[y][x] = $cellsEl.attr("value");
        }
        placeValue(cellsCoordinates[0],cellsCoordinates[1]);
       }

      printTheBoard();
      render();

    })

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


// Get a diagonal's value
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

// Clear board
// var clearTheBoard = function() {
//   for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 8; j++) {
//       board[i][j] = null;
//     }
//   }
//   currentTurn = black // reset to black
//   return true;
// };

// clear Cells to restart game
// var clearCells = function() {
//   var cells = document.getElementsByClassName("cells");
//   for (var i = 0; i < squares.length; i++) {
//     cells[i].textContent = "";
//   }
//   clearTheBoard(); // model
//   return true;
// };
