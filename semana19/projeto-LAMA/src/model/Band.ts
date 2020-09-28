export class Band{
    constructor(
    private id: string,
    private name: string,
    private musicGenre: string,
    private responsible: string,
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getMusicGenre(){
        return this.musicGenre;
    }

    getResponsible(){
        return this.responsible;
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setMusicGenre(musicGenre: string){
        this.musicGenre = musicGenre;
    }

    setPassword(responsible: string){
        this.responsible = responsible;
    }

    static toBandModel(band: any): Band {
        return new Band(band.id, band.name, band.musicGenre, band.responsible);
      }


}

export interface BandInputDTO{
    name: string;
    musicGenre: string;
    responsible: string;
}

export interface BandInfoInputDTO{
    idOrName: string
}

export interface BandInfoOutputDTO {
    id: string,
    name: string,
    musicGenre: string,
    responsible: string,
    eventDay: string
}