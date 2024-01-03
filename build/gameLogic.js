"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLogic = void 0;
const playerFabric_1 = require("./playerFabric");
class GameLogic {
    constructor() {
        this.playeFabric = new playerFabric_1.PlayerFabric();
        this.createdPlayers = [];
    }
    createPlayers(numberOfPlayers) {
        const playerClasses = ['knight', 'mage', 'archer'];
        for (let i = 0; i < numberOfPlayers; i++) {
            const randomPlayerClass = playerClasses[Math.floor(Math.random() * playerClasses.length)];
            const player = this.playeFabric.createPlayer(randomPlayerClass);
            this.createdPlayers.push(player);
        }
    }
}
exports.GameLogic = GameLogic;
