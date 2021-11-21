var game, player, form, playerCount, database;
var position;
var gameState;

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start()

}

function draw() {
  background("white");
  if (playerCount == 2) {
    game.updateState(1)

  }

}



