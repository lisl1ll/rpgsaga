export abstract class Player {
    public name: string;
    public hp: number;
    public strenght: number;

    constructor(name: string, hp: number, strenght: number) {
        this.name = name;
        this.hp = hp;
        this.strenght = strenght;
    }
    
    public attack(attacker: Player, beaten: Player) {
        beaten.hp -= attacker.strenght;
    }
}