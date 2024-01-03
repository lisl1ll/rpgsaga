export abstract class Player {
    public name: string;
    public hp: number;
    public strenght: number;

    public startHp: number;
    public startStrength: number;

    public move: boolean;

    constructor(name: string, hp: number, strenght: number) {
        this.name = name;
        this.hp = hp;
        this.strenght = strenght;
        this.startHp = hp;
        this.startStrength = strenght;
        this.move = true;
    }
    
    public attack(beaten: Player) {
        beaten.hp -= this.strenght;
    }

    public checkDeath() {
        if(this.hp <= 0) {
            return true;
        } else {
            return false;
        }
    }

    public abstract specialAttack(beaten?: Player): any;
}