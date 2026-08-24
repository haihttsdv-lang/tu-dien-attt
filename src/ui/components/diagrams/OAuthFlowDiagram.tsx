/** Co che uy quyen OAuth 2.0 don gian hoa, dang so do trinh tu — dung cho
 * API mo/Open Banking (KT-08, NH-06): ung dung thu ba khong bao gio thay
 * mat khau nguoi dung. */
export function OAuthFlowDiagram() {
  const width = 460;
  const colX = { user: 60, app: 230, bank: 400 };
  const steps = [
    { from: "user", to: "app", label: "1. Yêu cầu kết nối tài khoản" },
    { from: "app", to: "bank", label: "2. Chuyển hướng sang trang đăng nhập của Ngân hàng" },
    { from: "user", to: "bank", label: "3. Đăng nhập & đồng ý phạm vi truy cập — TRỰC TIẾP với Ngân hàng" },
    { from: "bank", to: "app", label: "4. Cấp mã ủy quyền (authorization code)" },
    { from: "app", to: "bank", label: "5. Đổi mã lấy access token (phạm vi giới hạn, có thời hạn)" },
    { from: "app", to: "bank", label: "6. Gọi API kèm access token" }
  ] as const;

  const rowH = 42;
  const topPad = 50;
  const height = topPad + steps.length * rowH + 30;

  function arrowFor(from: string, to: string, y: number) {
    const x1 = colX[from as keyof typeof colX];
    const x2 = colX[to as keyof typeof colX];
    const forward = x2 > x1;
    return (
      <line
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        stroke="var(--accent)"
        strokeWidth={2}
        markerEnd={forward ? "url(#oauth-arrow-r)" : "url(#oauth-arrow-l)"}
      />
    );
  }

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Ủy quyền OAuth 2.0 (đơn giản hóa) — Open API / Open Banking</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ trình tự OAuth 2.0">
        <defs>
          <marker id="oauth-arrow-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 Z" fill="var(--accent)" />
          </marker>
          <marker id="oauth-arrow-l" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M10,0 L0,5 L10,10 Z" fill="var(--accent)" />
          </marker>
        </defs>

        {/* dau cot */}
        {(["user", "app", "bank"] as const).map((k) => (
          <text key={k} x={colX[k]} y={20} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text)">
            {k === "user" ? "Khách hàng" : k === "app" ? "Ứng dụng fintech" : "Ngân hàng"}
          </text>
        ))}
        {/* duong doi tuong (lifeline) */}
        {Object.values(colX).map((x) => (
          <line key={x} x1={x} y1={30} x2={x} y2={height - 10} stroke="var(--border)" strokeWidth={1.5} strokeDasharray="3,3" />
        ))}

        {steps.map((s, i) => {
          const y = topPad + i * rowH;
          const midX = (colX[s.from] + colX[s.to]) / 2;
          return (
            <g key={i}>
              {arrowFor(s.from, s.to, y)}
              <rect x={midX - 95} y={y - 22} width={190} height={16} fill="var(--bg)" />
              <text x={midX} y={y - 14} textAnchor="middle" fontSize={9} fill="var(--text-muted)">
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
      <ol className="diagram-legend">
        <li><strong>Nguyên tắc cốt lõi:</strong> khách hàng đăng nhập TRỰC TIẾP với ngân hàng (bước 3) — ứng dụng bên thứ ba KHÔNG BAO GIỜ nhìn thấy mật khẩu</li>
        <li><strong>Access token</strong> có phạm vi (scope) giới hạn — vd. chỉ đọc số dư, không cho phép chuyển tiền — và có thời hạn, có thể thu hồi bất kỳ lúc nào</li>
        <li><strong>Rủi ro cần kiểm soát:</strong> ứng dụng bên thứ ba xin phạm vi rộng hơn cần thiết; token bị lộ và bị dùng lại; thiếu cơ chế thu hồi token khi khách hàng ngắt kết nối</li>
      </ol>
    </figure>
  );
}
