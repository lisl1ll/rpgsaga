"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playableCharacters_1 = require("./playableCharacters");
const knight = new playableCharacters_1.Knight('name1', 10, 10);
const mage = new playableCharacters_1.Mage('name2', 5, 5);
const assume = () => {
    // Hand test if mage hit knight then knight hp will be 5
    console.log(knight, knight.hp, mage, mage.strenght);
    mage.attack(knight);
    console.log(knight, knight.hp, mage, mage.strenght);
};
assume();
