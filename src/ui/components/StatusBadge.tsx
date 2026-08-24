import { DOCUMENT_STATUS_LABEL, type DocumentStatus } from "../../data/schema/models";

/** FR-E08, FR-T07: nhan phan biet mau + bieu tuong, nhat quan o moi noi. */
const STATUS_STYLE: Record<DocumentStatus, { bg: string; fg: string; icon: string }> = {
  con_hieu_luc: { bg: "var(--ok-bg)", fg: "var(--ok-fg)", icon: "✓" },
  het_hieu_luc: { bg: "var(--danger-bg)", fg: "var(--danger-fg)", icon: "✕" },
  hieu_luc_mot_phan: { bg: "var(--warn-bg)", fg: "var(--warn-fg)", icon: "◐" },
  chua_co_hieu_luc: { bg: "var(--info-bg)", fg: "var(--info-fg)", icon: "◷" },
  du_thao: { bg: "var(--info-bg)", fg: "var(--info-fg)", icon: "✎" },
  chua_xac_minh: { bg: "var(--unverified-bg)", fg: "var(--unverified-fg)", icon: "⚠" }
};

export function StatusBadge({ status }: { status: DocumentStatus }) {
  const style = STATUS_STYLE[status];
  return (
    <span
      className="status-badge"
      style={{ background: style.bg, color: style.fg }}
      role="status"
    >
      <span aria-hidden="true">{style.icon}</span> {DOCUMENT_STATUS_LABEL[status]}
    </span>
  );
}
