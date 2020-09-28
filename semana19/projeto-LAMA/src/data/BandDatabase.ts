import { BaseDatabase } from "./BaseDatabase";
import { Band, BandInfoInputDTO, BandInfoOutputDTO } from "../model/Band"

export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "band"

    public async createBand(band: Band): Promise<void> {
        try {
            await this.getConnection()
                .insert({
                    id: band.getId(),
                    name: band.getName(),
                    music_genre: band.getMusicGenre(),
                    responsible: band.getResponsible()
                })
                .into(BandDatabase.TABLE_NAME) 
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getBandInfoByIdOrName(input: BandInfoInputDTO): Promise<BandInfoOutputDTO> {
       
        const result = await this.getConnection().raw(`
            SELECT b.*, GROUP_CONCAT(c.week_day," - ",c.start_time,"h00" SEPARATOR";") AS event_day
            FROM band b JOIN concert c ON b.id = c.band_id
            WHERE b.id = "${input.idOrName}" OR b.name = "${input.idOrName}"
            GROUP BY b.id;
        `)   
           
        return result[0][0];
    }

    public async getBandById(id: string):Promise<Band | undefined> {

        const result = await this.getConnection().raw(`
            SELECT * FROM ${BandDatabase.TABLE_NAME}
            WHERE id = "${id}"
        `)   
           
        if(!result[0][0]) return
  
    return Band.toBandModel(result[0][0])
    }
}
