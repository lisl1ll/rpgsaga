import { Logger } from "./Logger";
import { Player } from "./Player";
import { PlayerFabric } from "./playerFabric";
import { PlayerClass } from "./types";

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
        const playersToFight = this.pickPlayersForFight();
        Logger.logPlayersNameAndClass(playersToFight.p1, playersToFight.p2)

        this.fight(playersToFight.p1, playersToFight.p2);
    }

    private fight(p1: Player, p2: Player) {
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
        } else {
            Logger.logPlayerIsDead(p2);
        }
    }

    private pickPlayersForFight(): { p1: Player, p2: Player } {
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
        };
    }
}