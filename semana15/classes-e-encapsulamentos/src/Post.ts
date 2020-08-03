export class Post {
    //  Atributos
    private id: string
    private author: string
    private text: string
    private likes: number = 0

    constructor( newAuthor: string, newText: string){
        this.id = Date.now().toString() + Math.random().toString()
        this.author = newAuthor
        this.text = newText
    }

    //  Getters
    public getId():string{
        return this.id
    }
    public getAuthor(): string{
        return this.author
    }
    public getText():string{
        return this.text
    }
    public getLikes(): number{
        return this.likes
    }

    //  Setters
    public like():void{
        this.likes ++
    }
}
