/**
 * So do phan lop/tang bac (mo hinh 3 tuyen phong thu, cau truc tai lieu
 * chinh sach-tieu chuan-quy trinh, ba tang do sau T1/T2/T3...).
 */
import { wrapLabel } from "./svgText";

export interface Layer {
  label: string;
  detail?: string;
}

interface Props {
  layers: Layer[];
  title?: string;
}

export function LayeredDiagram({ layers, title }: Props) {
  const width = 380;
  const rowH = 78;
  const gap = 10;
  const height = layers.length * rowH + (layers.length - 1) * gap;

  function multiline(x: number, cy: number, text: string, charsPerLine: number, fontSize: number, weight: number, fill: string) {
    const lines = wrapLabel(text, charsPerLine);
    const lineHeight = fontSize + 3;
    const startY = cy - ((lines.length - 1) * lineHeight) / 2;
    return (
      <text x={x} y={startY} textAnchor="middle" dominantBaseline="middle" fontSize={fontSize} fontWeight={weight} fill={fill}>
        {lines.map((line, i) => (
          <tspan key={i} x={x} dy={i === 0 ? 0 : lineHeight}>
            {line}
          </tspan>
        ))}
      </text>
    );
  }

  return (
    <figure className="diagram-figure">
      {title && <figcaption className="diagram-title">{title}</figcaption>}
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ maxWidth: width }}
        role="img"
        aria-label={title ?? "Sơ đồ phân lớp"}
      >
        {layers.map((layer, i) => {
          // Lop tren cung rong nhat, thu hep dan — goi y "nen tang" o duoi.
          const inset = i * 14;
          const y = i * (rowH + gap);
          const boxWidth = width - inset * 2;
          const charBudget = Math.max(10, Math.floor(boxWidth / 8));
          return (
            <g key={i}>
              <rect
                x={inset}
                y={y}
                width={boxWidth}
                height={rowH}
                rx={10}
                fill="var(--surface)"
                stroke="var(--accent)"
                strokeWidth={2}
              />
              {multiline(width / 2, y + rowH / 2 - (layer.detail ? 12 : 0), layer.label, charBudget, 14, 700, "var(--text)")}
              {layer.detail &&
                multiline(width / 2, y + rowH / 2 + 18, layer.detail, charBudget + 4, 10.5, 400, "var(--text-muted)")}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
