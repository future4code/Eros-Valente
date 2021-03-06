import knex from "knex";

export default abstract class BaseDB {
    private static connection: knex | null = null

    protected getConnection() {
        if (!BaseDB.connection) {

            BaseDB.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
            });
        }

        return BaseDB.connection
    }

    public static async destroyConnection(){
        if(BaseDB.connection){
            await BaseDB.connection.destroy()

            BaseDB.connection = null
        }
    }
}