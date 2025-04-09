export function calculateCanvasDiagonal(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) return NaN;

  return Math.sqrt(l ** 2 + w ** 2);
}
