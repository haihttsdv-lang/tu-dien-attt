import { wrapLabel } from "./svgText";

/** Co che chu ky so: bam thong diep, ky bang khoa RIENG cua nguoi gui;
 * nguoi nhan xac minh bang khoa CONG KHAI cua nguoi gui — KT-04. */
export function DigitalSignatureDiagram() {
  const width = 480;
  const height = 320;

  const box = (
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    fill = "var(--surface)",
    charsPerLine = 13
  ) => {
    const lines = wrapLabel(label, charsPerLine);
    const lineHeight = 13;
    const startY = y + h / 2 - ((lines.length - 1) * lineHeight) / 2;
    return (
      <g key={`${label}-${x}-${y}`}>
        <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke="var(--border)" strokeWidth={2} />
        <text x={x + w / 2} y={startY} textAnchor="middle" dominantBaseline="middle" fontSize={10.5} fontWeight={700} fill="var(--text)">
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

        <text x={100} y={16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên gửi — KÝ</text>
        <text x={370} y={16} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text-muted)">Bên nhận — XÁC MINH</text>

        {/* Hang 1: ben gui bam va ky */}
        {box(10, 30, 85, 40, "Thông điệp")}
        <line x1={95} y1={50} x2={130} y2={50} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(130, 30, 75, 40, "Băm (hash)")}
        <line x1={205} y1={50} x2={240} y2={50} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(240, 20, 120, 60, "Ký bằng khóa RIÊNG của người gửi", "var(--danger-bg)", 13)}
        <line x1={360} y1={50} x2={395} y2={50} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(395, 30, 75, 40, "Chữ ký", "var(--warn-bg)")}

        <text x={240} y={100} textAnchor="middle" fontSize={9.5} fill="var(--text-muted)">
          Thông điệp gốc + chữ ký cùng được gửi đi
        </text>
        <line x1={432} y1={70} x2={432} y2={140} stroke="var(--text-muted)" strokeWidth={2} strokeDasharray="4,3" markerEnd="url(#sig-arrow)" />

        {/* Hang 2 (cach xa hang 1): ben nhan bam lai va xac minh */}
        {box(10, 150, 85, 40, "Thông điệp\nnhận được", "var(--surface)", 13)}
        <line x1={95} y1={170} x2={130} y2={170} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(130, 150, 75, 40, "Băm (hash)")}

        {box(395, 150, 75, 40, "Chữ ký\nnhận được", "var(--warn-bg)", 13)}
        <line x1={395} y1={170} x2={365} y2={170} stroke="var(--accent)" strokeWidth={2} markerEnd="url(#sig-arrow)" />
        {box(240, 140, 120, 60, "Giải mã chữ ký bằng khóa CÔNG KHAI của người gửi", "var(--info-bg)", 13)}

        <line x1={168} y1={190} x2={220} y2={230} stroke="var(--text-muted)" strokeWidth={2} />
        <line x1={300} y1={200} x2={250} y2={230} stroke="var(--text-muted)" strokeWidth={2} />
        <rect x={155} y={240} width={150} height={50} rx={8} fill="var(--ok-bg)" stroke="var(--ok-fg)" strokeWidth={2} />
        <text x={230} y={260} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="var(--ok-fg)">
          So khớp hai giá trị băm
        </text>
        <text x={230} y={276} textAnchor="middle" fontSize={9} fill="var(--ok-fg)">
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
