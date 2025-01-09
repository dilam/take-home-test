import { Drug } from "./drug";

describe("Drug", () => {
  it("should increase benefit by value", () => {
    expect(new Drug(2, 3).increaseBenefit(5)).toEqual(new Drug(2, 8));
  });

  it("shouldn't increase benefit over 50", () => {
    expect(new Drug(2, 48).increaseBenefit(5)).toEqual(new Drug(2, 50));
  });

  it("should decrease benefit by value", () => {
    expect(new Drug(2, 10).decreaseBenefit(5)).toEqual(new Drug(2, 5));
  });

  it("shouldn't decrease benefit under 0", () => {
    expect(new Drug(2, 3).decreaseBenefit(5)).toEqual(new Drug(2, 0));
  });

  it("should decrease expireIn by value", () =>
    expect(new Drug(2, 3).expiresBy(5)).toEqual(new Drug(-3, 3)));
});
