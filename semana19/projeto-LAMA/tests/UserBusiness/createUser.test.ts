import { UserBusiness } from "../../src/business/UserBusiness";
import { UserInputDTO } from "../../src/model/User";

describe("Testing createUser from UserBusiness", () => {

    let userDatabase = {};
    let idGenerator = {}
    let hashGenerator = {};
    let authenticator = {}

    test("Should return an error when try create user with missing name ", async () => {
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
            expect(error.message).toEqual("Fill all the fields");
        }
    });

    test("Should return an error when try create user with missing email ", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            authenticator as any
        );

        try {

            const userInput: UserInputDTO = {
                name: "Eros",
                email: "",
                password: "123456",
                role: "ADMIN"
            }

            await userBusiness.createUser(userInput)
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Fill all the fields");
        }
    });

    test("Should return an error when try create user with wrong email format ", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            authenticator as any
        );

        try {

            const userInput: UserInputDTO = {
                name: "Eros",
                email: "eros.com",
                password: "123456",
                role: "ADMIN"
            }

            await userBusiness.createUser(userInput)
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid email");
        }
    });

    test("Should return an error when try create user with wrong password format ", async () => {
        expect.assertions(2);

        const userBusiness = new UserBusiness(
            userDatabase as any,
            idGenerator as any,
            hashGenerator as any,
            authenticator as any
        );

        try {

            const userInput: UserInputDTO = {
                name: "Eros",
                email: "eros@gmail.com",
                password: "12345",
                role: "ADMIN"
            }

            await userBusiness.createUser(userInput)
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Invalid password");
        }
    });

})    
