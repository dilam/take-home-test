import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";
import { Drugs } from "../constants/drug";

describe("Pharmacy", () => {
  describe("Drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease twice the benefit when expiresIn is negative", () => {
      expect(
        new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue(),
      ).toEqual([new Drug("test", -2, 1)]);
    });

    it("shouldn't decrease the benefit when the value is 0", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue(),
      ).toEqual([new Drug("test", 1, 0)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug(Drugs.HERBAL_TEA, 2, 3)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.HERBAL_TEA, 1, 4)]);
    });

    it("should increase twice the benefit when expiresIn is negative", () => {
      expect(
        new Pharmacy([new Drug(Drugs.HERBAL_TEA, -1, 3)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.HERBAL_TEA, -2, 5)]);
    });

    it("shouldn't increase the benefit when the value is more than 50", () => {
      expect(
        new Pharmacy([new Drug(Drugs.HERBAL_TEA, -1, 50)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.HERBAL_TEA, -2, 50)]);
    });
  });

  describe("Magic PIll", () => {
    it("shouldn't increase or decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug(Drugs.MAGIC_PILL, 2, 3)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.MAGIC_PILL, 2, 3)]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug(Drugs.FERVEX, 11, 3)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.FERVEX, 10, 4)]);
    });

    it("should increase by 2 the benefit when expiresIn is less than 10", () => {
      expect(
        new Pharmacy([new Drug(Drugs.FERVEX, 10, 3)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.FERVEX, 9, 5)]);
    });

    it("should increase by 3 the benefit when expiresIn is less than 5", () => {
      expect(
        new Pharmacy([new Drug(Drugs.FERVEX, 5, 3)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.FERVEX, 4, 6)]);
    });

    it("should drop the benefit to 0 when expiresIn is less than 0", () => {
      expect(
        new Pharmacy([new Drug(Drugs.FERVEX, 0, 3)]).updateBenefitValue(),
      ).toEqual([new Drug(Drugs.FERVEX, -1, 0)]);
    });
  });
});
