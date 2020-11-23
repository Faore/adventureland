import { ICharacter } from './definitions/adventureland'

game_log("Wizard Loaded.");

class Wizard {
    public leader : ICharacter = get_player("BananaBoss");
    public party_members : Array<ICharacter> = [this.leader, character, get_player("LeBanana")]

    public run() {
        game_log("Wizard Running.");
        var wizard = new Wizard();
        setInterval(() => wizard.character_loop(), 1000/4);
    }

    public character_loop() {

    }
}

let wizard = new Wizard();

export { wizard };