"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameLogic_1 = require("./gameLogic");
class Game {
    constructor() {
        this.isPlaying = true;
    }
    gameLoop() {
        const gameLogic = new gameLogic_1.GameLogic();
        try {
            while (this.isPlaying) {
                gameLogic.createPlayers(4);
                console.log(gameLogic.createdPlayers);
                this.isPlaying = false;
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
const game = new Game();
game.gameLoop();
