import { Client } from "./Client"

export class ClientManager {
    private clients: Client[] = []
    
    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public calculateBillOfClient(registrationNumber: number): number {
        const foundClient = this.clients.find(client => {
            return client.registrationNumber === registrationNumber
        })
    
        if(foundClient) {
            return foundClient.calculateBill()
        }

        return 0
    }

    public calculateTotalIncome(): number {
        let totalIncome: number = 0
        for (let client of this.clients) {
            totalIncome += client.calculateBill()
        }
        return totalIncome
    }

    public getClientsQuantity(): number {
        return this.clients.length
    }

    public deleteClient(registrationNumber: number): void {
        const clientIndex = this.clients.findIndex(client => {
            return client.registrationNumber === registrationNumber
        })
        
        if(clientIndex !== -1) {
            this.clients.splice(clientIndex, 1)
            console.log("Cliente deletado com sucesso")
        } else {
            console.log("Cliente não encontrado")

        }

    }
}