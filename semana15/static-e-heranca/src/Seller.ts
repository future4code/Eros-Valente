import { Employee } from "./Employee"

export class Seller extends Employee {
    static SELLING_COMMISSION: number = 5;

    private salesQuantity: number = 0
 
    public setSalesQuantity(quantity: number): void {
        this.salesQuantity += quantity
    }
 
    public getSalesQuantity(): number {
        return this.salesQuantity
    }
 
    public calculateTotalSalary(): number {
     return this.baseSalary + this.salesQuantity * Seller.SELLING_COMMISSION
    }
}