const mocha = require('mocha')
const chai = require('chai');
import { Knight, Mage } from "../playableCharacters";

mocha.describe('attack', () => {
    mocha.it('Attack enemy', () => {
        const knight = new Knight('name1', 10, 10);
        const mage = new Mage('name2', 5, 5);
        chai.assert.equal(mage.attack(knight), 5);
    })
})
