import { Client } from "./Client"

class ClientManager {
    private client: Client[]

    get ClientsQuantity(): number {
        return this.client.length
    }
}