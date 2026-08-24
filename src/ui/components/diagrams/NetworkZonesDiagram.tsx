/** Mo hinh phan vung mang pho bien (Internet - DMZ - noi bo - loi) — KT-01. */
export function NetworkZonesDiagram() {
  const width = 460;
  const height = 260;

  const zone = (y: number, h: number, label: string, sub: string, fill: string) => (
    <g key={label}>
      <rect x={40} y={y} width={380} height={h} rx={8} fill={fill} stroke="var(--border)" strokeWidth={2} />
      <text x={60} y={y + 20} fontSize={11} fontWeight={700} fill="var(--text)">
        {label}
      </text>
      <text x={60} y={y + 36} fontSize={9} fill="var(--text-muted)">
        {sub}
      </text>
    </g>
  );

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Mô hình phân vùng mạng theo mức độ tin cậy</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ phân vùng mạng">
        <defs>
          <marker id="net-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--text-muted)" />
          </marker>
        </defs>

        <text x={20} y={16} fontSize={16}>🌐</text>
        <text x={20} y={30} fontSize={8} fill="var(--text-muted)">Internet</text>
        <line x1={35} y1={12} x2={35} y2={60} stroke="var(--text-muted)" strokeWidth={2} markerEnd="url(#net-arrow)" />

        {zone(50, 55, "Vùng phi quân sự hóa (DMZ)", "web server, cổng API — tiếp xúc trực tiếp Internet", "var(--warn-bg)")}
        <line x1={230} y1={105} x2={230} y2={125} stroke="var(--text-muted)" strokeWidth={2} markerEnd="url(#net-arrow)" />
        <text x={245} y={118} fontSize={8.5} fill="var(--text-muted)">tường lửa: chỉ mở cổng/giao thức cần thiết</text>

        {zone(130, 55, "Vùng nội bộ", "hệ thống nghiệp vụ thông thường", "var(--info-bg)")}
        <line x1={230} y1={185} x2={230} y2={205} stroke="var(--text-muted)" strokeWidth={2} markerEnd="url(#net-arrow)" />
        <text x={245} y={198} fontSize={8.5} fill="var(--text-muted)">kiểm soát chặt hơn, mặc định từ chối</text>

        {zone(210, 45, "Vùng hệ thống lõi", "core banking, CSDL giao dịch — cách ly chặt nhất", "var(--danger-bg)")}
      </svg>
      <ol className="diagram-legend">
        <li><strong>Nguyên tắc:</strong> càng gần lõi, mức độ tin cậy yêu cầu càng cao và luồng traffic bị giới hạn càng chặt</li>
        <li><strong>Vi phân đoạn (micro-segmentation):</strong> kiểm soát luồng ở mức từng máy chủ/workload, không chỉ giữa các vùng lớn — xem thêm Zero Trust (KT-12)</li>
        <li><strong>Sai lầm thường gặp:</strong> chia vùng nhưng tường lửa giữa các vùng cho phép traffic tự do (any-any) — không mang lại giá trị an ninh thực chất</li>
      </ol>
    </figure>
  );
}
