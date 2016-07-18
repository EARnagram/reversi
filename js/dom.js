//  ____                         _
// |  _ \ _____   _____ _ __ ___(_)
// | |_) / _ \ \ / / _ \ '__/ __| |
// |  _ <  __/\ V /  __/ |  \__ \ |
// |_| \_\___| \_/ \___|_|  |___/_|


// DOM manipulation
$(function() {
  // click event
  $('#game').on('click', '.cells', evt => {
    let id = fixId(evt.target);
    let check = commitMove(id[0], id[1]);
    if (check) {
      render();
      let result = checkWinner();
      if (result === Object(result)) {
        console.info(`Current Player: ${result.name}`);
      } else if (typeof result === 'string') {
        render();
        if (result === "T") {
          alert("Tie!")
        } else {
          alert(`${result === "X" ? "Black" : "White"} Wins!`);
        }
        clearTheBoard();
        render();
      }
    }
  });

  // Set up board and start hover fn
  render();
  legalHover();
});

function fixId(id) {
  return $(id).attr('id').substring(1).split('_').map(e => parseInt(e));
}

// render board
function render() {
  board.forEach((arr, y) => {
    arr.forEach((cell, x) => {
      $(`#c${y}_${x}`).removeClass('O X played XHighlight OHighlight');
      if (board[y][x] === "X") $(`#c${y}_${x}`).addClass('X played');
      if (board[y][x] === "O") $(`#c${y}_${x}`).addClass('O played');
    });
  });
  $('#xscore').text(playerX.count);
  $('#oscore').text(playerO.count);
}

// Hover that tells who's turn and whether move is legal
var legalHover = function() {
  $('.cells').hover(
    function() {
      let id = fixId($(this));
      if (validMove(collectDirections(id[0], id[1])).length > 0) {
        if (current === playerO && !$(this).hasClass('played')) {
          $(this).addClass("OHighlight");
        } else if (current === playerX && !$(this).hasClass('played')){
          $(this).addClass("XHighlight");
        }
      }
    }, function() {
      if (current === playerO && !$(this).hasClass('played') && $(this).hasClass("OHighlight")) {
        $(this).removeClass("OHighlight");
      } else if (current === playerX && !$(this).hasClass('played') && $(this).hasClass("XHighlight")){
        $(this).removeClass("XHighlight");
      }
    });
}
