import { Band, BandInputDTO, BandInfoOutputDTO, BandInfoInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { Authenticator } from "../services/Authenticator";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { ForbiddenError } from "../error/ForbiddenError";
import { UserBusiness } from "./UserBusiness";
import { NotFoundError } from "../error/NotFoundError";



export class BandBusiness {
    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async createBand(band: BandInputDTO, token: string): Promise<void> {
        if (!band.name || !band.musicGenre || !band.responsible) {
            throw new InvalidParameterError("Fill all the fields");
        }

        if (!token) {
            throw new UnauthorizedError("User must be logged in to register a band");
        }

        const authentificationData = this.authenticator.getData(token)

        if (authentificationData.role !== "ADMIN") {
            throw new ForbiddenError("Only admin users can register a band")
        }

        const id = this.idGenerator.generate()

        await this.bandDatabase.createBand(
            new Band(
                id,
                band.name,
                band.musicGenre,
                band.responsible
            )
        )
    }

    async getBandByInfoByIdOrName(band: BandInfoInputDTO, token: string ): Promise<BandInfoOutputDTO> {
        if (!band.id && !band.name) {
            throw new InvalidParameterError("Fill at least one field");
        }

        if (!token) {
            throw new UnauthorizedError("User must be logged in");
        }
        
        this.authenticator.getData(token)

        const bandInfo: BandInfoOutputDTO  = await this.bandDatabase.getBandInfoByIdOrName(band)

        if(!bandInfo) {
            throw new NotFoundError("Band not found")
        }

        return bandInfo
	}




}