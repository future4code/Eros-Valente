import { UserBusiness } from "../../src/business/UserBusiness";
import { User, UserInputDTO } from "../../src/model/User";

describe("Testando o signup na camada UserBusiness", () => {

    let userDatabase = {};

    let idGenerator = {}
   
    let hashGenerator = {};

    let authenticator = {}

    test("Deve retornar erro ao receber um nome vazio", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            authenticator as any
        );

        try {

            const userInput: UserInputDTO = {
                name: "",
                email: "eros@gmail.com",
                password: "123456",
                role: "ADMIN"
            }

            await userBusiness.createUser(userInput)
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    });

})    
