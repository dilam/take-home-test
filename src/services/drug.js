export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
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

  expireBy(value) {
    this.expiresIn -= value;

    return this;
  }
}
