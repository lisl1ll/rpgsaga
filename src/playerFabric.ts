import { Player } from "./Player";
import { Archer, Knight, Mage } from "./playableCharacters";
import { PlayerClass } from "./types";

const nameArray: string[] = ['Alice', 'Kam In', 'Luka', 'Ga Ming', 'Yae Miko', 'Xiao', 'Diluc', 'Arlecchino'];

const minHP = 10;
const maxHP = 30;

const minStrenght = 5;
const maxStrenght = 10;

// ABSTARCT = ЧЕЛОВЕК
// ДВА НАСЛЕДУЕМЫХ КЛАССА = МАЛЬЧИК / ДЕВОЧКА - У НИХ РОДИТЕЛЬ ЧЕЛОВЕК - ОНИ ОТ НЕГО НАСЛЕДУЮТСЯ
// ФАБРИКА - прнимает в себя любой из зависимых классов от абстрактного
// ФАБРИКА ВЕРНЕТ НАМ ЛЮБОЙ ИЗ НАСЛЕДУЕМЫХ КЛАССОВ АБСТРАКТНОГО КЛССА ТО ЕСТЬ В НАШЕМ ПРИМЕРЕР МЫ КИДАЕМ ЛЮБОГО 
// ЧЕЛОВЕКА И ПОЛУЧАЕМ НА ВЫХОДЕ НЕ ЧЕЛОВЕКА А МАЛЬЧИКА ИЛИ ДЕВОЧКУ
// АБСТРАКТНЫЙ КЛАСС ОПРЕДЕЛЯЕТ ОСНОВНЫЕ СВОЙСТВА ОБЪЕКТА в нашем случае имя цвет кожи и другие общие свойства
// НАСЛЕДУЕМ КЛАСС реализует общие совйства и дополняет свои В НАШЕМ ПРИМЕРЕ основное отличие сами понимаете

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