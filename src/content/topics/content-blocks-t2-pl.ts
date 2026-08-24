/**
 * ContentBlock tang T2 cho nhom PL da co van ban xac minh (PL-06, 07, 08).
 * Day la noi dung nhay cam phap ly nhat trong kho nen duoc tac gia truc
 * tiep (khong giao agent), chi dua tren du kien DA co trong
 * src/content/documents/index.ts — khong bia them dieu khoan nao.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksT2Pl: ContentBlock[] = [
  {
    id: "cb-pl07-t2",
    topicId: "PL-07",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Thông tư 09/2020/TT-NHNN quy định về an toàn hệ thống thông tin trong hoạt động ngân hàng, ban hành 21/10/2020, có hiệu lực từ 01/01/2021 (riêng điểm b khoản 4 Điều 20 có hiệu lực từ 01/01/2022 — một ví dụ về hiệu lực khác nhau giữa các điều khoản trong cùng một văn bản, xem module Nguồn và hiệu lực). Thông tư thay thế Thông tư 18/2018/TT-NHNN.\n\nMột trong những đóng góp quan trọng nhất của Thông tư 09/2020 là đưa ra hệ thống PHÂN LOẠI HỆ THỐNG THÔNG TIN THEO 5 CẤP ĐỘ (thay cho hệ thống phân loại 3 mức trước đó theo Thông tư 18/2018) — số cấp độ càng cao, hệ thống thông tin càng quan trọng và yêu cầu kiểm soát an toàn càng nghiêm ngặt. Việc xác định đúng cấp độ cho từng hệ thống là bước nền tảng vì nó quyết định toàn bộ yêu cầu kiểm soát áp dụng theo sau — xác định sai cấp độ (dù cao hơn hay thấp hơn thực tế) đều dẫn tới hậu quả: thấp hơn thực tế nghĩa là thiếu kiểm soát cần thiết, cao hơn thực tế gây lãng phí nguồn lực không cần thiết.\n\n**Điểm cần đặc biệt lưu ý khi tra cứu văn bản này — trạng thái hiệu lực một phần:** Điều 25 của Thông tư 09/2020 đã bị BÃI BỎ bởi Thông tư 50/2024/TT-NHNN kể từ 01/01/2025. Đây chính là ca kiểm thử bắt buộc của module quản lý hiệu lực trong dự án này: Thông tư 09/2020 KHÔNG hết hiệu lực toàn văn — phần lớn nội dung (bao gồm hệ thống phân loại 5 cấp độ nêu trên) vẫn còn hiệu lực đầy đủ, chỉ riêng Điều 25 không còn áp dụng được. Một mô hình tra cứu chỉ có hai trạng thái 'còn hiệu lực / hết hiệu lực' sẽ buộc phải chọn sai một trong hai, dẫn tới rủi ro: nếu đánh dấu 'hết hiệu lực' thì bỏ sót toàn bộ phần vẫn áp dụng (đặc biệt là khung phân loại 5 cấp độ vẫn là căn cứ hoạt động); nếu đánh dấu 'còn hiệu lực' như bình thường thì có nguy cơ trích dẫn nhầm Điều 25 đã không còn giá trị.\n\nKhi chuẩn bị hồ sơ làm việc với đoàn thanh tra hoặc báo cáo nội bộ có trích dẫn Thông tư 09/2020, cần LUÔN kiểm tra xem điều khoản cụ thể định trích có nằm trong danh sách đã bị bãi bỏ hay không, thay vì mặc định cả văn bản còn nguyên giá trị chỉ vì chưa có văn bản nào 'thay thế toàn bộ' nó.",
    sources: [{ type: "legal_document", refId: "tt-09-2020-nhnn" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl08-t2",
    topicId: "PL-08",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Thông tư 50/2024/TT-NHNN quy định về an toàn, bảo mật cho việc cung cấp dịch vụ trực tuyến ngành Ngân hàng, ban hành 31/10/2024, có hiệu lực chính từ 01/01/2025. Đây là văn bản có PHẠM VI HIỆU LỰC PHÂN TẦNG theo điều khoản — ngoài mốc hiệu lực chung 01/01/2025, một số điều khoản cụ thể (điểm b khoản 1 Điều 4; điểm d khoản 9 Điều 7; khoản 3 và 4 Điều 8) có hiệu lực muộn hơn, từ 01/07/2025 — cho tổ chức thêm thời gian chuẩn bị đối với các yêu cầu có độ phức tạp triển khai cao hơn.\n\nThông tư 50/2024 thay thế đồng thời HAI văn bản trước đó — Thông tư 35/2016/TT-NHNN và Thông tư 35/2018/TT-NHNN — cho thấy đây là một lần hợp nhất và cập nhật toàn diện khung quy định về an toàn dịch vụ ngân hàng trực tuyến, không phải một sửa đổi nhỏ. Đồng thời, như đã nêu ở PL-07, thông tư này BÃI BỎ Điều 25 của Thông tư 09/2020/TT-NHNN — thể hiện việc điều chỉnh ranh giới giữa hai văn bản: an toàn hệ thống thông tin nói chung (Thông tư 09/2020) và an toàn riêng cho dịch vụ trực tuyến (Thông tư 50/2024) được phân định lại rõ ràng hơn.\n\n**CẬP NHẬT QUAN TRỌNG (đã xác nhận, thay cho ghi chú 'dự thảo' ở lần biên soạn trước):** Thông tư 50/2024 đã được Thông tư 77/2025/TT-NHNN (ban hành 31/12/2025, hiệu lực 01/03/2026; riêng Điều 3 và Điều 10 hiệu lực 01/07/2026 cho đơn vị phục vụ cả khách hàng cá nhân và tổ chức) SỬA ĐỔI, BỔ SUNG — không phải thay thế toàn văn. Các thay đổi chính: mở rộng phạm vi áp dụng sang hoạt động cung ứng dịch vụ mobile money; bổ sung đối tượng áp dụng (tổ chức cung ứng dịch vụ trung gian thanh toán, mobile money, công ty thông tin tín dụng — trước đây TT50/2024 chủ yếu nhắm tới tổ chức tín dụng/chi nhánh ngân hàng nước ngoài); thay thế Phụ lục 01, 02, 04 bằng bản cập nhật; bổ sung yêu cầu xác thực sinh trắc học riêng cho giao dịch của doanh nghiệp/hộ kinh doanh. Khi tra cứu TT50/2024, cần đối chiếu thêm TT77/2025 để có phiên bản đầy đủ, cập nhật nhất.\n\nVề nội dung, Thông tư 50/2024 áp dụng cho toàn bộ hoạt động cung cấp dịch vụ trực tuyến của ngân hàng — bao gồm Internet Banking, Mobile Banking (xem NH-05) và các kênh số khác — với các yêu cầu về xác thực giao dịch, bảo mật kênh truyền, và giám sát phát hiện gian lận. Các ngưỡng kỹ thuật/nghiệp vụ cụ thể (ví dụ giá trị giao dịch yêu cầu xác thực sinh trắc học — xem PL-10) cần được tra cứu trực tiếp từ văn bản gốc (cả TT50/2024 lẫn TT77/2025), vì kho tri thức này CHƯA trích dẫn đầy đủ mọi con số điều khoản cụ thể ở tầng nội dung để tránh sai lệch khi chưa qua rà soát chính thức bởi người biên tập có thẩm quyền.",
    sources: [
      { type: "legal_document", refId: "tt-50-2024-nhnn" },
      { type: "legal_document", refId: "tt-09-2020-nhnn" },
      { type: "legal_document", refId: "tt-77-2025-nhnn" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl06-t2",
    topicId: "PL-06",
    tier: "T2",
    kind: "dien_giai",
    body:
      "TCVN 11930 là tiêu chuẩn quốc gia Việt Nam quy định yêu cầu cơ bản về an toàn hệ thống thông tin theo cấp độ — tiêu chuẩn kỹ thuật này được Thông tư 50/2024/TT-NHNN viện dẫn, tạo ra mối liên kết giữa khung phân loại 5 cấp độ hệ thống thông tin (thiết lập bởi Thông tư 09/2020/TT-NHNN — xem PL-07) và các yêu cầu kỹ thuật cụ thể mà mỗi cấp độ phải đáp ứng.\n\nCấu trúc chung của mô hình 'an toàn theo cấp độ' tại Việt Nam vận hành theo nguyên tắc: hệ thống thông tin được thẩm định và xếp vào một trong 5 cấp độ dựa trên mức độ quan trọng và tác động nếu bị mất an toàn (xem PL-05 — hồ sơ đề xuất, thẩm định, phê duyệt cấp độ); sau khi đã xác định cấp độ, tổ chức tra cứu bộ yêu cầu kỹ thuật tương ứng với đúng cấp độ đó trong TCVN 11930 để triển khai — cấp độ càng cao, số lượng và độ nghiêm ngặt của yêu cầu càng lớn. Cách tiếp cận phân tầng này tương tự về mặt triết lý với hệ thống kiểm soát theo mức độ tác động (impact level) trong NIST SP 800-53 của Hoa Kỳ, dù cơ chế xếp cấp cụ thể là khác nhau.\n\n**Điểm quan trọng cần lưu ý khi tra cứu:** bản TCVN 11930 được xác nhận là bản được viện dẫn trong quá trình nghiên cứu xây dựng kho tri thức này là phiên bản TCVN 11930:2017. Tuy nhiên, việc đây CÓ CÒN LÀ PHIÊN BẢN HIỆN HÀNH hay đã có phiên bản thay thế mới hơn là điều CHƯA XÁC MINH tại thời điểm biên soạn — các tiêu chuẩn kỹ thuật quốc gia có thể được rà soát và ban hành phiên bản mới theo chu kỳ riêng của cơ quan tiêu chuẩn hóa, độc lập với chu kỳ sửa đổi của các thông tư ngân hàng viện dẫn tới nó. Trước khi sử dụng nội dung chi tiết của TCVN 11930 (đặc biệt các yêu cầu kỹ thuật cụ thể theo từng cấp độ) làm căn cứ cho hồ sơ thẩm định hoặc báo cáo kiểm tra chính thức, cần xác minh lại phiên bản hiện hành trực tiếp tại Ủy ban Tiêu chuẩn Đo lường Chất lượng Quốc gia.\n\nMột lưu ý bổ sung mang tính phương pháp: khi một thông tư ngân hàng (như Thông tư 50/2024) viện dẫn một tiêu chuẩn quốc gia, bản thân việc viện dẫn đó không tự động 'khóa cứng' phiên bản tiêu chuẩn tại thời điểm ban hành thông tư — cần đọc kỹ điều khoản viện dẫn để biết đó là viện dẫn 'động' (áp dụng theo phiên bản hiện hành tại từng thời điểm) hay viện dẫn 'tĩnh' (chỉ áp dụng đúng phiên bản được nêu tên tại thời điểm ban hành thông tư) — sự khác biệt này ảnh hưởng trực tiếp tới việc một bản cập nhật tiêu chuẩn có tự động trở thành yêu cầu bắt buộc hay không.",
    sources: [
      { type: "legal_document", refId: "tcvn-11930" },
      { type: "legal_document", refId: "tt-50-2024-nhnn" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
