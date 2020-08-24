import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";


export default class UserController {

    async signup(req: Request, res: Response ) {
        const userBusiness: UserBusiness = new UserBusiness()
        try {

            const { name, email, password, role } = req.body

            const input = {
                name,
                email,
                password,
                role
            }

            await userBusiness.signup(input)
            res.status(200).send({
                message: "Usuário criado com sucesso"
            })
        } catch (error) {
            res.status(400).send({
                error: error.message 
            })
        } finally {
            await BaseDatabase.destroyConnection()
        }
    }
    



}