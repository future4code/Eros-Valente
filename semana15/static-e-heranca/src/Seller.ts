import { Employee } from "./Employee"

export class Seller extends Employee {
   private salesQuantity: number = 0

   public setSalesQuantity(quantity: number): void {
       this.salesQuantity += quantity
   }

   public getSalesQuantity(): number {
       return this.salesQuantity
   }

   public calculateTotalSalary(): number {
    const salaryWithBenefits: number = super.calculateTotalSalary()
    return salaryWithBenefits + (this.salesQuantity * 5)
   }
}