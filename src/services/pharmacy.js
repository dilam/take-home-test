import { Drugs } from "../constants/drug";
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

      if (!drug.isName(Drugs.HERBAL_TEA, Drugs.FERVEX)) {
        let degrade = 1;
        if (drug.isName(Drugs.DAFALGAN)) {
          degrade *= 2;
        }
        if (drug.isExpired()) {
          degrade *= 2;
        }
        drug.decreaseBenefit(degrade);

        continue;
      }

      let benefit = 1;

      if (drug.isName(Drugs.HERBAL_TEA) && drug.isExpired()) {
        benefit *= 2;
      } else if (drug.isName(Drugs.FERVEX)) {
        if (drug.isExpired()) {
          drug.setBenefit(0);
          continue;
        } else if (drug.expiresInLessThan(5)) {
          benefit *= 3;
        } else if (drug.expiresInLessThan(10)) {
          benefit *= 2;
        }
      }

      drug.increaseBenefit(benefit);
    }

    return this.drugs;
  }
}
