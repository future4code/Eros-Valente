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

            const token = await userBusiness.signup(input)
            res.status(200).send({
                token: token 
            })
        } catch (error) {
            res.status(400).send({
                error: error.message 
            })
        } finally {
            await BaseDatabase.destroyConnection()
        }
    }

    async login(req: Request, res: Response) {
        try {
            const loginData = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness: UserBusiness = new UserBusiness()
            
            const token = await userBusiness.login(loginData.email, loginData.password)

            res.status(200).send({
                token: token
            })

        } catch (error) {
            res.status(400).send({
                error: error.message
            })
        } finally {
            await BaseDatabase.destroyConnection()
        }
    }
    
    async getAllUsers(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const userBusiness: UserBusiness = new UserBusiness()
            const allUsers = await userBusiness.getAllUsers(token)

            res.status(200).send({
                users: allUsers
            })
        } catch (error) {
            res.status(400).send({
                error: error.message
            })
        } finally {
            await BaseDatabase.destroyConnection()
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userBusiness: UserBusiness = new UserBusiness()
            const token = req.headers.authorization as string
            
            const input = {
                token: token,
                id: req.params.id
            }

            await userBusiness.deleteUser(input)

            res.status(200).send({
                message: "User successfully deleted"
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