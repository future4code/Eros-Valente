export interface User {
    name: string,
    balance: number
}

export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        user.balance -= value
        return user
    }
    return undefined
}

