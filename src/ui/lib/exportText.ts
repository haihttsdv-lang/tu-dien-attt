/**
 * FR-T05, FR-E07: moi thao tac sao chep/xuat noi dung tu dong kem nguon,
 * trang thai hieu luc, thoi diem xuat, va canh bao neu chua_xac_minh hoac
 * het_hieu_luc.
 */
import { DOCUMENT_STATUS_LABEL, type DocumentStatus } from "../../data/schema/models";

export interface ExportMeta {
  sourceLabel: string;
  documentStatus?: DocumentStatus;
}

const DISCLAIMER =
  "— Trích từ công cụ tra cứu tham khảo, KHÔNG phải nguồn chân lý pháp lý. Luôn đối chiếu văn bản gốc trước khi sử dụng chính thức.";

export function buildExportText(body: string, meta: ExportMeta): string {
  const lines: string[] = [body.trim(), "", `Nguồn: ${meta.sourceLabel}`];

  if (meta.documentStatus) {
    lines.push(`Trạng thái hiệu lực: ${DOCUMENT_STATUS_LABEL[meta.documentStatus]}`);
    if (meta.documentStatus === "het_hieu_luc") {
      lines.push("⚠ CẢNH BÁO: văn bản này đã HẾT HIỆU LỰC — không dùng làm căn cứ hiện hành.");
    } else if (meta.documentStatus === "hieu_luc_mot_phan") {
      lines.push("⚠ CẢNH BÁO: văn bản này chỉ còn HIỆU LỰC MỘT PHẦN — kiểm tra điều khoản cụ thể trước khi trích dẫn.");
    } else if (meta.documentStatus === "chua_xac_minh") {
      lines.push("⚠ CẢNH BÁO: nội dung CHƯA XÁC MINH — cần tra cứu lại từ nguồn hạng A trước khi sử dụng.");
    } else if (meta.documentStatus === "du_thao") {
      lines.push("⚠ LƯU Ý: đây là DỰ THẢO, chưa có hiệu lực pháp lý.");
    }
  }

  lines.push(`Thời điểm xuất: ${new Date().toISOString()}`);
  lines.push(DISCLAIMER);

  return lines.join("\n");
}

export async function copyWithWarning(body: string, meta: ExportMeta): Promise<boolean> {
  const text = buildExportText(body, meta);
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
