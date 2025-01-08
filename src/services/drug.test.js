import { Drug } from "./drug";

describe("Drug", () => {
  it("should increase benefit by value", () => {
    expect(new Drug("test", 2, 3).increaseBenefit(5)).toEqual(
      new Drug("test", 2, 8),
    );
  });

  it("shouldn't increase benefit over 50", () => {
    expect(new Drug("test", 2, 48).increaseBenefit(5)).toEqual(
      new Drug("test", 2, 50),
    );
  });

  it("should decrease benefit by value", () => {
    expect(new Drug("test", 2, 10).decreaseBenefit(5)).toEqual(
      new Drug("test", 2, 5),
    );
  });

  it("shouldn't decrease benefit under 0", () => {
    expect(new Drug("test", 2, 3).decreaseBenefit(5)).toEqual(
      new Drug("test", 2, 0),
    );
  });

  it("should decrease expireIn by value", () =>
    expect(new Drug("test", 2, 3).expireBy(5)).toEqual(
      new Drug("test", -3, 3),
    ));
});
