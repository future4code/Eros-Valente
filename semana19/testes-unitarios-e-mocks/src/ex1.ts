export interface Character {
    name: string,
    life: number,
    strength: number,
    defense: number
}

export function validateCharacter(input: Character): boolean {
    let characterPass = true
    if (
        !input.name ||
        !input.life ||
        !input.strength ||
        !input.defense
    ) {
        characterPass = false
    }

    if (
        input.life === 0 || 
        input.defense === 0 || 
        input.strength === 0
    ) {
        characterPass = true
    }

    if (
        input.life < 0 || 
        input.defense < 0 || 
        input.strength < 0
    ) {
        characterPass = false
    }

    return characterPass
}