var attack_mode = true;

var target = null;

var leader = get_player("Abner");

game.on("hit", function (data) {
  if (
    data.source == "attack" &&
    data.actor == "Abner" &&
    get_monster(data.target)
  ) {
    target = get_monster(data.target);
  }
});

setInterval(function () {
  use_hp_or_mp();
  loot();

  if (!attack_mode || character.rip || is_moving(character)) return;

  if (!target) {
    target = get_nearest_hostile();
  }

  if (target) {
    change_target(target);
    if (!in_attack_range(target)) {
      smart_move(
        character.x + (target.x - character.x) / 2,
        character.y + (target.y - character.y) / 2
      );
    }
  }

  if (!in_attack_range(leader)) {
    smart_move(
      character.x + (leader.x - character.x) / 2,
      character.y + (leader.y - character.y) / 2
    );
  }

  if (can_attack(target)) {
    attack(target);
  }
}, 1000 / 4); // Loops every 1/4 seconds.
