import { Drugs } from "../constants/drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      if (drug.name === Drugs.MAGIC_PILL) {
        continue;
      }

      if (drug.name !== Drugs.HERBAL_TEA && drug.name !== Drugs.FERVEX) {
        let degrade = 1;
        if (drug.isExpired()) {
          degrade = degrade * 2;
        }
        drug.decreaseBenefit(degrade);
        drug.expireBy(1);

        continue;
      }

      if (drug.name != Drugs.HERBAL_TEA && drug.name != Drugs.FERVEX) {
        drug.decreaseBenefit(1);
      } else {
        drug.increaseBenefit(1);
        if (drug.name == Drugs.FERVEX) {
          if (drug.expiresIn < 11) {
            drug.increaseBenefit(1);
          }
          if (drug.expiresIn < 6) {
            drug.increaseBenefit(1);
          }
        }
      }

      drug.expireBy(1);

      if (drug.expiresIn < 0) {
        if (drug.name === Drugs.FERVEX) {
          drug.decreaseBenefit(drug.benefit);
        } else if (drug.name === Drugs.HERBAL_TEA) {
          drug.increaseBenefit(1);
        }
      }
    }

    return this.drugs;
  }
}
