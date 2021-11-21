class Game {
    constructor() {

    }
    getState() {
        database.ref("gameState").on("value", function (data) {
            gameState = data.val();
        })
    }
    updateState(data) {
        database.ref("/").update({
            gameState: data
        })
    }
    start() {
        player = new Player();
        playerCount=player.getCount();
        form = new Form()
        form.display();
        

    }
}