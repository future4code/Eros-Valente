export class Concert{
    constructor(
    private id: string,
    private weekDay: ConcertDay,
    private startTime: number,
    private endTime: number,
    private bandId: string
    ){}

    getId(){
        return this.id;
    }

    getWeekDay(){
        return this.weekDay
    }

    getStartTime(){
        return this.startTime;
    }

    getEndTime(){
        return this.endTime;
    }

    getBandId(){
        return this.bandId;
    }

    setId(id: string){
        this.id = id;
    }

    setName(weekDay: ConcertDay){
        this.weekDay = weekDay;
    }

    setStartTime(startTime: number){
        this.startTime = startTime;
    }

    setBandId(bandId: string){
        this.bandId = bandId;
    }

    static stringToConcertWeekDay(input: string): ConcertDay{
        switch (input) {
            case "fryday":
              return ConcertDay.FRYDAY;
            case "saturday":
              return ConcertDay.SATURDAY;
            case "sunday":
              return ConcertDay.SUNDAY;  
            default:
              throw new Error("Invalid day of week");
          }
    }

    static toConcertModel(concert: any): Concert{
        return new Concert(concert.id, Concert.stringToConcertWeekDay(concert.weekDay) ,concert.startTime, concert.endTime, concert.bandId);
      }


}

export interface ConcertInputDTO{
    bandId: string;
    weekDay: ConcertDay;
    startTime: number;
    endTime: number
}

export enum ConcertDay{
    FRYDAY = "Fryday",
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}

