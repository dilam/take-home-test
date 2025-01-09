import { Drug } from "./drug";

export class HerbalTea extends Drug {
  updateBenefitValue() {
    if (this.isExpired()) {
      this.increaseBenefit(2);
    } else {
      this.increaseBenefit(1);
    }
  }
}
