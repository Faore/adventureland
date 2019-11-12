// Valid options here are cleric, rogue, wizard, warrior
const character_class = 'cleric';

import(`http://localhost:8080/${character_class}.js`).then((module) => {
	bots[character_class].run();
}, (fail) => {
	game_log(`Failed to load ${character_class}. ${fail}`);
});