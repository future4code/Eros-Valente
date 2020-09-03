// import { UserBusiness } from "../../src/business/UserBusiness";
// import { IdGenerator } from "../../src/services/idGenerator";
// import { User, stringToUserRole } from "../../src/model/User";

// describe("Testing createUser of UserBusiness layer", () => {

//     let userDatabase = {
//         createUser: jest.fn((user: User)=>{})
//     };
//     let hashGenerator = {
//         hash: jest.fn(() => "hash")
//     };
//     let idGenerator = {
//         generate: jest.fn(() => "id")
//     }

//     let tokenGenerator = {
//         generate: jest.fn(()=> "token")
//     };

//     test("Deve retornar erro ao receber um nome vazio", async () => {
//         expect.assertions(2);

//         const userBusiness = new UserBusiness(
//             userDatabase as any,
//             idGenerator as any,
//             hashGenerator as any,
//             tokenGenerator as any
//         );

//         try {
//             await userBusiness.signup("", "astrodev@labenu.com.br", "bananinha", "ADMIN");
//         } catch (error) {
//             expect(error.errorCode).toBe(422);
//             expect(error.message).toEqual("Missing input");
//         }
//     });