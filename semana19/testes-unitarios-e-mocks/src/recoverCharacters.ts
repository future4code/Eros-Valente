import { Character } from "./ex1";

export function recoverCharacter(characters: Character[], validator: (input: Character) => boolean): void {
        
    if(!characters || characters.length < 2) {
        throw new Error("At least two characters for recovery rituals");
    }



    return characters.forEach((character: Character) => {
        character.life = 1500
    })
}