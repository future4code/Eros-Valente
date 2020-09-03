import { UserInputDTO, LoginInputDTO, User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";

export class UserBusiness {
	constructor(
		private userDatabase: UserDatabase,
		private idGenerator: IdGenerator,
		private hashManager: HashManager,
		private authenticator: Authenticator
	) {}

	async createUser(user: UserInputDTO) {
		if (!user.name || !user.email || !user.password || !user.role) {
			throw new InvalidParameterError("Missing input");
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
			id,
			user.name,
			user.email,
			hashPassword,
			user.role
		);

		const accessToken = this.authenticator.generateToken({
			id,
			role: user.role,
		});

		return accessToken;
	}

	async getUserByEmail(user: LoginInputDTO) {
		const userDatabase = new UserDatabase();
		const userFromDB = await userDatabase.getUserByEmail(user.email);

		const hashManager = new HashManager();
		const hashCompare = await hashManager.compare(
			user.password,
			userFromDB.getPassword()
		);

		const authenticator = new Authenticator();
		const accessToken = authenticator.generateToken({
			id: userFromDB.getId(),
			role: userFromDB.getRole(),
		});

		if (!hashCompare) {
			throw new Error("Invalid Password!");
		}

		return accessToken;
	}
}
