import { BandBusiness } from "../../src/business/BandBusiness";
import { BandInputDTO } from "../../src/model/Band";

describe("Testing createBand from BandBusiness", () => {

    let bandDatabase = {};
    let idGenerator = {}
    let authenticator = {
        generateToken: jest.fn(() => "token")
    }

    test("Should return an error when try create band with missing name", async () => {
        expect.assertions(2);

        const bandBusiness = new BandBusiness(
            bandDatabase as any,
            idGenerator as any,
            authenticator as any
        );

        try {

            const token = authenticator.generateToken()

            const bandInput: BandInputDTO = {
                name: "",
                musicGenre: "Rock",
                responsible: "John"
            }

            await bandBusiness.createBand(bandInput, token)
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Fill all the fields");
        }
    });

    test("Should return an error when try create band with missing music genre", async () => {
        expect.assertions(2);

        const bandBusiness = new BandBusiness(
            bandDatabase as any,
            idGenerator as any,
            authenticator as any
        );

        try {

            const token = authenticator.generateToken()

            const bandInput: BandInputDTO = {
                name: "The Who",
                musicGenre: "",
                responsible: "Pete Townshend"
            }

            await bandBusiness.createBand(bandInput, token)
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Fill all the fields");
        }
    });

    test("Should return an error when try create band with missing responsible", async () => {
        expect.assertions(2);

        const bandBusiness = new BandBusiness(
            bandDatabase as any,
            idGenerator as any,
            authenticator as any
        );

        try {

            const token = authenticator.generateToken()

            const bandInput: BandInputDTO = {
                name: "The Who",
                musicGenre: "Rock",
                responsible: ""
            }

            await bandBusiness.createBand(bandInput, token)
        } catch (error) {
            expect(error.errorCode).toBe(422);
            expect(error.message).toEqual("Fill all the fields");
        }
    });

    test("Testing attempt to create a band without being logged in", async () => {
        expect.assertions(2);

        const bandBusiness = new BandBusiness(
            bandDatabase as any,
            idGenerator as any,
            authenticator as any
        );

        try {

            const bandInput: BandInputDTO = {
                name: "The Who",
                musicGenre: "Rock",
                responsible: "Pete Townshend"
            }

            await bandBusiness.createBand(bandInput, "")
        } catch (error) {
            expect(error.errorCode).toBe(401);
            expect(error.message).toEqual("User must be logged in to register a band");
        }
    });

    // test("Testing a 'NORMAL' role user attempt to register a band", async () => {
    //     expect.assertions(2);

    //     const getData = jest.fn(() => {
    //         return {role: "NORMAL"}
    //     })

    //     const bandDatabase = {getData}

    //     const bandBusiness = new BandBusiness(
    //         bandDatabase as any,
    //         idGenerator as any,
    //         authenticator as any
    //     );

    //     try {

            

    //         const bandInput: BandInputDTO = {
    //             name: "The Who",
    //             musicGenre: "Rock",
    //             responsible: "Pete Townshend"
    //         }

    //         await bandBusiness.createBand(bandInput, token)
    //     } catch (error) {
    //         expect(error.errorCode).toBe(422);
    //         expect(error.message).toEqual("Fill all the fields");
    //     }
    // });
})    