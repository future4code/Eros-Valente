import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";

export class UserBusiness {
	constructor(
		private userDatabase: UserDatabase,
		private idGenerator: IdGenerator,
		private hashManager: HashManager,
		private authenticator: Authenticator
	) {}

	async createUser(user: UserInputDTO): Promise<string> {
		if (!user.name || !user.email || !user.password || !user.role) {
			throw new InvalidParameterError("Fill all the fields");
		}

		if (user.email.indexOf("@") === -1) {
			throw new InvalidParameterError("Invalid email");
		}

		if (user.password.length < 6) {
			throw new InvalidParameterError("Invalid password");
		}

		const id = this.idGenerator.generate();

		const hashPassword = await this.hashManager.hash(user.password);
			
		await this.userDatabase.createUser(
			new User(
				id,
				user.name,
				user.email,
				hashPassword,
				User.stringToUserRole(user.role)
			)
		);

		const accessToken = this.authenticator.generateToken({
			id,
			role: user.role,
		});

		return accessToken;
	}

	async getUserByEmail(user: LoginInputDTO): Promise<string> {
		if (!user.email || !user.password) {
			throw new InvalidParameterError("Fill all the fields");
		}

		const userFromDB = await this.userDatabase.getUserByEmail(user.email);
		
		if (!userFromDB) {
			throw new NotFoundError("User Not Found");
		}

		const hashCompare = await this.hashManager.compare(
			user.password,
			userFromDB.getPassword()
		);

		if (!hashCompare) {
			throw new Error("Invalid Password!");
		}
		
		const accessToken = this.authenticator.generateToken({
			id: userFromDB.getId(),
			role: userFromDB.getRole(),
		});

		return accessToken;
	}
}
