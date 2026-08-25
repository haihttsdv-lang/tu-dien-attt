import { wrapLabel } from "./svgText";

/** Mo hinh trach nhiem chung tren dien toan dam may (Shared Responsibility
 * Model) — ranh gioi trach nhiem nha cung cap/khach hang thay doi theo
 * loai hinh dich vu — KT-06. */
export function CloudResponsibilityDiagram() {
  const width = 480;
  const height = 300;
  const colW = 130;
  const colGap = 6;
  const startX = 30;
  const cols = [
    { title: "IaaS", customer: ["Ứng dụng", "Dữ liệu", "Hệ điều hành", "Cấu hình mạng ảo"] },
    { title: "PaaS", customer: ["Ứng dụng", "Dữ liệu", "Cấu hình quyền truy cập"] },
    { title: "SaaS", customer: ["Dữ liệu", "Quản lý người dùng/quyền"] }
  ];
  const providerRows = ["Hạ tầng vật lý", "Ảo hóa", "Mạng lõi", "Trung tâm dữ liệu"];

  function cell(x: number, y: number, w: number, h: number, text: string, fill: string, textColor: string, fontSize = 9.5) {
    const lines = wrapLabel(text, 14);
    const lineHeight = fontSize + 2;
    const cy = y + h / 2 - ((lines.length - 1) * lineHeight) / 2;
    return (
      <g key={`${x}-${y}-${text}`}>
        <rect x={x} y={y} width={w} height={h} fill={fill} stroke="var(--border)" strokeWidth={1} />
        <text x={x + w / 2} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize={fontSize} fill={textColor} fontWeight={600}>
          {lines.map((line, i) => (
            <tspan key={i} x={x + w / 2} dy={i === 0 ? 0 : lineHeight}>
              {line}
            </tspan>
          ))}
        </text>
      </g>
    );
  }

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Mô hình trách nhiệm chung trên đám mây (Shared Responsibility Model)</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ mô hình trách nhiệm chung">
        <rect x={startX} y={30} width={16} height={16} fill="var(--info-bg)" stroke="var(--border)" />
        <text x={startX + 22} y={42} fontSize={10} fill="var(--text)">Khách hàng chịu trách nhiệm</text>
        <rect x={startX} y={52} width={16} height={16} fill="var(--ok-bg)" stroke="var(--border)" />
        <text x={startX + 22} y={64} fontSize={10} fill="var(--text)">Nhà cung cấp chịu trách nhiệm</text>

        {cols.map((c, ci) => {
          const x = startX + ci * (colW + colGap);
          return (
            <text key={c.title} x={x + colW / 2} y={94} textAnchor="middle" fontSize={12} fontWeight={700} fill="var(--text)">
              {c.title}
            </text>
          );
        })}

        {cols.map((c, ci) => {
          const x = startX + ci * (colW + colGap);
          const rowH = 90 / c.customer.length;
          return c.customer.map((item, i) => cell(x, 104 + i * rowH, colW, rowH, item, "var(--info-bg)", "var(--info-fg)"));
        })}

        {cols.map((_, ci) => {
          const x = startX + ci * (colW + colGap);
          return providerRows.map((item, i) => cell(x, 196 + i * 24, colW, 24, item, "var(--ok-bg)", "var(--ok-fg)", 9));
        })}
      </svg>
      <ol className="diagram-legend">
        <li><strong>Nguyên tắc:</strong> nhà cung cấp luôn chịu trách nhiệm về hạ tầng vật lý bên dưới; phần khách hàng phải tự quản lý CÀNG THU HẸP khi chuyển từ IaaS → PaaS → SaaS</li>
        <li><strong>Sai lầm phổ biến nhất:</strong> giả định "lên cloud là nhà cung cấp lo hết bảo mật" — cấu hình sai (misconfiguration) ở PHẦN KHÁCH HÀNG chịu trách nhiệm (vd. nơi lưu trữ để công khai nhầm) là nguyên nhân rò rỉ dữ liệu phổ biến nhất trên cloud, không phải lỗi nhà cung cấp</li>
        <li><strong>Với SaaS:</strong> dù nhà cung cấp lo gần hết hạ tầng/ứng dụng, khách hàng vẫn luôn chịu trách nhiệm về DỮ LIỆU đưa lên và quản lý AI ĐƯỢC DÙNG (phân quyền người dùng)</li>
      </ol>
    </figure>
  );
}
