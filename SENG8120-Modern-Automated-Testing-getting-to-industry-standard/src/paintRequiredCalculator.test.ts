import { calculateTrianglePaintArea } from "../src/paintRequiredCalculator";

describe("calculateTrianglePaintArea", () => {
  it("calculates paint area for one copy", () => {
    expect(calculateTrianglePaintArea(3, 2, 1)).toBeCloseTo(2.0);
  });

  it("calculates paint area for multiple copies", () => {
    expect(calculateTrianglePaintArea(3, 2, 5000)).toBeCloseTo(10000);
  });

  it("works with decimal values", () => {
    expect(calculateTrianglePaintArea(4.5, 1.2, 100)).toBeCloseTo((4.5/3) * 1.2 * 100);
  });
});

