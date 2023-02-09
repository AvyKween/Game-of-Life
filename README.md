
Simple implementation of Conway's game of life made with javascript and p5js library

## Running the game
To see what the game does, clone the repository with
```
git clone https://github.com/AvyKween/Game-of-Life.git
```
Then open the index.html file from the generated directory

## Rules
These are the following rules for the game of life according to [Wikipedia](https://en.wikipedia.org/wiki/Conway's_Game_of_Life):

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

## Author Notes
- Manually population and some other functionalities will not be implemented in this project, the reason is in the next notes.
- Initially i wanted to do this project using React and Typescript but then i realized it would be overkill, so i ended up doing it just with js and p5 
- Although it would be overkill, in the future I'm planning to do it all from scratch with React and TS for convenience reasons, then i will add more complex functionalities like manually population or stuff, if you have any suggestion or advice for me i'll gladly take it.
\
\
![Es](./assets/game-of-life-loop.gif)
Dedicado a mi difunto amigo del alma Brandon Zavaleta, vuela alto,  hermano 🕊️.