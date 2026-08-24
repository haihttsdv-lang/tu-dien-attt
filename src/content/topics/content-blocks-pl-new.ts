/**
 * ContentBlock T1 cho 8 chu de PL moi duoc mo khoa ngay 2026-08-24 sau hai
 * vong tra cuu doc lap tim duoc can cu nguon (xem
 * src/content/documents/index.ts). PL-10 dua ra so lieu nguong cu the
 * (10/20 trieu dong) da duoc nhieu nguon doc lap xac nhan nhat quan nhung
 * van kem canh bao ro rang phai doi chieu lai truoc khi dung cho ho so
 * chinh thuc. Khong dua PL-12 vao day — van chi la du thao, chua ban hanh.
 *
 * CAP NHAT 2026-08-24 lan 2 (theo phan hoi nguoi dung): PL-01, PL-02 viet
 * lai hoan toan sau khi xac nhan Luat An ninh mang 116/2025/QH15 da hop
 * nhat va thay the CA HAI luat cu (86/2015 va 24/2018), hieu luc 01/07/2026
 * (da qua). PL-10 viet lai vi QD 2345/QD-NHNN da duoc thay bang TT50/2024
 * (nay da duoc TT77/2025 sua doi bo sung).
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksPlNew: ContentBlock[] = [
  {
    id: "cb-pl01-t1",
    topicId: "PL-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "QUAN TRỌNG: Luật An toàn thông tin mạng (86/2015/QH13) ĐÃ HẾT HIỆU LỰC — bị thay thế bởi Luật An ninh mạng 116/2025/QH15 (hợp nhất với Luật An ninh mạng 2018 cũ), hiệu lực từ 01/07/2026. Luật 86/2015 (ban hành 19/11/2015) từng là luật nền quy định hoạt động an toàn thông tin mạng, mật mã dân sự, tiêu chuẩn/quy chuẩn kỹ thuật — nội dung này nay do Luật 116/2025 điều chỉnh. Luật mới có điều khoản chuyển tiếp: hệ thống đã xác định cấp độ theo luật cũ giữ nguyên cấp độ, phải đáp ứng điều kiện mới trong 12 tháng kể từ ngày luật mới có hiệu lực. Xem Luật 116/2025/QH15 tại chủ đề PL-02 để biết chi tiết khung hiện hành.",
    sources: [
      { type: "legal_document", refId: "luat-86-2015-qh13" },
      { type: "legal_document", refId: "luat-116-2025-qh15" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl02-t1",
    topicId: "PL-02",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Luật An ninh mạng hiện hành là số 116/2025/QH15 (hiệu lực 01/07/2026), thay thế đồng thời Luật An ninh mạng cũ 24/2018/QH14 VÀ Luật An toàn thông tin mạng 86/2015/QH13 (hợp nhất hai luật thành một khung thống nhất — xem PL-01). Luật điều chỉnh hoạt động bảo vệ an ninh quốc gia, trật tự an toàn xã hội trên không gian mạng lẫn khía cạnh kỹ thuật an toàn thông tin mạng trước đây tách riêng. Có điều khoản chuyển tiếp 12 tháng cho hệ thống/sản phẩm/dịch vụ đã tuân thủ theo luật cũ. CẢNH BÁO: kho tri thức này mới xác nhận số hiệu, ngày hiệu lực và điều khoản chuyển tiếp tổng quát — CHƯA trích dẫn chi tiết các quy định cụ thể khác của luật mới (thẩm quyền, chế tài, hệ thống thông tin quan trọng...), cần tra cứu nguyên văn trước khi áp dụng.",
    sources: [{ type: "legal_document", refId: "luat-116-2025-qh15" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl04-t1",
    topicId: "PL-04",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Luật Bảo vệ dữ liệu cá nhân (số 91/2025/QH15, thông qua 26/6/2025, hiệu lực 01/01/2026) là văn bản cấp LUẬT đầu tiên của Việt Nam chuyên về bảo vệ dữ liệu cá nhân, thay thế khung pháp lý trước đó ở cấp nghị định (Nghị định 13/2023/NĐ-CP, nay đã hết hiệu lực). Luật đi kèm nghị định hướng dẫn thi hành mới (CHƯA xác minh đủ tin cậy để nhập số hiệu chính thức trong kho này). CẢNH BÁO: các nội dung chi tiết — nguyên tắc xử lý dữ liệu, quyền chủ thể dữ liệu, hồ sơ đánh giá tác động, mức xử phạt — CHƯA được trích dẫn cụ thể ở tầng nội dung này, cần tra cứu trực tiếp văn bản gốc trước khi áp dụng, đặc biệt nếu đang có quy trình nội bộ xây dựng theo Nghị định 13/2023/NĐ-CP cũ (nay đã hết hiệu lực, cần rà soát cập nhật lại toàn bộ theo Luật mới).",
    sources: [
      { type: "legal_document", refId: "luat-91-2025-qh15" },
      { type: "legal_document", refId: "nd-13-2023-cp" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl05-t1",
    topicId: "PL-05",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Nghị định 85/2016/NĐ-CP (ban hành 01/07/2016) quy định về bảo đảm an toàn hệ thống thông tin theo cấp độ — đây là nghị định hướng dẫn chi tiết cho khung phân loại 5 cấp độ mà Thông tư 09/2020/TT-NHNN áp dụng cho ngành ngân hàng (xem PL-07) và TCVN 11930 cụ thể hóa về mặt kỹ thuật (xem PL-06). Nghị định quy định tiêu chí, thẩm quyền, hồ sơ và quy trình xác định cấp độ, thẩm định và phê duyệt cấp độ an toàn hệ thống thông tin. Nguyên tắc bảo đảm an toàn theo cấp độ được thực hiện liên tục, đồng bộ từ thiết kế, xây dựng, vận hành tới hủy bỏ hệ thống. CHƯA kiểm tra trong phiên nghiên cứu này liệu đã có thông tư/nghị định sửa đổi bổ sung Nghị định 85/2016 hay chưa — cần rà soát trước khi dùng làm căn cứ chi tiết cho hồ sơ đề xuất cấp độ.",
    sources: [{ type: "legal_document", refId: "nd-85-2016-cp" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl09-t1",
    topicId: "PL-09",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Thông tư 13/2018/TT-NHNN (ban hành 18/5/2018, hiệu lực 01/01/2019) quy định về hệ thống kiểm soát nội bộ của ngân hàng thương mại, chi nhánh ngân hàng nước ngoài — đây là cơ sở pháp lý cho mô hình ba tuyến phòng thủ tại ngân hàng Việt Nam (xem KG-01). Thông tư quy định về chính sách quản lý rủi ro (do Hội đồng quản trị/Hội đồng thành viên ban hành), hạn mức rủi ro (do Tổng giám đốc ban hành), và cơ cấu ba tuyến bảo vệ độc lập. CHƯA kiểm tra trong phiên nghiên cứu này các thông tư sửa đổi/bổ sung có thể đã ban hành sau 2018 — lĩnh vực này thường có thông tư sửa đổi theo thời gian, cần rà soát cập nhật trước khi dùng chi tiết điều khoản.",
    sources: [{ type: "legal_document", refId: "tt-13-2018-nhnn" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl11-t1",
    topicId: "PL-11",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Thông tư 20/2017/TT-BTTTT (ban hành 12/9/2017, hiệu lực 01/11/2017) quy định về điều phối, ứng cứu sự cố an toàn thông tin mạng trên toàn quốc — văn bản có khả năng cao nhất là căn cứ trả lời câu hỏi 'phải báo cho ai, trong bao lâu' khi có sự cố. CẢNH BÁO QUAN TRỌNG (ưu tiên xác minh cao nhất của toàn bộ dự án): THỜI HẠN BÁO CÁO SỰ CỐ CỤ THỂ CHƯA ĐƯỢC XÁC MINH trực tiếp từ văn bản gốc trong kho này — tuyệt đối KHÔNG suy đoán hay áp dụng bất kỳ con số thời hạn nào tìm thấy từ nguồn không chính thức. Trước khi xử lý một sự cố thực tế có nghĩa vụ báo cáo, PHẢI tra cứu trực tiếp nguyên văn Thông tư 20/2017/TT-BTTTT (và các văn bản sửa đổi nếu có) qua vbpl.vn hoặc cổng thông tin Bộ Thông tin và Truyền thông/Cục An toàn thông tin.",
    sources: [{ type: "legal_document", refId: "tt-20-2017-btttt" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl03-t1",
    topicId: "PL-03",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Nghị định 53/2022/NĐ-CP (ban hành 15/8/2022, hiệu lực 01/10/2022) quy định chi tiết một số điều của Luật An ninh mạng (xem PL-02), trong đó có yêu cầu về lưu trữ dữ liệu tại Việt Nam và đặt chi nhánh/văn phòng đại diện tại Việt Nam đối với một số nhóm doanh nghiệp trong và ngoài nước cung cấp dịch vụ trên không gian mạng, khi thuộc các điều kiện cụ thể do Nghị định quy định. CẢNH BÁO: kho tri thức này CHƯA trích dẫn chi tiết điều kiện áp dụng, loại dữ liệu phải lưu trữ, hay thời hạn lưu trữ cụ thể — việc xác định một tổ chức/doanh nghiệp cụ thể có thuộc diện phải tuân thủ hay không đòi hỏi đọc trực tiếp nguyên văn Nghị định, không suy đoán từ mô tả tổng quát này.",
    sources: [{ type: "legal_document", refId: "nd-53-2022-cp" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl10-t1",
    topicId: "PL-10",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Ngưỡng xác thực sinh trắc học cho giao dịch ngân hàng trực tuyến hiện được quy định tại Thông tư 50/2024/TT-NHNN (hiệu lực 01/01/2025), ĐÃ ĐƯỢC SỬA ĐỔI, BỔ SUNG bởi Thông tư 77/2025/TT-NHNN (hiệu lực 01/03/2026, riêng Điều 3/10 hiệu lực 01/07/2026 cho đơn vị phục vụ cả khách hàng cá nhân và tổ chức) — KHÔNG dùng Quyết định 2345/QĐ-NHNN (2023) nữa vì nội dung đã được quy định lại tại TT50/2024. Ngưỡng cá nhân được nhiều nguồn nhắc lại nhất quán: trên 10 triệu đồng/giao dịch phải xác thực sinh trắc học; dưới 10 triệu đồng và tổng trong ngày ≤20 triệu đồng có thể chỉ cần OTP. TT77/2025 bổ sung thêm yêu cầu xác thực khớp sinh trắc học cho giao dịch của doanh nghiệp/hộ kinh doanh (chi tiết ngưỡng CHƯA xác minh). Các con số trên chưa đối chiếu trực tiếp văn bản gốc — bắt buộc xác minh lại trước khi dùng chính thức.",
    sources: [
      { type: "legal_document", refId: "tt-50-2024-nhnn" },
      { type: "legal_document", refId: "tt-77-2025-nhnn" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
