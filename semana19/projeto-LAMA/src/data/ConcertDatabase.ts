import { BaseDatabase } from "./BaseDatabase";
import { Concert } from "../model/Concert";


export class ConcertDatabase extends BaseDatabase {

    private static TABLE_NAME = "concert"

    async createConcert(concert: Concert): Promise<void> {
        try {
            await this.getConnection()
              .insert({
                  id: concert.getId(),
                  weekday: concert.getWeekday(),
                  start_time: concert.getStartTime(),
                  end_time: concert.getEndTime(),
                  band_id: concert.getBandId()
              })
              .into(ConcertDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage);
        }
    }
    
    async getConcertByDayAndStartTime(weekday: string)
}