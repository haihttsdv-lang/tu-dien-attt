/**
 * ContentBlock T1 cho 8 chu de PL moi duoc mo khoa ngay 2026-08-24 sau hai
 * vong tra cuu doc lap tim duoc can cu nguon (xem
 * src/content/documents/index.ts). PL-01 van o trang thai than trong
 * (chua_xac_minh) vi chi tiet hieu luc mot phan chua ro. PL-10 dua ra so
 * lieu nguong cu the (10/20 trieu dong) da duoc nhieu nguon doc lap xac
 * nhan nhat quan nhung van kem canh bao ro rang phai doi chieu lai truoc
 * khi dung cho ho so chinh thuc — xem verificationNote cua qd-2345-nhnn.
 * Khong dua PL-12 vao day — van chi la du thao, chua ban hanh.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksPlNew: ContentBlock[] = [
  {
    id: "cb-pl01-t1",
    topicId: "PL-01",
    tier: "T1",
    kind: "dien_giai",
    body:
      "Luật An toàn thông tin mạng (số 86/2015/QH13, thông qua 19/11/2015, hiệu lực 01/07/2016) là luật nền quy định hoạt động an toàn thông tin mạng, quyền và trách nhiệm của cơ quan, tổ chức, cá nhân, mật mã dân sự, tiêu chuẩn/quy chuẩn về an toàn thông tin mạng. CẢNH BÁO: có dấu hiệu văn bản này hiện ở trạng thái hết hiệu lực một phần, nhưng CHƯA XÁC MINH được cụ thể điều khoản nào và văn bản nào đã bãi bỏ/sửa đổi — không dùng làm căn cứ trích dẫn điều khoản cụ thể cho tới khi xác minh lại trực tiếp qua vbpl.vn.",
    sources: [{ type: "legal_document", refId: "luat-86-2015-qh13" }],
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
      "Luật An ninh mạng (số 24/2018/QH14, thông qua 12/6/2018, hiệu lực 01/01/2019) quy định hoạt động bảo vệ an ninh quốc gia và bảo đảm trật tự, an toàn xã hội trên không gian mạng, trách nhiệm của cơ quan, tổ chức, cá nhân liên quan — bao gồm các quy định về phòng ngừa, xử lý hành vi xâm phạm an ninh mạng, bảo vệ hệ thống thông tin quan trọng về an ninh quốc gia, và yêu cầu đối với doanh nghiệp cung cấp dịch vụ trên không gian mạng. Khác biệt với Luật An toàn thông tin mạng (PL-01) về trọng tâm: Luật An ninh mạng nghiêng về khía cạnh an ninh quốc gia/trật tự xã hội, trong khi Luật An toàn thông tin mạng nghiêng về khía cạnh kỹ thuật bảo đảm an toàn hệ thống.",
    sources: [{ type: "legal_document", refId: "luat-24-2018-qh14" }],
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
      "Quyết định 2345/QĐ-NHNN (18/12/2023, hiệu lực 01/07/2024) yêu cầu giải pháp an toàn, bảo mật trong thanh toán trực tuyến và thẻ ngân hàng, đặt ngưỡng bắt buộc xác thực sinh trắc học (khuôn mặt/vân tay) cho chuyển tiền/nạp ví điện tử. Nhiều nguồn tham khảo nhắc lại nhất quán: trên 10 triệu đồng/giao dịch phải xác thực sinh trắc học; dưới 10 triệu đồng và tổng trong ngày ≤20 triệu đồng có thể chỉ cần OTP. CẢNH BÁO: đây là văn bản hành chính cá biệt, không phải Luật/Nghị định/Thông tư công bố rộng rãi — hai con số ngưỡng CHƯA đối chiếu trực tiếp với văn bản gốc. Bắt buộc xác minh lại trước khi dùng cho hồ sơ chính thức, vì có thể đã được sửa đổi.",
    sources: [{ type: "legal_document", refId: "qd-2345-nhnn" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
