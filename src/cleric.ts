import { Entity } from './definitions/adventureland'

game_log("Cleric Loaded.");

class Cleric {
    public run() {
        game_log("Cleric Running.");
    }
}

let cleric = new Cleric();

export { cleric };