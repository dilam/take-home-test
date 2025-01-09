export class Drug {
  constructor(expiresIn, benefit) {
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  increaseBenefit(value) {
    this.benefit += value;

    if (this.benefit > 50) {
      this.benefit = 50;
    }

    return this;
  }

  decreaseBenefit(value) {
    this.benefit -= value;

    if (this.benefit < 0) {
      this.benefit = 0;
    }

    return this;
  }

  setBenefit(value) {
    this.benefit = value;
  }

  expiresBy(value) {
    this.expiresIn -= value;

    return this;
  }

  isExpired() {
    return this.expiresIn < 0;
  }

  expiresInLessThan(value) {
    return this.expiresIn < value;
  }

  updateBenefitValue() {
    if (this.isExpired()) {
      this.decreaseBenefit(2);
    } else {
      this.decreaseBenefit(1);
    }
  }
}
