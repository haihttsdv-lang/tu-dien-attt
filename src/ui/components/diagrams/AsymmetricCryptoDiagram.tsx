/** Co che ma hoa bat doi xung — dung khoa cong khai cua NGUOI NHAN de ma
 * hoa, chi khoa rieng tuong ung moi giai ma duoc — KT-04. */
export function AsymmetricCryptoDiagram() {
  const width = 460;
  const height = 230;

  const box = (x: number, y: number, w: number, h: number, label: string, fill = "var(--surface)", stroke = "var(--border)") => (
    <g key={`${label}-${x}-${y}`}>
      <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke={stroke} strokeWidth={2} />
      <text x={x + w / 2} y={y + h / 2} textAnchor="middle" dominantBaseline="middle" fontSize={11.5} fontWeight={700} fill="var(--text)">
        {label}
      </text>
    </g>
  );

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Mã hóa bất đối xứng (Asymmetric / Public-key Encryption)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ mã hóa bất đối xứng">
        <defs>
          <marker id="asym-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
        </defs>

        <text x={70} y={20} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên gửi (A)</text>
        <text x={390} y={20} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên nhận (B)</text>

        {box(10, 40, 90, 45, "Bản rõ", "var(--ok-bg)")}
        <line x1={100} y1={62} x2={145} y2={62} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(145, 30, 110, 65, "Mã hóa bằng khóa CÔNG KHAI của B")}
        <line x1={255} y1={62} x2={300} y2={62} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(300, 40, 80, 45, "Bản mã", "var(--warn-bg)")}

        <line x1={340} y1={85} x2={340} y2={120} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" markerEnd="url(#asym-arrow)" />

        {box(295, 120, 90, 45, "Bản mã", "var(--warn-bg)")}
        <line x1={295} y1={142} x2={250} y2={142} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(140, 110, 110, 65, "Giải mã bằng khóa RIÊNG của B")}
        <line x1={140} y1={142} x2={95} y2={142} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#asym-arrow)" />
        {box(10, 120, 85, 45, "Bản rõ", "var(--ok-bg)")}

        <rect x={155} y={195} width={150} height={30} rx={6} fill="var(--info-bg)" stroke="var(--info-fg)" strokeWidth={1.5} />
        <text x={230} y={210} textAnchor="middle" dominantBaseline="middle" fontSize={10} fontWeight={700} fill="var(--info-fg)">
          Khóa công khai của B: ai cũng biết
        </text>
      </svg>
      <ol className="diagram-legend">
        <li><strong>Nguyên tắc:</strong> mỗi bên có một CẶP KHÓA (công khai + riêng tư) — công khai để chia sẻ tự do, riêng tư giữ bí mật tuyệt đối</li>
        <li><strong>Để giữ bí mật:</strong> mã hóa bằng khóa CÔNG KHAI của người nhận — chỉ khóa RIÊNG của đúng người đó mới giải mã được</li>
        <li><strong>Đánh đổi:</strong> chậm hơn mã hóa đối xứng nhiều lần — trong thực tế thường chỉ dùng để trao đổi một khóa đối xứng, sau đó mã hóa dữ liệu lớn bằng khóa đối xứng đó (mã hóa lai — hybrid encryption, nền tảng của TLS/HTTPS)</li>
      </ol>
    </figure>
  );
}
