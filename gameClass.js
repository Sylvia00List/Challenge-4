class Game {
    constructor(users){
        this.items = ['scissor','paper','rock']
        this.player = user [0];
        this.computer = users[0];
        this.result = ''
    }

    start() {
        this.result = 'DRAW'
    }
}

class Player {
    constructor(elementId) {
        this.element = document.getElementById(elementId)
    }
}

const player = new Player('')
const computer = Math.floor(Math.random() * 3);
const traditionalGame = new Game ([player, computer])
traditionalGame.start();