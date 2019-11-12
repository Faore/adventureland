// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!

var attack_mode=true


setInterval(function(){
	var target=get_targeted_monster();
	
	//if taking extra damage begin to move away (gets stuck easily)
	//need to add tracker that if stuck then move randomly
	if((character.hp < character.max_hp) & in_attack_range(target)){
		move(
			character.x+(-target.x+character.x),
			character.y+(-target.y+character.y)
			);//moves in opposite direction of attacker		
	}
	
	
	use_hp_or_mp();
	loot();

	if(!attack_mode || character.rip || is_moving(character)) return;

	
	if(!target)
	{
		target=get_nearest_monster({min_xp:100,max_att:120});
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return;
		}
	}
	
	if(!in_attack_range(target))
	{
		move(
			character.x+(target.x-character.x)/2,
			character.y+(target.y-character.y)/2
			);
		// Walk half the distance
	}
	else if(can_attack(target))
	{
		set_message("Attacking");
		attack(target);
	}
	
	
	
},1000/4); // Loops every 1/4 seconds.

// Learn Javascript: https://www.codecademy.com/learn/learn-javascript
// Write your own CODE: https://github.com/kaansoral/adventureland
