import * as jwt from 'jsonwebtoken'

interface AutehticationData {
    id: string
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