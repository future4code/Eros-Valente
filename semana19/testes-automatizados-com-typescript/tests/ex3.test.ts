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
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    }) 

    test("Testing 1 brazilian unallowed", () => { 
        const user: User = {
            name: "Jorge",
            age: 17,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Cassino Clandestino Brasileiro",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [user])
        expect(result.brazilians.allowed).toEqual([])
        expect(result.brazilians.unallowed).toEqual([user.name])
    })    

    test("Testing 1 american allowed", () => {
        const americanUser: User = {
            name: "Jon Doe",
            age: 32,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Cassino Clandestino Brasileiro",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [americanUser])
        expect(result.americans.allowed).toEqual([americanUser.name])
        expect(result.americans.unallowed.length).toBe(0)
    }) 

    test("no one allowed", () => {
        const brazilianUser: User = {
            name: "Pedro",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const americanUser: User = {
            name: "Jon Doe",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Caesars Palace",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [brazilianUser, americanUser])
        expect(result.brazilians.unallowed).toEqual([brazilianUser.name])
        expect(result.americans.unallowed).toEqual([americanUser.name])
        expect(result.brazilians.allowed.length).toBe(0)
        expect(result.americans.allowed).toEqual([])
    }) 

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilianUser1: User = {
            name: "Pedro",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const brazilianUser2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const americanUser1: User = {
            name: "Jon Doe",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const americanUser2: User = {
            name: "Albert",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Caesars Palace",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [brazilianUser1, americanUser1, brazilianUser2, americanUser2])
        expect(result.brazilians.unallowed).toEqual([brazilianUser1.name, brazilianUser2.name])
        expect(result.americans.unallowed).toEqual([])
        expect(result.brazilians.allowed).toEqual([])
        expect(result.americans.allowed).toEqual([americanUser1.name, americanUser2.name])
    }) 

    test("no one allowed", () => {
        const brazilianUser1: User = {
            name: "Pedro",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const brazilianUser2: User = {
            name: "João",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const americanUser1: User = {
            name: "Jon Doe",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const americanUser2: User = {
            name: "Albert",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Caesars Palace",
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, [brazilianUser1, americanUser1, brazilianUser2, americanUser2])
        expect(result.brazilians.unallowed).toContain(brazilianUser1.name)
        expect(result.americans.unallowed).toContain(americanUser2.name)
        expect(result.brazilians.unallowed.length).toBe(2)
        expect(result.americans.unallowed.length).toBe(2)
    }) 

    
})