/**
 * So do phan lop/tang bac (mo hinh 3 tuyen phong thu, cau truc tai lieu
 * chinh sach-tieu chuan-quy trinh, ba tang do sau T1/T2/T3...).
 */
export interface Layer {
  label: string;
  detail?: string;
}

interface Props {
  layers: Layer[];
  title?: string;
}

export function LayeredDiagram({ layers, title }: Props) {
  const width = 360;
  const rowH = 64;
  const gap = 10;
  const height = layers.length * rowH + (layers.length - 1) * gap;

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
          return (
            <g key={i}>
              <rect
                x={inset}
                y={y}
                width={width - inset * 2}
                height={rowH}
                rx={10}
                fill="var(--surface)"
                stroke="var(--accent)"
                strokeWidth={2}
              />
              <text
                x={width / 2}
                y={y + rowH / 2 - (layer.detail ? 8 : 0)}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={15}
                fontWeight={700}
                fill="var(--text)"
              >
                {layer.label}
              </text>
              {layer.detail && (
                <text
                  x={width / 2}
                  y={y + rowH / 2 + 14}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={11}
                  fill="var(--text-muted)"
                >
                  {layer.detail}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
