/**
 * SVG khong tu dong xuong dong nhu HTML — mot nhan dai render tren MOT
 * dong se tran ra ngoai o chua va de len cac phan tu ben canh. Ham nay
 * tach nhan thanh nhieu dong theo so ky tu toi da/dong, dung chung cho moi
 * so do co (box + nhan) de tranh loi nay tai dien.
 */
export function wrapLabel(label: string, maxCharsPerLine: number): string[] {
  const words = label.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}
