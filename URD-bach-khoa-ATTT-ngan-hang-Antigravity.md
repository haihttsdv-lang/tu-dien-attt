# URD — Ứng dụng Bách khoa toàn thư An toàn thông tin ngành Ngân hàng

*Dành cho Trưởng nhóm ATTT và chức năng Kiểm tra giám sát*

| | |
|---|---|
| **Loại tài liệu** | User Requirements Document — đặc tả để triển khai bằng **Google Antigravity IDE + Gemini** |
| **Phiên bản** | 1.0 |
| **Ngày soạn** | 26/08/2026 |
| **Môi trường phát triển đích** | Antigravity IDE (Editor View + Manager View), mô hình Gemini; cấu hình qua `AGENTS.md` và `GEMINI.md` |
| **Quyết định chưa chốt** | **4 quyết định** — xem Mục 23 |
| **Cảnh báo trọng yếu** | Đây là ứng dụng tra cứu tác nghiệp, **không phải nguồn chân lý pháp lý**. Mọi nội dung quy phạm phải dẫn về văn bản gốc. Xem Mục 10 |

---

## 0. Hướng dẫn dành cho tác tử Antigravity

### 0.1. Nguyên tắc chi phối toàn bộ dự án

1. **Đọc toàn bộ tài liệu này trước khi tạo bất kỳ tệp mã nào.**
2. **Bốn quyết định ở Mục 23 phải được hỏi người dùng trước khi khởi tạo dự án.** Không tự quyết.
3. **Quy tắc tối thượng: không có nguồn thì không có nội dung.** Mọi khẳng định mang tính quy phạm phải gắn với một bản ghi nguồn có số hiệu và điều/khoản. Ràng buộc này được **cưỡng chế ở tầng schema và tầng kiểm thử**, không phải bằng lời nhắc (Mục 10).
4. **Tuyệt đối không sinh ra số hiệu văn bản, ngày ban hành, ngày hiệu lực hay số điều khoản từ suy đoán.** Nếu không tra cứu được, ghi `CHƯA XÁC MINH` và nêu chính xác cần kiểm tra ở đâu. Đây là lỗi nghiêm trọng nhất có thể mắc trong dự án này.
5. **Đọc kỹ Mục 12.7 trước khi bắt đầu.** Có ràng buộc về việc dữ liệu nào được phép xuất hiện trong môi trường phát triển — vi phạm ràng buộc này là sự cố lộ lọt dữ liệu, không phải lỗi kỹ thuật.

### 0.2. Cách làm việc trong Antigravity

| Hạng mục | Yêu cầu |
|---|---|
| **Tệp cấu hình** | Tạo `AGENTS.md` ở gốc workspace làm nguồn cấu hình chính (ưu tiên vì tính khả chuyển giữa các công cụ), `GEMINI.md` cho ngữ cảnh riêng của Gemini. Nội dung tối thiểu: quy tắc "không nguồn không nội dung", danh sách tệp mỗi tác tử được sửa, lệnh build/test/lint, và các điều **tuyệt đối không làm** |
| **Chế độ thực thi** | Dùng **Planning Mode** cho mọi thay đổi vượt quá một tệp. Chỉ dùng Fast Mode cho sửa lỗi vụn |
| **Artifacts** | Bắt buộc sinh **Implementation Plan** trước khi sửa mã, và **Walkthrough** kèm ảnh chụp màn hình khi hoàn thành mỗi module. Người dùng phê duyệt trên Artifact trước khi tác tử đi tiếp |
| **Chính sách thực thi terminal** | Đặt ở mức yêu cầu phê duyệt (**không** dùng chế độ tự động hoàn toàn) trong suốt dự án này, do tính nhạy cảm của dữ liệu |
| **Browser-in-the-loop** | Dùng trình duyệt tích hợp để tự kiểm chứng giao diện tra cứu và chụp màn hình đưa vào Walkthrough |
| **Kiến thức tích lũy** | Cho phép tác tử ghi lại quy ước dự án vào cơ sở tri thức, **nhưng không được ghi bất kỳ nội dung nào thuộc tầng nội bộ** (Mục 13) |

### 0.3. Phân chia công việc cho nhiều tác tử song song (Manager View)

Manager View cho phép chạy nhiều tác tử song song. Với dự án này, **chỉ chia theo miền trực giao** để tránh xung đột tệp:

| Tác tử | Phạm vi tệp được phép sửa | Ghi chú |
|---|---|---|
| A — Lõi dữ liệu & schema | `src/core/**`, `src/data/schema/**` | Phải hoàn thành **trước** các tác tử khác khởi động |
| B — Nhập liệu & kiểm chứng nguồn | `src/content/**`, `scripts/validate/**` | Phụ thuộc schema của A |
| C — Giao diện tra cứu | `src/ui/**`, `src/pages/**` | Không được sửa `src/core/**` |
| D — Bảo mật ứng dụng & kiểm thử | `src/security/**`, `tests/**` | Rà soát chéo đầu ra của B và C |

Khai báo ranh giới này trong `AGENTS.md`. **Không chạy song song hai tác tử cùng chạm `src/core/**`.**

### 0.4. Khi nào bắt buộc dừng lại và hỏi

- Khi cần quyết định một trong bốn vấn đề ở Mục 23.
- Khi không xác minh được tình trạng hiệu lực của một văn bản pháp quy.
- Khi một yêu cầu trong tài liệu này mâu thuẫn với chính sách ATTT nội bộ mà người dùng cung cấp.
- Khi định cài thêm một thư viện phụ thuộc mới (xem Mục 12.7).

---

## 1. Bối cảnh, mục tiêu và phạm vi

### 1.1. Vấn đề cần giải quyết

Trưởng nhóm ATTT kiêm chức năng kiểm tra giám sát tại một ngân hàng lớn phải thường xuyên trả lời các câu hỏi dạng: *yêu cầu này thuộc điều khoản nào, văn bản đó còn hiệu lực không, bản thay thế là gì, biện pháp kiểm soát này đồng thời đáp ứng những khung nào*. Tri thức cần dùng nằm rải rác ở hàng chục nguồn: văn bản pháp quy Việt Nam, chuẩn quốc tế, tài liệu kỹ thuật, quy định nội bộ, và kinh nghiệm chưa được ghi lại của các thành viên kỳ cựu.

Hệ quả: mất thời gian tra cứu, và nghiêm trọng hơn là **nguy cơ trích dẫn nhầm văn bản đã hết hiệu lực** trong báo cáo kiểm tra hoặc hồ sơ làm việc với đoàn thanh tra.

### 1.2. Ví dụ minh hoạ đúng bản chất vấn đề

Một tình huống thực tế đã được xác minh trong quá trình nghiên cứu, cho thấy vì sao mô hình dữ liệu ở Mục 6 phải phức tạp hơn "còn hiệu lực / hết hiệu lực":

- Thông tư 09/2020/TT-NHNN (ban hành 21/10/2020, hiệu lực 01/01/2021) quy định về an toàn hệ thống thông tin trong hoạt động ngân hàng, **thay thế** Thông tư 18/2018/TT-NHNN.
- Thông tư 50/2024/TT-NHNN (ban hành 31/10/2024, hiệu lực 01/01/2025, một số điều khoản hiệu lực 01/07/2025) quy định về an toàn, bảo mật cho việc cung cấp dịch vụ trực tuyến ngành Ngân hàng, **thay thế** Thông tư 35/2016 và Thông tư 35/2018, đồng thời **bãi bỏ Điều 25 của Thông tư 09/2020**.
- Như vậy Thông tư 09/2020 **vẫn còn hiệu lực nhưng khuyết một điều** — trạng thái mà mô hình nhị phân không biểu diễn được.
- Thêm nữa, tại thời điểm nghiên cứu đã xuất hiện thông tin về **dự thảo Thông tư thay thế Thông tư 50** đang lấy ý kiến. `CHƯA XÁC MINH` tình trạng ban hành.

> **Ràng buộc kiểm thử:** tình huống trên phải trở thành **ca kiểm thử bắt buộc** của module quản lý hiệu lực (Mục 6). Nếu hệ thống không biểu diễn được đúng trạng thái này thì module chưa đạt.

### 1.3. Mục tiêu sản phẩm

Một công cụ tra cứu và tác nghiệp giúp: trả lời câu hỏi tuân thủ trong dưới một phút; không bao giờ đưa ra nội dung quy phạm không có nguồn; cảnh báo rõ ràng khi nội dung đã hết hiệu lực; và cho phép đối chiếu một biện pháp kiểm soát giữa nhiều khung chuẩn.

### 1.4. Phạm vi

**Trong phạm vi:** tra cứu tri thức tham chiếu, quản lý vòng đời văn bản, ánh xạ chéo khung kiểm soát, công cụ hỗ trợ tác nghiệp kiểm tra, và (tùy QĐ-2) tầng nội dung nội bộ.

**Ngoài phạm vi:** xem Mục 21.

---

## 2. Đối tượng người dùng và vai trò

| Mã | Vai trò | Nhu cầu chính | Quyền truy cập mặc định |
|---|---|---|---|
| VT-01 | **Trưởng nhóm ATTT** (người dùng chính) | Tra cứu nhanh, ánh xạ chéo, chuẩn bị hồ sơ thanh tra, phê duyệt nội dung | Toàn quyền đọc; quyền phê duyệt nội dung |
| VT-02 | **Chuyên viên ATTT** | Tra cứu kỹ thuật, soạn thảo nội dung chờ duyệt | Đọc tầng tham chiếu; ghi bản nháp |
| VT-03 | **Cán bộ kiểm tra giám sát / kiểm toán nội bộ CNTT** | Chương trình kiểm toán, ngân hàng câu hỏi, thư viện bằng chứng | Đọc tầng tham chiếu + module kiểm toán |
| VT-04 | **Cán bộ đầu mối ATTT tại đơn vị nghiệp vụ** | Tra cứu yêu cầu áp dụng cho đơn vị mình | Chỉ đọc tầng tham chiếu |
| VT-05 | **Biên tập viên nội dung** | Nhập, cập nhật, gắn nguồn | Ghi tầng tham chiếu; không phê duyệt |
| VT-06 | **Quản trị hệ thống** | Vận hành, phân quyền, sao lưu | Quản trị; **không** có quyền đọc nội dung tầng nội bộ |

> **Nguyên tắc:** VT-06 tách bạch quản trị hạ tầng khỏi quyền đọc nội dung — tránh việc quản trị viên hệ thống mặc nhiên đọc được danh mục điểm yếu.

---

## 3. Các trụ cột sản phẩm

| # | Trụ cột | Mô tả | Mục đặc tả |
|---|---|---|---|
| 1 | **Kho tri thức tham chiếu** | 93 chủ đề thuộc 9 nhóm, phân 3 tầng độ sâu | 5 |
| 2 | **Quản lý nguồn và vòng đời hiệu lực** | Theo dõi trạng thái, quan hệ thay thế/bãi bỏ, xem theo thời điểm | 6 |
| 3 | **Ma trận ánh xạ chéo** | Đối chiếu yêu cầu giữa các khung kiểm soát | 7 |
| 4 | **Công cụ tác nghiệp kiểm tra** | Chương trình kiểm toán, câu hỏi phỏng vấn, thư viện bằng chứng, lịch nghĩa vụ | 9.4 |
| 5 | **Tra cứu nhanh** | Tìm kiếm song ngữ, dùng được ngoại tuyến | 11 |
| 6 | **Tầng nội bộ** *(tùy QĐ-2)* | Chính sách nội bộ, diễn giải chính thức, tri thức ngầm | 13 |

---

## 4. Kết quả nghiên cứu

### 4.1. Khung pháp lý Việt Nam — trạng thái xác minh

| Văn bản | Nội dung | Trạng thái xác minh |
|---|---|---|
| **Thông tư 09/2020/TT-NHNN** | An toàn hệ thống thông tin trong hoạt động ngân hàng | **ĐÃ XÁC MINH**: ban hành 21/10/2020, hiệu lực 01/01/2021 (riêng điểm b khoản 4 Điều 20 hiệu lực 01/01/2022), thay thế TT 18/2018/TT-NHNN. **Điều 25 đã bị bãi bỏ** bởi TT 50/2024. Phân loại hệ thống thông tin theo **5 cấp độ** (trước đó là 3 mức) |
| **Thông tư 50/2024/TT-NHNN** | An toàn, bảo mật cho cung cấp dịch vụ trực tuyến ngành Ngân hàng | **ĐÃ XÁC MINH**: ban hành 31/10/2024, hiệu lực 01/01/2025; một số điều khoản (điểm b khoản 1 Điều 4, điểm d khoản 9 Điều 7, khoản 3 và 4 Điều 8) hiệu lực 01/07/2025. Thay thế TT 35/2016 và TT 35/2018. **Có thông tin về dự thảo thông tư thay thế đang lấy ý kiến — `CHƯA XÁC MINH` tình trạng ban hành** |
| **TCVN 11930** | Yêu cầu cơ bản về an toàn hệ thống thông tin theo cấp độ | **ĐÃ XÁC MINH** là được TT 50/2024 viện dẫn. `CHƯA XÁC MINH` phiên bản hiện hành (bản được viện dẫn là 11930:2017) |
| **Công văn 1524/NHNN-CNTT** | Hướng dẫn sao lưu, bảo đảm hoạt động liên tục | **ĐÃ XÁC MINH** tồn tại (ngày 08/3/2023). Lưu ý: công văn hướng dẫn, không phải văn bản quy phạm |
| Luật An toàn thông tin mạng; Luật An ninh mạng; Luật Giao dịch điện tử; Luật Các tổ chức tín dụng | Khung luật nền | `CHƯA XÁC MINH` số hiệu, năm ban hành và tình trạng sửa đổi hiện hành |
| Nghị định về bảo vệ dữ liệu cá nhân; nghị định hướng dẫn Luật An ninh mạng; nghị định về an toàn HTTT theo cấp độ | Khung nghị định | `CHƯA XÁC MINH` — đặc biệt lưu ý khả năng đã có luật/nghị định mới về bảo vệ dữ liệu cá nhân thay thế nghị định trước |
| Thông tư về hệ thống kiểm soát nội bộ của NHTM | Cơ sở cho mô hình ba tuyến phòng thủ | `CHƯA XÁC MINH` |
| Quyết định của NHNN về xác thực sinh trắc học trong giao dịch | Ngưỡng giá trị giao dịch phải xác thực sinh trắc học | `CHƯA XÁC MINH` số hiệu và ngưỡng hiện hành |
| Thông tư về hoạt động thẻ ngân hàng | Liên quan eKYC, sinh trắc học | **Có dấu hiệu** TT 18/2024/TT-NHNN (28/6/2024) — `CHƯA XÁC MINH` chi tiết |
| Quy định về ứng cứu sự cố ATTT mạng quốc gia và nghĩa vụ báo cáo | Thời hạn báo cáo sự cố | `CHƯA XÁC MINH` — **ưu tiên xác minh cao nhất** vì liên quan trực tiếp tới nghĩa vụ có thời hạn |

> **Chỉ dẫn bắt buộc cho tác tử:** mọi dòng `CHƯA XÁC MINH` phải được đưa vào ứng dụng với trạng thái tương ứng và **hiển thị cảnh báo cho người dùng**, không được lặng lẽ trình bày như đã xác minh. Nguồn tra cứu ưu tiên theo thứ tự: Cơ sở dữ liệu quốc gia về văn bản pháp luật → Cổng thông tin NHNN → Công báo Chính phủ → các trang tổng hợp thương mại (chỉ dùng để định hướng, không dùng làm căn cứ cuối).

### 4.2. Chuẩn mực quốc tế

Đã xác định các họ chuẩn cần đưa vào kho tri thức: ISO/IEC 27001, 27002, 27005, 27017, 27018, 22301; PCI DSS; NIST CSF, SP 800-53, 800-61, 800-207; SWIFT CSP; nguyên tắc Basel về khả năng chống chịu vận hành và BCBS 239; COBIT; CIS Controls và Benchmarks; MITRE ATT&CK và D3FEND; OWASP Top 10, ASVS, SAMM; CSA CCM.

`CHƯA XÁC MINH` phiên bản hiện hành của từng chuẩn — **bắt buộc xác minh trước khi nhập nội dung**, vì số hiệu biện pháp kiểm soát thay đổi giữa các phiên bản (ví dụ ISO 27002 đã tái cấu trúc số lượng biện pháp giữa hai phiên bản gần nhất).

### 4.3. Chuẩn mực kiểm toán hệ thống thông tin

Chuẩn mực của ISACA về kiểm toán hệ thống thông tin; chuẩn mực hành nghề kiểm toán nội bộ; mô hình ba tuyến phòng thủ; phương pháp kiểm toán dựa trên rủi ro; yêu cầu về bằng chứng, hồ sơ làm việc và chọn mẫu. `CHƯA XÁC MINH` phiên bản chuẩn mực hiện hành.

### 4.4. Đánh giá độ tin cậy nguồn

| Hạng | Nguồn | Cách dùng |
|---|---|---|
| **A — Căn cứ chính thức** | Cơ sở dữ liệu quốc gia về VBPL, Công báo Chính phủ, cổng thông tin NHNN, tài liệu chuẩn mua bản quyền | Được phép dùng làm căn cứ trích dẫn |
| **B — Tham khảo có kiểm chứng** | Tạp chí chuyên ngành ngân hàng, Hiệp hội Ngân hàng Việt Nam, hãng kiểm toán lớn | Dùng để định hướng, **phải đối chiếu lại nguồn hạng A** trước khi lưu |
| **C — Chỉ định hướng** | Trang tổng hợp văn bản thương mại, blog, tài liệu chia sẻ | **Không được** dùng làm căn cứ trích dẫn trong bất kỳ trường hợp nào |

Trường `sourceTier` trong mô hình dữ liệu (Mục 16) ghi nhận hạng nguồn; test tự động chặn nội dung quy phạm chỉ có nguồn hạng C.

---

## 5. Phạm vi tri thức — 93 chủ đề

### 5.1. PL — Pháp lý và tuân thủ (12)

| Mã | Chủ đề |
|---|---|
| PL-01 | Luật An toàn thông tin mạng: phạm vi điều chỉnh và nghĩa vụ của tổ chức |
| PL-02 | Luật An ninh mạng và các văn bản hướng dẫn |
| PL-03 | Yêu cầu lưu trữ dữ liệu trong nước và hiện diện pháp lý |
| PL-04 | Bảo vệ dữ liệu cá nhân: nguyên tắc, quyền của chủ thể dữ liệu, hồ sơ đánh giá tác động |
| PL-05 | Bảo đảm an toàn hệ thống thông tin theo cấp độ: hồ sơ đề xuất, thẩm định, phê duyệt |
| PL-06 | Tiêu chuẩn quốc gia về yêu cầu cơ bản an toàn HTTT theo cấp độ |
| PL-07 | An toàn hệ thống thông tin trong hoạt động ngân hàng |
| PL-08 | An toàn, bảo mật cho cung cấp dịch vụ trực tuyến ngành Ngân hàng |
| PL-09 | Hệ thống kiểm soát nội bộ của ngân hàng thương mại |
| PL-10 | Xác thực giao dịch điện tử và yêu cầu sinh trắc học |
| PL-11 | Nghĩa vụ, đầu mối và **thời hạn** báo cáo sự cố an toàn thông tin |
| PL-12 | Chế tài xử phạt vi phạm về an toàn thông tin và dữ liệu cá nhân |

### 5.2. CM — Chuẩn mực và khung quốc tế (15)

| Mã | Chủ đề |
|---|---|
| CM-01 | ISO/IEC 27001 — yêu cầu đối với hệ thống quản lý ATTT |
| CM-02 | ISO/IEC 27002 — tập biện pháp kiểm soát |
| CM-03 | ISO/IEC 27005 — quản lý rủi ro an toàn thông tin |
| CM-04 | ISO/IEC 27017 và 27018 — an toàn đám mây và dữ liệu cá nhân trên đám mây |
| CM-05 | ISO 22301 — quản lý liên tục hoạt động |
| CM-06 | PCI DSS — bảo mật dữ liệu thẻ thanh toán |
| CM-07 | NIST Cybersecurity Framework |
| CM-08 | NIST SP 800-53 — tập kiểm soát cho hệ thống thông tin |
| CM-09 | NIST SP 800-61 — hướng dẫn xử lý sự cố |
| CM-10 | NIST SP 800-207 — kiến trúc không tin cậy mặc định |
| CM-11 | SWIFT Customer Security Programme |
| CM-12 | Nguyên tắc Basel về khả năng chống chịu vận hành; BCBS 239 |
| CM-13 | CIS Controls và CIS Benchmarks |
| CM-14 | MITRE ATT&CK và D3FEND |
| CM-15 | OWASP Top 10, ASVS, SAMM; CSA CCM; COBIT |

### 5.3. QT — Quản trị và quản lý ATTT (12)

| Mã | Chủ đề |
|---|---|
| QT-01 | Hệ thống quản lý ATTT: phạm vi, bối cảnh tổ chức, cam kết lãnh đạo |
| QT-02 | Cấu trúc tài liệu: chính sách – tiêu chuẩn – quy trình – hướng dẫn |
| QT-03 | Quản lý rủi ro ATTT: nhận diện, phân tích, đánh giá, xử lý |
| QT-04 | Sổ đăng ký rủi ro và khẩu vị rủi ro |
| QT-05 | Quản lý tài sản thông tin và phân loại thông tin |
| QT-06 | Quản lý rủi ro bên thứ ba và chuỗi cung ứng |
| QT-07 | Quản lý ngoại lệ và chấp nhận rủi ro có thời hạn |
| QT-08 | Đào tạo nhận thức ATTT và diễn tập lừa đảo |
| QT-09 | Chỉ số đo lường KPI, KRI và báo cáo cấp lãnh đạo |
| QT-10 | Ngân sách, ưu tiên đầu tư và luận chứng đầu tư an ninh |
| QT-11 | Vai trò, trách nhiệm và ma trận phân công trong ATTT |
| QT-12 | Văn hóa an toàn và quản lý thay đổi hành vi |

### 5.4. KT — Kiến trúc và kỹ thuật (14)

| Mã | Chủ đề |
|---|---|
| KT-01 | An toàn hạ tầng mạng, phân vùng và kiểm soát luồng dữ liệu |
| KT-02 | Quản lý định danh và truy cập |
| KT-03 | Quản lý tài khoản đặc quyền |
| KT-04 | Mật mã, quản lý khóa và thiết bị bảo mật phần cứng |
| KT-05 | An toàn điểm cuối, máy chủ và tăng cường cấu hình |
| KT-06 | An toàn điện toán đám mây, ảo hóa và container |
| KT-07 | An toàn ứng dụng và vòng đời phát triển an toàn |
| KT-08 | An toàn giao diện lập trình và tích hợp hệ thống |
| KT-09 | An toàn dữ liệu, phân loại và chống thất thoát |
| KT-10 | Quản lý điểm yếu và bản vá |
| KT-11 | Kiểm thử xâm nhập, diễn tập đội đỏ và đội tím |
| KT-12 | Kiến trúc không tin cậy mặc định |
| KT-13 | An toàn thư điện tử và chống lừa đảo qua email |
| KT-14 | Quản lý cấu hình, quản lý thay đổi và kiểm soát phiên bản |

### 5.5. VH — Vận hành an ninh (8)

| Mã | Chủ đề |
|---|---|
| VH-01 | Trung tâm điều hành an ninh: mô hình tổ chức và quy trình |
| VH-02 | Thu thập, chuẩn hóa và lưu trữ nhật ký |
| VH-03 | Giám sát, phát hiện và phân loại cảnh báo |
| VH-04 | Săn tìm mối đe dọa |
| VH-05 | Tình báo mối đe dọa và chỉ dấu xâm nhập |
| VH-06 | Ứng phó sự cố: quy trình, phân loại mức độ, leo thang |
| VH-07 | Điều tra số và bảo quản chứng cứ |
| VH-08 | Quản lý khủng hoảng và truyền thông sự cố |

### 5.6. NH — Hệ thống đặc thù ngân hàng (10)

| Mã | Chủ đề |
|---|---|
| NH-01 | An toàn hệ thống ngân hàng lõi |
| NH-02 | Hệ thống thẻ và mạng thanh toán thẻ |
| NH-03 | ATM, CDM và thiết bị chấp nhận thanh toán |
| NH-04 | Chuyển tiền liên ngân hàng và hệ thống SWIFT |
| NH-05 | Ngân hàng điện tử: Internet Banking và Mobile Banking |
| NH-06 | Giao diện lập trình mở và ngân hàng mở |
| NH-07 | Định danh khách hàng điện tử và xác thực sinh trắc học |
| NH-08 | Phòng chống gian lận giao dịch |
| NH-09 | Hệ thống chuyển mạch tài chính và bù trừ điện tử |
| NH-10 | Kho dữ liệu, phân tích và bảo vệ dữ liệu khách hàng |

### 5.7. KG — Kiểm tra, giám sát và kiểm toán (10)

| Mã | Chủ đề |
|---|---|
| KG-01 | Mô hình ba tuyến phòng thủ |
| KG-02 | Lập kế hoạch kiểm toán dựa trên rủi ro |
| KG-03 | Chương trình kiểm toán và thủ tục kiểm toán theo chủ đề |
| KG-04 | Kỹ thuật thu thập bằng chứng và phương pháp chọn mẫu |
| KG-05 | Hồ sơ làm việc và lưu trữ hồ sơ kiểm toán |
| KG-06 | Phân loại phát hiện, kiến nghị và theo dõi khắc phục |
| KG-07 | Đánh giá tính đầy đủ và tính hiệu quả của kiểm soát |
| KG-08 | Giám sát kiểm soát liên tục và kiểm toán liên tục |
| KG-09 | Làm việc với đoàn thanh tra và kiểm toán độc lập |
| KG-10 | Tự đánh giá kiểm soát và đánh giá tuân thủ nội bộ |

### 5.8. CC — Chống chịu và liên tục hoạt động (6)

| Mã | Chủ đề |
|---|---|
| CC-01 | Quản lý liên tục hoạt động kinh doanh |
| CC-02 | Phân tích tác động nghiệp vụ |
| CC-03 | Kế hoạch khôi phục sau thảm họa |
| CC-04 | Chỉ tiêu thời gian và điểm khôi phục; kiến trúc dự phòng |
| CC-05 | Sao lưu, phục hồi và phòng chống mã hóa tống tiền |
| CC-06 | Diễn tập, kiểm chứng và bài học rút ra |

### 5.9. MN — Công nghệ và rủi ro mới nổi (6)

| Mã | Chủ đề |
|---|---|
| MN-01 | Rủi ro an toàn của trí tuệ nhân tạo và mô hình ngôn ngữ lớn |
| MN-02 | Quản trị việc sử dụng AI trong hoạt động ngân hàng |
| MN-03 | Đe dọa từ máy tính lượng tử và lộ trình mật mã hậu lượng tử |
| MN-04 | Rủi ro mã nguồn mở và chuỗi cung ứng phần mềm |
| MN-05 | Rủi ro công nghệ sổ cái phân tán và tài sản số |
| MN-06 | Giả mạo bằng AI và gian lận danh tính |

### 5.10. Bảng tổng hợp

| Nhóm | Số chủ đề |
|---|---|
| PL — Pháp lý và tuân thủ | 12 |
| CM — Chuẩn mực và khung quốc tế | 15 |
| QT — Quản trị và quản lý ATTT | 12 |
| KT — Kiến trúc và kỹ thuật | 14 |
| VH — Vận hành an ninh | 8 |
| NH — Hệ thống đặc thù ngân hàng | 10 |
| KG — Kiểm tra, giám sát và kiểm toán | 10 |
| CC — Chống chịu và liên tục hoạt động | 6 |
| MN — Công nghệ và rủi ro mới nổi | 6 |
| **Tổng** | **93** |

### 5.11. Ba tầng độ sâu

Mỗi chủ đề có ba tầng nội dung, hiển thị lần lượt để phục vụ cả người mới lẫn chuyên gia:

| Tầng | Tên | Giới hạn | Mục đích |
|---|---|---|---|
| T1 | **Tra cứu nhanh** | Tối đa 1 màn hình, ≤ 200 từ | Trả lời trong lúc đang họp hoặc đang kiểm tra |
| T2 | **Giải thích đầy đủ** | 500–1.500 từ | Hiểu bản chất, chuẩn bị nội dung làm việc |
| T3 | **Tham chiếu chuyên sâu** | Không giới hạn | Danh mục điều khoản, ánh xạ chéo, tài liệu gốc |

> **Ràng buộc:** T1 của mọi chủ đề phải hoàn thành trước khi bắt đầu T2 của bất kỳ chủ đề nào. Một kho tri thức phủ rộng ở mức nông có giá trị sử dụng cao hơn một kho sâu nhưng khuyết nhiều mảng.

---

## 6. Quản lý nguồn và vòng đời hiệu lực văn bản

### 6.1. Trạng thái hiệu lực

| Mã | Yêu cầu |
|---|---|
| FR-E01 | Trường `status` với các giá trị: `còn hiệu lực`, `hết hiệu lực`, `hiệu lực một phần`, `chưa có hiệu lực`, `dự thảo`, `chưa xác minh` |
| FR-E02 | Với `hiệu lực một phần`: lưu **danh sách điều/khoản đã bị bãi bỏ hoặc sửa đổi**, kèm văn bản gây ra thay đổi đó. Đây là yêu cầu bắt buộc, không phải tùy chọn — xem ví dụ Mục 1.2 |
| FR-E03 | Với mỗi điều khoản có hiệu lực theo mốc riêng, lưu `effectiveFrom` ở **cấp điều khoản**, không chỉ cấp văn bản |
| FR-E04 | Quan hệ giữa văn bản: `thay thế`, `bị thay thế bởi`, `sửa đổi`, `bị sửa đổi bởi`, `bãi bỏ một phần`, `hướng dẫn`, `được hướng dẫn bởi` |

### 6.2. Cảnh báo và điều hướng

| Mã | Yêu cầu |
|---|---|
| FR-E05 | Mở một văn bản `hết hiệu lực` → hiển thị **dải cảnh báo nổi bật ở đầu trang**, không thể đóng, kèm liên kết trực tiếp tới văn bản thay thế |
| FR-E06 | Mở một điều khoản đã bị bãi bỏ trong văn bản còn hiệu lực → cảnh báo ở **cấp điều khoản** |
| FR-E07 | Sao chép nội dung từ văn bản hết hiệu lực → chèn tự động dòng cảnh báo vào nội dung được sao chép |
| FR-E08 | Nội dung `chưa xác minh` hiển thị nhãn phân biệt về màu và biểu tượng ở mọi nơi xuất hiện, kể cả trong kết quả tìm kiếm |

### 6.3. Xem theo thời điểm

| Mã | Yêu cầu |
|---|---|
| FR-E09 | Chức năng **"Xem quy định như tại ngày…"**: chọn một mốc thời gian trong quá khứ, hệ thống hiển thị tập quy định có hiệu lực tại đúng thời điểm đó |
| FR-E10 | Khi ở chế độ xem theo thời điểm, giao diện đổi màu nền rõ rệt để người dùng không nhầm với chế độ hiện hành |
| FR-E11 | Kết quả xem theo thời điểm xuất ra được kèm mốc thời gian, phục vụ hồ sơ kiểm tra một sự việc trong quá khứ |

### 6.4. Rà soát định kỳ

| Mã | Yêu cầu |
|---|---|
| FR-E12 | Mỗi bản ghi văn bản có `lastVerifiedAt` và `verifiedBy`; quá hạn rà soát (mặc định 90 ngày, xem Mục 23) thì tự chuyển nhãn cảnh báo |
| FR-E13 | Bảng điều khiển liệt kê văn bản quá hạn rà soát, sắp theo mức độ quan trọng |
| FR-E14 | Ghi nhận **dự thảo văn bản đang lấy ý kiến** với trạng thái `dự thảo`, không lẫn vào kết quả tra cứu mặc định nhưng tra được khi cần chuẩn bị trước |

---

## 7. Ma trận ánh xạ chéo khung kiểm soát

| Mã | Yêu cầu |
|---|---|
| FR-X01 | Thực thể `ControlRequirement` chuẩn hóa: mỗi yêu cầu của mỗi khung là một bản ghi có `frameworkId`, `clauseRef`, `title`, `summary` |
| FR-X02 | Thực thể `Mapping` nối hai `ControlRequirement`, có trường **`equivalence`**: `tương đương hoàn toàn` / `tương đương một phần` / `có liên quan` |
| FR-X03 | Mỗi `Mapping` bắt buộc có `rationale` (căn cứ diễn giải), `createdBy`, `approvedBy`, `approvedAt` — vì **ánh xạ là kết quả diễn giải chuyên môn, không phải sự thật khách quan** |
| FR-X04 | Giao diện: chọn một yêu cầu bất kỳ → hiển thị mọi yêu cầu tương đương ở các khung khác, nhóm theo mức độ tương đương |
| FR-X05 | Chế độ **"Một kiểm soát – nhiều khung"**: nhập mô tả một biện pháp kiểm soát thực tế của ngân hàng, hiển thị danh sách yêu cầu mà biện pháp đó đáp ứng ở mọi khung |
| FR-X06 | Cảnh báo khi một `Mapping` trỏ tới yêu cầu thuộc phiên bản chuẩn đã lỗi thời |
| FR-X07 | Xuất ma trận ra định dạng bảng tính để đưa vào hồ sơ kiểm tra |

> **Chiến lược xây dựng tăng dần (bắt buộc tuân theo):** đây là dữ liệu tốn công nhất của dự án. Không cố ánh xạ toàn bộ ngay. Thứ tự ưu tiên: **(1)** quy định NHNN ↔ ISO 27002; **(2)** quy định NHNN ↔ PCI DSS (chỉ phạm vi hệ thống thẻ); **(3)** ISO 27002 ↔ NIST CSF; **(4)** các cặp còn lại theo nhu cầu phát sinh. Ước lượng công sức phải được nêu trong Implementation Plan trước khi bắt đầu.

---

## 8. Yêu cầu người dùng

| Mã | Yêu cầu | Vai trò | Ưu tiên |
|---|---|---|---|
| YC-01 | Là trưởng nhóm ATTT, tôi muốn tra một yêu cầu và biết ngay nó thuộc điều khoản nào của văn bản nào | VT-01, 02, 03 | Cao |
| YC-02 | Là trưởng nhóm ATTT, tôi muốn **được cảnh báo rõ ràng** khi nội dung tôi đang xem đã hết hiệu lực | VT-01, 02, 03, 04 | Cao |
| YC-03 | Là trưởng nhóm ATTT, tôi muốn biết văn bản thay thế là gì mà không phải tự tìm | VT-01, 02, 03 | Cao |
| YC-04 | Là cán bộ kiểm tra, tôi muốn xem quy định **như tại thời điểm sự việc xảy ra**, không phải quy định hôm nay | VT-01, 03 | Cao |
| YC-05 | Là trưởng nhóm ATTT, tôi muốn biết một biện pháp kiểm soát đáp ứng đồng thời những khung nào | VT-01, 02, 03 | Cao |
| YC-06 | Là trưởng nhóm ATTT, tôi muốn **không bao giờ** nhận được nội dung quy phạm không có nguồn | Tất cả | Cao |
| YC-07 | Là cán bộ kiểm tra, tôi muốn có sẵn chương trình kiểm toán và câu hỏi phỏng vấn theo từng chủ đề | VT-03 | Cao |
| YC-08 | Là cán bộ kiểm tra, tôi muốn biết loại bằng chứng nào chứng minh được một yêu cầu và lấy ở đâu | VT-03 | Cao |
| YC-09 | Là trưởng nhóm ATTT, tôi muốn biết các nghĩa vụ tuân thủ định kỳ và thời hạn của chúng | VT-01, 03 | Cao |
| YC-10 | Là trưởng nhóm ATTT, khi có sự cố tôi muốn biết ngay **phải báo cho ai, trong bao lâu, theo mẫu nào** | VT-01, 02 | Cao |
| YC-11 | Là trưởng nhóm ATTT, tôi muốn tra cứu được bằng cả thuật ngữ tiếng Việt và tiếng Anh | Tất cả | Cao |
| YC-12 | Là chuyên viên ATTT, tôi muốn dùng được ứng dụng **khi ở trong trung tâm dữ liệu không có mạng** | VT-01, 02, 03 | Cao |
| YC-13 | Là trưởng nhóm ATTT, tôi muốn ghi lại cách diễn giải chính thức của ngân hàng cho các điều khoản mơ hồ | VT-01 | Trung bình |
| YC-14 | Là trưởng nhóm ATTT, tôi muốn giữ lại kinh nghiệm của nhóm để không mất khi người kỳ cựu nghỉ việc | VT-01, 02 | Trung bình |
| YC-15 | Là trưởng nhóm ATTT, tôi muốn biết một kiểu tấn công được đối phó bằng những kiểm soát nào | VT-01, 02 | Trung bình |
| YC-16 | Là quản trị viên, tôi muốn phân quyền chặt chẽ để nội dung nhạy cảm không lộ ra ngoài phạm vi cần biết | VT-06 | Cao |
| YC-17 | Là trưởng nhóm ATTT, tôi muốn biết ai đã đọc, sửa và xuất nội dung nhạy cảm nào | VT-01, 06 | Cao |
| YC-18 | Là biên tập viên, tôi muốn quy trình duyệt nội dung rõ ràng để không ai đưa nội dung sai vào kho | VT-05, 01 | Cao |

---

## 9. Yêu cầu chức năng theo module

### 9.1. Module Kho tri thức

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-K01 | Duyệt 93 chủ đề theo 9 nhóm; mỗi chủ đề có 3 tầng độ sâu (Mục 5.11) | YC-01 |
| FR-K02 | Mỗi chủ đề hiển thị danh sách **nguồn liên quan** kèm trạng thái hiệu lực ngay tại đầu trang | YC-01, YC-02 |
| FR-K03 | Liên kết chéo giữa các chủ đề; sơ đồ quan hệ chủ đề | YC-01 |
| FR-K04 | Mỗi mục nội dung phân loại rõ: `trích dẫn` / `diễn giải biên tập` / `kinh nghiệm nội bộ`, hiển thị bằng ba kiểu trình bày khác nhau | YC-06 |
| FR-K05 | Từ điển thuật ngữ song ngữ Việt – Anh, ánh xạ khái niệm, liên kết tới chủ đề liên quan | YC-11 |

### 9.2. Module Nguồn và hiệu lực

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-S01 | Toàn bộ FR-E01 → FR-E14 (Mục 6) | YC-02, YC-03, YC-04 |
| FR-S02 | Trang chi tiết văn bản: thuộc tính, lịch sử thay đổi, sơ đồ quan hệ với văn bản khác | YC-03 |
| FR-S03 | Mỗi bản ghi nguồn có `sourceTier` (Mục 4.4); chặn lưu nội dung quy phạm chỉ có nguồn hạng C | YC-06 |

### 9.3. Module Ánh xạ chéo

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-C01 | Toàn bộ FR-X01 → FR-X07 (Mục 7) | YC-05 |

### 9.4. Module Công cụ tác nghiệp kiểm tra

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-A01 | **Chương trình kiểm toán** theo chủ đề: mục tiêu, phạm vi, thủ tục kiểm toán, tiêu chí đánh giá | YC-07 |
| FR-A02 | **Ngân hàng câu hỏi phỏng vấn** theo chủ đề, kèm **dấu hiệu nhận biết câu trả lời không đáng tin** và câu hỏi đào sâu tiếp theo | YC-07 |
| FR-A03 | **Thư viện bằng chứng**: với mỗi yêu cầu kiểm soát — loại bằng chứng chứng minh được, đơn vị sở hữu, hệ thống chứa, tần suất thu thập | YC-08 |
| FR-A04 | **Lịch nghĩa vụ tuân thủ định kỳ**: nghĩa vụ, chu kỳ, thời hạn, đầu mối chịu trách nhiệm, căn cứ pháp lý | YC-09 |
| FR-A05 | **Cẩm nang sự cố**: theo loại sự cố — phải báo cho ai, thời hạn bao lâu, mẫu biểu nào, kèm **đồng hồ đếm ngược** tính từ thời điểm phát hiện | YC-10 |
| FR-A06 | **Bản đồ mối đe dọa – kiểm soát**: chọn một kỹ thuật tấn công, hiển thị các kiểm soát đang đối phó và các khung yêu cầu chúng | YC-15 |
| FR-A07 | Xuất chương trình kiểm toán và danh mục bằng chứng ra định dạng bảng tính, **có gán nhãn mật tự động** | YC-07, YC-08 |

### 9.5. Module Nội dung nội bộ *(chỉ triển khai nếu QĐ-2 chọn có)*

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-I01 | **Sổ đăng ký diễn giải chính thức**: điều khoản mơ hồ, cách diễn giải được thống nhất, người quyết định, thời điểm, căn cứ | YC-13 |
| FR-I02 | **Kho tri thức ngầm**: kinh nghiệm nhóm, phát hiện lặp lại qua nhiều kỳ, lưu ý khi kiểm tra từng đơn vị | YC-14 |
| FR-I03 | Ánh xạ chính sách nội bộ ↔ yêu cầu bên ngoài | YC-05 |
| FR-I04 | Toàn bộ nội dung module này bắt buộc gán nhãn mật và chịu kiểm soát truy cập Mục 13 | YC-16 |

### 9.6. Module Biên tập và kiểm duyệt

| Mã | Yêu cầu | Truy vết |
|---|---|---|
| FR-B01 | Quy trình trạng thái nội dung: `nháp` → `chờ duyệt` → `đã duyệt` → `cần rà soát lại` | YC-18 |
| FR-B02 | Nội dung ở trạng thái `nháp` và `chờ duyệt` **không xuất hiện** trong tra cứu của VT-04 | YC-18 |
| FR-B03 | Người tạo nội dung không được tự phê duyệt nội dung của mình | YC-18 |
| FR-B04 | Lịch sử phiên bản đầy đủ, so sánh được giữa hai phiên bản | YC-18 |

---

## 10. Yêu cầu về tính chính xác và chống thông tin sai

> Đây là nhóm yêu cầu quan trọng nhất của toàn bộ tài liệu.

| Mã | Yêu cầu |
|---|---|
| FR-T01 | **Cưỡng chế ở tầng schema:** kiểu dữ liệu của nội dung quy phạm bắt buộc có trường `sources[]` không rỗng. Bản ghi thiếu nguồn **không thể ghi vào cơ sở dữ liệu** — chặn bằng ràng buộc CSDL và kiểm tra schema, không phải bằng kiểm tra ở tầng giao diện |
| FR-T02 | **Cưỡng chế ở tầng kiểm thử:** kiểm thử tự động quét toàn bộ kho, thất bại nếu tồn tại nội dung quy phạm thiếu nguồn, có nguồn hạng C, hoặc trích dẫn tới điều khoản không tồn tại trong bản ghi văn bản tương ứng |
| FR-T03 | Ba kiểu trình bày phân biệt trực quan và **không thể nhầm lẫn**: trích dẫn nguyên văn (khối có viền và ký hiệu nguồn), diễn giải biên tập (nền khác, ghi rõ người biên tập), kinh nghiệm nội bộ (nhãn cảnh báo "không phải quy định") |
| FR-T04 | **Tuyên bố miễn trừ** hiển thị ở chân mọi trang nội dung và trên mọi bản xuất: ứng dụng là công cụ tra cứu tham khảo, không thay thế văn bản gốc |
| FR-T05 | Mọi thao tác sao chép/xuất nội dung tự động kèm: nguồn, trạng thái hiệu lực, thời điểm xuất, và cảnh báo nếu nội dung `chưa xác minh` hoặc `hết hiệu lực` |
| FR-T06 | **Nút "Xem văn bản gốc"** hiện diện trên mọi trích dẫn, dẫn tới nguồn hạng A |
| FR-T07 | Nội dung `chưa xác minh` bị **hạ thứ hạng** trong kết quả tìm kiếm và gắn nhãn nổi bật, không bị ẩn đi (người dùng vẫn cần biết là có) |
| FR-T08 | **Không sinh nội dung bằng mô hình ngôn ngữ trong sản phẩm chạy thật** ở phiên bản 1.0. Nếu QĐ-1 chọn có trợ lý hỏi đáp, trợ lý **chỉ được trả lời dựa trên nội dung đã duyệt trong kho và bắt buộc dẫn nguồn**; câu hỏi không có căn cứ trong kho phải trả lời "không có dữ liệu", tuyệt đối không suy đoán |
| FR-T09 | Nhật ký mọi lần nội dung bị đánh dấu sai/lỗi bởi người dùng, phục vụ cải thiện chất lượng kho |

---

## 11. Yêu cầu tìm kiếm và trải nghiệm tra cứu

*Truy vết: FR-Q01, Q02, Q03, Q06 đáp ứng **YC-11**; FR-Q07 đáp ứng **YC-12** (dùng được trong trung tâm dữ liệu không có mạng); FR-Q05 đáp ứng **YC-02**; FR-Q09 đáp ứng **YC-10**.*

| Mã | Yêu cầu |
|---|---|
| FR-Q01 | Tìm kiếm toàn văn hoạt động với **cả tiếng Việt có dấu, tiếng Việt không dấu, và tiếng Anh** cho cùng một khái niệm |
| FR-Q02 | Chuẩn hóa Unicode NFC và chấp nhận hai kiểu đặt dấu thanh (`hoà` = `hòa`) trước khi so khớp |
| FR-Q03 | Tìm theo **số hiệu văn bản** và theo **số điều khoản** trực tiếp (ví dụ gõ "09/2020 điều 25" ra đúng bản ghi kèm cảnh báo đã bãi bỏ) |
| FR-Q04 | Bộ lọc: nhóm chủ đề, khung chuẩn, trạng thái hiệu lực, tầng độ sâu, mức độ mật |
| FR-Q05 | Kết quả tìm kiếm hiển thị **trạng thái hiệu lực ngay trên từng dòng kết quả**, không phải mở ra mới biết |
| FR-Q06 | Từ khóa gợi ý và từ đồng nghĩa (ví dụ "PAM" ↔ "quản lý tài khoản đặc quyền") |
| FR-Q07 | **Hoạt động hoàn toàn ngoại tuyến** sau lần đồng bộ đầu: toàn bộ tầng tham chiếu được lưu cục bộ |
| FR-Q08 | Giao diện đọc được trên điện thoại; vùng chạm tối thiểu 48×48px |
| FR-Q09 | **Chế độ khẩn cấp**: một màn hình duy nhất truy cập nhanh cẩm nang sự cố (FR-A05) và danh bạ đầu mối |
| FR-Q10 | Lịch sử tra cứu gần đây và mục đánh dấu cá nhân |

---

## 12. Yêu cầu bảo mật của chính ứng dụng

> Sẽ là nghịch lý nghiêm trọng nếu ứng dụng của bộ phận ATTT không đạt chính các yêu cầu mà bộ phận đó đi kiểm tra.

### 12.1. Xác thực và phân quyền

| Mã | Yêu cầu |
|---|---|
| FR-P01 | Tích hợp hệ thống định danh tập trung của ngân hàng; **không xây dựng cơ chế mật khẩu riêng** |
| FR-P02 | Bắt buộc xác thực đa yếu tố với mọi vai trò có quyền đọc tầng nội bộ |
| FR-P03 | Phân quyền theo vai trò, nguyên tắc đặc quyền tối thiểu; quyền được cấp theo nhóm, không cấp trực tiếp cho cá nhân |
| FR-P04 | Rà soát quyền định kỳ; tài khoản không hoạt động quá ngưỡng bị vô hiệu tự động |
| FR-P05 | Phiên làm việc hết hạn sau thời gian không hoạt động; đăng xuất cưỡng bức khi đổi vai trò |

### 12.2. Nhật ký kiểm toán

*Truy vết: toàn bộ tiểu mục này đáp ứng **YC-17** (biết ai đã đọc, sửa, xuất nội dung nhạy cảm nào). Mục 12.1 và Mục 13.3 đáp ứng **YC-16**.*

| Mã | Yêu cầu |
|---|---|
| FR-P06 | Ghi nhật ký **mọi thao tác đọc, ghi, tìm kiếm và xuất** trên nội dung tầng nội bộ; với tầng tham chiếu ghi thao tác ghi và xuất |
| FR-P07 | Nhật ký **chỉ ghi thêm, không sửa/xóa được** từ trong ứng dụng; đẩy sang hệ thống quản lý nhật ký tập trung của ngân hàng |
| FR-P08 | Nhật ký chứa: chủ thể, thời điểm, hành động, đối tượng, kết quả, địa chỉ nguồn — **không chứa nội dung nhạy cảm** |
| FR-P09 | Cảnh báo hành vi bất thường: xuất khối lượng lớn, truy cập ngoài giờ, tra cứu trải rộng bất thường |

### 12.3. Bảo vệ dữ liệu

| Mã | Yêu cầu |
|---|---|
| FR-P10 | Mã hóa dữ liệu khi lưu trữ và khi truyền, theo tiêu chuẩn mật mã nội bộ của ngân hàng |
| FR-P11 | Quản lý bí mật qua hệ thống quản lý bí mật tập trung; **không có bí mật trong mã nguồn, tệp cấu hình hay biến môi trường dạng rõ** |
| FR-P12 | Mọi bản xuất ra tệp **tự động gán nhãn mật** ở đầu trang và chân trang |
| FR-P13 | Chặn hoặc cảnh báo thao tác sao chép hàng loạt nội dung tầng nội bộ |

### 12.4. Vòng đời phát triển an toàn

| Mã | Yêu cầu |
|---|---|
| FR-P14 | Quét mã tĩnh, quét phụ thuộc và quét bí mật trong quy trình tích hợp liên tục; xây dựng SBOM |
| FR-P15 | **Kiểm thử xâm nhập bắt buộc trước khi đưa vào vận hành**, và định kỳ theo chu kỳ do ngân hàng quy định |
| FR-P16 | Rà soát mã bởi người, độc lập với người viết; mã do tác tử sinh **không được hợp nhất khi chưa có người rà soát** |
| FR-P17 | Ứng dụng phải được **xác định cấp độ an toàn hệ thống thông tin** theo quy định hiện hành và lập hồ sơ đề xuất cấp độ tương ứng |
| FR-P18 | Đưa ứng dụng qua đúng thủ tục thẩm định ATTT nội bộ như mọi hệ thống khác — không tự miễn trừ vì là ứng dụng của chính bộ phận ATTT |

### 12.5. Triển khai

| Mã | Yêu cầu |
|---|---|
| FR-P19 | Triển khai **trong hạ tầng nội bộ ngân hàng**; không đưa lên dịch vụ đám mây công cộng trừ khi QĐ-3 quyết định khác và đã qua thẩm định rủi ro bên thứ ba |
| FR-P20 | Không kết nối ra Internet từ máy chủ ứng dụng, trừ kênh cập nhật nội dung có kiểm soát |
| FR-P21 | Sao lưu định kỳ và diễn tập phục hồi theo chuẩn nội bộ |

### 12.6. Mô hình đe dọa của chính ứng dụng

| Mã | Yêu cầu |
|---|---|
| FR-P22 | Lập mô hình đe dọa trước khi thiết kế chi tiết, **coi kho nội dung tầng nội bộ là tài sản giá trị cao nhất** |
| FR-P23 | Phân tích rõ kịch bản: người trong nội bộ lạm quyền đọc danh mục điểm yếu; kẻ tấn công chiếm tài khoản để lấy bản đồ kiểm soát; rò rỉ qua bản xuất |

### 12.7. An toàn của môi trường phát triển — ràng buộc riêng khi dùng Antigravity + Gemini

> **Đọc kỹ. Đây là ràng buộc mà một dự án phần mềm thông thường không có.**

Antigravity vận hành với mô hình trên hạ tầng nhà cung cấp. Mã nguồn, tệp cấu hình và nội dung tệp trong workspace **có thể được gửi ra ngoài phạm vi ngân hàng** trong quá trình tác tử làm việc.

| Mã | Yêu cầu |
|---|---|
| FR-P24 | **Trong toàn bộ giai đoạn phát triển, workspace chỉ được chứa dữ liệu mẫu tổng hợp.** Không đưa vào workspace: chính sách nội bộ thật, danh mục hệ thống thật, kết quả kiểm tra thật, danh sách điểm yếu thật, tên đơn vị/nhân sự thật |
| FR-P25 | Dữ liệu thật chỉ được nạp vào hệ thống **sau khi triển khai trong hạ tầng nội bộ**, qua kênh nhập liệu của ứng dụng, **không qua repo mã nguồn** |
| FR-P26 | Tệp `AGENTS.md` phải ghi rõ ràng buộc FR-P24 ở phần "tuyệt đối không làm", để tác tử không tự ý tạo dữ liệu mẫu mang nội dung thật |
| FR-P27 | **Xác nhận chính sách nội bộ của ngân hàng về việc sử dụng công cụ lập trình có AI trên hạ tầng nhà cung cấp bên ngoài trước khi bắt đầu dự án.** Nếu chính sách chưa cho phép, dự án phải dừng ở bước này — xem QĐ-4 |
| FR-P28 | Bật chế độ yêu cầu phê duyệt cho thực thi terminal; không dùng chế độ tự động hoàn toàn |
| FR-P29 | Mọi phụ thuộc do tác tử đề xuất cài đặt phải được người phê duyệt và quét bảo mật trước khi thêm vào dự án |
| FR-P30 | Coi mã do tác tử sinh ra là **chưa tin cậy** cho tới khi có người rà soát — đặc biệt với mã xử lý xác thực, phân quyền và ghi nhật ký |

---

## 13. Phân loại dữ liệu và kiểm soát truy cập

### 13.1. Hai tầng nội dung

| Tầng | Nội dung | Mức mật | Rủi ro nếu lộ |
|---|---|---|---|
| **Tham chiếu** | Văn bản pháp quy, chuẩn mực, kiến thức kỹ thuật, từ điển thuật ngữ | Nội bộ | Thấp — phần lớn là tri thức công khai |
| **Nội bộ** | Chính sách nội bộ, danh mục hệ thống, diễn giải chính thức, tri thức ngầm, thư viện bằng chứng gắn hệ thống thật | Mật / Tối mật | **Rất cao** |

> **Cảnh báo trọng yếu:** một danh mục điểm yếu chưa khắc phục, hoặc một bản đồ kiểm soát chi tiết theo hệ thống, tập trung tại một nơi **chính là bản đồ tấn công hoàn hảo vào ngân hàng**. Giá trị của nó với kẻ tấn công cao hơn nhiều so với giá trị tra cứu hằng ngày với người dùng hợp pháp.

### 13.2. Khuyến nghị về phạm vi phiên bản 1.0

**Khuyến nghị: phiên bản 1.0 chỉ triển khai tầng tham chiếu.** Lý do:

- Giá trị lớn nhất mà người dùng cần ngay (tra cứu quy định, cảnh báo hiệu lực, ánh xạ chéo) **nằm hoàn toàn ở tầng tham chiếu**.
- Tầng nội bộ làm mức độ nhạy cảm của toàn hệ thống tăng vọt, kéo theo yêu cầu bảo mật, thẩm định và vận hành nặng hơn nhiều — có thể làm dự án không bao giờ ra được bản dùng thật.
- Sau khi tầng tham chiếu chạy ổn định và mô hình phân quyền đã được kiểm chứng, việc bổ sung tầng nội bộ ở phiên bản 2.0 sẽ an toàn hơn nhiều.

**Đây là QĐ-2 ở Mục 23 — cần người dùng chốt.**

### 13.3. Kiểm soát truy cập

| Mã | Yêu cầu |
|---|---|
| FR-D01 | Mỗi bản ghi nội dung có trường `classification` bắt buộc |
| FR-D02 | Kiểm soát truy cập áp dụng ở **tầng dữ liệu**, không chỉ ẩn ở giao diện |
| FR-D03 | Kết quả tìm kiếm lọc theo quyền **trước khi** trả về, không trả về rồi ẩn |
| FR-D04 | Nguyên tắc cần-mới-biết: quyền đọc tầng nội bộ cấp theo phạm vi công việc cụ thể, có thời hạn, rà soát định kỳ |
| FR-D05 | Không có vai trò nào mặc nhiên đọc được toàn bộ tầng nội bộ, kể cả quản trị hệ thống (VT-06) |

---

## 14. Yêu cầu phi chức năng

| Mã | Yêu cầu | Chỉ tiêu đo được |
|---|---|---|
| NFR-01 | Tốc độ tra cứu | Kết quả tìm kiếm trả về **dưới 500ms** với kho 10.000 mục nội dung, trên thiết bị tầm trung |
| NFR-02 | Thời gian tới câu trả lời | Từ lúc mở ứng dụng tới lúc hiển thị nội dung T1 của một chủ đề: **dưới 5 giây** |
| NFR-03 | Hoạt động ngoại tuyến | **100%** tầng tham chiếu tra cứu được khi không có kết nối mạng |
| NFR-04 | Tương thích thiết bị | Bố cục đúng từ **360px đến 1440px**; vùng chạm ≥ 48×48px |
| NFR-05 | Tính toàn vẹn nguồn | **0** bản ghi nội dung quy phạm thiếu nguồn hoặc chỉ có nguồn hạng C; kiểm thử tự động canh, thất bại nếu vi phạm |
| NFR-06 | Độ tươi của dữ liệu pháp lý | **100%** văn bản có `lastVerifiedAt` trong vòng chu kỳ rà soát; quá hạn hiển thị cảnh báo tự động |
| NFR-07 | Khả năng kiểm toán | **100%** thao tác đọc/ghi/xuất trên tầng nội bộ được ghi nhật ký bất biến |
| NFR-08 | Khả năng mở rộng nội dung | Thêm 1 chủ đề hoặc 1 văn bản chỉ cần thêm dữ liệu; **0** dòng thay đổi trong mã giao diện |
| NFR-09 | Khả dụng | Mục tiêu khả dụng theo chuẩn hệ thống nội bộ tương ứng cấp độ được xác định tại FR-P17 |
| NFR-10 | Sao lưu và phục hồi | Đạt chỉ tiêu RTO/RPO do ngân hàng quy định cho cấp độ hệ thống tương ứng; diễn tập phục hồi tối thiểu 1 lần/năm |

---

## 15. Kiến trúc kỹ thuật

### 15.1. Nguyên tắc

- **Ưu tiên đơn giản và kiểm chứng được** hơn hiện đại. Đây là hệ thống nội bộ quy mô vài chục người dùng, không phải nền tảng quy mô lớn.
- **Tách bạch lớp nội dung, lớp logic và lớp giao diện.** Nội dung là dữ liệu, không nằm trong mã.
- **Logic kiểm chứng nguồn và tính hiệu lực là module thuần, có kiểm thử riêng**, không phụ thuộc khung giao diện.
- **Ngoại tuyến là mặc định, đồng bộ là bổ sung** — ngược với kiến trúc web thông thường.

### 15.2. Đề xuất công nghệ

| Thành phần | Đề xuất | Ghi chú |
|---|---|---|
| Giao diện | Ứng dụng web dạng SPA, TypeScript | Cài được lên máy như PWA để dùng ngoại tuyến |
| Lưu trữ cục bộ | IndexedDB | Phục vụ NFR-03 |
| Tìm kiếm | Chỉ mục toàn văn cục bộ có hỗ trợ tiếng Việt | Chạy được ngoại tuyến; xử lý FR-Q01, Q02 |
| Máy chủ ứng dụng | Dịch vụ nội bộ, kiến trúc đơn khối | Không cần vi dịch vụ ở quy mô này |
| Cơ sở dữ liệu | CSDL quan hệ có ràng buộc toàn vẹn mạnh | Cưỡng chế FR-T01 ở tầng CSDL |
| Xác thực | Tích hợp hệ thống định danh tập trung của ngân hàng | FR-P01 |
| Kiểm thử | Kiểm thử đơn vị cho lõi; kiểm thử đầu-cuối cho luồng tra cứu | Tận dụng browser-in-the-loop của Antigravity |

**Lựa chọn khung giao diện, ngôn ngữ máy chủ và loại CSDL cụ thể cần phù hợp với chuẩn công nghệ nội bộ của ngân hàng** — đây là QĐ-3 ở Mục 23.

### 15.3. Đồng bộ nội dung

Nội dung được biên tập ở môi trường trung tâm, phân phối xuống máy người dùng theo gói có ký số. Máy người dùng **chỉ đọc**, không sửa nội dung tầng tham chiếu. Xác minh chữ ký trước khi áp dụng gói cập nhật.

---

## 16. Mô hình dữ liệu

| Thực thể | Trường chính | Ghi chú |
|---|---|---|
| `Topic` | `id` (PL/CM/QT/KT/VH/NH/KG/CC/MN-xx), `group`, `title`, `titleEn`, `tier1`, `tier2`, `tier3`, `relatedTopicIds[]` | 93 bản ghi |
| `LegalDocument` | `id`, `docNumber`, `title`, `issuer`, `issuedDate`, `effectiveFrom`, **`status`**, `sourceTier`, `officialUrl`, `lastVerifiedAt`, `verifiedBy` | FR-E01 |
| `DocumentArticle` | `documentId`, `articleRef`, `text`, `effectiveFrom`, **`repealedBy?`**, **`repealedDate?`** | FR-E02, E03 — hiệu lực ở **cấp điều khoản** |
| `DocumentRelation` | `fromDocId`, `toDocId`, `relationType`, `scope?` | FR-E04 |
| `Framework` | `id`, `name`, `version`, `publisher`, `isCopyrighted` | `isCopyrighted` chi phối FR-N02 |
| `ControlRequirement` | `frameworkId`, `clauseRef`, `title`, `summary`, `sourceTier` | FR-X01 |
| `Mapping` | `fromReqId`, `toReqId`, **`equivalence`**, **`rationale`**, `createdBy`, `approvedBy`, `approvedAt` | FR-X02, X03 |
| `ContentBlock` | `topicId`, `tier`, **`kind`** (`trích dẫn`/`diễn giải`/`kinh nghiệm`), `body`, **`sources[]`** (không rỗng với `kind` quy phạm), `classification`, `status`, `version` | FR-T01, FR-K04, FR-B01 |
| `Term` | `vi`, `en`, `abbr?`, `definition`, `topicIds[]` | FR-K05 |
| `AuditProgram` | `topicId`, `objective`, `scope`, `procedures[]`, `criteria[]` | FR-A01 |
| `InterviewQuestion` | `topicId`, `question`, `redFlags[]`, `followUps[]` | FR-A02 |
| `EvidenceItem` | `requirementId`, `evidenceType`, `ownerUnit`, `sourceSystem`, `frequency` | FR-A03 |
| `ComplianceObligation` | `title`, `cycle`, `deadlineRule`, `ownerUnit`, `legalBasisId` | FR-A04 |
| `IncidentPlaybook` | `incidentType`, `reportTo[]`, **`deadlineHours`**, `templateRef`, `legalBasisId` | FR-A05 |
| `OfficialInterpretation` *(tầng nội bộ)* | `articleRef`, `interpretation`, `decidedBy`, `decidedAt`, `rationale` | FR-I01 |
| `TribalNote` *(tầng nội bộ)* | `topicId`, `note`, `author`, `classification` | FR-I02 |
| `AuditLogEntry` | `actor`, `timestamp`, `action`, `objectRef`, `result`, `sourceIp` | FR-P06→P08; chỉ ghi thêm |

---

## 17. Cấu trúc thư mục

```
project-root/
├── URD-bach-khoa-attt-ngan-hang.md
├── AGENTS.md                      # cấu hình tác tử — ghi rõ FR-P24, FR-P26
├── GEMINI.md                      # ngữ cảnh dự án cho Gemini
├── src/
│   ├── core/                      # LOGIC THUẦN — có kiểm thử riêng
│   │   ├── source-validator/      # FR-T01, T02  ← XÂY TRƯỚC TIÊN
│   │   ├── effectivity/           # FR-E01→E14, gồm xem theo thời điểm
│   │   ├── mapping/               # FR-X01→X07
│   │   ├── search/                # FR-Q01→Q06, chuẩn hóa tiếng Việt
│   │   └── classification/        # FR-D01→D05
│   ├── data/
│   │   ├── schema/                # ràng buộc toàn vẹn, cưỡng chế FR-T01
│   │   └── migrations/
│   ├── content/                   # DỮ LIỆU MẪU TỔNG HỢP — xem FR-P24
│   │   ├── topics/  documents/  frameworks/  mappings/  terms/
│   │   └── audit-tools/
│   ├── security/                  # xác thực, phân quyền, nhật ký kiểm toán
│   ├── ui/  pages/  components/
│   └── server/
├── scripts/
│   └── validate/                  # script kiểm tra toàn vẹn nguồn (FR-T02)
├── tests/
│   ├── unit/                      # source-validator, effectivity, search
│   ├── integration/               # phân quyền, nhật ký
│   └── e2e/                       # luồng tra cứu, cảnh báo hiệu lực
└── docs/
    ├── adr/                       # quyết định kiến trúc
    ├── threat-model.md            # FR-P22
    └── editorial-guide.md         # Mục 18
```

---

## 18. Quy trình biên tập và kiểm duyệt nội dung

> Chất lượng sản phẩm này phụ thuộc vào quy trình con người nhiều hơn phụ thuộc vào mã.

### 18.1. Vai trò và trách nhiệm

| Vai trò | Trách nhiệm | Không được làm |
|---|---|---|
| Biên tập viên (VT-05) | Soạn nội dung, gắn nguồn, đề xuất ánh xạ | Tự phê duyệt nội dung mình soạn |
| Người phê duyệt (VT-01) | Kiểm tra tính chính xác, tính đầy đủ của nguồn, phê duyệt | Phê duyệt nội dung không có nguồn hạng A |
| Người rà soát định kỳ | Xác minh lại tình trạng hiệu lực theo chu kỳ | Bỏ qua văn bản quá hạn rà soát |
| **Người chịu trách nhiệm cuối** | Trưởng nhóm ATTT — chịu trách nhiệm về tính chính xác của toàn bộ kho | |

### 18.2. Quy trình

Nháp → tự kiểm theo danh mục → chờ duyệt → phê duyệt (người khác) → công bố → rà soát định kỳ → (nếu văn bản thay đổi) chuyển `cần rà soát lại`.

### 18.3. Danh mục tự kiểm trước khi gửi duyệt

- [ ] Mọi khẳng định quy phạm có nguồn hạng A, đúng số hiệu và điều/khoản
- [ ] Đã kiểm tra tình trạng hiệu lực của mọi văn bản được viện dẫn
- [ ] Phân biệt rõ trích dẫn / diễn giải / kinh nghiệm
- [ ] Không sao chép toàn văn tiêu chuẩn có bản quyền
- [ ] Đã gán `classification` đúng
- [ ] Nội dung T1 không vượt 200 từ

---

## 19. Kế hoạch xây dựng theo giai đoạn

| GĐ | Nội dung | Điều kiện hoàn thành |
|---|---|---|
| 0 | Xác nhận 4 quyết định Mục 23; **xác nhận chính sách dùng công cụ AI (FR-P27)**; khởi tạo dự án; viết `AGENTS.md` và `GEMINI.md` | `AGENTS.md` chứa đủ ràng buộc FR-P24, P26, P28 |
| 1 | **`core/source-validator` + schema cưỡng chế nguồn + kiểm thử** | Không thể ghi nội dung quy phạm thiếu nguồn vào CSDL — chứng minh bằng test |
| 2 | **`core/effectivity`** gồm trạng thái, quan hệ văn bản, xem theo thời điểm | **Ca kiểm thử Mục 1.2 phải đạt**: biểu diễn đúng TT 09/2020 còn hiệu lực nhưng Điều 25 bị bãi bỏ bởi TT 50/2024 |
| 3 | Nhập nội dung T1 cho toàn bộ 93 chủ đề + bản ghi văn bản đã xác minh ở Mục 4.1 | Tra cứu được mọi chủ đề ở mức T1; mọi mục `CHƯA XÁC MINH` hiển thị đúng nhãn |
| 4 | `core/search` + giao diện tra cứu + ngoại tuyến | Tìm bằng tiếng Việt có dấu/không dấu/tiếng Anh; hoạt động khi ngắt mạng |
| 5 | Bảo mật ứng dụng: xác thực, phân quyền, nhật ký kiểm toán, mô hình đe dọa | Kiểm thử phân quyền ở tầng dữ liệu đạt; nhật ký bất biến hoạt động |
| 6 | `core/mapping` + ma trận ánh xạ chéo theo thứ tự ưu tiên Mục 7 | Cặp ưu tiên (1) hoàn thành và được phê duyệt |
| 7 | Công cụ tác nghiệp kiểm tra (FR-A01→A07) | Xuất được chương trình kiểm toán có gán nhãn mật |
| 8 | Nội dung T2, T3 cho các nhóm ưu tiên | Đạt mục tiêu nội dung đã thống nhất |
| 9 | **Kiểm thử xâm nhập + thẩm định ATTT nội bộ + xác định cấp độ hệ thống** | Đạt yêu cầu FR-P15, P17, P18 trước khi vận hành |
| 10 | *(Nếu QĐ-2 chọn có)* Tầng nội bộ | Kiểm soát truy cập và nhật ký đã được kiểm chứng ở GĐ 5 |

---

## 20. Tiêu chí nghiệm thu phiên bản 1.0

- [ ] **Không thể** ghi nội dung quy phạm thiếu nguồn vào CSDL (chứng minh bằng kiểm thử)
- [ ] Kiểm thử toàn vẹn nguồn chạy xanh: **0** bản ghi thiếu nguồn hoặc chỉ có nguồn hạng C
- [ ] **Ca kiểm thử Mục 1.2 đạt**: biểu diễn đúng trạng thái hiệu lực một phần
- [ ] Mở văn bản hết hiệu lực → cảnh báo không thể đóng + liên kết văn bản thay thế
- [ ] Chức năng "Xem quy định như tại ngày…" hoạt động và có phân biệt giao diện rõ rệt
- [ ] Mọi nội dung `CHƯA XÁC MINH` hiển thị nhãn ở mọi nơi, kể cả kết quả tìm kiếm
- [ ] Tra cứu được toàn bộ 93 chủ đề ở mức T1
- [ ] Tìm kiếm hoạt động với tiếng Việt có dấu, không dấu và tiếng Anh; đạt NFR-01
- [ ] **Hoạt động đầy đủ khi ngắt mạng hoàn toàn**
- [ ] Phân quyền cưỡng chế ở tầng dữ liệu; kết quả tìm kiếm lọc trước khi trả về
- [ ] Nhật ký kiểm toán bất biến, đẩy được sang hệ thống tập trung
- [ ] Mọi bản xuất có nhãn mật, nguồn, trạng thái hiệu lực và thời điểm xuất
- [ ] Tuyên bố miễn trừ hiển thị ở mọi trang nội dung và mọi bản xuất
- [ ] **Không có bí mật trong mã nguồn**; SBOM đã lập
- [ ] **Đã kiểm thử xâm nhập và khắc phục phát hiện mức cao trở lên**
- [ ] Đã xác định cấp độ an toàn hệ thống thông tin và lập hồ sơ tương ứng
- [ ] **Workspace phát triển không chứa dữ liệu thật nào** (rà soát thủ công trước khi bàn giao)

---

## 21. Ngoài phạm vi phiên bản 1.0

- Tự động thu thập và cập nhật văn bản pháp quy từ nguồn bên ngoài (rủi ro nhập sai cao; cần con người xác minh)
- Sinh nội dung tra cứu bằng mô hình ngôn ngữ trong sản phẩm chạy thật
- Tích hợp trực tiếp với hệ thống quản lý rủi ro, GRC hay hệ thống theo dõi khắc phục
- Quản lý quy trình kiểm toán đầu-cuối (đây là chức năng của hệ thống GRC, không phải của từ điển tra cứu)
- Lưu trữ bằng chứng kiểm toán thật (chỉ lưu **mô tả loại bằng chứng**, không lưu bằng chứng)
- Truy cập từ bên ngoài mạng ngân hàng
- Đa ngôn ngữ ngoài Việt – Anh

---

## 22. Rủi ro

| Rủi ro | Mức | Giảm thiểu |
|---|---|---|
| **Nội dung pháp lý sai hoặc đã hết hiệu lực được trích dẫn ra ngoài** | **Rất cao** | Toàn bộ Mục 10; cưỡng chế ở schema và kiểm thử; FR-T05 gắn cảnh báo vào bản xuất |
| **Tầng nội bộ bị lộ, trở thành bản đồ tấn công** | **Rất cao** | Khuyến nghị hoãn tầng nội bộ sang v2.0 (Mục 13.2); FR-D01→D05; FR-P22 |
| **Dữ liệu thật lọt vào workspace phát triển trên hạ tầng AI bên ngoài** | **Cao** | FR-P24→P27; rà soát thủ công trước bàn giao; ghi vào `AGENTS.md` |
| Vi phạm bản quyền tiêu chuẩn quốc tế | Cao | Chỉ lưu mã và tiêu đề biện pháp + diễn giải tự viết; test canh trường `isCopyrighted` |
| **Khối lượng nội dung 93 chủ đề × 3 tầng + ma trận ánh xạ vượt quá năng lực một nhóm nhỏ** | **Cao** | Ưu tiên T1 toàn bộ trước T2; ánh xạ theo 4 bước ưu tiên Mục 7; chấp nhận kho nông nhưng đủ rộng |
| Nội dung không được rà soát, dần lạc hậu | Cao | FR-E12, E13; NFR-06; quy trình Mục 18 |
| Ứng dụng bảo mật lại là điểm yếu bảo mật | Trung bình | Mục 12; FR-P18 không tự miễn trừ thẩm định |
| Người dùng coi ứng dụng là chân lý pháp lý | Trung bình | FR-T04, FR-T06 |

---

## 23. Câu hỏi còn mở — cần chốt trước khi khởi tạo dự án

### QĐ-1. Có trợ lý hỏi đáp bằng mô hình ngôn ngữ không?

| Hướng | Ưu điểm | Nhược điểm |
|---|---|---|
| (a) Không có | Loại bỏ hoàn toàn rủi ro sinh nội dung sai — rủi ro lớn nhất của dự án | Người dùng phải tự tìm bằng từ khóa |
| (b) Có, nhưng **chỉ trả lời dựa trên kho đã duyệt và bắt buộc dẫn nguồn** | Tra cứu tự nhiên hơn, phù hợp tình huống khẩn cấp | Vẫn còn rủi ro diễn giải sai nội dung có sẵn; cần hạ tầng mô hình đặt trong nội bộ ngân hàng |

**Khuyến nghị:** (a) cho phiên bản 1.0; cân nhắc (b) ở phiên bản sau, và **chỉ khi** mô hình chạy được trong hạ tầng nội bộ.

### QĐ-2. Có đưa tầng nội bộ vào phiên bản 1.0 không?

**Khuyến nghị: không** — xem phân tích Mục 13.2.

### QĐ-3. Nền tảng công nghệ và mô hình triển khai

Cần chọn khung giao diện, ngôn ngữ máy chủ, loại CSDL **phù hợp chuẩn công nghệ nội bộ** của ngân hàng, và xác nhận triển khai tại trung tâm dữ liệu nội bộ hay đám mây riêng.

### QĐ-4. Chính sách sử dụng công cụ lập trình có AI trên hạ tầng bên ngoài

**Bắt buộc xác nhận trước khi bắt đầu.** Nếu chính sách nội bộ chưa cho phép đưa mã nguồn của hệ thống nội bộ lên công cụ AI vận hành trên hạ tầng nhà cung cấp, dự án phải chuyển sang phương án khác (công cụ chạy hoàn toàn nội bộ, hoặc phát triển không dùng tác tử AI).

### Các thông số cần xác nhận

| # | Nội dung | Đề xuất mặc định |
|---|---|---|
| 1 | Chu kỳ rà soát hiệu lực văn bản (FR-E12) | 90 ngày; văn bản nhóm PL-07, PL-08, PL-11: 30 ngày |
| 2 | Ngưỡng cảnh báo xuất khối lượng lớn (FR-P09) | 50 bản ghi trong 1 giờ |
| 3 | Thời gian hết hạn phiên (FR-P05) | 15 phút không hoạt động |
| 4 | Nhân sự biên tập và phê duyệt nội dung | Cần chỉ định trước GĐ 3 |
| 5 | Danh mục văn bản pháp quy ngân hàng đang áp dụng | **Cần người dùng cung cấp** — đây là nguồn đáng tin hơn mọi kết quả tra cứu web |
| 6 | Chuẩn công nghệ nội bộ (khung, CSDL, hệ điều hành máy chủ) | Cần cung cấp |
| 7 | Bản quyền tiêu chuẩn quốc tế mà ngân hàng đã mua | Cần cung cấp để xác định phạm vi được phép trích |

---

## 24. Phụ lục — Nguồn tham khảo

**Đã tra cứu và xác minh trong quá trình soạn tài liệu:**
- Thông tư 09/2020/TT-NHNN — Công báo Chính phủ; Cổng thông tin văn bản pháp luật NHNN; Cổng thông tin Bộ TT&TT
- Thông tư 50/2024/TT-NHNN — bản dịch tiếng Anh đối chiếu điều khoản bãi bỏ; Hiệp hội Ngân hàng Việt Nam
- Tạp chí Thị trường Tài chính Tiền tệ (Hiệp hội Ngân hàng Việt Nam) — bài phân tích Thông tư 09 và hướng dẫn bảo đảm hoạt động liên tục
- Tạp chí Ngân hàng — bài về xác thực sinh trắc học và bảo vệ quyền lợi khách hàng dịch vụ trực tuyến

**Nguồn tra cứu chính thức cần dùng khi nhập liệu (hạng A):**
- Cơ sở dữ liệu quốc gia về văn bản pháp luật
- Cổng thông tin văn bản pháp luật Ngân hàng Nhà nước Việt Nam
- Công báo Chính phủ
- Bản tiêu chuẩn có bản quyền do ngân hàng mua

**Môi trường phát triển:**
- Tài liệu Google Antigravity (`antigravity.google/docs`) — cơ chế Agent Manager, Artifacts, `AGENTS.md`/`GEMINI.md`, chính sách thực thi

*Mọi mục đánh dấu `CHƯA XÁC MINH` trong tài liệu này phải được xác minh lại từ nguồn hạng A trước khi nhập vào ứng dụng. Tài liệu này không phải căn cứ pháp lý.*

— Hết tài liệu —
