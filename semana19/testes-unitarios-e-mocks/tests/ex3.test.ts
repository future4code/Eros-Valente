import { Character } from "../src/ex1"
import { performAttack } from "../src/ex3"

describe("Testing performAttack function", () => {

    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Mechelangelo",
            life: 1000,
            strength: 400,
            defense: 500
        }

        const defender: Character = {
            name: "Destruidor",
            life: 2000,
            strength: 400,
            defense: 200
        }

        performAttack(attacker, defender, validatorMock)

        expect(defender.life).toEqual(1800)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })


    test("Should return invalid character error", () => {
         
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "",
            life: 1000,
            strength: 400,
            defense: 500
        }

        const defender: Character = {
            name: "Destruidor",
            life: 2000,
            strength: 400,
            defense: 200
        }

        try {
            performAttack(attacker, defender, validatorMock)
        } catch (err) {
            expect(err.message).toBe("Invalid character")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
            expect(validatorMock).toHaveReturnedWith(false)
        }
    })

})
