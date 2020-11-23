import { IHit, ICharacter, IMonster } from "../definitions/adventureland";

game_log("Wizard Loaded.");

class Wizard {
  public leader: ICharacter = get_player("BananaBoss");
  public party_members: Array<ICharacter> = [
    this.leader,
    character,
    get_player("LeBanana"),
  ];
  public target?: IMonster;
  public attack_mode: boolean = false;

  public run() {
    game_log("Wizard Running.");
    var wizard = new Wizard();

    game.on("hit", function (data: IHit) {
      wizard.on_hit(data);
    });

    setInterval(() => wizard.character_loop(), 1000 / 4);
  }

  public character_loop() {
    use_hp_or_mp();
    loot();

    if (!this.attack_mode || character.rip || is_moving(character)) return;

    if (!this.target) {
      this.target = get_monster(get_nearest_hostile());
    }

    if (this.target) {
      change_target(this.target);
      if (!in_attack_range(this.target)) {
        smart_move(
          character.x + (this.target.x - character.x) / 2,
          character.y + (this.target.y - character.y) / 2
        );
      }
    }

    if (!in_attack_range(this.leader)) {
      smart_move(
        character.x + (this.leader.x - character.x) / 2,
        character.y + (this.leader.y - character.y) / 2
      );
    }

    if (can_attack(this.target)) {
      attack(this.target);
    }
  }

  public on_hit(hit: IHit) {
    if (
      hit.source == "attack" &&
      hit.actor == this.leader.id &&
      get_monster(hit.target)
    ) {
      this.target = get_player(hit.target);
    }
  }
}

let wizard = new Wizard();

export { wizard };
