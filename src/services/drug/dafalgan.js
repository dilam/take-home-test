import { Drug } from "./drug";

export class Dafalgan extends Drug {
  updateBenefitValue() {
    if (this.isExpired()) {
      this.decreaseBenefit(4);
    } else {
      this.decreaseBenefit(2);
    }
  }
}
