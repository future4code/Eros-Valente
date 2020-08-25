import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";



export class UserBusiness {
    private userDatabase = new UserDatabase()

    public async signup(user: UserInfoToSignup): Promise<string> {

        const idGenerator = new IdGenerator();
        const hashManager = new HashManager();
        const authenticator = new Authenticator();

        if(!user.name || !user.email || !user.password){
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
    }

    public async login(email: string, password: string): Promise<string> {
        
        const hash = new HashManager()
        const authenticator = new Authenticator()

        const user = await this.userDatabase.getUserByEmail(email)
        const hashCompare = await hash.compare(password, user.password)

        if (!hashCompare) {
            throw new Error("Invalid email or password");
        }

        const token = authenticator.generateToken({
            id: user.id,
            role: user.role
        })

        return token
    }

    public async getAllUsers(token: string): Promise<any[]> {
        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        if(!authenticationData) {
            throw new Error("User is not logged");
        }

        return this.userDatabase.getAllUsers()
    }

    public async deleteUser(input: any): Promise<void> {
        const authenticator = new Authenticator
        const authenticationData = authenticator.getData(input.token)

        if (authenticationData.role !== "ADMIN") {
            throw new Error("Only admin users can delete another user");
        }

        return await this.userDatabase.deleteUser(input.id)
    }


}

enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
  }

interface UserInfoToSignup {
    name: string,
    email: string,
    password: string,
    role: string,
}