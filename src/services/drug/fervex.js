import { Drug } from "./drug";

export class Fervex extends Drug {
  updateBenefitValue() {
    if (this.isExpired()) {
      this.setBenefit(0);
    } else if (this.expiresInLessThan(5)) {
      this.increaseBenefit(3);
    } else if (this.expiresInLessThan(10)) {
      this.increaseBenefit(2);
    } else {
      this.increaseBenefit(1);
    }
  }
}
