/** Co che chu ky so: bam thong diep, ky bang khoa RIENG cua nguoi gui;
 * nguoi nhan xac minh bang khoa CONG KHAI cua nguoi gui — KT-04. */
export function DigitalSignatureDiagram() {
  const width = 480;
  const height = 260;

  const box = (x: number, y: number, w: number, h: number, label: string, fill = "var(--surface)") => {
    const lines = label.split("\n");
    const lineHeight = 13;
    const startY = y + h / 2 - ((lines.length - 1) * lineHeight) / 2;
    return (
      <g key={label + x + y}>
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
      <figcaption className="diagram-title">Chữ ký số (Digital Signature)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ chữ ký số">
        <defs>
          <marker id="sig-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
        </defs>

        <text x={110} y={16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên gửi — KÝ</text>
        <text x={370} y={16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên nhận — XÁC MINH</text>

        {box(10, 30, 90, 40, "Thông điệp")}
        <line x1={100} y1={50} x2={140} y2={50} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(140, 30, 80, 40, "Băm (hash)")}
        <line x1={220} y1={50} x2={260} y2={50} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(260, 20, 110, 60, "Ký bằng khóa RIÊNG của người gửi", "var(--danger-bg)")}
        <line x1={370} y1={50} x2={410} y2={50} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(400, 30, 70, 40, "Chữ ký", "var(--warn-bg)")}

        <line x1={110} y1={70} x2={110} y2={100} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" />
        <text x={140} y={90} fontSize={9.5} fill="var(--text-muted)">
          thông điệp gốc + chữ ký cùng gửi đi
        </text>
        <line x1={435} y1={70} x2={435} y2={110} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" markerEnd="url(#sig-arrow)" />

        {box(10, 110, 90, 40, "Thông điệp\nnhận được")}
        <line x1={100} y1={130} x2={140} y2={130} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(140, 110, 80, 40, "Băm (hash)")}

        {box(400, 110, 70, 40, "Chữ ký\nnhận được", "var(--warn-bg)")}
        <line x1={400} y1={130} x2={330} y2={130} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(255, 100, 110, 60, "Giải mã chữ ký bằng khóa CÔNG KHAI của người gửi", "var(--info-bg)")}

        <line x1={180} y1={150} x2={220} y2={180} stroke="var(--text-muted)" strokeWidth={2} />
        <line x1={310} y1={160} x2={230} y2={180} stroke="var(--text-muted)" strokeWidth={2} />
        <rect x={165} y={185} width={130} height={44} rx={8} fill="var(--ok-bg)" stroke="var(--ok-fg)" strokeWidth={2} />
        <text x={230} y={200} textAnchor="middle" fontSize={10} fontWeight={700} fill="var(--ok-fg)">
          So khớp hai giá trị băm
        </text>
        <text x={230} y={216} textAnchor="middle" fontSize={9} fill="var(--ok-fg)">
          Trùng → hợp lệ &amp; toàn vẹn
        </text>
      </svg>
      <ol className="diagram-legend">
        <li><strong>Ngược chiều với mã hóa bảo mật:</strong> ký bằng khóa RIÊNG (chỉ người gửi có), xác minh bằng khóa CÔNG KHAI (ai cũng kiểm tra được) — ngược lại hoàn toàn với mã hóa bất đối xứng để giữ bí mật</li>
        <li><strong>Mục đích:</strong> xác thực danh tính người gửi (chỉ người giữ khóa riêng mới ký được) và bảo đảm toàn vẹn (nội dung bị sửa dù một bit cũng làm sai lệch giá trị băm)</li>
        <li><strong>Không bảo mật nội dung:</strong> chữ ký số không mã hóa thông điệp — thông điệp vẫn đọc được, chỉ xác nhận nguồn gốc/tính toàn vẹn (muốn cả hai thì kết hợp với mã hóa)</li>
      </ol>
    </figure>
  );
}
