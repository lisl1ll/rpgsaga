"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLogic = void 0;
const Logger_1 = require("./Logger");
const playerFabric_1 = require("./playerFabric");
class GameLogic {
    constructor() {
        this.playerFabric = new playerFabric_1.PlayerFabric();
        this.createdPlayers = [];
    }
    createPlayers(numberOfPlayers) {
        if (numberOfPlayers % 2 !== 0) {
            throw new Error('Number of players is not even');
        }
        const playerClasses = ['knight', 'mage', 'archer'];
        for (let i = 0; i < numberOfPlayers; i++) {
            const randomPlayerClass = playerClasses[Math.floor(Math.random() * playerClasses.length)];
            const player = this.playerFabric.createPlayer(randomPlayerClass);
            this.createdPlayers.push(player);
        }
    }
    startFight() {
        const playersToFight = this.pickPlayersForFight();
        Logger_1.Logger.logPlayersNameAndClass(playersToFight.p1, playersToFight.p2);
        this.fight(playersToFight.p1, playersToFight.p2);
    }
    fight(p1, p2) {
        let playerToAttack = Math.floor(Math.random() * 2);
        let p1IsDead = p1.checkDeath();
        let p2IsDead = p2.checkDeath();
        while (!p1IsDead && !p2IsDead) {
            if (playerToAttack === 1) {
                p1.attack(p2);
                Logger_1.Logger.logAttackPlayer(p1, p2, 1);
                p2IsDead = p2.checkDeath();
                playerToAttack = 2;
            }
            else {
                p2.attack(p1);
                Logger_1.Logger.logAttackPlayer(p1, p2, 2);
                p1IsDead = p1.checkDeath();
                playerToAttack = 1;
            }
        }
        if (p1IsDead) {
            Logger_1.Logger.logPlayerIsDead(p1);
        }
        else {
            Logger_1.Logger.logPlayerIsDead(p2);
        }
    }
    pickPlayersForFight() {
        let randomFirstPlayerIndex = Math.floor(Math.random() * this.createdPlayers.length);
        let randomSecondPlayerIndex = Math.floor(Math.random() * this.createdPlayers.length);
        while (randomFirstPlayerIndex === randomSecondPlayerIndex) {
            randomSecondPlayerIndex = Math.floor(Math.random() * this.createdPlayers.length);
        }
        const firstPlayer = this.createdPlayers[randomFirstPlayerIndex];
        const secondPlayer = this.createdPlayers[randomSecondPlayerIndex];
        return {
            p1: firstPlayer,
            p2: secondPlayer,
        };
    }
}
exports.GameLogic = GameLogic;
