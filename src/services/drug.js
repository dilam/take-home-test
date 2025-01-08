export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  increaseBenefit(value) {
    if (this.benefit + value <= 50) {
      this.benefit += value;
    }
  }

  decreaseBenefit(value) {
    if (this.benefit - value >= 0) {
      this.benefit -= value;
    }
  }

  expire(value) {
    this.expiresIn -= value;
  }
}
