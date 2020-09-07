import { Request, Response } from "express"
import { ConcertBusiness } from "../business/ConcertBusiness"
import { ConcertDatabase } from "../data/ConcertDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { ConcertInputDTO } from "../model/Concert"
import { BaseDatabase } from "../data/BaseDatabase"

export class ConcertController {

    private static ConcertBunsiness = new ConcertBusiness(
        new ConcertDatabase(),
        new IdGenerator(),
        new Authenticator()
    ) 

    async registerConcert(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            
            const { weekDay, startTime, endTime, bandId} = req.body

            const input: ConcertInputDTO = {
                bandId,
                weekDay,
                startTime,
                endTime 
            }

            await ConcertController.ConcertBunsiness.createConcert(input, token)

            res.sendStatus(201)

        }catch (error) {
            console.log(error.message)
            res.status(error.errorCode || 400).send({
                error: error.message
            })
        }
        await BaseDatabase.destroyConnection();
    }
}
