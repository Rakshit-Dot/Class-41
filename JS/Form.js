class Form {
    constructor() {
        this.input = createInput("").attribute("placeHolder", "Display your Name")
        this.playButton = createButton("play")
        //this.titleImg=createImg("")
        this.greeting = createElement("h2")
    }
    setElementposition() {
        this.input.position(width / 2, height / 2);
        this.playButton.position(width / 2, height / 2 + 60);
        this.greeting.position(width / 2, height / 2 + 60);


    }
    setElementStyle() {
        this.playButton.class("buttonStyle");
        this.input.class("inputStyle");
        this.greeting.class("greetingStyle")
    }

    controlButtonPress() {
        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide();
            this.greeting.html("hello, " + this.input.value())
            playerCount += 1;
            player.name = this.input.value()
            player.index = playerCount
            player.addPlayer();
            player.updateCount(playerCount);

        })
    
    }
    display() {
        this.setElementposition()
        this.controlButtonPress();
        this.setElementStyle();
    }

}

