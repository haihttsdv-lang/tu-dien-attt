/** Co che xac thuc da yeu to (MFA) — ket hop >=2 trong 3 loai yeu to
 * doc lap — KT-02. */
export function MfaFlowDiagram() {
  const width = 440;
  const height = 230;

  const factorBox = (x: number, label: string, sub: string, icon: string) => (
    <g key={x}>
      <rect x={x} y={30} width={120} height={70} rx={8} fill="var(--surface)" stroke="var(--border)" strokeWidth={2} />
      <text x={x + 60} y={54} textAnchor="middle" fontSize={20}>
        {icon}
      </text>
      <text x={x + 60} y={76} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--text)">
        {label}
      </text>
      <text x={x + 60} y={90} textAnchor="middle" fontSize={9} fill="var(--text-muted)">
        {sub}
      </text>
    </g>
  );

  return (
    <figure className="diagram-figure">
      <figcaption className="diagram-title">Xác thực đa yếu tố (MFA) — ba loại yếu tố độc lập</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }} role="img" aria-label="Sơ đồ xác thực đa yếu tố">
        {factorBox(10, "Điều bạn BIẾT", "mật khẩu, mã PIN", "🧠")}
        {factorBox(160, "Điều bạn CÓ", "điện thoại, OTP token", "📱")}
        {factorBox(310, "Điều bạn LÀ", "vân tay, khuôn mặt", "🫆")}

        <text x={width / 2} y={122} textAnchor="middle" fontSize={20}>
          ➕
        </text>

        <rect x={60} y={140} width={320} height={50} rx={8} fill="var(--ok-bg)" stroke="var(--ok-fg)" strokeWidth={2} />
        <text x={width / 2} y={158} textAnchor="middle" fontSize={11} fontWeight={700} fill="var(--ok-fg)">
          Kết hợp ≥ 2 yếu tố KHÁC LOẠI → xác thực thành công
        </text>
        <text x={width / 2} y={175} textAnchor="middle" fontSize={9} fill="var(--ok-fg)">
          (2 yếu tố cùng loại, vd. mật khẩu + câu hỏi bí mật, KHÔNG tính là MFA)
        </text>

        <text x={width / 2} y={215} textAnchor="middle" fontSize={9.5} fill="var(--text-muted)">
          Nếu một yếu tố bị lộ (vd. mật khẩu bị đánh cắp), kẻ tấn công vẫn cần thêm yếu tố khác loại
        </text>
      </svg>
    </figure>
  );
}
