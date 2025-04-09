export function calculateCanvasSize(length: string, width: string): number {
  const l = parseFloat(length);
  const w = parseFloat(width);

  if (isNaN(l) || isNaN(w)) return 0;
  return l * w;
}

