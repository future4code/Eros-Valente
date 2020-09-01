import { verifyAge, User, NACIONALITY, Casino, LOCATION } from "../src/ex3"

describe("Testing exrcise three", () => {

    test("Testing 1 brazilian allowed", () => {
        const user: User = {
            name: "Eros Pinder Valente",
            age: 32,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Cassino Clandestino Brasileiro",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])
        expect(result.brazilians.allowed).toEqual([user.name])

    }) 

    
})