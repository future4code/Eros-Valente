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

    test("should returning false for empty life", () => {
        const result: boolean = validateCharacter({
            name: "Aldebaran",
            life: Number(undefined),
            strength: 100,
            defense: 300
        }) 

        expect(result).toBe(false)
    })

    test("should returning false for empty strength", () => {
        const result: boolean = validateCharacter({
            name: "Aldebaran",
            life: 1300,
            strength: Number(undefined),
            defense: 300
        }) 

        expect(result).toBe(false)
    })

    test("should returning false for empty defense", () => {
        const result: boolean = validateCharacter({
            name: "Aldebaran",
            life: 1300,
            strength: 300,
            defense: Number(undefined)
        }) 

        expect(result).toBe(false)
    })

    test("Should return true for life 0", () => {
        const result = validateCharacter({
          name: "Aldebaran",
          life: 0,
          strength: 400,
          defense: 600,
        });
    
        expect(result).toBe(true);
      });

      test("Should return true for all valid inputs", () => {
        const result = validateCharacter({
          name: "Aldebaran",
          life: 1500,
          strength: 400,
          defense: 600,
        });
    
        expect(result).toBe(true);
      });

    


})