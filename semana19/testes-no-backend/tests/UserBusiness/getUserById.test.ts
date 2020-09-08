import { UserBusiness } from "../../src/business/UserBusiness"
import { User, stringToUserRole, UserRole } from "../../src/model/User"



describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {}
    let idGenerator = {}
    let hashGenerator = {}
    let tokenGenerator = {}

    test("Should return 'User Not Found' when user does not exist", async () => {
        expect.assertions(2)
        const getUserById = jest.fn((id: string) => {return undefined})
        try {
            userDatabase = { getUserById }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                idGenerator as any,
                hashGenerator as any,
                tokenGenerator as any
            )

            await userBusiness.getUserById("id-invalido")

        } catch (err) {
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe("User Not Found")
        }
    })

    test("Should return an user object with id, name, email and role", async () => {
        const getUserById = jest.fn((id: string) => 
            new User(
                id,
                "Eros",
                "eros@email.com",
                "senha",
                stringToUserRole("NORMAL")
            )
        )
        
        userDatabase = { getUserById }

        const userBusiness = new UserBusiness(
              userDatabase as any,
              idGenerator as any,
              hashGenerator as any,
              tokenGenerator as any
        )
        const user = await userBusiness.getUserById("12345")
        expect(getUserById).toHaveBeenCalledWith("12345")
        expect(user).toEqual({
            id: "12345",
            name: "Eros",
            email: "eros@email.com",
            role: UserRole.NORMAL
        })
    })

})