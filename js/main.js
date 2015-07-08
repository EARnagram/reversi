/*
 * # Reversi
 */

// game element is stored as a variable
var gameEl = document.getElementById("game");
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

if (document.getElementsByTagName = 'div') {
  if (document.getElementsByClassName != "cells played") {
    gameEl.onclick = function(event) {
      // log useful debugging info to the user
      console.log("clicked: ", event, event.target.id);

      // get the actual div that was clicked...
      var cellsEl = event.target;

      // split out the coordinates based on the id
      var cellsCoordinates = cellsEl.id.split(",");

      // save the text for the player who's turn it is...
      var cellsColor = currentTurn;

      // fills cell with current move color
      cellsEl.style.backgroundColor = cellsColor;

      // creates function to alternate turn then runs it
      var alternateTurn = function() {
      if (currentTurn === black) {
          currentTurn = white;
          $(cellsEl).attr("value", function() {
            return "X";
          });
      } else {
          currentTurn = black;
          $(cellsEl).attr("value", function(){
            return "O";
          })
        }
      }
      alternateTurn();

      //places value on console board with ID coordinates
      var placeValue = function(y,x) {
        board[y][x] = $(cellsEl).attr("value");
      }
      placeValue(cellsCoordinates[0],cellsCoordinates[1]);
     }
  }
}

// var placeValue = function(y,x) {
//   board[y[x]] = $(cellsEl).attr("value");
// }

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

// Get a diagonal's value
var getDiagonal = function(y,x) {
  var z = y+1;
  var w = x+1;
  var diagonalPlusPlus;
  var diagonalMinusMinus;
  var diagonalPlusMinus;
  var diagonalMinusPlus;
  while (z<8 && w<8) {
    diagonalPlusPlus = getValueOf(z, w);
    z++;
    w++;
    return diagonalPlusPlus;
  }
  z = y-1;
  w = x-1;
  while (z>=0 && w>=0) {
    diagonalMinusMinus = getValueOf(z, w);
    z--;
    w--;
    return diagonalMinusMinus;
  }
  z = y-1;
  w = x+1;
  while (z>=0 && w<8) {
    diagonalMinusPlus = getValueOf(z, w);
    z--;
    w++;
    return diagonalMinusPlus;
  }
  z = y+1;
  w = x-1;
  while (z<8 && w>=0) {
    diagonalPlusMinus = getValueOf(z, w);
    z++;
    w--;
    return diagonalPlusMinus;
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
  currentTurn = black // reset to black
  return true;
};

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
