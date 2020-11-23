import { ICharacter } from "../definitions/adventureland";

abstract class PlayerCharacter {
  leader: string;

  // Main loop toggles
  is_following_leader: boolean = false;

  // Loop hooks
  abstract pre_loop(): void;
  abstract post_loop(): void;

  constructor() {
    // Find party leader
    this.leader = this.getFirstPartyCharNameByClass("warrior");
  }

  getSelf(): ICharacter {
    // Get name of first active char wit type "self"
    let n: string = Object.entries(get_active_characters()).filter(
      (k) => k[1] == "self"
    )[0][0];

    return this.getFirstPartyCharByName(n);
  }

  getFirstPartyCharByName(name: string): ICharacter {
    return Object.entries(get_party())
      .filter((v) => v[0] == name)
      .map((k) => k[1])[0];
  }

  getFirstPartyCharNameByClass(className: string): string {
    return Object.entries(get_party())
      .filter((v) => v[1].type == className)
      .map((k) => k[0])[0];
  }

  follow_leader() {
    let l = this.getFirstPartyCharByName(this.leader);
    if (!in_attack_range(l)) {
      move(
        character.x + (l.x - character.x) / 2,
        character.y + (l.y - character.y) / 2
      );
    }
  }

  run() {
    setInterval(() => {
      this.player_loop();
    }, 1000 / 4);
  }

  public player_loop() {
    this.pre_loop();

    if (character.rip || is_moving(character)) return;

    use_hp_or_mp();
    loot();

    if (this.is_following_leader) {
      this.follow_leader();
    }

    this.post_loop();
  }
}

export default PlayerCharacter;
