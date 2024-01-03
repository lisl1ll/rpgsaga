"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerFabric = void 0;
const playableCharacters_1 = require("./playableCharacters");
const nameArray = ['Alice', 'Kam In', 'Luka', 'Ga Ming', 'Yae Miko', 'Xiao', 'Diluc', 'Arlecchino'];
const minHP = 10;
const maxHP = 30;
const minStrenght = 5;
const maxStrenght = 10;
class PlayerFabric {
    createPlayer(playerClass) {
        const randomNameIndex = Math.floor(Math.random() * nameArray.length);
        const randomName = nameArray[randomNameIndex];
        const randomHP = Math.floor(minHP + Math.random() * maxHP);
        const randomStrenght = Math.floor(minStrenght + Math.random() * maxStrenght);
        switch (playerClass) {
            case 'knight':
                return new playableCharacters_1.Knight(randomName, randomHP, randomStrenght);
            case 'mage':
                return new playableCharacters_1.Mage(randomName, randomHP, randomStrenght);
            case 'archer':
                return new playableCharacters_1.Archer(randomName, randomHP, randomStrenght);
            default:
                throw new Error('There is no such class');
        }
    }
}
exports.PlayerFabric = PlayerFabric;
