import { Player } from "./Player";
import { Archer, Knight, Mage } from "./playableCharacters";
import { PlayerClass } from "./types";

const nameArray: string[] = ['Alice', 'Kam In', 'Luka', 'Ga Ming', 'Yae Miko', 'Xiao', 'Diluc', 'Arlecchino']

const minHP = 10;
const maxHP = 30;

const minStrenght = 5;
const maxStrenght = 10;

export class PlayerFabric {
    public createPlayer(playerClass: PlayerClass): Player {

        const randomNameIndex = Math.floor(Math.random() * nameArray.length);
        const randomName = nameArray[randomNameIndex];
        
        const randomHP = Math.floor(minHP + Math.random() * maxHP);
        const randomStrenght = Math.floor(minStrenght + Math.random() * maxStrenght);

        switch(playerClass) {
            case 'knight':
                return new Knight(randomName, randomHP, randomStrenght);
            case 'mage':
                return new Mage(randomName, randomHP, randomStrenght);
            case 'archer':
                return new Archer(randomName, randomHP, randomStrenght);
            default:
                throw new Error('There is no such class');
        }
    }
}