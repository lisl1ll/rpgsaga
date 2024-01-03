import { GameLogic } from "./gameLogic";

class Game {
    private isPlaying = true;
    private gameLogic = new GameLogic();
    constructor() {}

    public gameLoop() {
        try {
            while(this.isPlaying) {
                this.gameLogic.createPlayers(4);
                this.gameLogic.startFight();
                this.isPlaying = false;
            }
        } catch(err: any) {
            throw new Error(err);
        }
    }
}

const game = new Game();

game.gameLoop();