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
  return true;
};

function setTheBoardForPlayer(player) {
  board[3][4] = null;
  board[4][3] = null;
  board[3][3] = null;
  board[4][4] = null;
  board[0][0] = player;
  board[0][1] = player;
  board[0][2] = player;
  board[2][2] = player;
  board[2][1] = player;
  board[2][0] = player;
  board[1][0] = player;
  board[1][2] = player;
  board[1][1] = player === "X" ? "O" : "X";
}
