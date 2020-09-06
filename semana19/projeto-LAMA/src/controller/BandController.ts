import { Request, Response } from "express"
import { BandBusiness } from "../business/BandBusiness"
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator"
import { BandDatabase } from "../data/BandDatabase"
import { Band, BandInputDTO, BandInfoInputDTO } from "../model/Band"
import { BaseDatabase } from "../data/BaseDatabase"






export class BandController {

    private static BandBunsiness = new BandBusiness(
        new BandDatabase(),
        new IdGenerator(),
        new Authenticator()
    ) 

    async registerBand(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            
            const input: BandInputDTO = {
                name: req.body.name,
                musicGenre: req.body.musicGenre,
                responsible: req.body.responsible
            }

            await BandController.BandBunsiness.createBand(input, token)

            res.sendStatus(201)

        }catch (error) {
            res.status(error.errorCode || 400).send({
                error: error.message
            })
        }
        await BaseDatabase.destroyConnection();
    }

    async bandInfo(req:Request, res: Response) {
        try{
            const token = req.headers.authorization as string
            const {id, name} = req.query as any

            const input: BandInfoInputDTO = {
                id: id,
                name: name
            }

            const response = await BandController.BandBunsiness.getBandByInfoByIdOrName(input, token)
            

            res.status(200).send(response)
        } catch (error) {
            res.status(error.errorCode).send({
                error: error.message || error.sqlMessage
            })
        }
    }



    
}