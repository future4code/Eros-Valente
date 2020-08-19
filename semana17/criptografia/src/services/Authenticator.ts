import * as jwt from 'jsonwebtoken'

enum USER_ROLES {
    NORMAL = "normal",
    ADMIN = "admin"
}

interface AutehticationData {
    id: string,
    role: USER_ROLES
}

export default abstract class Authenticator {
    static generateToken(input: AutehticationData) {
        return jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )
    }

    static getData(token: string): any {
        const tokenData = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return tokenData as AutehticationData
    }
}