var leader = get_player("Abner");
var party_members = [leader, get_player("Malthamas"), character];

setInterval(function(){

    if(members_needing_healing(party_members, 400) > 1 && in_attack_range(leader)) {
        use_skill("partyheal");
    }

    var player_to_heal = min_by(members_needing_healing(party_members, 150), "hp");

    if (!in_attack_range(leader)) {
        move(
			character.x+(leader.x-character.x)/2,
			character.y+(leader.y-character.y)/2
			);
    }
    
    if (player_to_heal !== null) {
        heal(player_to_heal);
    }

    if (members_needing_healing(party_members, 150).length === 0 && get_monster(leader.target)) {
        use_skill("curse", get_monster(leader.target));
    }

	use_hp_or_mp();
	loot();

},1000/4); // Loops every 1/4 seconds.

function members_needing_healing(party_members) {
    return party_members.filter(needs_healing);
}

function needs_healing(member, threshold) {
    return member.hp < member.max_hp - 150
}

function min_by(objects, key) {
    var min = null;
    objects.forEach(object => {
        if (min === null || object[key] < min[key]) {
            min = object
        }
    });

    return min;
}