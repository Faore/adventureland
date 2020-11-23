import { Entity, ICharacter } from "./../definitions/adventureland";
import PlayerCharacter from "./base_character";

class Warrior extends PlayerCharacter {
  constructor() {
    super();
    this.is_following_leader = false;
  }

  pre_loop() {}
  post_loop() {
    var target = get_targeted_monster();
    if (!target) {
      target = get_monster(get_nearest_monster({ min_xp: 100, max_att: 120 }));
      if (target) change_target(target);
      else {
        set_message("No Monsters");
        return;
      }
    }

    if (!is_in_range(target)) {
      move(
        character.x + (target.x - character.x) / 2,
        character.y + (target.y - character.y) / 2
      );
      // Walk half the distance
    } else if (can_attack(target)) {
      set_message("Attacking");
      attack(target);
    }
  }
}

let warrior = new Warrior();

export { warrior };
