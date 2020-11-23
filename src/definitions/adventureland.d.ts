export interface Entity {
    id: string;
    hp: number;
    max_hp: number;
    x: number;
	y: number;
	target: number;
}

export interface ICharacter extends Entity {
	rip: Boolean,
	hp: number,
	max_hp: number
}

export interface Monster extends Entity {}

declare global {
    interface Window {
        clear_game_logs(): void;
        party_list: string[];
        entities: {[id: string]: Entity};
        start_runner(): void;
        stop_runner(): void;
    }

    var character: ICharacter;

    function attack(target: Entity): void;
    function can_attack(target: Entity): boolean;
    function change_target(target: Entity, public?: boolean): void;
    function game_log(text: string): void;
    // TODO: Explicit monster type export.
    function get_nearest_monster(args?: {max_att?: number, min_xp?: number, target?: Entity | string, no_target?: boolean, path_check?: boolean, type?: string}): Entity;
    function get_targeted_monster(): Entity;
    function in_attack_range(target: Entity): boolean;
    function is_moving(entity: Entity): boolean;
    function loot(): void;
    function move(x:number, y:number): void;
    function set_message(text:string, color?: string): void;
	function use_hp_or_mp(): void;
	function heal(entity: Entity): void;
	function get_player(player: string): ICharacter;
	function get_monster(monster: number): Monster;
	function use_skill(skill: string): void;
	function use_skill(skill: string, entity: Entity): void;
}

export type SkillName = "mentalburst" | 
	"move_down" | 
	"burst" | 
	"use_town" | 
	"toggle_inventory" | 
	"toggle_stats" | 
	"agitate" | 
	"blink" | 
	"poisonarrow" | 
	"mluck" | 
	"warcry" | 
	"toggle_run_code" | 
	"mcourage" | 
	"gm" | 
	"tangle" | 
	"move_up" | 
	"darkblessing" | 
	"5shot" | 
	"use_hp" | 
	"curse" | 
	"toggle_character" | 
	"move_left" | 
	"piercingshot" | 
	"travel" | 
	"phaseout" | 
	"interact" | 
	"alchemy" | 
	"stack" | 
	"supershot" | 
	"charge" | 
	"partyheal" | 
	"esc" | 
	"3shot" | 
	"absorb" | 
	"quickpunch" | 
	"attack" | 
	"heal" | 
	"entangle" | 
	"rspeed" | 
	"track" | 
	"taunt" | 
	"stomp" | 
	"toggle_code" | 
	"stop" | 
	"cleave" | 
	"revive" | 
	"portal" | 
	"move_right" | 
	"open_snippet" | 
	"cburst" | 
	"throw" | 
	"invis" | 
	"stone" | 
	"reflection" | 
	"shadowstrike" | 
	"energize" | 
	"light" | 
	"pure_eval" | 
	"snippet" | 
	"self_healing" | 
	"4fingers" | 
	"use_mp" | 
	"quickstab" | 
	"magiport" | 
	"pcoat" | 
	"charm" | 
	"hardshell" | 
	"scare" | 
	"huntersmark"