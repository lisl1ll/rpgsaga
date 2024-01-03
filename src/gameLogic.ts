import { Player } from "./Player";
import { PlayerFabric } from "./playerFabric";
import { PlayerClass } from "./types";

export class GameLogic {
    private playeFabric = new PlayerFabric();
    public createdPlayers: Player[] = [];

    constructor() {}

    createPlayers(numberOfPlayers: number) {
        const playerClasses: PlayerClass[] = ['knight', 'mage', 'archer'];
        
        for(let i = 0; i < numberOfPlayers; i++) {
            const randomPlayerClass = playerClasses[Math.floor(Math.random() * playerClasses.length)];
            const player = this.playeFabric.createPlayer(randomPlayerClass)
            this.createdPlayers.push(player);
        }
    }
}