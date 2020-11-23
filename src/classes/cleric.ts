import { Entity, ICharacter } from './../definitions/adventureland'

game_log("Cleric Loaded.");

class Cleric {
    public leader : ICharacter = get_player("BananaBoss");
    public party_members : Array<ICharacter> = [this.leader, character, get_player("LeBanana")]

    public run() {
        game_log("Cleric Running.");
        setInterval(() => cleric.character_loop(), 1000/4);
    }

    public character_loop() {
        if(this.members_needing_healing(this.party_members).length > 1 && in_attack_range(this.leader)) {
            use_skill("partyheal");
        }

        var player_to_heal = this.min_by_hp(this.members_needing_healing(this.party_members));

        if (!in_attack_range(this.leader)) {
            move(
                character.x+(this.leader.x-character.x)/2,
                character.y+(this.leader.y-character.y)/2
                );
        }

        if (player_to_heal !== null) {
            heal(player_to_heal);
        }

        if (this.members_needing_healing(this.party_members).length === 0 && get_monster(this.leader.target)) {
            use_skill("curse", get_monster(this.leader.target));
        }

        use_hp_or_mp();
        loot();
    }

    public members_needing_healing(party_members: Array<ICharacter>) : Array<ICharacter> {
        return party_members.filter(this.needs_healing);
    }


    public needs_healing(member: ICharacter) {
        return member.hp < member.max_hp - 150
    }

    public min_by_hp(objects: Array<ICharacter>) {
        var min: ICharacter | null = null;

        objects.forEach(object => {
            if (min === null || object.hp < min.hp) {
                min = object
            }
        });

        return min;
    }

}

let cleric = new Cleric();

export { cleric };
