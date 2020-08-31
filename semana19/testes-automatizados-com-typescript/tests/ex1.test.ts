import { User, performPurchase } from "../src/ex1"

describe("Testing exercise one", () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Eros",
            balance: 300
        }
        
        const result = performPurchase(user, 100)
        expect (result).toEqual({
            ...user,
            balance: 200
        })
    })

    test("Testing balance less than value", () => {
        const user: User = {
            name: "Eros",
            balance: 200
        }

        const result = performPurchase(user, 400)
        expect (result).toEqual(undefined)
    } )

})