// Player constructor function
function player (name) {
  this.count = 2;
  this.name = name;
}

// Create Players
var playerX = new player("X");
var playerO = new player("O");

function notCurrent() {
  return current === playerX ? playerO : playerX;
}

// Current Turn varaible
var current = playerX;       // playerO

function switchPlayer() {
  return current === playerX ? current = playerO : current = playerX;
}

// Board model
var board = [];
while (board.length < 8) {
  board.push([null, null, null, null, null, null, null, null]);
}

// Regex for finding valid moves
var validXReg = /\bO+X/;
var validOReg = /\bX+O/;

// Clear board
function clearTheBoard() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      board[i][j] = null;
    }
  }
  [board[3][4], board[4][3], board[3][3], board[4][4]] = ["X", "X", "O",
                                                          "O"];
  current = playerX; // reset to playerX
  return true;
};

// Given y,x, find next space's value in each direction
function newDirections(y, x, dir) {
    switch (dir) {
    case "n":
      y -= 1;
      break;
    case "ne":
      y -= 1;
      x += 1;
      break;
    case "e":
      x += 1;
      break;
    case "se":
      x += 1;
      y += 1;
      break;
    case "s":
      y += 1;
      break;
    case "sw":
      y += 1;
      x -= 1;
      break;
    case "w":
      x -= 1;
      break;
    case "nw":
      y -= 1;
      x -= 1;
      break;
    default:
      console.debug("There's a problem…");
  }
  return [y, x];
}

// collect string for each direction
function searchBoard(y, x, dir, str = '') {
  [y, x] = newDirections(y, x, dir);
  if (y >= 0 && y < 8 &&  x >= 0 && x < 8) {
    str += board[y][x] || '_';
    return searchBoard(y, x, dir, str);
  } else {
    return str;
  }
}

// put strings of direction values together in object
function collectDirections(y, x) {
  let ob = {n: '', ne: '', e: '', se: '', s: '', sw: '', w: '', nw: ''};
  Object.keys(ob).forEach(key => {
    ob[key] = searchBoard(y,x,key);
  });
  return ob;
}

// compile directions with valid moves into array
function validMove(ob, player = current) {
  var reg = player === playerX ? validXReg : validOReg;
  return Object.keys(ob).reduce((acc, key) => {
    if (reg.test(ob[key])) acc.push([key, ob[key]]);
    return acc;
  }, []);
}

// commit given space at y,x to current player
function commitDirection(y, x, dir) {
  [y, x] = newDirections(y, x, dir);
  if (board[y][x] !== current.name && board[y][x] !== null) {
    board[y][x] = current.name;
    return commitDirection(y, x, dir);
  } else {
    return;
  }
}

// check if any moves are available on the board for a given player
function anyValidMove(player = current) {
  let move = false;
  for (var i = 0; i < board.length; i++) {
    for (var k = 0; k < board[i].length; k++) {
      if (board[i][k] === null &&
          validMove(collectDirections(i,k), player).length > 0) {
        move = true;
        break;
      }
    }
    if (move) break;
  }
  return move;
}

function commitMove(y, x, dirs = validMove(collectDirections(y, x))) {
  if (dirs.length < 1 || !board[y,x]) {
    console.log("No move!");
    return false;
  }
  board[y][x] = current.name;
  dirs.forEach(dir => {
    commitDirection(y, x, dir[0]);
  });
  return true;
}

function checkWinner() {
  calcScores();
  if (playerX.count + playerO.count === 64) {
    console.info("All squares played!");
    return endGame();
  } else if (!anyValidMove(notCurrent())) {
    console.warn(`Player ${notCurrent().name} cannot play!`);
    if (!anyValidMove()){
      console.info("No moves remaining!");
      return endGame();
    }
  } else {
    return switchPlayer();
  }
}

function endGame() {
  return playerX.count > playerO.count ? "X"
        : (playerX.count === playerO.count ? "T" : "O");
}

function calcScores() {
  [playerX.count, playerO.count] = [0,0];
  board.forEach(arr => {
    arr.forEach(cell => {
      if (cell === "X") playerX.count++;
      if (cell === "O") playerO.count++;
    });
  });
}

clearTheBoard();
