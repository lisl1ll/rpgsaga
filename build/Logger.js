"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor() { }
    static logPlayersNameAndClass(p1, p2) {
        console.log(`(${p1.constructor.name}) ${p1.name} vs (${p2.constructor.name}) ${p2.name}\n`);
    }
    static logAttackPlayer(p1, p2, playerToAttack) {
        if (playerToAttack === 1) {
            console.log(`(${p1.constructor.name}) ${p1.name} attacks (${p2.constructor.name}) ${p2.name} with ${p1.strenght} and (${p2.constructor.name}) ${p2.name} left with ${p2.hp}\n`);
        }
        else {
            console.log(`(${p2.constructor.name}) ${p2.name} attacks (${p1.constructor.name}) ${p1.name} with ${p2.strenght} and (${p1.constructor.name}) ${p1.name} left with ${p1.hp}\n`);
        }
    }
    static logPlayerIsDead(p) {
        console.log(`(${p.constructor.name}) ${p.name} is dead\n`);
    }
    static logWinner(p) {
        console.log(`(${p.constructor.name}) ${p.name} is the winner♥\n`);
    }
}
exports.Logger = Logger;
