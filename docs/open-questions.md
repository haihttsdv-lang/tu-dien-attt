# Danh sách CHƯA XÁC MINH — cần rà soát trước khi dùng vận hành thật

> Theo URD §0.1 mục 4: tuyệt đối không sinh số hiệu văn bản, ngày ban hành,
> ngày hiệu lực hay số điều khoản từ suy đoán. Mọi mục dưới đây phải được
> tra cứu lại từ nguồn hạng A (xem URD §4.4) trước khi nhập nội dung có
> tính quy phạm vào kho.

## Văn bản pháp lý — cập nhật 2026-08-24 sau vòng tra cứu độc lập thứ hai

Vòng tra cứu bổ sung (WebSearch, đối chiếu chéo vbpl.vn/Công báo Chính phủ/
cổng bộ ngành) đã **mở khóa 6/9 chủ đề PL** còn thiếu — xem
`src/content/documents/index.ts` (nhóm 2 trong file) và các
`ContentBlock` tương ứng tại `src/content/topics/content-blocks-pl-new.ts`:

| Chủ đề | Văn bản đã nhập | Trạng thái | Còn thiếu gì |
|---|---|---|---|
| PL-01 | Luật ATTT mạng 86/2015/QH13 | `chua_xac_minh` (nghi ngờ hết hiệu lực một phần, chưa rõ điều khoản nào) | Xác minh trực tiếp trang lược đồ vbpl.vn |
| PL-02 | Luật An ninh mạng 24/2018/QH14 | `con_hieu_luc` | — (đã xác minh tương đối chắc chắn) |
| PL-04 | Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 (thay Nghị định 13/2023/NĐ-CP) | `con_hieu_luc` | Nghị định hướng dẫn thi hành mới chưa xác minh đủ để nhập số hiệu; nội dung chi tiết (quyền chủ thể, DPIA...) chưa trích dẫn |
| PL-05 | Nghị định 85/2016/NĐ-CP | `con_hieu_luc` | Chưa kiểm tra văn bản sửa đổi/bổ sung sau 2016 |
| PL-09 | Thông tư 13/2018/TT-NHNN | `con_hieu_luc` | Chưa kiểm tra thông tư sửa đổi/bổ sung sau 2018 |
| PL-11 | Thông tư 20/2017/TT-BTTTT | `con_hieu_luc` | **Thời hạn báo cáo cụ thể VẪN chưa xác minh — vẫn là ưu tiên cao nhất, xem cảnh báo trong ContentBlock** |

**Vẫn hoàn toàn chưa có căn cứ đủ tin cậy** (không có ContentBlock):

| Chủ đề liên quan | Văn bản cần xác minh | Ghi chú vòng tra cứu 2026-08-24 |
|---|---|---|
| PL-03 | Yêu cầu lưu trữ dữ liệu trong nước | Chưa tìm được nghị định hướng dẫn cụ thể đủ tin cậy trong vòng tra cứu này |
| PL-10 | Quyết định/thông tư NHNN về ngưỡng xác thực sinh trắc học | Chưa tìm được; TT 18/2024/TT-NHNN vẫn chỉ là dấu hiệu chưa xác minh |
| PL-12 | Chế tài xử phạt ATTT/dữ liệu cá nhân | Xác nhận **mới là DỰ THẢO** (Nghị định xử phạt vi phạm hành chính lĩnh vực an ninh mạng và bảo vệ dữ liệu cá nhân), chưa ban hành chính thức tại thời điểm tra cứu — không nhập vào kho vì URD cấm để dự thảo lẫn vào tra cứu mặc định (FR-E14 áp dụng ngược: chưa đủ căn cứ để nhập ngay cả ở trạng thái "dự thảo") |

## Framework quốc tế — phiên bản chưa xác minh độc lập

Xem `verificationNote` trong từng bản ghi tại `src/content/frameworks/index.ts`:

- ISO/IEC 27017 (version ghi tạm 2015, chưa đối chiếu độc lập)
- ISO/IEC 27018 (thông tin trái chiều giữa bản 2014/2019)
- ISO 22301 (thường biết là 2019, chưa xác minh độc lập)
- Basel — Principles for Operational Resilience; BCBS 239
- MITRE ATT&CK / D3FEND (cập nhật liên tục, không có "phiên bản" cố định)
- OWASP SAMM
- COBIT (thường biết là COBIT 2019, chưa xác minh độc lập)

## Chuẩn mực kiểm toán HTTT (URD §4.3)

Chuẩn mực ISACA về kiểm toán HTTT, chuẩn mực hành nghề kiểm toán nội bộ —
chưa xác minh phiên bản hiện hành, chưa nhập vào kho `Framework`.

## Vì sao `IncidentPlaybook` và `ComplianceObligation` để trống

`IncidentPlaybook.deadlineHours` và `ComplianceObligation.deadlineRule` là
những con số **có hiệu lực pháp lý** (thời hạn báo cáo sự cố, chu kỳ nghĩa
vụ tuân thủ). URD liệt kê chính xác việc "quy định về ứng cứu sự cố ATTT
mạng quốc gia và nghĩa vụ báo cáo — thời hạn báo cáo sự cố" là mục
**CHƯA XÁC MINH ưu tiên cao nhất** (URD §4.1). Bịa một con số giờ/ngày ở
đây là đúng loại lỗi nghiêm trọng nhất mà URD §0.1 mục 4 cảnh báo. Hai bảng
này để trống có chủ đích cho tới khi có văn bản gốc đã xác minh.

## Phạm vi chưa hoàn thành trong bản build này (so với URD đầy đủ)

Đây là **công cụ tra cứu cá nhân**, không phải hệ thống production của một
ngân hàng cụ thể (xem quyết định đã chốt khi khởi tạo dự án). Do đó các mục
sau của URD **cố ý chưa triển khai**, không phải thiếu sót:

- Tầng nội bộ (QĐ-2 = không): `OfficialInterpretation`, `TribalNote`, và mọi
  nội dung phân loại `mật`/`tối mật`.
- Trợ lý hỏi-đáp LLM (QĐ-1 = không).
- Xác thực SSO/MFA nội bộ ngân hàng, nhật ký kiểm toán bất biến đẩy sang hệ
  thống tập trung (FR-P01→P09) — không áp dụng vì không có tầng nội bộ/dữ
  liệu nhạy cảm để bảo vệ.
- Ma trận ánh xạ chéo (Mục 7) mới có dữ liệu minh họa, chưa phủ đủ cặp ưu
  tiên (1)–(4) theo URD §7.
- Công cụ tác nghiệp kiểm tra (chương trình kiểm toán, ngân hàng câu hỏi,
  thư viện bằng chứng, cẩm nang sự cố) mới có ví dụ minh họa cho một vài
  chủ đề, chưa phủ toàn bộ 93 chủ đề.
- Nội dung T3 (tham chiếu chuyên sâu — danh mục điều khoản đầy đủ, không
  giới hạn độ dài) — chưa triển khai cho chủ đề nào.
- T1 hiện phủ **90/93 chủ đề** (còn thiếu PL-03, PL-10, PL-12 — xem bảng
  trên). T2 (giải thích đầy đủ 500–900 từ) mới phủ **84/93** — 6 chủ đề PL
  vừa mở khóa (PL-01, 02, 04, 05, 09, 11) mới có T1, CHƯA có T2, đúng thứ tự
  URD §5.11 (phủ rộng T1 trước khi đào sâu T2 cho chủ đề mới).
- Sơ đồ minh họa (SVG tự vẽ) mới phủ khoảng 17 chủ đề có hình dạng khái
  niệm rõ ràng (quy trình vòng lặp, phân lớp, kiến trúc Zero Trust, RTO/RPO)
  — không phải mọi chủ đề đều có dạng hình ảnh tự nhiên nên phần lớn vẫn
  chỉ có nội dung chữ. Sơ đồ quan hệ chủ đề/văn bản (FR-K03, FR-S02) áp
  dụng tự động cho MỌI chủ đề/văn bản có quan hệ khai báo trong dữ liệu.
- Kiểm thử xâm nhập, thẩm định ATTT nội bộ, xác định cấp độ hệ thống
  (FR-P15, P17, P18) — không áp dụng cho công cụ tham khảo cá nhân.
