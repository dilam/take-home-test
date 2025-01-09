export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.expiresBy(1);
      drug.updateBenefitValue();
    }

    return this.drugs;
  }
}
