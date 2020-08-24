import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await this.getConnection().raw(`
        INSERT INTO ${UserDatabase.TABLE_NAME}
        VALUES (
          "${id}",
          "${name}",
          "${email}",
          "${password}",
          "${role}"
        )
      `)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }





  }
    
    

  

}
