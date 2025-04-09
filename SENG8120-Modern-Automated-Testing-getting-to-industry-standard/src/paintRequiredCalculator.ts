export function calculateTrianglePaintArea(length: number, width: number, copies: number): number {
  const triangleBase = length / 3;
  const triangleHeight = width;
  const oneTriangleArea = 0.5 * triangleBase * triangleHeight;
  const totalPaintArea = 2 * oneTriangleArea * copies;
  return totalPaintArea;
}

