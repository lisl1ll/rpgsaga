"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = exports.Mage = exports.Knight = void 0;
const Player_1 = require("./Player");
class Knight extends Player_1.Player {
    constructor(name, hp, strength) {
        super(name, hp, strength);
    }
}
exports.Knight = Knight;
class Mage extends Player_1.Player {
    constructor(name, hp, strength) {
        super(name, hp, strength);
    }
}
exports.Mage = Mage;
class Archer extends Player_1.Player {
    constructor(name, hp, strength) {
        super(name, hp, strength);
    }
}
exports.Archer = Archer;
