import { Drug } from "./drug";

export class MagicPill extends Drug {
  updateBenefitValue() {
    this.expiresBy(-1);
  }
}
