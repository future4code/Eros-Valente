import { BaseDatabase } from "./BaseDatabase";
import { Concert, ConcertDay , ConcertsByDayOutputDTO } from "../model/Concert";


export class ConcertDatabase extends BaseDatabase {

    private static TABLE_NAME = "concert"

    async createConcert(concert: Concert): Promise<void> {
        try {
            await this.getConnection()
              .insert({
                  id: concert.getId(),
                  week_day: concert.getWeekDay(),
                  start_time: concert.getStartTime(),
                  end_time: concert.getEndTime(),
                  band_id: concert.getBandId()
              })
              .into(ConcertDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage);
        }
    }

    async getAllConcertsByDaY(weekDay: string): Promise<ConcertsByDayOutputDTO[] | undefined> {
        const result = await this.getConnection().raw(`
            SELECT  b.name AS bandName, b.music_genre AS musicalGenre 
            FROM ${ConcertDatabase.TABLE_NAME} c
            JOIN band b ON b.id = c.band_id
            WHERE week_day = "${weekDay}"
            ORDER BY c.start_time    
        `)
        
        return result[0]
    }
    
    async chekScheduleAvailability(weekDay: string, startTime: number, endTime: number): Promise<Boolean> {
       
        const result = await this.getConnection().raw(`
            SELECT * FROM ${ConcertDatabase.TABLE_NAME}
            WHERE week_day = "${weekDay}"
            AND ((start_time BETWEEN "${startTime}" AND "${endTime}")
                OR (end_time BETWEEN "${startTime}" AND "${endTime}")
            )
        `)
        
        console.log(result[0][0])
        return Boolean(result[0][0])
    }
}