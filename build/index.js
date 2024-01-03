"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gameLogic_1 = require("./gameLogic");
class Game {
    constructor() {
        this.isPlaying = true;
        this.gameLogic = new gameLogic_1.GameLogic();
    }
    gameLoop() {
        try {
            while (this.isPlaying) {
                this.gameLogic.createPlayers(4);
                this.gameLogic.startFight();
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
