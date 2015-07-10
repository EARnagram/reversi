#Reversi

#### Here's the [link.](http://reversi.bitballoon.com/)


### The game
Reversi, aka Othello, is a mathematical board game played on a Go board. You can start playing once the game loads.

It has a very simple logic that can be difficult to explain.  A move can only take place if the player places a piece in such a position that there exists at least one straight (horizontal, vertical, or diagonal) occupied line between the new piece and another piece of their color, with one or more contiguous other player's pieces between them.

In other words, you must sandwich the other player to move.

I used javascript and jquery. I hope to use jquery ui for the future design ideas.


### Design
To keep the simplicity of the analog board game, I .  The hope is to use a hover function to inform the player of the turn, whether or not a move will be legal, and alert the player when they click in an illegal space by flashing red.

Unfortunately, I never got to that IceBox user story.

### Problems

Currently, the move logic only works sometimes. If there is a line of one color that ends at the edge of the board, and you try and play with the other color at the end of this line, it will not allow the move because in the code it looks for a placement beyond the board's end.

I could not get to the win logic user stories, so the game currently does not tell you if you won.

Also, if you can't move, the game does not stop you from moving anyway as there is nothing stopping a player from selecting a cell outside of the allowed spaces.

### Next Steps

I need to reapproach my logic. My approach to flipping the sandwiched pieces could have worked more consistently with significantly fewer lines.

I want to shift the colors on the flips to run as animations that cycle through the color wheel.  I also want to set up some kind of function that changes the board's color scheme based on the victor.

I need to add win logic and create a reset board.