import { Drugs } from "../constants/drug";

const SPECIAL_DRUGS = [Drugs.HERBAL_TEA, Drugs.FERVEX];

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      if (drug.isName(Drugs.MAGIC_PILL)) {
        continue;
      }

      drug.expiresBy(1);

      if (!drug.isName(...SPECIAL_DRUGS)) {
        let degrade = 1;
        if (drug.isExpired()) {
          degrade = degrade * 2;
        }
        drug.decreaseBenefit(degrade);

        continue;
      }

      drug.increaseBenefit(1);
      if (drug.isName(Drugs.FERVEX)) {
        if (drug.expiresIn < 10) {
          drug.increaseBenefit(1);
        }
        if (drug.expiresIn < 5) {
          drug.increaseBenefit(1);
        }
      }

      if (drug.expiresIn < 0) {
        if (drug.isName(Drugs.FERVEX)) {
          drug.decreaseBenefit(drug.benefit);
        } else if (drug.isName(Drugs.HERBAL_TEA)) {
          drug.increaseBenefit(1);
        }
      }
    }

    return this.drugs;
  }
}
