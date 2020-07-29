import moment from "moment"

type Event = {
    name: string,
    description: string,
    startAt: number,
    finishAt: number
}

const events: Event[] = [
    {
        name: "Aula Labenu",
        description: "aula times",
        startAt: 0,
        finishAt: 0
    },
    {
        name: "",
        description: "",
        startAt: 0,
        finishAt: 0
    }
]