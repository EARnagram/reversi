#Reversi!

##This game works like 50%

#### Here's the link: http://reversi.bitballoon.com/


### The game
Reversi, aka Othello, is a mathematical board game played on a Go board.

It has very simple logic that is quite difficult to explain.  A move can only take place if the player places a piece in such a position that there exists at least one straight (horizontal, vertical, or diagonal) occupied line between the new piece and another piece of their color, with one or more contiguous other player's pieces sandwiched between them.

I used javascript and jquery. I hope to use jquery ui for the future design ideas.


### Design
I wanted to keep the simplicity of the analog board game, so I removed any words and superfluous identifiers.  The hope was to use a hover function to inform the player of the turn, whether or not a move was legal, and alert the player when they tried to play in an illegal space by flashing red.

Unfortunately, I never got to that IceBox user story.

### Problems

Currently, the move logic only works sometimes. I can't understand why the white player (O on the model board) is unable to take black when there are more than one black tile sandwiched above. Also, if there is a line of a one color that ends at the edge of the board, if you try and play with the other color, it will not allow the move because in the move logic, it looks for a placement beyond the board's end.

I could not get to the win logic user stories, so the game currently does not tell you if you won.

Also, if you can't move, the game does not stop you from moving anyway.

### Next Steps

I need to reapproach my logic. I hard coded around 600 lines of javascript to flip the sandwiched pieces.  I think this could probably be done in under 100 with some careful loops. This would also fix the occasions when the logic falls apart.

I really want to get the shifting of the colors to run as animations that fade through the color wheel.  I also want to set up some kind of function that changes the color scheme based on the victor. 

I need to add win logic and run my reset function after I implement that.