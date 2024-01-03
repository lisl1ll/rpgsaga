"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, hp, strenght) {
        this.name = name;
        this.hp = hp;
        this.strenght = strenght;
    }
    attack(attacker, beaten) {
        beaten.hp -= attacker.strenght;
    }
}
exports.Player = Player;
