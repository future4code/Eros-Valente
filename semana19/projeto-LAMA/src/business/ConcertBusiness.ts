import { ConcertDatabase } from "../data/ConcertDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ConcertInputDTO, Concert } from "../model/Concert";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { GenericError } from "../error/GenericError";


export class ConcertBusiness {
    constructor(
        private concertDatabase: ConcertDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async createConcert(concert: ConcertInputDTO, token: string): Promise<void> {
        if (!token) {
            throw new UnauthorizedError("User must be logged in to register a concert");
        }

        if(!concert.bandId || !concert.weekDay || !concert.startTime || concert.endTime) {
            throw new InvalidParameterError("Fill all the fields");
        }

        if(concert.startTime < 8 || concert.startTime > 23 || concert.endTime > 23) {
            throw new InvalidParameterError("Time not allowed")
        }

        this.authenticator.getData(token)

        const avaibleDateAndTime = await this.concertDatabase.chekScheduleAvailability(
            concert.weekDay,
            concert.startTime,
            concert.endTime
        )

        if(!avaibleDateAndTime) {
            throw new GenericError("There is already a show scheduled for that time");
        }

        const id = this.idGenerator.generate()

        await this.concertDatabase.createConcert(
            new Concert(
                id,
                concert.weekDay,
                concert.startTime,
                concert.endTime,
                concert.bandId
            )
        )
    }
}