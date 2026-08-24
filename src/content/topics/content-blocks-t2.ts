/**
 * ContentBlock tang T2 (giai thich day du, 500-1.500 tu — URD Muc 5.11).
 * Uu tien 12 chu de "kinh dien" da co so do minh hoa (src/ui/diagrams/
 * conceptDiagrams.tsx) de ket hop hinh anh + giai thich sau. Tuan thu quy
 * tac bat buoc o dau src/content/topics/content-blocks.ts.
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksT2: ContentBlock[] = [
  {
    id: "cb-cm01-t2",
    topicId: "CM-01",
    tier: "T2",
    kind: "dien_giai",
    body:
      "ISO/IEC 27001:2022 là tiêu chuẩn quốc tế quy định các YÊU CẦU (không phải khuyến nghị) để một tổ chức thiết lập, triển khai, duy trì và cải tiến liên tục một Hệ thống quản lý an toàn thông tin (Information Security Management System — ISMS). Một tổ chức có thể được đánh giá và cấp chứng nhận độc lập theo tiêu chuẩn này.\n\nCấu trúc tiêu chuẩn theo mô hình High-Level Structure chung của ISO (giống ISO 9001, ISO 22301...), gồm 10 điều khoản chính, trong đó các điều khoản 4–10 mang tính bắt buộc kiểm chứng khi đánh giá chứng nhận:\n\n— Điều 4 (Bối cảnh tổ chức): xác định các vấn đề nội bộ/bên ngoài ảnh hưởng tới ISMS, nhu cầu và mong đợi của các bên liên quan, và phạm vi áp dụng ISMS.\n— Điều 5 (Lãnh đạo): lãnh đạo cao nhất phải thể hiện cam kết rõ ràng, thiết lập chính sách an toàn thông tin, và phân công vai trò/trách nhiệm/quyền hạn.\n— Điều 6 (Hoạch định): đánh giá và xử lý rủi ro an toàn thông tin (thường dẫn chiếu ISO/IEC 27005 — xem CM-03), thiết lập mục tiêu an toàn thông tin đo lường được.\n— Điều 7 (Hỗ trợ): nguồn lực, năng lực nhân sự, nhận thức, truyền thông, thông tin dạng văn bản (tài liệu hóa).\n— Điều 8 (Vận hành): triển khai các kế hoạch đã hoạch định, thực hiện đánh giá rủi ro định kỳ.\n— Điều 9 (Đánh giá hiệu năng): giám sát, đo lường, đánh giá nội bộ (internal audit), và xem xét của lãnh đạo (management review).\n— Điều 10 (Cải tiến): xử lý sự không phù hợp, hành động khắc phục, cải tiến liên tục.\n\nToàn bộ cấu trúc này vận hành theo chu trình PDCA (Plan – Do – Check – Act) mô tả ở sơ đồ trên: hoạch định dựa trên rủi ro, triển khai kiểm soát, kiểm tra hiệu năng qua đánh giá nội bộ, và hành động cải tiến — lặp lại liên tục chứ không phải một dự án có điểm kết thúc.\n\nĐiều khoản 6.1.3 yêu cầu tổ chức xây dựng một Bản công bố áp dụng (Statement of Applicability — SoA), liệt kê các biện pháp kiểm soát tham chiếu tại Phụ lục A (đồng bộ với ISO/IEC 27002:2022 — xem CM-02) được áp dụng hay loại trừ, kèm lý do. Đây là tài liệu trung tâm kết nối giữa kết quả đánh giá rủi ro và các kiểm soát thực tế được triển khai.\n\nMột hiểu lầm phổ biến cần lưu ý: ISO/IEC 27001 KHÔNG quy định các kiểm soát kỹ thuật cụ thể phải làm như thế nào — đó là vai trò của ISO/IEC 27002 (hướng dẫn) hoặc các chuẩn kỹ thuật khác (NIST SP 800-53, CIS Controls...). ISO/IEC 27001 quy định KHUNG QUẢN LÝ để tổ chức tự xác định, triển khai và duy trì các kiểm soát phù hợp với bối cảnh và rủi ro của chính mình.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt01-t2",
    topicId: "QT-01",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Xây dựng một Hệ thống quản lý an toàn thông tin (ISMS) — dù có theo đuổi chứng nhận ISO/IEC 27001:2022 chính thức hay không — bắt đầu từ ba câu hỏi nền tảng mà nhiều tổ chức bỏ qua vì vội triển khai kiểm soát kỹ thuật trước.\n\n**Phạm vi (scope):** ISMS áp dụng cho toàn bộ tổ chức hay chỉ một số đơn vị/hệ thống/địa điểm nhất định? Phạm vi hẹp giúp triển khai nhanh và tập trung nguồn lực, nhưng tạo ra 'vùng xám' — các hệ thống ngoài phạm vi không được quản lý rủi ro một cách hệ thống dù vẫn kết nối với hệ thống trong phạm vi. Văn bản phạm vi cần nêu rõ ranh giới (tổ chức, vật lý, công nghệ) và các phụ thuộc/giao diện với phần còn lại của tổ chức.\n\n**Bối cảnh tổ chức:** gồm hai nhóm yếu tố — bối cảnh bên ngoài (quy định pháp luật như Thông tư 09/2020/TT-NHNN và Thông tư 50/2024/TT-NHNN đối với ngân hàng tại Việt Nam — xem PL-07, PL-08; áp lực cạnh tranh; kỳ vọng của khách hàng và cơ quan quản lý) và bối cảnh bên trong (văn hóa tổ chức, cấu trúc quản trị, năng lực nhân sự, khẩu vị rủi ro). Xác định đúng bối cảnh giúp tránh sao chép máy móc một bộ kiểm soát 'mẫu' không phù hợp với đặc thù ngành ngân hàng.\n\n**Cam kết lãnh đạo:** đây là yếu tố quyết định thành bại nhiều hơn bất kỳ công cụ kỹ thuật nào. Cam kết cụ thể, không chỉ là ký duyệt chính sách, bao gồm: phân bổ ngân sách và nhân sự tương xứng với rủi ro đã xác định, tham gia xem xét định kỳ (management review) thay vì ủy quyền hoàn toàn, và truyền thông rõ ràng tới toàn tổ chức rằng an toàn thông tin là trách nhiệm chung chứ không chỉ của bộ phận CNTT/ATTT.\n\nMột sai lầm thường gặp khi triển khai ISMS là coi đây là dự án có điểm kết thúc (đạt chứng nhận rồi dừng lại). Bản chất ISMS là một hệ thống quản lý VẬN HÀNH LIÊN TỤC theo chu trình PDCA (xem sơ đồ và CM-01): mục tiêu, rủi ro và bối cảnh của tổ chức thay đổi theo thời gian, nên ISMS phải được xem xét và điều chỉnh định kỳ, không phải một tài liệu 'đóng băng' sau khi ban hành.\n\nVai trò và trách nhiệm (xem thêm QT-11) cần được phân công rõ ràng ngay từ giai đoạn này: ai chịu trách nhiệm cuối cùng về ISMS (thường là lãnh đạo cao nhất hoặc CISO được ủy quyền), ai vận hành hằng ngày, và ai đánh giá độc lập (thường gắn với mô hình ba tuyến phòng thủ — xem KG-01). Thiếu phân định rõ dẫn tới tình trạng phổ biến: mọi người nghĩ 'an toàn thông tin là việc của người khác'.",
    sources: [
      { type: "framework", refId: "iso27001" },
      { type: "legal_document", refId: "tt-50-2024-nhnn" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt03-t2",
    topicId: "QT-03",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Quản lý rủi ro an toàn thông tin là hoạt động trung tâm mà mọi kiểm soát khác đều nhằm phục vụ — không tổ chức nào có đủ nguồn lực để bảo vệ mọi thứ ở mức tối đa, nên phải ưu tiên dựa trên rủi ro thực tế. Vòng đời bốn bước ở sơ đồ trên (dựa trên cấu trúc chung của ISO/IEC 27005:2022 và hàm Identify/Govern của NIST CSF 2.0) triển khai chi tiết như sau.\n\n**1. Nhận diện rủi ro:** trước tiên cần một danh mục tài sản thông tin đủ đầy đủ (xem QT-05) — không thể quản lý rủi ro cho những gì chưa biết là mình có. Với mỗi tài sản (hoặc nhóm tài sản), xác định các mối đe dọa có thể tác động (tấn công mạng, lỗi con người, sự cố hạ tầng, rủi ro bên thứ ba...) và các điểm yếu có thể bị mối đe dọa khai thác. Nguồn thông tin cho bước này gồm: kết quả kiểm thử xâm nhập/quét điểm yếu (KT-10, KT-11), tình báo mối đe dọa (VH-05), và các sự cố đã xảy ra trong quá khứ.\n\n**2. Phân tích rủi ro:** ước lượng khả năng xảy ra (likelihood) và mức độ tác động (impact) nếu rủi ro hiện thực hóa, thường theo thang định tính (thấp/trung bình/cao) hoặc bán định lượng (điểm số). Mức rủi ro = khả năng × tác động. Điểm mấu chốt thường bị bỏ qua: tác động cần được đánh giá trên nhiều khía cạnh — tài chính, pháp lý/tuân thủ, uy tín, gián đoạn hoạt động — không chỉ tổn thất tiền trực tiếp.\n\n**3. Đánh giá rủi ro:** so sánh mức rủi ro đã phân tích với khẩu vị rủi ro (risk appetite — xem QT-04) mà tổ chức đã xác định trước. Đây là bước chuyển từ 'con số kỹ thuật' sang 'quyết định quản trị': rủi ro nào chấp nhận được, rủi ro nào bắt buộc phải xử lý ngay.\n\n**4. Xử lý rủi ro:** bốn lựa chọn chiến lược — (a) giảm thiểu (áp dụng kiểm soát để giảm khả năng hoặc tác động), (b) chuyển giao (mua bảo hiểm an ninh mạng, thuê ngoài kèm điều khoản trách nhiệm), (c) né tránh (ngừng hoạt động/dịch vụ tạo ra rủi ro đó), (d) chấp nhận có thời hạn (khi chi phí xử lý vượt quá lợi ích, kèm cơ chế theo dõi và thời hạn xem xét lại — xem QT-07).\n\nMột lỗi thiết kế phổ biến là coi quy trình này là hoạt động một lần rồi thôi (thường chỉ làm trước mỗi đợt kiểm toán). Trên thực tế, danh mục rủi ro cần được cập nhật khi: có hệ thống/dịch vụ mới, có thay đổi lớn về kiến trúc, có sự cố xảy ra (dù ở tổ chức khác cùng ngành), hoặc theo chu kỳ định kỳ tối thiểu hằng năm. Đầu ra chính của toàn bộ quy trình là sổ đăng ký rủi ro (risk register) — công cụ sống, không phải tài liệu nộp báo cáo một lần.",
    sources: [
      { type: "framework", refId: "iso27005" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm03-t2",
    topicId: "CM-03",
    tier: "T2",
    kind: "dien_giai",
    body:
      "ISO/IEC 27005:2022 (ấn bản thứ 4) là tiêu chuẩn hướng dẫn quản lý rủi ro an toàn thông tin, được tái cấu trúc đáng kể so với bản 2018 để đồng bộ với ISO/IEC 27001:2022 và khung quản lý rủi ro chung ISO 31000:2018. Khác với ISO/IEC 27001 (quy định YÊU CẦU bắt buộc để chứng nhận), ISO/IEC 27005 là tài liệu HƯỚNG DẪN — không có mục tiêu để 'đạt chứng nhận theo 27005', mà để hỗ trợ tổ chức thực hiện điều khoản 6.1.2 và 8.2/8.3 của ISO/IEC 27001 (đánh giá và xử lý rủi ro).\n\nMột đóng góp quan trọng của bản 2022 là làm rõ khái niệm 'chủ sở hữu rủi ro' (risk owner) — cá nhân hoặc vai trò có thẩm quyền và trách nhiệm quản lý một rủi ro cụ thể, khác với 'chủ sở hữu tài sản' (asset owner). Trong thực tế triển khai tại một ngân hàng, một hệ thống (tài sản) có thể do đơn vị CNTT sở hữu về mặt vận hành, nhưng rủi ro nghiệp vụ phát sinh từ hệ thống đó lại thuộc trách nhiệm của đơn vị nghiệp vụ sử dụng hệ thống — sự phân tách này giúp tránh tình trạng 'rủi ro vô chủ'.\n\nTiêu chuẩn cũng nhấn mạnh quản lý rủi ro an toàn thông tin không phải hoạt động độc lập mà phải tích hợp vào quy trình quản lý rủi ro doanh nghiệp (Enterprise Risk Management) nói chung — tránh tình trạng bộ phận ATTT có một sổ đăng ký rủi ro riêng, không liên kết với sổ đăng ký rủi ro hoạt động/tín dụng/thị trường của toàn ngân hàng, dẫn tới lãnh đạo cấp cao khó có bức tranh rủi ro tổng thể.\n\nVề phương pháp, ISO/IEC 27005:2022 không áp đặt một phương pháp đánh giá rủi ro cụ thể (định tính, bán định lượng, hay định lượng đầy đủ như FAIR) — tổ chức tự chọn phương pháp phù hợp với năng lực và mức độ trưởng thành, miễn là áp dụng nhất quán để kết quả có thể so sánh được giữa các lần đánh giá và giữa các đơn vị trong tổ chức. Đây là điểm khác biệt quan trọng so với một số khung khác (như FAIR) vốn quy định một phương pháp định lượng cụ thể.\n\nLiên hệ thực tiễn ngành ngân hàng: khi một biện pháp kiểm soát được yêu cầu bởi quy định của NHNN (ví dụ trong Thông tư 09/2020/TT-NHNN hoặc Thông tư 50/2024/TT-NHNN — xem PL-07, PL-08), việc 'chấp nhận rủi ro' để không triển khai kiểm soát đó thường KHÔNG phải là một lựa chọn hợp lệ về mặt quản lý rủi ro — vì đây là nghĩa vụ tuân thủ bắt buộc, không phải quyết định dựa trên khẩu vị rủi ro nội bộ. Phân biệt rõ giữa 'rủi ro có thể quản lý theo khẩu vị nội bộ' và 'yêu cầu tuân thủ bắt buộc' là điều cần làm rõ ngay từ bước hoạch định.",
    sources: [
      { type: "framework", refId: "iso27005" },
      { type: "legal_document", refId: "tt-09-2020-nhnn" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kg01-t2",
    topicId: "KG-01",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Mô hình ba tuyến phòng thủ (Three Lines Model — tên gọi cập nhật của IIA từ 2020, thay cho tên cũ 'Three Lines of Defense') là khung phân định trách nhiệm quản trị rủi ro và kiểm soát nội bộ trong một tổ chức, đặc biệt phổ biến trong ngành ngân hàng do yêu cầu quản trị rủi ro chặt chẽ từ cơ quan quản lý.\n\n**Tuyến 1 — Đơn vị vận hành/sở hữu rủi ro:** đây là các đơn vị trực tiếp thực hiện nghiệp vụ và VẬN HÀNH kiểm soát hằng ngày — ví dụ đơn vị CNTT vận hành hệ thống, đơn vị kinh doanh xử lý giao dịch khách hàng. Tuyến 1 chịu trách nhiệm CHÍNH và ĐẦU TIÊN đối với rủi ro phát sinh từ hoạt động của mình — không phải 'bộ phận ATTT lo hết', mà chính đơn vị vận hành phải tự nhận diện và kiểm soát rủi ro trong phạm vi công việc của mình.\n\n**Tuyến 2 — Chức năng quản lý rủi ro và tuân thủ:** gồm các bộ phận như quản lý rủi ro ATTT, tuân thủ, quản lý rủi ro hoạt động. Tuyến 2 KHÔNG trực tiếp vận hành kiểm soát thay Tuyến 1, mà: thiết lập khung chính sách/tiêu chuẩn mà Tuyến 1 phải tuân theo, cung cấp công cụ và hướng dẫn phương pháp, giám sát và tổng hợp bức tranh rủi ro trên toàn tổ chức, và thách thức (challenge) các quyết định của Tuyến 1 khi cần. Một bộ phận ATTT trung tâm trong ngân hàng thường đóng vai trò Tuyến 2 khi làm chính sách/tiêu chuẩn, nhưng có thể đóng vai trò Tuyến 1 khi trực tiếp vận hành công cụ bảo mật (ví dụ SOC — xem VH-01) — ranh giới này cần được làm rõ trong mô hình quản trị cụ thể của từng tổ chức.\n\n**Tuyến 3 — Kiểm toán nội bộ:** đánh giá ĐỘC LẬP hiệu quả của cả Tuyến 1 và Tuyến 2, báo cáo trực tiếp cho cấp có thẩm quyền cao nhất (thường là Ủy ban Kiểm toán/Hội đồng quản trị), không chịu sự chỉ đạo nghiệp vụ từ Ban điều hành để bảo đảm tính độc lập. Đây chính là chức năng của module 'Kiểm tra, giám sát và kiểm toán' (nhóm KG) trong kho tri thức này.\n\nMột sai lệch mô hình thường gặp trong thực tế: Tuyến 2 dần dần bị kéo vào làm công việc vận hành thay Tuyến 1 (ví dụ bộ phận ATTT trực tiếp vá lỗi thay vì chỉ giám sát việc vá lỗi được thực hiện), khiến ranh giới trách nhiệm mờ nhạt và khi có sự cố, không rõ ai chịu trách nhiệm chính. Mô hình Three Lines Model bản cập nhật 2020 của IIA cũng nhấn mạnh vai trò của Hội đồng quản trị như một lớp quản trị tổng thể phía trên cả ba tuyến, và tầm quan trọng của sự phối hợp (không phải cô lập) giữa ba tuyến để tránh chồng chéo hoặc bỏ sót.",
    sources: [{ type: "framework", refId: "cobit" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-qt02-t2",
    topicId: "QT-02",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Một hệ thống quản lý an toàn thông tin trưởng thành cần một hệ thống tài liệu phân tầng rõ ràng — sự nhầm lẫn giữa các tầng (ví dụ viết một 'chính sách' dài 40 trang liệt kê chi tiết kỹ thuật) là nguyên nhân phổ biến khiến tài liệu khó bảo trì và khó tuân thủ.\n\n**Chính sách (Policy):** văn bản cấp cao nhất, do lãnh đạo cao nhất phê duyệt, nêu ĐỊNH HƯỚNG và CAM KẾT của tổ chức đối với an toàn thông tin — trả lời câu hỏi 'tổ chức coi trọng điều gì và tại sao'. Chính sách nên tương đối ổn định theo thời gian (thay đổi không thường xuyên), ngắn gọn, và không chứa chi tiết kỹ thuật cụ thể (vì chi tiết kỹ thuật thay đổi nhanh hơn nhiều so với định hướng chiến lược).\n\n**Tiêu chuẩn (Standard):** cụ thể hóa chính sách thành các YÊU CẦU BẮT BUỘC, đo lường/kiểm tra được — ví dụ 'mật khẩu tài khoản đặc quyền phải luân chuyển tối đa mỗi X ngày' hoặc 'mọi kết nối từ xa phải qua xác thực đa yếu tố'. Tiêu chuẩn là cầu nối giữa định hướng (chính sách) và cách thực hiện (quy trình).\n\n**Quy trình (Procedure):** mô tả CÁC BƯỚC cụ thể để thực hiện một yêu cầu trong tiêu chuẩn — ai làm, làm như thế nào, theo trình tự nào. Quy trình thường gắn với một vai trò/bộ phận cụ thể và có thể khác nhau giữa các đơn vị miễn là đều đáp ứng cùng một tiêu chuẩn.\n\n**Hướng dẫn (Guideline):** khuyến nghị thực hành tốt, KHÔNG BẮT BUỘC tuân theo tuyệt đối — cung cấp gợi ý, ví dụ, hoặc phương án tham khảo khi quy trình không quy định chi tiết cho mọi tình huống có thể xảy ra.\n\nSự khác biệt quan trọng nhất giữa các tầng là MỨC ĐỘ BẮT BUỘC và TẦN SUẤT THAY ĐỔI: chính sách và tiêu chuẩn thường cần quy trình phê duyệt chặt chẽ hơn (có thể cần phê duyệt của lãnh đạo cấp cao hoặc hội đồng) và ít thay đổi; quy trình và hướng dẫn thay đổi thường xuyên hơn để thích ứng với công cụ/công nghệ mới và có thể được phê duyệt ở cấp quản lý thấp hơn. Thiết kế đúng luồng phê duyệt theo từng tầng giúp tổ chức vừa bảo đảm tính ổn định của định hướng chiến lược, vừa đủ linh hoạt để cập nhật chi tiết vận hành mà không cần trình lại toàn bộ hệ thống tài liệu mỗi khi có thay đổi nhỏ.\n\nMột thực hành tốt là gắn mỗi tài liệu ở tầng thấp hơn với đúng tài liệu ở tầng cao hơn mà nó cụ thể hóa (truy vết ngược — traceability), giúp khi rà soát dễ dàng trả lời câu hỏi 'quy trình này phục vụ yêu cầu tiêu chuẩn nào, và tiêu chuẩn đó phục vụ mục tiêu chính sách nào' — tránh tình trạng tài liệu tồn tại mà không rõ lý do hoặc không còn liên kết với mục tiêu ban đầu.",
    sources: [{ type: "framework", refId: "iso27001" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm07-t2",
    topicId: "CM-07",
    tier: "T2",
    kind: "dien_giai",
    body:
      "NIST Cybersecurity Framework (CSF) 2.0, công bố tháng 02/2024, là bản cập nhật lớn đầu tiên sau 10 năm kể từ phiên bản 1.1, với hai thay đổi quan trọng nhất: (1) mở rộng phạm vi áp dụng — không còn giới hạn ở hạ tầng trọng yếu (critical infrastructure) như các phiên bản trước mà áp dụng cho MỌI loại tổ chức, và (2) bổ sung hàm chức năng thứ sáu: Govern.\n\n**Sáu hàm chức năng (Functions):**\n\n— **Govern (Quản trị):** hàm MỚI và mang tính XUYÊN SUỐT — thiết lập, truyền thông và giám sát chiến lược, kỳ vọng và chính sách quản lý rủi ro an ninh mạng của tổ chức. Việc đưa Govern lên ngang hàng các hàm khác (thay vì ẩn trong Identify như CSF 1.1) phản ánh nhận thức rằng quản trị yếu là nguyên nhân gốc rễ của nhiều sự cố, không chỉ là vấn đề kỹ thuật thuần túy.\n— **Identify (Nhận diện):** hiểu rõ tài sản, rủi ro, và bối cảnh của tổ chức để quản lý rủi ro an ninh mạng đối với hệ thống, con người, tài sản, dữ liệu.\n— **Protect (Bảo vệ):** triển khai các biện pháp bảo đảm cung cấp dịch vụ quan trọng, bao gồm kiểm soát truy cập, đào tạo nhận thức, bảo vệ dữ liệu.\n— **Detect (Phát hiện):** xác định kịp thời sự xuất hiện của sự kiện an ninh mạng.\n— **Respond (Ứng phó):** hành động khi phát hiện sự cố an ninh mạng đã xảy ra.\n— **Recover (Khôi phục):** duy trì khả năng chống chịu và khôi phục năng lực/dịch vụ bị ảnh hưởng bởi sự cố.\n\nMỗi hàm được chia thành các Danh mục (Categories, tổng 22) và Danh mục con (Subcategories, tổng 106) — ví dụ hàm Protect có danh mục PR.AA (Identity Management, Authentication and Access Control). Một điểm khác biệt quan trọng so với ISO/IEC 27001: CSF 2.0 KHÔNG phải là tiêu chuẩn để 'chứng nhận' — đây là một khung tham chiếu tự nguyện, mô tả kết quả mong muốn (outcomes) chứ không quy định cách thức triển khai cụ thể, và các tổ chức thường dùng công cụ 'Hồ sơ' (Profile) để so sánh trạng thái hiện tại (Current Profile) với trạng thái mục tiêu (Target Profile), từ đó xác định khoảng cách cần thu hẹp.\n\nCSF 2.0 cũng giới thiệu các 'Community Profile' — hồ sơ tham chiếu do cộng đồng/ngành xây dựng cho bối cảnh cụ thể; ví dụ NIST SP 800-61 Revision 3 (xem CM-09) chính là một Community Profile áp dụng CSF 2.0 cho hoạt động ứng phó sự cố. Đối với ngân hàng, CSF 2.0 hữu ích như một 'ngôn ngữ chung' để đối chiếu và tổng hợp yêu cầu từ nhiều nguồn khác nhau (quy định NHNN, ISO 27001, PCI DSS...) về cùng sáu hàm chức năng, giúp lãnh đạo cấp cao có bức tranh tổng thể mà không cần đọc chi tiết từng chuẩn.",
    sources: [{ type: "framework", refId: "nist-csf" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-vh06-t2",
    topicId: "VH-06",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Ứng phó sự cố an toàn thông tin hiệu quả không chỉ là năng lực kỹ thuật mà còn là một QUY TRÌNH TỔ CHỨC rõ ràng — nhiều tổ chức có công cụ giám sát tốt nhưng vẫn phản ứng chậm vì thiếu quy trình phân loại và leo thang minh bạch.\n\nNIST SP 800-61 Revision 3 (hoàn thiện 04/2025, thay thế Revision 2 đã bị rút lại) thay đổi cách tiếp cận cơ bản: thay vì mô tả ứng phó sự cố như một vòng đời tuyến tính riêng biệt (Chuẩn bị → Phát hiện/Phân tích → Ngăn chặn/Diệt trừ/Khôi phục → Hoạt động sau sự cố như ở Revision 2), bản Revision 3 ÁNH XẠ các hoạt động ứng phó sự cố vào 5 trong 6 hàm của CSF 2.0 (Identify, Protect, Detect, Respond, Recover — xem sơ đồ và CM-07), nhấn mạnh rằng ứng phó sự cố không phải hoạt động tách biệt mà là một PHẦN của chương trình quản lý rủi ro an ninh mạng tổng thể của tổ chức.\n\n**Phân loại mức độ nghiêm trọng (severity classification):** đây là bước quyết định tốc độ và quy mô phản ứng. Tiêu chí phân loại thường kết hợp: phạm vi ảnh hưởng (một máy trạm hay toàn bộ hệ thống lõi), loại dữ liệu liên quan (dữ liệu công khai hay dữ liệu khách hàng/tài chính nhạy cảm), và khả năng ảnh hưởng tới tính liên tục dịch vụ. Một sai lầm phổ biến là phân loại dựa trên 'cảm tính' của người phát hiện đầu tiên thay vì tiêu chí đã định trước — dẫn tới sự cố nghiêm trọng bị đánh giá thấp ở giai đoạn đầu.\n\n**Ngưỡng leo thang (escalation threshold):** cần xác định trước — tại mức độ nghiêm trọng nào thì phải thông báo cho quản lý cấp nào, trong thời gian bao lâu. Ngưỡng này phải được LUYỆN TẬP (không chỉ viết trên giấy) vì trong tình huống thực tế, người xử lý ban đầu thường có xu hướng trì hoãn báo cáo lên cấp trên vì muốn tự giải quyết trước — điều này có thể làm mất thời gian phản ứng quý giá, đặc biệt khi có nghĩa vụ báo cáo có thời hạn với cơ quan quản lý (xem PL-11 — hiện CHƯA XÁC MINH số hiệu văn bản và thời hạn cụ thể tại Việt Nam, cần tra cứu riêng trước khi áp dụng).\n\n**Vai trò và trách nhiệm:** cần xác định rõ ai là 'Incident Commander' (người điều phối tổng thể, không nhất thiết là người có chuyên môn kỹ thuật sâu nhất) để tránh tình trạng nhiều người cùng ra quyết định mâu thuẫn trong lúc khủng hoảng, cũng như đầu mối truyền thông nội bộ/bên ngoài (xem VH-08 — quản lý khủng hoảng).\n\nMột thực hành thường bị bỏ qua nhưng có giá trị cao: giai đoạn 'hoạt động sau sự cố' (post-incident) — tổ chức họp rút kinh nghiệm không nhằm quy trách nhiệm cá nhân mà để cải thiện quy trình, cập nhật lại ngưỡng phát hiện/leo thang, và đưa phát hiện vào chương trình đào tạo. Thiếu bước này khiến tổ chức lặp lại cùng một loại sự cố nhiều lần mà không rút ra bài học hệ thống.",
    sources: [{ type: "framework", refId: "nist-sp-800-61" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm09-t2",
    topicId: "CM-09",
    tier: "T2",
    kind: "dien_giai",
    body:
      "NIST SP 800-61 là tài liệu hướng dẫn xử lý sự cố an ninh mạng được sử dụng rộng rãi nhất trong ngành, nhưng bản Revision 3 (04/2025) đánh dấu một thay đổi triết lý quan trọng so với Revision 2 (đã bị chính thức rút lại từ 04/2025) mà người tra cứu cần nắm rõ để không áp dụng nhầm tài liệu cũ.\n\nRevision 2 (ban hành 2012, sử dụng phổ biến trong hơn một thập kỷ) mô tả một vòng đời 4 giai đoạn tuyến tính: Chuẩn bị (Preparation) → Phát hiện và Phân tích (Detection & Analysis) → Ngăn chặn, Diệt trừ và Khôi phục (Containment, Eradication & Recovery) → Hoạt động sau sự cố (Post-Incident Activity). Mô hình này dễ hiểu và được nhiều tổ chức, kể cả các chứng chỉ chuyên môn (CISSP, GCIH...), dùng làm khung tham chiếu chuẩn trong nhiều năm.\n\nRevision 3, có tên đầy đủ là 'Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile', từ bỏ vòng đời cứng nói trên. Thay vào đó, tài liệu trình bày ứng phó sự cố như một tập hợp HOẠT ĐỘNG được ánh xạ trực tiếp vào 5 hàm của CSF 2.0 (không dùng hàm Govern trực tiếp mà xem đó là nền tảng bao trùm — xem CM-07): Identify (nhận diện phạm vi/tác động), Protect (áp dụng biện pháp ngăn lan rộng ngay trong lúc xử lý), Detect (phát hiện và phân tích), Respond (các hành động ứng phó), Recover (khôi phục dịch vụ).\n\nLý do thay đổi: NIST nhận thấy mô hình tuyến tính cũ khiến nhiều tổ chức triển khai ứng phó sự cố như một 'quy trình biệt lập', tách rời khỏi chương trình quản lý rủi ro an ninh mạng tổng thể — trong khi thực tế, chuẩn bị tốt cho ứng phó sự cố (như duy trì danh mục tài sản, phân loại dữ liệu, kiểm soát truy cập) chính là các hoạt động Identify/Protect đã và đang thực hiện hằng ngày, không phải hoạt động riêng chỉ kích hoạt khi có sự cố.\n\nVề mặt thực hành, sự thay đổi này có ý nghĩa: một tổ chức đã áp dụng CSF 2.0 cho toàn bộ chương trình an ninh mạng có thể tích hợp trực tiếp năng lực ứng phó sự cố vào cùng một khung đo lường, thay vì duy trì hai hệ thống đánh giá song song (một cho 'quản lý rủi ro chung', một cho 'ứng phó sự cố'). Với tổ chức chưa áp dụng CSF, các khái niệm cốt lõi của Revision 2 (chuẩn bị, phát hiện, ngăn chặn, khôi phục, rút kinh nghiệm — xem VH-06) vẫn là kiến thức nền tảng hữu ích, chỉ khác ở cách tổ chức/trình bày.",
    sources: [
      { type: "framework", refId: "nist-sp-800-61" },
      { type: "framework", refId: "nist-csf" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cc01-t2",
    topicId: "CC-01",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Quản lý liên tục hoạt động kinh doanh (Business Continuity Management — BCM) thường bị nhầm lẫn với 'sao lưu dữ liệu' hoặc 'trung tâm dữ liệu dự phòng' — trên thực tế đây chỉ là MỘT PHẦN kỹ thuật của một chương trình rộng hơn nhiều, bao trùm cả con người và quy trình nghiệp vụ, không chỉ hệ thống CNTT.\n\nVòng đời BCM (dựa trên cấu trúc chung của ISO 22301) gồm năm bước lặp lại ở sơ đồ trên:\n\n**1. Phân tích tác động nghiệp vụ (Business Impact Analysis — BIA, xem CC-02):** xác định quy trình nghiệp vụ nào là TRỌNG YẾU (không thể gián đoạn quá một khoảng thời gian nhất định mà không gây tổn thất nghiêm trọng) và mức độ chấp nhận được của gián đoạn — đây là đầu vào quyết định cho toàn bộ các bước sau. Một sai lầm phổ biến là bỏ qua BIA và đi thẳng vào giải pháp kỹ thuật (ví dụ 'xây trung tâm dữ liệu dự phòng') mà không biết chính xác quy trình nào thực sự cần được bảo vệ ở mức độ nào — dẫn tới đầu tư sai chỗ, vừa tốn kém vừa không đủ cho quy trình thực sự trọng yếu.\n\n**2. Xây dựng chiến lược:** dựa trên kết quả BIA, xác định phương án ứng phó phù hợp — có thể là dự phòng nóng (hot site, chuyển đổi gần như tức thời), dự phòng ấm (warm site), dự phòng lạnh (cold site, khôi phục chậm hơn nhưng chi phí thấp hơn), hoặc quy trình thủ công thay thế tạm thời cho các nghiệp vụ không có hệ thống dự phòng.\n\n**3. Lập kế hoạch chi tiết:** cụ thể hóa chiến lược thành Kế hoạch liên tục hoạt động (Business Continuity Plan — BCP, tập trung vào nghiệp vụ) và Kế hoạch khôi phục sau thảm họa (Disaster Recovery Plan — DRP, tập trung vào hạ tầng CNTT — xem CC-03), gồm các bước cụ thể, danh sách liên hệ, và tiêu chí kích hoạt kế hoạch.\n\n**4. Diễn tập:** đây là bước phân biệt một chương trình BCM THỰC SỰ hiệu quả với một chương trình chỉ tồn tại trên giấy. Kế hoạch chưa từng diễn tập gần như chắc chắn có những giả định sai hoặc bước thiếu sót chỉ lộ ra khi thực hiện thật — ví dụ danh sách liên hệ khẩn cấp đã lỗi thời, hoặc quy trình giả định một hệ thống hỗ trợ vẫn hoạt động trong khi hệ thống đó thực ra phụ thuộc vào chính hạ tầng đang gặp sự cố.\n\n**5. Cải tiến:** cập nhật kế hoạch dựa trên bài học từ diễn tập (hoặc từ sự cố thực tế nếu có), và khi có thay đổi lớn về nghiệp vụ/hệ thống.\n\nĐối với ngân hàng tại Việt Nam, Công văn 1524/NHNN-CNTT (08/3/2023) hướng dẫn về sao lưu và bảo đảm hoạt động liên tục — đây là công văn hướng dẫn nghiệp vụ, không phải văn bản quy phạm pháp luật (xem chi tiết trong trang chủ đề), nhưng vẫn là tài liệu tham khảo thực hành hữu ích khi thiết kế chương trình BCM. Hai chỉ tiêu kỹ thuật cốt lõi cần xác định cho mỗi hệ thống trọng yếu là RTO (Recovery Time Objective — thời gian tối đa chấp nhận để khôi phục) và RPO (Recovery Point Objective — lượng dữ liệu tối đa chấp nhận mất) — xem chi tiết tại CC-04.",
    sources: [
      { type: "framework", refId: "iso22301" },
      { type: "legal_document", refId: "cv-1524-nhnn-cntt" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-kt12-t2",
    topicId: "KT-12",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Kiến trúc không tin cậy mặc định (Zero Trust Architecture — ZTA) theo NIST SP 800-207 (08/2020, vẫn là bản hiện hành) không phải một sản phẩm hay công nghệ đơn lẻ có thể 'mua và cài đặt', mà là một TẬP HỢP NGUYÊN TẮC KIẾN TRÚC làm thay đổi cách thiết kế kiểm soát truy cập — chuyển từ mô hình 'lâu đài và hào nước' (castle-and-moat: tin cậy mọi thứ bên trong ranh giới mạng nội bộ, phòng thủ tập trung ở biên) sang mô hình xác thực và cấp quyền cho TỪNG yêu cầu truy cập riêng lẻ, bất kể yêu cầu đó đến từ bên trong hay bên ngoài mạng.\n\n**Ba thành phần logic cốt lõi (xem sơ đồ):**\n\n— **Policy Engine (PE):** thành phần ra quyết định — dựa trên chính sách và dữ liệu đầu vào (danh tính người dùng, tình trạng bảo mật của thiết bị, vị trí, thời gian, hành vi lịch sử...) để quyết định CHO PHÉP hay TỪ CHỐI một yêu cầu truy cập cụ thể tới một tài nguyên cụ thể.\n— **Policy Administrator (PA):** thành phần thiết lập hoặc cắt phiên kết nối giữa chủ thể và tài nguyên, thực thi quyết định của Policy Engine (trong SP 800-207 gốc, PE và PA thường được mô tả cùng nhau như 'Policy Decision Point').\n— **Policy Enforcement Point (PEP):** thành phần thực thi thực tế tại đường truyền — cho phép, giám sát, và cuối cùng chấm dứt kết nối giữa chủ thể và tài nguyên theo quyết định của PA.\n\n**Bảy nguyên tắc nền tảng của Zero Trust (tóm lược từ SP 800-207):** (1) mọi nguồn dữ liệu và dịch vụ tính toán đều được coi là tài nguyên cần bảo vệ; (2) mọi liên lạc phải được bảo mật bất kể vị trí mạng; (3) quyền truy cập vào từng tài nguyên được cấp theo TỪNG PHIÊN riêng biệt, không phải cấp một lần rồi tin cậy mãi mãi; (4) quyền truy cập được xác định bởi chính sách động, dựa trên nhiều yếu tố ngữ cảnh (không chỉ danh tính tĩnh); (5) tổ chức giám sát và đo lường tính toàn vẹn/bảo mật của TẤT CẢ tài sản (kể cả tài sản không do tổ chức sở hữu, ví dụ thiết bị cá nhân — BYOD); (6) mọi xác thực và cấp quyền đều được thực hiện ĐỘNG và NGHIÊM NGẶT trước khi cho phép truy cập; (7) tổ chức thu thập càng nhiều thông tin càng tốt về trạng thái hiện tại của tài sản, hạ tầng mạng và giao tiếp để liên tục cải thiện chính sách.\n\nMột hiểu lầm phổ biến cần tránh: Zero Trust KHÔNG có nghĩa là 'không tin tưởng nhân viên' theo nghĩa văn hóa tổ chức, mà là về mặt KỸ THUẬT, hệ thống không mặc định coi một yêu cầu là hợp lệ chỉ vì nó đến từ 'bên trong mạng nội bộ'. Triển khai Zero Trust cũng KHÔNG phải việc làm một lần — NIST mô tả đây là một LỘ TRÌNH chuyển đổi dần dần (incremental), thường bắt đầu từ việc tăng cường xác thực đa yếu tố và vi phân đoạn mạng (micro-segmentation) cho các tài sản giá trị cao nhất, trước khi mở rộng ra toàn bộ tổ chức — không tổ chức nào chuyển đổi toàn bộ kiến trúc cùng lúc trong thực tế.",
    sources: [{ type: "framework", refId: "nist-sp-800-207" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-cm10-t2",
    topicId: "CM-10",
    tier: "T2",
    kind: "dien_giai",
    body:
      "NIST SP 800-207, công bố tháng 08/2020, là tài liệu chuẩn mực đầu tiên định nghĩa chính thức và có hệ thống khái niệm Zero Trust Architecture (ZTA) — trước đó, thuật ngữ 'Zero Trust' đã được các hãng công nghệ và nhà nghiên cứu (nổi bật là Forrester và Google với dự án BeyondCorp) sử dụng từ khoảng năm 2010, nhưng thiếu một định nghĩa kỹ thuật thống nhất mà các tổ chức có thể tham chiếu để đánh giá mức độ 'đạt Zero Trust' của mình.\n\nĐóng góp quan trọng nhất của SP 800-207 là tách bạch RÕ RÀNG giữa Zero Trust như một TẬP NGUYÊN TẮC (không gắn với công nghệ cụ thể) và các mô hình triển khai kỹ thuật cụ thể để hiện thực hóa các nguyên tắc đó — tài liệu mô tả ba phương án tiếp cận chính: dựa trên nâng cao quản lý định danh và truy cập (Enhanced Identity Governance), dựa trên vi phân đoạn mạng (Micro-Segmentation), và dựa trên hạ tầng mạng phần mềm hóa/chu vi được định nghĩa bằng phần mềm (Software Defined Perimeter). Ba phương án này không loại trừ nhau — hầu hết triển khai thực tế kết hợp cả ba ở các mức độ khác nhau.\n\nTài liệu cũng dành một phần quan trọng để mô tả các KỊCH BẢN TẤN CÔNG mà kiến trúc Zero Trust nhằm giảm thiểu, bao gồm: kẻ tấn công đã chiếm được một tài khoản hoặc thiết bị hợp lệ bên trong mạng (trường hợp mà mô hình 'lâu đài và hào nước' truyền thống gần như bất lực vì tin cậy mọi thứ bên trong ranh giới), và rủi ro từ chính hạ tầng quản lý Zero Trust (Policy Engine/Policy Administrator) — nếu thành phần này bị xâm phạm, toàn bộ hệ thống kiểm soát truy cập có thể bị vô hiệu hóa hoặc lợi dụng, nên bản thân hạ tầng Zero Trust cũng cần được bảo vệ ở mức cao nhất.\n\nMột hạn chế quan trọng cần lưu ý khi tra cứu: SP 800-207 mô tả Zero Trust ở mức KIẾN TRÚC/NGUYÊN TẮC, không cung cấp checklist triển khai chi tiết hay tiêu chí để 'chứng nhận' một hệ thống là Zero Trust — khác với các tiêu chuẩn có thể đánh giá chứng nhận như ISO/IEC 27001. Do đó, khi một nhà cung cấp giải pháp quảng cáo sản phẩm là 'Zero Trust-ready' hoặc 'đạt chuẩn Zero Trust', cần hiểu đây là cách diễn đạt marketing dựa trên các nguyên tắc của SP 800-207, không phải một chứng nhận chính thức có cơ quan cấp — điều đáng đánh giá là sản phẩm/kiến trúc đó hiện thực hóa được bao nhiêu trong bảy nguyên tắc nền tảng đã nêu (xem KT-12), không phải bản thân nhãn 'Zero Trust'.",
    sources: [{ type: "framework", refId: "nist-sp-800-207" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
