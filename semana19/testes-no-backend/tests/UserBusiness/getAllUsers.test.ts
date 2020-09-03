import { UserBusiness } from "../../src/business/UserBusiness"
import { User, stringToUserRole, UserRole } from "../../src/model/User"

describe("Testing UserBusiness.getAllUsers", () => {
    let userDatabase = {}
    let hashGenerator = {}
    let tokenGenerator = {}
    let idGenerator = {}

    it("Should return an array of users with id, name, email and role", async () => {
        const getAllUsers = jest.fn(() => [
            new User(
                "id",
                "Eros",
                "email@gmail.com",
                "senha",
                stringToUserRole("NORMAL")
            )
        ])

        userDatabase = {getAllUsers}
        
        const userBusiness = new UserBusiness(
           userDatabase as any,
           idGenerator as any,
           hashGenerator as any,
           tokenGenerator as any
        );

          
           const result = await userBusiness.getAllUsers(UserRole.NORMAL)  

        
        expect(userBusiness).toHaveBeenCalledTimes(1);
        expect(result).toContainEqual({
          id: "id",
          name: "Eros",
          email: "email@gmail.com",
          role: UserRole.NORMAL,
        });
    })

    it("Should return 'You must be an admin to access this endpoint' when user is NORMAL", async () => {
        expect.assertions(2);
        try {
          const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            tokenGenerator as any
          );
    
          await userBusiness.getAllUsers(UserRole.NORMAL);
        } catch (err) {
          expect(err.errorCode).toBe(403);
          expect(err.message).toBe("You must be an admin to access this endpoint");
        }
      })
})