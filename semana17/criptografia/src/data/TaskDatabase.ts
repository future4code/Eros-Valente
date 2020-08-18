import BaseDB from "./BaseDatabase";
import moment from "moment";
import UserDB from "./UserDatabase";

export default class TaskDB extends BaseDB {
    static tableName = "ToDoListTasks"

    async createTask(
        id: string,
        title: string,
        description: string,
        creatorUserId: string,
        limitDate: string
    ) {
        await this.getConnection()
            .insert({
                id, title, description,
                creator_user_id: creatorUserId,
                limit_date: moment(limitDate, "DD/MM/YYYY").format("YYYY-MM-DD"),
                status: "to_do"
            })
            .into(TaskDB.tableName)

        await this.destroyConnection()
    }

    async getTaskById(id: string) {
        const result = await this.getConnection().raw(`
            SELECT ${TaskDB.tableName}.*, nickname  
            FROM ${TaskDB.tableName}
            JOIN ${UserDB.tableName} 
            ON creator_user_id = ${UserDB.tableName}.id 
            WHERE ${TaskDB.tableName}.id = "${id as string}"
        `)
        await this.destroyConnection()

        return result[0][0]
    }
}