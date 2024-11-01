# Pumpkin blast
This is a cute and simple classic blast game made in Halloween theme, written in JavaScript with canvas animations.

Deploy: [link 1](https://zelenolis.github.io/blast-game/dist/index.html), [link 2](https://pumpkin-blast.netlify.app/)

Screenshots:

![screenshot1](https://github.com/zelenolis/blast-game/blob/main/src/assets/cover.jpg?raw=true)

### Features:
- Click on groups of the same colored pumpkins to destroy them!
- A pumpkin in a special coloring will destroy everything around it!
- Get one point for each pumpkin destroyed.
- Track your progress to reach the next level.
- You can turn sound effects on and off during the game.
- If there are no moves left you can always shuffle the pumpkins. You can only do this three times.
- You can play this game from your computer, phone or tablet.
---
### Development notes
- You can track the development process by commits in the `develop` branch.
- The file `./src/constants.js` contains game constants such as:
    - *theme colors*
    - *number of lives*
    - *field size ( x must be the same as y )*
    - *tiles counts*

you can change all of them to change the gameplay, but do that wisely!

### Development server
- clone the repository
- select `develop` branch
- install dependencies
- run `npm run start` for a dev server. If the page does not open automatically, navigate to http://localhost:9000/ in your browser

### Testing
- Testing is organized using *Jest*.
- `npm test` will run all test cases

### Buld
- clone the repository
- select `develop` branch
- install dependencies
- run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
