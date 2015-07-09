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
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, "O", "X", null, null, null],
  [null, null, null, "X", "O", null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null]
];

$('.cells').each(function(index, element) {
  if ($(element).attr('value') === "X") {
    element.style.backgroundColor = "#464646";
  }
  if ($(element).attr('value') === "O") {
    element.style.backgroundColor = "#EBEBEB";
  }
})

var xMoveLegalLeft = function() {
  var xMinus = cellsCoordinates[1]-1;
  if (board[cellsCoordinates[0]][xMinus] === "O") {
    return true;
  }
}

var xMoveLegalRight = function() {
  var xPlus = cellsCoordinates[1]+1;
  if (board[cellsCoordinates[0]][xPlus] === "O"){
    return true;
  }
}

var xMoveLegalDiagonalDownLeft = function() {
  var xMinus = cellsCoordinates[1]-1;
  var yPlus = cellsCoordinates[0]+1;
  if (board[yPlus][xMinus] === "O") {
    return true;
  }
}

var xMoveLegalDiagonalDownRight = function() {
  var xPlus = cellsCoordinates[1]+1;
  var yPlus = cellsCoordinates[0]+1;
  if (board[yPlus][xPlus] === "O") {
    return true;
  }
}

var xMoveLegalDiagonalUpLeft = function() {
  var yMinus = cellsCoordinates[0]-1;
  var xMinus = cellsCoordinates[1]-1;
  if (board[yMinus][xMinus] === "O") {
    return true;
  }
}

var oMoveLegalUp = function() {
  var yMinus = cellsCoordinates[0]-1;
  if ((board[yMinus][cellsCoordinates[1]] === "X")) {
    return true;
  }
}

var oMoveLegalDown = function() {
  var yPlus = cellsCoordinates[0]+1;
  if (board[yPlus][cellsCoordinates[1]] === "X") {
    return true;
  }
}

var oMoveLegalLeft = function() {
  var xMinus = cellsCoordinates[1]-1;
  if (board[cellsCoordinates[0]][xMinus] === "X") {
    return true;
  }
}

var oMoveLegalRight = function() {
  var xPlus = cellsCoordinates[1]+1;
  if (board[cellsCoordinates[0]][xPlus] === "X"){
    return true;
  }
}

var oMoveLegalDiagonalDownLeft = function() {
  var xMinus = cellsCoordinates[1]-1;
  var yPlus = cellsCoordinates[0]+1;
  if (board[yPlus][xMinus] === "X") {
    return true;
  }
}

var oMoveLegalDiagonalDownRight = function() {
  var xPlus = cellsCoordinates[1]+1;
  var yPlus = cellsCoordinates[0]+1;
  if (board[yPlus][xPlus] === "X") {
    return true;
  }
}

var oMoveLegalDiagonalUpLeft = function() {
  var yMinus = cellsCoordinates[0]-1;
  var xMinus = cellsCoordinates[1]-1;
  if (board[yMinus][xMinus] === "X") {
    return true;
  }
}

var oMoveLegalDiagonalUpRight = function() {
  var xPlus = cellsCoordinates[1]+1;
  var yMinus = cellsCoordinates[0]-1;
  if (board[yMinus][xPlus] === "X") {
    return true;
  }
}

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
          }
        };

        var xMoveLegalDown = function() {
          var yPlus = parseInt(cellsCoordinates[0])+1;
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
          }
        }

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
          }



        // var xMoveLegalDiagonalUpRight = function() {
        //   var xPlus = parseInt(cellsCoordinates[1])+1;
        //   var yMinus = parseInt(cellsCoordinates[0])-1;
        //     if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "O") && (board[yMinus-5][xPlus+5] === "O") && (board[yMinus-6][xPlus+6] === "O") && (board[yMinus-7][xPlus+7] === "X")) {
        //       board[yMinus-6][xPlus+6] = "X";
        //       board[yMinus-5][xPlus+5] = "X";
        //       board[yMinus-4][xPlus+4] = "X";
        //       board[yMinus-3][xPlus+3] = "X";
        //       board[yMinus-2][xPlus+2] = "X";
        //       board[yMinus-1][xPlus+1] = "X";
        //       board[yMinus][xPlus] = "X";
        //       console.log("7 changed!");
        //     } else if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "O") && (board[yMinus-5][xPlus+5] === "O") && (board[yMinus-6][xPlus+6] === "X")) {
        //       board[yMinus-5][xPlus+5] = "X";
        //       board[yMinus-4][xPlus+4] = "X";
        //       board[yMinus-3][xPlus+3] = "X";
        //       board[yMinus-2][xPlus+2] = "X";
        //       board[yMinus-1][xPlus+1] = "X";
        //       board[yMinus][xPlus] = "X";
        //       console.log("6 changed!");
        //     } else if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "O") && (board[yMinus-5][xPlus+5] === "X")) {
        //       board[yMinus-4][xPlus+4] = "X";
        //       board[yMinus-3][xPlus+3] = "X";
        //       board[yMinus-2][xPlus+2] = "X";
        //       board[yMinus-1][xPlus+1] = "X";
        //       board[yMinus][xPlus] = "X";
        //       console.log("5 changed!");
        //     } else if ((board[yMinus][xPlus] === "O") && (board[yMinus-1][xPlus+1] === "O") && (board[yMinus-2][xPlus+2] === "O") && (board[yMinus-3][xPlus+3] === "O") && (board[yMinus-4][xPlus+4] === "X")) {
        //       board[yMinus-3][xPlus+3] = "X";
        //       board[yMinus-2][xPlus+2] = "X";
        //       board[yMinus-1][xPlus+1] = "X";
        //       board[yMinus][xPlus] = "X";
        //       console.log("4 changed!");
        //     } else if (((board[yMinus][xPlus]) === "O") && ((board[yMinus-1][xPlus+1]) === "O") && ((board[yMinus-2][xPlus+2]) === "O") && ((board[yMinus-3][xPlus+3]) === "X")) {
        //       board[yMinus-2][xPlus+2] = "X";
        //       board[yMinus-1][xPlus+1] = "X";
        //       board[yMinus][xPlus] = "X";
        //       console.log("3 changed!");
        //     } else if (((board[yMinus][xPlus]) === "O") && ((board[yMinus-1][xPlus+1]) === "O") && ((board[yMinus-2][xPlus+2]) === "X")) {
        //       board[yMinus-1][xPlus+1] = "X";
        //       board[yMinus][xPlus] = "X";
        //       console.log("2 changed!");
        //     } else if (((board[yMinus][xPlus]) === "O") && ((board[yMinus-1][xPlus+1]) === "O")) {
        //       board[yMinus][xPlus] = "X";
        //       console.log("1 changed!");
        //     } else {
        //       console.log("Did nothing");
        //     }
        //   }

        // save the text for the player who's turn it is...
        // var cellsColor = currentTurn;

        // fills cell with current move color
        // this.style.backgroundColor = cellsColor;

        // creates function to alternate turn then runs it
        var alternateTurn = function() {
        if (currentTurn === black) {
            currentTurn = white;
            $cellsEl.attr('value', function() {
              return 'X';
            });
        } else {
            currentTurn = black;
            $cellsEl.attr('value', function(){
              return 'O';
            })
          }
        }

        alternateTurn();
        xMoveLegalDown();
        xMoveLegalUp();
        xMoveLegalLeft();
        //xMoveLegalDiagonalUpRight();


        $('.cells').each(function(index, element) {
          if ($(element).attr('value') === "X") {
            element.style.backgroundColor = "#464646";
          }
          if ($(element).attr('value') === "O") {
            element.style.backgroundColor = "#EBEBEB";
          }
        })

        //places value on console board with ID coordinates
        var placeValue = function(y,x) {
          board[y][x] = $cellsEl.attr("value");
        }
        placeValue(cellsCoordinates[0],cellsCoordinates[1]);
       }

      printTheBoard();
    })


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
var clearTheBoard = function() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      board[i][j] = null;
    }
  }
  currentTurn = black // reset to black
  return true;
};

// Print the whole state of the game.
// var printTheGame = function(){
//   if (gameIsBeingPlayed) {
//     printTheBoard();
//     console.log(nextPlayerString());
//   } else {
//     console.log("The game is not currently being played.");
//   }
//   return true;
// };



// Decide if the move is legal or not.
// var moveIsLegal = function(y, x) {
//   if (gameIsBeingPlayed === false) {
//     return false; // game hasn't begun...
//   } else if (y > 7 || y < 0 || x > 7 || x < 0) {
//     return false; // squares not in play...
//   } else if (getValueOf(y, x) !== "_") {
//     return false; // move has already been made...
//   } else {
//     return true;
//   }
// }

// write a function for clearing the board's elements!
var clearCells = function() {
  var cells = document.getElementsByClassName("cells");
  for (var i = 0; i < squares.length; i++) {
    cells[i].textContent = "";
  }
  clearTheBoard(); // model
  return true;
};


        //create function that checks getRow() && getColumn() && getDiagonalLR() && getDiagonalRL()
        // if (getRow(cellsCoordinates[0]).includes("OOOOOOX")||getRow(cellsCoordinates[0]).includes("OOOOOX")||getRow(cellsCoordinates[0]).includes("OOOOX")||getRow(cellsCoordinates[0]).includes("OOOX")||getRow(cellsCoordinates[0]).includes("OOX")||getRow(cellsCoordinates[0]).includes("OX")) {
        //   console.log("X can play on the Row!");
        //   return true;
        // } //else {return false;};

        // if (getColumn(cellsCoordinates[1]).includes("OOOOOOX")||getColumn(cellsCoordinates[1]).includes("OOOOOX")||getColumn(cellsCoordinates[1]).includes("OOOOX")||getColumn(cellsCoordinates[1]).includes("OOOX")||getColumn(cellsCoordinates[1]).includes("OOX")||getColumn(cellsCoordinates[1]).includes("OX")) {
        //   console.log("X can play on the Column!");
        //   return true;
        // } //else {return false;};

        // if (getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOOOOX")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOOOX")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOOX")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOX")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("OOX")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("OX")) {
        //   console.log("X can play on the RL diagonal!");
        //   return true;
        // } else {return false;};

        // if (getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOOOOX")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOOOX")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOOX")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("OOOX")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("OOX")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("OX")) {
        //   console.log("X can play on the LR diagonal!");
        //   //return true;
        // } //else {return false;};

        // if (getRow(cellsCoordinates[0]).includes("XXXXXXO")||getRow(cellsCoordinates[0]).includes("XXXXXO")||getRow(cellsCoordinates[0]).includes("XXXXO")||getRow(cellsCoordinates[0]).includes("XXXO")||getRow(cellsCoordinates[0]).includes("XXO")||getRow(cellsCoordinates[0]).includes("XO")) {
        //   console.log("O can play on the Row!");
        //   //return true;
        // } //else {return false;};

        // if (getColumn(cellsCoordinates[1]).includes("XXXXXXO")||getColumn(cellsCoordinates[1]).includes("XXXXXO")||getColumn(cellsCoordinates[1]).includes("XXXXO")||getColumn(cellsCoordinates[1]).includes("XXXO")||getColumn(cellsCoordinates[1]).includes("XXO")||getColumn(cellsCoordinates[1]).includes("XO")) {
        //   console.log("O can play on the Column!");
        //   //return true;
        // } //else {return false;};

        // if (getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXXXXO")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXXXO")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXXO")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXO")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("XXO")||getDiagonalRL(cellsCoordinates[0],cellsCoordinates[1]).includes("XO")) {
        //   console.log("O can play on the RL Diagonal!");
        //   //return true;
        // } //else {return false;};

        // if (getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXXXXO")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXXXO")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXXO")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("XXXO")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("XXO")||getDiagonalLR(cellsCoordinates[0],cellsCoordinates[1]).includes("XO")) {
        //   console.log("O can play on the LR Diagonal!");
        //   //return true;
        // } //else {return false;};

        // var xMoveLegalDiagonalUpRight = function() {
        //     var xPlus = cellsCoordinates[1]+1;
        //     var yMinus = cellsCoordinates[0]-1;
        //     if (board[yMinus][xPlus] === "O") {
        //       if (board[yMinus-1][xPlus+1] === "O") {
        //         if (board[yMinus-2][xPlus+2] === "O") {
        //           if (board[yMinus-3][xPlus+3] === "O") {
        //             if (board[yMinus-4][xPlus+4] === "O") {
        //               if (board[yMinus-5][xPlus+5] === "O") {
        //                 if (board[yMinus-6][xPlus+6] === "O") {
        //                   if (board[yMinus-7][xPlus+7] === "X") {
        //                     board[yMinus-6][xPlus+6] = "X";
        //                     board[yMinus-5][xPlus+5] = "X";
        //                     board[yMinus-4][xPlus+4] = "X";
        //                     board[yMinus-3][xPlus+3] = "X";
        //                     board[yMinus-2][xPlus+2] = "X";
        //                     board[yMinus-1][xPlus+1] = "X";
        //                     board[yMinus][xPlus] = "X";
        //                   } else {
        //                     return false;
        //                   }
        //                 } else if (board[yMinus-6][xPlus+6] === "X") {
        //                     board[yMinus-5][xPlus+5] = "X";
        //                     board[yMinus-4][xPlus+4] = "X";
        //                     board[yMinus-3][xPlus+3] = "X";
        //                     board[yMinus-2][xPlus+2] = "X";
        //                     board[yMinus-1][xPlus+1] = "X";
        //                     board[yMinus][xPlus] = "X";
        //                 } else {
        //                   return false;
        //                 }
        //               } else if (board[yMinus-5][xPlus+5] === "X") {
        //                   board[yMinus-4][xPlus+4] = "X";
        //                   board[yMinus-3][xPlus+3] = "X";
        //                   board[yMinus-2][xPlus+2] = "X";
        //                   board[yMinus-1][xPlus+1] = "X";
        //                   board[yMinus][xPlus] = "X";
        //               } else {
        //                 return false;
        //             }
        //           } else if (board[yMinus-4][xPlus+4] === "X") {
        //               board[yMinus-3][xPlus+3] = "X";
        //               board[yMinus-2][xPlus+2] = "X";
        //               board[yMinus-1][xPlus+1] = "X";
        //               board[yMinus][xPlus] = "X";
        //           } else {
        //           return false;
        //         }
        //       } else if (board[yMinus-3][xPlus+3] === "X") {
        //           board[yMinus-2][xPlus+2] = "X";
        //           board[yMinus-1][xPlus+1] = "X";
        //           board[yMinus][xPlus] = "X";
        //       } else {
        //         return false;
        //       }
        //     } else if (board[yMinus-2][xPlus+2] === "X") {
        //         board[yMinus-1][xPlus+1] = "X";
        //         board[yMinus][xPlus] = "X";
        //     } else {
        //       return false;
        //     }
        //   } else if (board[yMinus-1][xPlus+1] === "X") {
        //       board[yMinus][xPlus] = "X";
        //   } else {
        //     return false;
        //   }
        //   } else {
        //     return false;
        //   }
        // }
