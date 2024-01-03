import { Player } from "./player"

export class Knight extends Player {
    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
    }

    public specialAttack() {
        this.strenght =  this.strenght * 1.3;
    }
}

export class Mage extends Player {
    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
    }

    public specialAttack(beaten: Player) {
        beaten.move = false;
    }
}

export class Archer extends Player {
    public isFireUsed: boolean;

    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
        this.isFireUsed = false;
    }

    public specialAttack() {
        this.isFireUsed = true;
    }
}