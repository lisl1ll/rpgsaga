export abstract class Player {
    public name: string;
    public hp: number;
    public strenght: number;

    constructor(name: string, hp: number, strenght: number) {
        this.name = name;
        this.hp = hp;
        this.strenght = strenght;
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
}