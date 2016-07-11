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
  currentTurn();
  return true;
};

function setTheBoardForPlayer(player) {
  board[0][0] = player;
  board[0][1] = player;
  board[0][2] = player;
  board[0][3] = player;
  board[0][4] = player;
  board[1][0] = player;
  board[1][4] = player;
  board[2][0] = player;
  board[2][4] = player;
  board[3][0] = player;
  board[3][4] = player;
  board[4][0] = player;
  board[4][1] = player;
  board[4][2] = player;
  board[4][3] = player;
  board[4][4] = player;
  board[1][1] = player === "X" ? "O" : "X";
  board[1][2] = player === "X" ? "O" : "X";
  board[1][3] = player === "X" ? "O" : "X";
  board[2][1] = player === "X" ? "O" : "X";
  board[2][3] = player === "X" ? "O" : "X";
  board[3][1] = player === "X" ? "O" : "X";
  board[3][2] = player === "X" ? "O" : "X";
  board[3][3] = player === "X" ? "O" : "X";
  render();
}

function currentTurn() {
  console.log(`Player ${current.name} is up!`);
}
