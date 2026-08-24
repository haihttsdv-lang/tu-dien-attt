import { useMemo, useState } from "react";
import { useContentBundle } from "../context/ContentContext";
import { DisclaimerFooter } from "../components/DisclaimerFooter";
import {
  findEquivalentRequirements,
  findRequirementsMatchingControlDescription,
  groupByEquivalence
} from "../../core/mapping";

const EQUIVALENCE_LABEL: Record<string, string> = {
  tuong_duong_hoan_toan: "Tương đương hoàn toàn",
  tuong_duong_mot_phan: "Tương đương một phần",
  co_lien_quan: "Có liên quan"
};

function downloadCsv(filename: string, rows: string[][]) {
  const csv = rows.map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([`﻿${csv}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function MappingPage() {
  const bundle = useContentBundle();
  const [selectedReqId, setSelectedReqId] = useState("");
  const [controlDescription, setControlDescription] = useState("");

  const equivalents = useMemo(
    () => (selectedReqId ? groupByEquivalence(findEquivalentRequirements(selectedReqId, bundle)) : null),
    [selectedReqId, bundle]
  );

  const controlMatches = useMemo(
    () =>
      controlDescription.trim()
        ? findRequirementsMatchingControlDescription(controlDescription, bundle.controlRequirements)
        : [],
    [controlDescription, bundle.controlRequirements]
  );

  function frameworkName(frameworkId: string) {
    return bundle.frameworks.find((f) => f.id === frameworkId)?.name ?? frameworkId;
  }

  function exportMatrix() {
    // FR-X07: xuat ma tran ra dinh dang bang tinh, kem nhan mat tu dong.
    const rows: string[][] = [
      ["-- MẬT: chỉ lưu hành nội bộ (nhãn tự động — kiểm tra lại trước khi chia sẻ) --"],
      ["Khung A", "Yêu cầu A", "Mức độ tương đương", "Khung B", "Yêu cầu B", "Căn cứ diễn giải", "Người duyệt", "Ngày duyệt"]
    ];
    for (const m of bundle.mappings) {
      const from = bundle.controlRequirements.find((r) => r.id === m.fromReqId);
      const to = bundle.controlRequirements.find((r) => r.id === m.toReqId);
      if (!from || !to) continue;
      rows.push([
        frameworkName(from.frameworkId),
        `${from.clauseRef} — ${from.title}`,
        EQUIVALENCE_LABEL[m.equivalence] ?? m.equivalence,
        frameworkName(to.frameworkId),
        `${to.clauseRef} — ${to.title}`,
        m.rationale,
        m.approvedBy,
        m.approvedAt
      ]);
    }
    rows.push([`Xuất lúc: ${new Date().toISOString()} — công cụ tra cứu tham khảo, không phải nguồn chân lý pháp lý.`]);
    downloadCsv("ma-tran-anh-xa.csv", rows);
  }

  return (
    <div>
      <h1 className="page-title">Ma trận ánh xạ chéo khung kiểm soát</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Lưu ý: ánh xạ là <strong>kết quả diễn giải chuyên môn</strong>, không phải sự thật khách quan
        (FR-X03). Dữ liệu ở đây mới là ví dụ minh họa cho cặp ưu tiên "ISO 27002 ↔ NIST CSF" — xem{" "}
        <code>docs/open-questions.md</code>.
      </p>

      <div className="card">
        <h2>Chọn một yêu cầu để xem yêu cầu tương đương</h2>
        <select
          value={selectedReqId}
          onChange={(e) => setSelectedReqId(e.target.value)}
          style={{ minHeight: 48, width: "100%", padding: "0 10px", borderRadius: 8 }}
        >
          <option value="">-- Chọn yêu cầu kiểm soát --</option>
          {bundle.controlRequirements.map((r) => (
            <option key={r.id} value={r.id}>
              [{frameworkName(r.frameworkId)}] {r.clauseRef} — {r.title}
            </option>
          ))}
        </select>

        {equivalents && (
          <div style={{ marginTop: 12 }}>
            {Object.entries(equivalents).map(([level, items]) =>
              items.length > 0 ? (
                <div key={level} style={{ marginBottom: 10 }}>
                  <strong>{EQUIVALENCE_LABEL[level]}</strong>
                  <ul>
                    {items.map((it, i) => (
                      <li key={i}>
                        [{frameworkName(it.requirement.frameworkId)}] {it.requirement.clauseRef} — {it.requirement.title}
                        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{it.mapping.rationale}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
            {Object.values(equivalents).every((v) => v.length === 0) && (
              <p>Chưa có ánh xạ nào cho yêu cầu này trong kho dữ liệu hiện tại.</p>
            )}
          </div>
        )}
      </div>

      <div className="card">
        <h2>"Một kiểm soát – nhiều khung" (FR-X05)</h2>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Mô tả một biện pháp kiểm soát thực tế, hệ thống sẽ tìm các yêu cầu có từ khóa liên quan (đối
          chiếu từ khóa đơn giản, không dùng mô hình ngôn ngữ — FR-T08).
        </p>
        <textarea
          value={controlDescription}
          onChange={(e) => setControlDescription(e.target.value)}
          placeholder="vd. Chúng tôi giới hạn quyền truy cập đặc quyền và luân chuyển mật khẩu quản trị định kỳ"
          rows={3}
          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid var(--border)" }}
        />
        {controlMatches.map((r) => (
          <div key={r.id} className="card">
            [{frameworkName(r.frameworkId)}] <strong>{r.clauseRef}</strong> — {r.title}
            <p style={{ fontSize: "0.9rem", marginBottom: 0 }}>{r.summary}</p>
          </div>
        ))}
      </div>

      <button type="button" className="btn-primary" onClick={exportMatrix}>
        ⬇ Xuất ma trận (.csv, có gán nhãn mật tự động)
      </button>

      <DisclaimerFooter />
    </div>
  );
}
