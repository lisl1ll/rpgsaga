"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, hp, strenght) {
        this.specialAttackName = '';
        this.name = name;
        this.hp = hp;
        this.strenght = strenght;
        this.startHp = hp;
        this.startStrength = strenght;
        this.stun = false;
    }
    attack(beaten) {
        beaten.hp -= this.strenght;
    }
    checkDeath() {
        if (this.hp <= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    checkStun() {
        return this.stun;
    }
}
exports.Player = Player;
