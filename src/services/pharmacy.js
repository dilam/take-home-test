import { Drugs } from "../constants/drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (
        this.drugs[i].name != Drugs.HERBAL_TEA &&
        this.drugs[i].name != Drugs.FERVEX
      ) {
        if (this.drugs[i].name != Drugs.MAGIC_PILL) {
          this.drugs[i].decreaseBenefit(1);
        }
      } else {
        this.drugs[i].increaseBenefit(1);
        if (this.drugs[i].name == Drugs.FERVEX) {
          if (this.drugs[i].expiresIn < 11) {
            this.drugs[i].increaseBenefit(1);
          }
          if (this.drugs[i].expiresIn < 6) {
            this.drugs[i].increaseBenefit(1);
          }
        }
      }
      if (this.drugs[i].name != Drugs.MAGIC_PILL) {
        this.drugs[i].expireBy(1);
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != Drugs.HERBAL_TEA) {
          if (this.drugs[i].name != Drugs.FERVEX) {
            if (this.drugs[i].name != Drugs.MAGIC_PILL) {
              this.drugs[i].decreaseBenefit(1);
            }
          } else {
            this.drugs[i].decreaseBenefit(this.drugs[i].benefit);
          }
        } else {
          this.drugs[i].increaseBenefit(1);
        }
      }
    }

    return this.drugs;
  }
}
