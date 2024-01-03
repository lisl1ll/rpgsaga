import { Player } from "./player";

export class Logger {
    constructor() {}

    public static logPlayersNameAndClass(p1: Player, p2: Player) {
        console.log(`(${p1.constructor.name}) ${p1.name} vs (${p2.constructor.name}) ${p2.name}\n`);
    }

    public static logAttackPlayer(p1: Player, p2: Player, playerToAttack: number) {
        if(playerToAttack === 1) {
            console.log(`(${p1.constructor.name}) ${p1.name} attacks (${p2.constructor.name}) ${p2.name} with ${p1.strenght} and (${p2.constructor.name}) ${p2.name} left with ${p2.hp}\n`);
        } else {
            console.log(`(${p2.constructor.name}) ${p2.name} attacks (${p1.constructor.name}) ${p1.name} with ${p2.strenght} and (${p1.constructor.name}) ${p1.name} left with ${p1.hp}\n`);
        }
    }

    public static logPlayerIsDead(p: Player) {
        console.log(`(${p.constructor.name}) ${p.name} is dead\n`);
    }

    public static logWinner(p: Player) {
        console.log(`(${p.constructor.name}) ${p.name} is the winner♥\n`);
    }
}