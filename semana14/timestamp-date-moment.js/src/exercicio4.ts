import  moment from "moment"
import { printAllEvents } from "./exercicio3"

moment.locale('pt-br')

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment,
}

const events: event[] = [
    {
        name: "Aula Labenu",
        description: "aula 46 timestamp e moment.js",
        startAt: moment("29/07/2020 9:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("29/07/2020 11:00", "DD/MM/YYYY HH:mm"),

    },
    {
        name: "Viagem para Lua",
        description: "levar mala para 8 anos",
        startAt: moment("29/07/2029 18:00", "DD/MM/YYYY, HH:mm"),
        finishAt: moment("01/03/2037 11:00", "DD/MM/YYYY, HH:mm")
    }
]

const createEvent = (
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment,
): void => {
    if (!name || !description || !startAt || !finishAt) {
        console.log("Parâmetros inválidos")
        return
    }

    const diffStartAtAndToday: number = startAt.diff(moment(), "seconds")
    const diffFinishAtAndToday: number = finishAt.diff(moment(), "seconds")

    if (diffStartAtAndToday < 0 || diffFinishAtAndToday < 0) {
        console.log("Data não ser pode anterior ao dia de hoje")
        return
    }
    
    events.push({name, description, startAt, finishAt})

    printAllEvents(events)
}

createEvent(process.argv[2], process.argv[3], moment(process.argv[4], "DD/MM/YYYY, HH:mm"),  moment(process.argv[5], "DD/MM/YYYY, HH:mm"))








