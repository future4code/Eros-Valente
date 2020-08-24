import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
  }

interface UserInfo {
    name: string,
    email: string,
    password: string,
    role: USER_ROLE,
}

export class UserBusiness {
    private userDatabase = new UserDatabase()

    public async signup(user: UserInfo): Promise<string> {

        const idGenerator = new IdGenerator();
        const hashManager = new HashManager();
        const authenticator = new Authenticator();

        try {
            if(!user.name || !user.email || !user.password || !user.role){
                throw new Error("Please fill all the fields");
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(user.password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const id = idGenerator.generate()
            const cypherPassword = await hashManager.hash(user.password)
            await this.userDatabase.createUser(
                id,
                user.name, 
                user.email, 
                cypherPassword, 
                user.role
            )

            const token = authenticator.generateToken({id, role: user.role})

            return token    
        } catch (error) {
            throw new Error(error.message || "Error creating user. Please check your system administrator.");
        }
    }


}
