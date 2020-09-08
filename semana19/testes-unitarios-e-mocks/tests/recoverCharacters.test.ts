import { Character } from "../src/ex1"
import { recoverCharacter } from "../src/recoverCharacters"

describe("Testing recoverCharacter function", () => {

    test("Should recover 2 characters", () => {
        
        const character1: Character = {
            name: "Mechelangelo",
            life: 1000,
            strength: 400,
            defense: 500
        }

        const character2: Character = {
            name: "Destruidor",
            life: 1000,
            strength: 400,
            defense: 200
        }

        recoverCharacter([character1, character2])

        expect(character1.life).toEqual(1500)
        expect(character2.life).toEqual(1500)
    
    })   
    

    test("Should recover all characters", () => {
        
        const character1: Character = {
            name: "Mechelangelo",
            life: 1000,
            strength: 400,
            defense: 500
        }

        const character2: Character = {
            name: "Destruidor",
            life: 1000,
            strength: 400,
            defense: 200
        }

        const character3: Character = {
            name: "Rafael",
            life: 1000,
            strength: 400,
            defense: 200
        }

    
        recoverCharacter([character1, character2, character3])

        expect(character1.life).toEqual(1500)
        expect(character2.life).toEqual(1500)
        expect(character3.life).toEqual(1500)
    
    })   

    test("Should try recover  only one character and return error", () => {
        expect.assertions(2)

        const character1: Character = {
            name: "Mechelangelo",
            life: 1000,
            strength: 400,
            defense: 500
        }


        try {
            recoverCharacter([character1])
        } catch (err) {
            expect(err.message).toBe("At least two characters for recovery rituals")
            expect(character1.life).toEqual(1000)
        }

    
    })   

    test("Should try recover no character and return error", () => {
        expect.assertions(1)

        try {
            recoverCharacter([])
        } catch (err) {
            expect(err.message).toBe("At least two characters for recovery rituals")
        }
    })   


    
})

