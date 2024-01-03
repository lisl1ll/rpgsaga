"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = exports.Mage = exports.Knight = void 0;
const player_1 = require("./player");
class Knight extends player_1.Player {
    constructor(name, hp, strength) {
        super(name, hp, strength);
    }
    specialAttack() {
        this.strenght = this.strenght * 1.3;
    }
}
exports.Knight = Knight;
class Mage extends player_1.Player {
    constructor(name, hp, strength) {
        super(name, hp, strength);
    }
    specialAttack(beaten) {
        beaten.move = false;
    }
}
exports.Mage = Mage;
class Archer extends player_1.Player {
    constructor(name, hp, strength) {
        super(name, hp, strength);
        this.isFireUsed = false;
    }
    specialAttack() {
        this.isFireUsed = true;
    }
}
exports.Archer = Archer;
