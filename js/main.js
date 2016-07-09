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
  current = playerX;         // reset to playerX
  return true;
};

function searchBoard(y, x, dir, str = '') {
  if ((y < 8 && y >= 0) && (x < 8 && x >= 0)) {
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
}

function collectDirections(y, x) {
  let ob = {n: '', ne: '', e: '', se: '', s: '', sw: '', w: '', nw: ''};
  Object.keys(ob).forEach(key => {
    ob[key] = searchBoard(y,x,key);
  });
  console.log(ob.se);
  return ob;
}

function validMove(ob, player = current) {
  let reg = player === playerX ? validXReg : validOReg;
  return Object.keys(ob).reduce((acc, cur) => {
    if (reg.test(ob[cur])) acc.push([cur, ob[cur]]);
    return acc;
  }, []);
}

function anyValidMove(check = true) {
  let player = check ? current : (current === playerX ? playerO : playerX);
  let move = false;
  for (var i = 0; i < board.length; i++) {
    for (var k = 0; k < board[i].length; k++) {
      if (board[i][k] === null &&
          validMove(collectDirections(i,k), player).length > 0) {
        [move, check] = [true, false];
        break;
      }
    }
    if (move) break;
  }
  return check ? anyValidMove(false) : move;
}

function commitMove(y, x, dirs = validMove(collectDirections(y, x))) {
  if (dirs.length < 1) return "You can't move there!";
  board[y][x] = current.name;
  dirs.forEach(dir => {
    let h = x, v = y;
    let len = (dir[1].match(current.name === "X" ? /O/ : /X/) || []).length;
    for (var i = 0; i < len; i++) {
      switch (dir[0]) {
        case "n":
          v -= 1;
          break;
        case "ne":
          v -= 1;
          h -= 1;
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
          console.error("There's a problem…");
      }
      board[v][h] = current.name;
    }
  })
  if (!anyValidMove()) return "No moves remaining";
  switchPlayer();
  printTheBoard();
}

clearTheBoard();
printTheBoard();
