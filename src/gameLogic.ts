import { Logger } from "./logger";
import { Player } from "./player";
import { PlayerFabric } from "./playerFabric";
import { PlayerClass } from "./types";

interface IPlayersForFight { p1: Player, p2: Player, p1Index: number, p2Index: number, };

export class GameLogic {
    private playerFabric = new PlayerFabric();
    public createdPlayers: Player[] = [];

    constructor() {}

    public createPlayers(numberOfPlayers: number) {
        if(numberOfPlayers % 2 !== 0) {
            throw new Error('Number of players is not even');
        }

        const playerClasses: PlayerClass[] = ['knight', 'mage', 'archer'];
        
        for(let i = 0; i < numberOfPlayers; i++) {
            const randomPlayerClass = playerClasses[Math.floor(Math.random() * playerClasses.length)];
            const player = this.playerFabric.createPlayer(randomPlayerClass)
            this.createdPlayers.push(player);
        }
    }

    public startFight() {
        while(this.createdPlayers.length !== 1) {
            const playersToFight = this.pickPlayersForFight();
            Logger.logPlayersNameAndClass(playersToFight.p1, playersToFight.p2)
            console.log(this.createdPlayers);
            this.fight(playersToFight.p1, playersToFight.p2, playersToFight.p1Index, playersToFight.p2Index);
        }
        
        Logger.logWinner(this.createdPlayers[0]);
    }

    private fight(p1: Player, p2: Player, p1Index: number, p2Index: number) {
        let playerToAttack = Math.floor(Math.random() * 2);

        let p1IsDead = p1.checkDeath();
        let p2IsDead = p2.checkDeath();

        while(!p1IsDead && !p2IsDead) {
            if(playerToAttack === 1) {
                p1.attack(p2);
                Logger.logAttackPlayer(p1, p2, 1);
                p2IsDead = p2.checkDeath();
                playerToAttack = 2;
            } else {
                p2.attack(p1);
                Logger.logAttackPlayer(p1, p2, 2);
                p1IsDead = p1.checkDeath();
                playerToAttack = 1;
            }
        }

        if(p1IsDead) {
            Logger.logPlayerIsDead(p1);
            this.createdPlayers.splice(p1Index, 1);
            p2.hp = p2.startHp;
        } else {
            Logger.logPlayerIsDead(p2);
            this.createdPlayers.splice(p2Index, 1);
            p1.hp = p1.startHp;
        }
    }

    private rollSpecialAttack() {
        return Math.random() > 0.5 ? true : false;
    }

    private useSpecialAttack(p1: Player, p2: Player) {
        if(p1.constructor.name === 'knight') {
            p1.specialAttack()
        } else if(p1.constructor.name === 'mage') {
            p1.specialAttack(p2);
        } else if(p1.constructor.name === 'archer') {
            p1.specialAttack();
        }
    }

    private pickPlayersForFight(): IPlayersForFight {
        let randomFirstPlayerIndex = Math.floor(Math.random() * this.createdPlayers.length);
        let randomSecondPlayerIndex = Math.floor(Math.random() * this.createdPlayers.length);

        while(randomFirstPlayerIndex === randomSecondPlayerIndex) {
            randomSecondPlayerIndex = Math.floor(Math.random() * this.createdPlayers.length);
        }

        const firstPlayer = this.createdPlayers[randomFirstPlayerIndex];
        const secondPlayer = this.createdPlayers[randomSecondPlayerIndex];

        return {
            p1: firstPlayer,
            p2: secondPlayer,
            p1Index: randomFirstPlayerIndex,
            p2Index: randomSecondPlayerIndex,
        };
    }
}