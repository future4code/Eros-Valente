import { User } from "./User"

export class Employee extends User {
    protected admissionDate: Date;
    protected baseSalary: number;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: Date,
        baseSalary: number
    ) {
        super(id, email, name, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary
    }

    public getAdmissionDate(): Date {
        return this.admissionDate
    }
    
    public getBaseSalary(): number {
        return this.baseSalary
    }

    public calculateTotalSalary(): number {
        const employeeSalaray: number = this.baseSalary
        return employeeSalaray + 400
    }
}

