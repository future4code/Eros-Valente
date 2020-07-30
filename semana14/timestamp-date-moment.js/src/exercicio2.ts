import  moment from "moment"

moment.locale('pt-br')

type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const events: event[] = [
    {
        name: "Aula Labenu",
        description: "aula 46 timestamp e moment.js",
        startAt: moment("29/07/2020 9:00", "DD/MM/YYYY HH:mm"),
        finishAt: moment("29/07/2020 11:00", "DD/MM/YYYY HH:mm")
    },
    {
        name: "Viagem para Lua",
        description: "levar mala para 8 anos",
        startAt: moment("29/07/2029 18:00", "DD/MMM/YYYY, HH:mm"),
        finishAt: moment("01/03/2037 11:00", "DD/MM/YYYY, HH:mm")
    }
]


export const allEvents = (events: event[]): void => {
    events.map((item: event) => {
        const response: string = `
        Nome: ${item.name}
        Horário de início: ${item.startAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
        Horário de fim: ${item.finishAt.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
        Descrição: ${item.description}
        `
        console.log(response)
    })
}

allEvents(events)


// b) moment.locale("en-en")