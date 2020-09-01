import { Character, validateCharacter } from "../src/ex1"

describe("Testinx excersise one", () => {

    test("should returning false for empty name", () => {
        const result: boolean = validateCharacter({
            name: "",
            life: 1300,
            strength: 100,
            defense: 300
        }) 

        expect(result).toBe(false)
    })
})