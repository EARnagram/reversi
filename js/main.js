//  ____                         _
// |  _ \ _____   _____ _ __ ___(_)
// | |_) / _ \ \ / / _ \ '__/ __| |
// |  _ <  __/\ V /  __/ |  \__ \ |
// |_| \_\___| \_/ \___|_|  |___/_|


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

function switchPlayer(force = false) {
  if (force) console.log(`Player ${current.name} cannot play!`);
  current === playerX ? current = playerO : current = playerX;
}

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
function clearTheBoard() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      board[i][j] = null;
    }
  }
  board[3][4] = "X";
  board[4][3] = "X";
  board[3][3] = "O";
  board[4][4] = "O";
  current = playerX; // reset to playerX
  printTheBoard();
  return true;
};

function searchBoard(y, x, dir, str = '') {
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
  if (y > 0 && x > 0 && y < 8 && x < 8) {
    str += board[y][x] || '_';
    return searchBoard(y, x, dir, str)
  } else {
    return str;
  }

}

function collectDirections(y, x) {
  let ob = {n: '', ne: '', e: '', se: '', s: '', sw: '', w: '', nw: ''};
  Object.keys(ob).forEach(key => {
    ob[key] = searchBoard(y,x,key);
  });
  return ob;
}

function validMove(ob, player = current) {
  let reg = player === playerX ? validXReg : validOReg;
  return Object.keys(ob).reduce((acc, cur) => {
    if (reg.test(ob[cur])) acc.push([cur, ob[cur]]);
    return acc;
  }, []);
}

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
  if (dirs.length < 1 || !board[y,x]) return "You can't move there!";
  board[y][x] = current.name;
  dirs.forEach(dir => {
    var [h,v] = [x,y];
    let len = (dir[1].match(current.name === "X" ? /O/ : /X/) || []).length;
    for (var i = 0; i < len; i++) {
      switch (dir[0]) {
        case "n":
          v -= 1;
          break;
        case "ne":
          v -= 1;
          h += 1;
          break;
        case "e":
          h += 1;
          break;
        case "se":
          h += 1;
          v += 1;
          break;
        case "s":
          v += 1;
          break;
        case "sw":
          v += 1;
          h -= 1;
          break;
        case "w":
          h -= 1;
          break;
        case "nw":
          v -= 1;
          h -= 1;
          break;
        default:
          console.debug("There's a problem…");
      }
      board[v][h] = current.name;
    }
  });
  checkWinner();
}

function checkWinner() {
  calcScores();
  if (playerX.count + playerO.count === 64) {
    return playerX.count > playerO.count
           ? "Player X Wins!"
           : (playerX.count === playerO.count ? "Tie!"
                                              : "Player O Wins!");
  } else if (!anyValidMove(notCurrent())) {
    console.warn(`Player ${notCurrent().name} couldn't move!`);
    if (!anyValidMove()){
      console.log("No moves remaining!");
      console.log(playerX.count > playerO.count ? "Player X Wins!" :
                 (playerX.count === playerO.count ? "Tie!" : "Player O Wins!"));
    }
  } else {
    switchPlayer();
  }
  printTheBoard();
}

function calcScores() {
  [playerX.count, playerO.count] = [0,0];
  board.forEach(arr => {
    arr.forEach(cell => {
      if (cell === "X") playerX.count++;
      if (cell === "Y") playerO.count++;
    });
  });
}

clearTheBoard();
