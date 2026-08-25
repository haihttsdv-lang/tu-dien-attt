import { wrapLabel } from "./svgText";

/** Co che ma hoa bat doi xung — dung khoa cong khai cua NGUOI NHAN de ma
 * hoa, chi khoa rieng tuong ung moi giai ma duoc — KT-04. */
export function AsymmetricCryptoDiagram() {
  const width = 460;
  const height = 280;

  const box = (
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    fill = "var(--surface)",
    charsPerLine = 14
  ) => {
    const lines = wrapLabel(label, charsPerLine);
    const lineHeight = 13;
    const startY = y + h / 2 - ((lines.length - 1) * lineHeight) / 2;
    return (
      <g key={`${label}-${x}-${y}`}>
        <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke="var(--border)" strokeWidth={2} />
        <text x={x + w / 2} y={startY} textAnchor="middle" dominantBaseline="middle" fontSize={11} fontWeight={700} fill="var(--text)">
          {lines.map((line, i) => (
            <tspan key={i} x={x + w / 2} dy={i === 0 ? 0 : lineHeight}>
              {line}
            </tspan>
          ))}
        </text>
      </g>
    );
  };

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Mã hóa bất đối xứng (Asymmetric / Public-key Encryption)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ mã hóa bất đối xứng">
        <defs>
          <marker id="asym-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
        </defs>

        <text x={75} y={20} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên gửi (A)</text>
        <text x={385} y={20} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên nhận (B)</text>

        {/* Hang 1: A ma hoa bang khoa cong khai cua B, gui Ban ma cho B */}
        {box(10, 35, 80, 45, "Bản rõ", "var(--ok-bg)")}
        <line x1={90} y1={57} x2={130} y2={57} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(130, 30, 115, 55, "Mã hóa bằng khóa CÔNG KHAI của B", "var(--surface)", 13)}
        <line x1={245} y1={57} x2={285} y2={57} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(285, 35, 80, 45, "Bản mã", "var(--warn-bg)")}
        <line x1={365} y1={57} x2={400} y2={57} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" markerEnd="url(#asym-arrow)" />

        {/* Hang 2 (rieng biet, cach xa hang 1): B giai ma bang khoa rieng cua chinh minh */}
        {box(285, 130, 80, 45, "Bản mã", "var(--warn-bg)")}
        <line x1={285} y1={152} x2={245} y2={152} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(130, 125, 115, 55, "Giải mã bằng khóa RIÊNG của B", "var(--surface)", 13)}
        <line x1={130} y1={152} x2={100} y2={152} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(10, 130, 80, 45, "Bản rõ", "var(--ok-bg)")}

        <line x1={400} y1={80} x2={400} y2={130} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" />
        <text x={412} y={108} fontSize={9} fill="var(--text-muted)">gửi</text>

        <rect x={140} y={210} width={180} height={34} rx={6} fill="var(--info-bg)" stroke="var(--info-fg)" strokeWidth={1.5} />
        <text x={230} y={227} textAnchor="middle" dominantBaseline="middle" fontSize={10} fontWeight={700} fill="var(--info-fg)">
          Khóa công khai của B: ai cũng biết
        </text>
      </svg>
      <ol className="diagram-legend">
        <li><strong>Nguyên tắc:</strong> mỗi bên có một CẶP KHÓA (công khai + riêng tư) — công khai để chia sẻ tự do, riêng tư giữ bí mật tuyệt đối</li>
        <li><strong>Để giữ bí mật:</strong> mã hóa bằng khóa CÔNG KHAI của người nhận — chỉ khóa RIÊNG của đúng người đó mới giải mã được</li>
        <li><strong>Đánh đổi:</strong> chậm hơn mã hóa đối xứng nhiều lần — thực tế thường chỉ dùng để trao đổi một khóa đối xứng, sau đó mã hóa dữ liệu lớn bằng khóa đó (mã hóa lai — hybrid encryption, nền tảng của TLS/HTTPS)</li>
      </ol>
    </figure>
  );
}
