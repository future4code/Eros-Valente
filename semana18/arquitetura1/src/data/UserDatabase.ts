import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role?: string
  ): Promise<void> {
    try {
      await super.getConnection().raw(`
      INSERT INTO User_Arq (id, name, email, password ${role ? ", role" : ""})
      VALUE(
        "${id}",
        "${name}",
        "${email}",
        "${password}"
        ${role ? `,"${role}"` : ""}
      )
    `)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }





  }
    
    

  

}
