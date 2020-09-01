import { Character, validateCharacter } from "../src/ex1"

describe("Testing excersise one", () => {

    test("should returning false for empty name", () => {
        const result: boolean = validateCharacter({
            name: "",
            life: 1300,
            strength: 100,
            defense: 300
        }) 

        expect(result).toBe(false)
    })

    test("should returning true for life 0", () => {
        const result: boolean = validateCharacter({
            name: "Aldebaran",
            life: 0,
            strength: 100,
            defense: 300
        }) 

        expect(result).toBe(true)
    })

    test("should returning true for strength 0", () => {
        const result: boolean = validateCharacter({
            name: "Aldebaran",
            life: 1300,
            strength: 0,
            defense: 300
        }) 

        expect(result).toBe(true)
    })

    


})