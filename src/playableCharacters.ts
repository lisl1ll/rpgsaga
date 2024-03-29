import { Player } from "./player"

export class Knight extends Player {
    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
        this.specialAttackName = 'Super Strike';
    }

    public specialAttack() {
        this.strenght =  Math.floor(this.strenght * 1.3);
    }
}

export class Mage extends Player {
    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
        this.specialAttackName = 'Stun';
    }

    public specialAttack(beaten: Player) {
        beaten.stun = true;
    }
}

export class Archer extends Player {
    public isFireUsed: boolean;

    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
        this.specialAttackName = 'Fire Arrows';
        this.isFireUsed = false;
    }

    public specialAttack() {
        this.isFireUsed = true;
    }
}