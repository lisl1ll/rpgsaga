"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLogic = void 0;
const logger_1 = require("./logger");
const playerFabric_1 = require("./playerFabric");
;
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
        while (this.createdPlayers.length !== 1) {
            const playersToFight = this.pickPlayersForFight();
            logger_1.Logger.logPlayersNameAndClass(playersToFight.p1, playersToFight.p2);
            this.fight(playersToFight.p1, playersToFight.p2, playersToFight.p1Index, playersToFight.p2Index);
        }
        logger_1.Logger.logWinner(this.createdPlayers[0]);
    }
    fight(p1, p2, p1Index, p2Index) {
        let playerToAttack = Math.floor(Math.random() * 2);
        let p1IsDead = p1.checkDeath();
        let p2IsDead = p2.checkDeath();
        console.log(p1.name, p1.stun, p2.name, p2.stun);
        while (!p1IsDead && !p2IsDead) {
            if (playerToAttack === 1) {
                if (p1.checkStun()) {
                    playerToAttack = 2;
                    p2IsDead = p2.checkDeath();
                    p1.stun = false;
                }
                else {
                    const isSpecialAttack = this.rollSpecialAttack();
                    if (isSpecialAttack) {
                        console.log(p1.name, p1.stun, p2.name, p2.stun);
                        this.useSpecialAttack(p1, p2, playerToAttack);
                    }
                    else {
                        this.defaultAttack(p1, p2, playerToAttack);
                    }
                    p2IsDead = p2.checkDeath();
                    playerToAttack = 2;
                }
            }
            else {
                if (p2.checkStun()) {
                    playerToAttack = 1;
                    p1IsDead = p1.checkDeath();
                    p2.stun = false;
                }
                else {
                    const isSpecialAttack = this.rollSpecialAttack();
                    if (isSpecialAttack) {
                        console.log(p1.name, p1.stun, p2.name, p2.stun);
                        this.useSpecialAttack(p1, p2, playerToAttack);
                    }
                    else {
                        this.defaultAttack(p1, p2, playerToAttack);
                    }
                    p1IsDead = p1.checkDeath();
                    playerToAttack = 1;
                }
            }
        }
        if (p1IsDead) {
            logger_1.Logger.logPlayerIsDead(p1);
            this.createdPlayers.splice(p1Index, 1);
            p2.hp = p2.startHp;
        }
        else {
            logger_1.Logger.logPlayerIsDead(p2);
            this.createdPlayers.splice(p2Index, 1);
            p1.hp = p1.startHp;
        }
    }
    defaultAttack(p1, p2, playeToAttack) {
        if (playeToAttack === 1) {
            p1.attack(p2);
            logger_1.Logger.logAttackPlayer(p1, p2, 1);
        }
        else {
            p2.attack(p1);
            logger_1.Logger.logAttackPlayer(p1, p2, 2);
        }
    }
    rollSpecialAttack() {
        return Math.random() > 0.5 ? true : false;
    }
    useSpecialAttack(p1, p2, playerToAttack) {
        if (playerToAttack === 1) {
            if (p1.constructor.name === 'Knight') {
                p1.specialAttack();
                p1.attack(p2);
                logger_1.Logger.logSpecialAttack(p1, p2, playerToAttack);
                p1.strenght = p1.startStrength;
            }
            if (p1.constructor.name === 'Mage') {
                p1.specialAttack(p2);
                p1.strenght = 0;
                logger_1.Logger.logSpecialAttack(p1, p2, playerToAttack);
                p1.strenght = p1.startStrength;
            }
            if (p1.constructor.name === 'Archer') {
                p1.specialAttack();
                p1.strenght += 2;
                p1.attack(p2);
                logger_1.Logger.logSpecialAttack(p1, p2, playerToAttack);
                p1.strenght = p1.startStrength;
            }
        }
        else {
            if (p2.constructor.name === 'Knight') {
                p2.specialAttack();
                p2.attack(p1);
                logger_1.Logger.logSpecialAttack(p1, p2, playerToAttack);
                p2.strenght = p2.startStrength;
            }
            if (p2.constructor.name === 'Mage') {
                p2.specialAttack(p1);
                p2.strenght = 0;
                logger_1.Logger.logSpecialAttack(p1, p2, playerToAttack);
                p2.strenght = p2.startStrength;
            }
            if (p2.constructor.name === 'Archer') {
                p2.specialAttack();
                p2.strenght += 2;
                p2.attack(p1);
                logger_1.Logger.logSpecialAttack(p1, p2, playerToAttack);
                p2.strenght = p2.startStrength;
            }
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
            p1Index: randomFirstPlayerIndex,
            p2Index: randomSecondPlayerIndex,
        };
    }
}
exports.GameLogic = GameLogic;
