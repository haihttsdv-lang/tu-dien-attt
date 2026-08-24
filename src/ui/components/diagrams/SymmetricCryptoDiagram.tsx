/** Co che ma hoa doi xung (chia se chung mot khoa bi mat) — KT-04. */
export function SymmetricCryptoDiagram() {
  const width = 440;
  const height = 200;

  const box = (x: number, y: number, w: number, h: number, label: string, fill = "var(--surface)") => (
    <g key={label + x}>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke="var(--border)" strokeWidth={2} />
      <text x={x + w / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight={700} fill="var(--text)">
        {label}
      </text>
    </g>
  );

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Mã hóa đối xứng (Symmetric Encryption)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ mã hóa đối xứng">
        <defs>
          <marker id="sym-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
        </defs>

        {box(10, 60, 80, 50, "Bản rõ", "var(--ok-bg)")}
        <line x1={90} y1={85} x2={135} y2={85} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sym-arrow)" />
        {box(135, 50, 100, 70, "Mã hóa (AES...)")}
        <line x1={235} y1={85} x2={280} y2={85} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sym-arrow)" />
        {box(280, 60, 80, 50, "Bản mã", "var(--warn-bg)")}
        <line x1={360} y1={85} x2={410} y2={85} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" markerEnd="url(#sym-arrow)" />
        <text x={385} y={72} textAnchor="middle" fontSize={9} fill="var(--text-muted)">gửi đi</text>

        <rect x={135} y={140} width={100} height={40} rx={8} fill="var(--danger-bg)" stroke="var(--danger-fg)" strokeWidth={2} />
        <text x={185} y={160} textAnchor="middle" dominantBaseline="middle" fontSize={11} fontWeight={700} fill="var(--danger-fg)">
          🔑 Khóa bí mật
        </text>
        <line x1={185} y1={140} x2={185} y2={120} stroke="var(--danger-fg)" strokeWidth={2} strokeDasharray="4,3" />

        <text x={width / 2} y={185} textAnchor="middle" fontSize={10} fill="var(--text-muted)">
          Cùng một khóa dùng để MÃ HÓA và GIẢI MÃ — hai bên phải trao đổi khóa này an toàn từ trước
        </text>
      </svg>
      <ol className="diagram-legend">
        <li><strong>Đặc điểm:</strong> tốc độ nhanh, phù hợp mã hóa khối lượng dữ liệu lớn (vd. mã hóa dữ liệu lưu trữ)</li>
        <li><strong>Thách thức:</strong> trao đổi khóa bí mật ban đầu một cách an toàn giữa hai bên</li>
        <li><strong>Ví dụ thuật toán phổ biến:</strong> AES</li>
      </ol>
    </figure>
  );
}
