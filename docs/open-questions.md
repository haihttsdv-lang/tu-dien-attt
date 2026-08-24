# Danh sách CHƯA XÁC MINH — cần rà soát trước khi dùng vận hành thật

> Theo URD §0.1 mục 4: tuyệt đối không sinh số hiệu văn bản, ngày ban hành,
> ngày hiệu lực hay số điều khoản từ suy đoán. Mọi mục dưới đây phải được
> tra cứu lại từ nguồn hạng A (xem URD §4.4) trước khi nhập nội dung có
> tính quy phạm vào kho.

## Văn bản pháp lý chưa có trong kho (chưa nhập `LegalDocument`)

Các chủ đề liên quan dưới đây hiện **không có ContentBlock** vì chưa có căn
cứ nguồn hạng A — tránh rủi ro suy đoán số hiệu/nội dung sai (URD §22, rủi ro
"Rất cao"). Cần bổ sung sau khi tra cứu:

| Chủ đề liên quan | Văn bản cần xác minh | Nguồn tra cứu ưu tiên |
|---|---|---|
| PL-01 | Luật An toàn thông tin mạng — số hiệu, năm, tình trạng sửa đổi | Cơ sở dữ liệu quốc gia về VBPL → Công báo Chính phủ |
| PL-02 | Luật An ninh mạng và văn bản hướng dẫn | Cơ sở dữ liệu quốc gia về VBPL |
| PL-03 | Yêu cầu lưu trữ dữ liệu trong nước | Nghị định hướng dẫn Luật An ninh mạng |
| PL-04 | Nghị định/luật về bảo vệ dữ liệu cá nhân (lưu ý khả năng đã có văn bản mới thay thế) | Cơ sở dữ liệu quốc gia về VBPL |
| PL-05 | Nghị định về an toàn HTTT theo cấp độ | Cơ sở dữ liệu quốc gia về VBPL |
| PL-09 | Thông tư về hệ thống kiểm soát nội bộ NHTM | Cổng thông tin NHNN |
| PL-10 | Quyết định của NHNN về ngưỡng xác thực sinh trắc học; TT 18/2024/TT-NHNN (có dấu hiệu liên quan, chưa xác minh chi tiết) | Cổng thông tin NHNN |
| PL-11 | Quy định về nghĩa vụ báo cáo sự cố ATTT mạng quốc gia và thời hạn | **Ưu tiên xác minh cao nhất** — liên quan trực tiếp nghĩa vụ có thời hạn |
| PL-12 | Chế tài xử phạt ATTT/dữ liệu cá nhân | Cơ sở dữ liệu quốc gia về VBPL |

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
- Nội dung T2/T3 (giải thích đầy đủ / tham chiếu chuyên sâu) — bản build
  này ưu tiên phủ rộng T1 cho toàn bộ 93 chủ đề trước (đúng nguyên tắc URD
  §5.11: "kho phủ rộng ở mức nông có giá trị hơn kho sâu nhưng khuyết mảng").
- Kiểm thử xâm nhập, thẩm định ATTT nội bộ, xác định cấp độ hệ thống
  (FR-P15, P17, P18) — không áp dụng cho công cụ tham khảo cá nhân.
