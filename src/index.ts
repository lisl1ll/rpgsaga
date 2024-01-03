import { GameLogic } from "./gameLogic";

class Game {
    private isPlaying = true;

    constructor() {}

    public gameLoop() {
        const gameLogic = new GameLogic();
        try {
            while(this.isPlaying) {
                gameLogic.createPlayers(4);
                console.log(gameLogic.createdPlayers);
                this.isPlaying = false;
            }
        } catch(err: any) {
            throw new Error(err);
        }
    }
}

const game = new Game();

game.gameLoop();