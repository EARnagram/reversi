//  ____                         _
// |  _ \ _____   _____ _ __ ___(_)
// | |_) / _ \ \ / / _ \ '__/ __| |
// |  _ <  __/\ V /  __/ |  \__ \ |
// |_| \_\___| \_/ \___|_|  |___/_|


// render board
function render() {
  board.forEach((arr, y) => {
    arr.forEach((cell, x) => {
      if (board[y][x] === "X") $(`#c${y}_${x}`).removeClass('O').addClass('X');
      if (board[y][x] === "O") $(`#c${y}_${x}`).removeClass('X').addClass('O');
    });
  });
  $('#xscore').text(playerX.count);
  $('#oscore').text(playerO.count);
}

$(function() {
  // click event
  $('#game').on('click', '.cells', evt => {
    let id = $(evt.target).attr('id').substring(1).split('_');
    commitMove(parseInt(id[0]), parseInt(id[1]));
    render();
  });
  render();
});

