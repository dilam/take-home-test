import { Pharmacy } from "./pharmacy";
import { Drug, HerbalTea, MagicPill, Fervex, Dafalgan } from "./drug";

describe("Pharmacy", () => {
  describe("Drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(new Pharmacy([new Drug(2, 3)]).updateBenefitValue()).toEqual([
        new Drug(1, 2),
      ]);
    });

    it("should decrease twice the benefit when expiresIn is negative", () => {
      expect(new Pharmacy([new Drug(-1, 3)]).updateBenefitValue()).toEqual([
        new Drug(-2, 1),
      ]);
    });

    it("shouldn't decrease the benefit under 0", () => {
      expect(new Pharmacy([new Drug(2, 0)]).updateBenefitValue()).toEqual([
        new Drug(1, 0),
      ]);
    });

    it("should decrease the benefit twice when expiresIn is 0", () => {
      expect(new Pharmacy([new Drug(0, 5)]).updateBenefitValue()).toEqual([
        new Drug(-1, 3),
      ]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(new Pharmacy([new HerbalTea(2, 3)]).updateBenefitValue()).toEqual([
        new HerbalTea(1, 4),
      ]);
    });

    it("should increase twice the benefit when expiresIn is negative", () => {
      expect(new Pharmacy([new HerbalTea(-1, 3)]).updateBenefitValue()).toEqual(
        [new HerbalTea(-2, 5)],
      );
    });

    it("shouldn't increase the benefit when the value is more than 50", () => {
      expect(
        new Pharmacy([new HerbalTea(-1, 50)]).updateBenefitValue(),
      ).toEqual([new HerbalTea(-2, 50)]);
    });
  });

  describe("Magic PIll", () => {
    it("shouldn't increase or decrease the benefit and expiresIn", () => {
      expect(new Pharmacy([new MagicPill(2, 3)]).updateBenefitValue()).toEqual([
        new MagicPill(2, 3),
      ]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(new Pharmacy([new Fervex(11, 3)]).updateBenefitValue()).toEqual([
        new Fervex(10, 4),
      ]);
    });

    it("should increase by 2 the benefit when expiresIn is less than 10", () => {
      expect(new Pharmacy([new Fervex(10, 3)]).updateBenefitValue()).toEqual([
        new Fervex(9, 5),
      ]);
    });

    it("should increase by 3 the benefit when expiresIn is less than 5", () => {
      expect(new Pharmacy([new Fervex(5, 3)]).updateBenefitValue()).toEqual([
        new Fervex(4, 6),
      ]);
    });

    it("should drop the benefit to 0 when expiresIn is less than 0", () => {
      expect(new Pharmacy([new Fervex(0, 3)]).updateBenefitValue()).toEqual([
        new Fervex(-1, 0),
      ]);
    });
  });

  describe("Herbal Tea", () => {
    it("should decrease twice the benefit and decrease normally expiresIn", () => {
      expect(new Pharmacy([new Dafalgan(2, 3)]).updateBenefitValue()).toEqual([
        new Dafalgan(1, 1),
      ]);
    });

    it("should decrease by 4 the benefit when expiresIn is negative", () => {
      expect(new Pharmacy([new Dafalgan(-1, 4)]).updateBenefitValue()).toEqual([
        new Dafalgan(-2, 0),
      ]);
    });

    it("shouldn't decrease the benefit under 0", () => {
      expect(new Pharmacy([new Dafalgan(-1, 0)]).updateBenefitValue()).toEqual([
        new Dafalgan(-2, 0),
      ]);
    });

    it("should decrease the benefit by 4 when expiresIn is 0", () => {
      expect(new Pharmacy([new Dafalgan(0, 4)]).updateBenefitValue()).toEqual([
        new Dafalgan(-1, 0),
      ]);
    });
  });
});
