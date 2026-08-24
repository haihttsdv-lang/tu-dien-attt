/**
 * ContentBlock T2 cho 8 chu de PL vua duoc mo khoa (PL-01,02,03,04,05,09,
 * 10,11). Viet truc tiep (khong giao agent) vi tinh nhay cam phap ly cao,
 * tiep noi phong cach da thiet lap o content-blocks-t2-pl.ts (PL-06/07/08).
 *
 * CAP NHAT 2026-08-24 lan 2 (theo phan hoi nguoi dung): PL-01 va PL-02 viet
 * lai sau khi xac nhan Luat An ninh mang 116/2025/QH15 hop nhat va thay
 * the CA HAI luat cu, hieu luc 01/07/2026 (da qua). PL-10 viet lai vi QD
 * 2345/QD-NHNN da duoc thay bang TT50/2024 (nay da duoc TT77/2025 sua doi).
 */
import type { ContentBlock } from "../../data/schema/models";

export const contentBlocksT2PlNew: ContentBlock[] = [
  {
    id: "cb-pl01-t2",
    topicId: "PL-01",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Luật An toàn thông tin mạng (số 86/2015/QH13, thông qua 19/11/2015, hiệu lực 01/07/2016) từng là văn bản cấp luật đầu tiên và nền tảng của Việt Nam chuyên về an toàn thông tin mạng theo nghĩa kỹ thuật — khác với Luật An ninh mạng cũ (2018) vốn nghiêng về khía cạnh an ninh quốc gia/trật tự xã hội. Luật gồm các nhóm nội dung chính: bảo đảm an toàn thông tin mạng (trách nhiệm quản lý, bảo vệ thông tin cá nhân, bảo vệ hệ thống thông tin), mật mã dân sự, tiêu chuẩn/quy chuẩn kỹ thuật, kinh doanh trong lĩnh vực an toàn thông tin mạng, và phát triển nguồn nhân lực.\n\n**ĐÃ HẾT HIỆU LỰC — thay thế bởi Luật An ninh mạng 116/2025/QH15:** đây là cập nhật quan trọng nhất của chủ đề này. Luật 116/2025/QH15 (hiệu lực 01/07/2026) hợp nhất và kế thừa các quy định còn phù hợp của CẢ Luật An toàn thông tin mạng 2015 LẪN Luật An ninh mạng 2018 (xem PL-02) thành một khung pháp lý thống nhất — chấm dứt tình trạng hai luật song song từng gây một số nhầm lẫn về phạm vi áp dụng trong thực tiễn (tổ chức phải tra cứu đồng thời hai luật cho hai khía cạnh liên quan của cùng một vấn đề an toàn/an ninh mạng).\n\n**Điều khoản chuyển tiếp — quan trọng cho tổ chức đã có hệ thống được phân loại theo luật cũ:** Luật 116/2025 quy định hệ thống thông tin đã được xác định cấp độ theo Luật 86/2015 tiếp tục giữ nguyên cấp độ đã xác định từ ngày luật mới có hiệu lực; trong vòng 12 tháng kể từ ngày luật mới có hiệu lực (tức khoảng 01/07/2027), phải bảo đảm điều kiện, tiêu chuẩn, biện pháp bảo vệ an ninh mạng tương ứng theo LUẬT MỚI — nghĩa là không được coi việc đã tuân thủ Luật 86/2015 là đủ vĩnh viễn, cần có kế hoạch rà soát cập nhật trong khung thời gian 12 tháng này. Tương tự, sản phẩm/dịch vụ/giải pháp/phương tiện kỹ thuật bảo đảm an toàn thông tin mạng đã đưa vào sử dụng theo luật cũ trước ngày luật mới có hiệu lực được tiếp tục sử dụng, nhưng cũng phải tuân thủ điều kiện an ninh mạng theo luật mới trong cùng thời hạn 12 tháng.\n\n**Vì sao vẫn giữ bản ghi về Luật 86/2015 trong kho:** dù đã hết hiệu lực, nhiều tài liệu nội bộ, hợp đồng, hồ sơ thẩm định cấp độ đã lập trước 01/07/2026 vẫn viện dẫn Luật 86/2015 — người tra cứu cần nhận diện đúng đây là căn cứ LỊCH SỬ, không còn là căn cứ hiện hành, và biết ngay văn bản thay thế là gì để cập nhật hồ sơ. Đây chính là mục đích cốt lõi của module quản lý hiệu lực trong toàn bộ kho tri thức này.\n\nCHƯA trích dẫn nội dung chi tiết các điều khoản khác của Luật 116/2025 ngoài phần chuyển tiếp nêu trên — xem PL-02 để biết thêm về phạm vi điều chỉnh tổng thể của luật mới.",
    sources: [
      { type: "legal_document", refId: "luat-86-2015-qh13" },
      { type: "legal_document", refId: "luat-116-2025-qh15" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl02-t2",
    topicId: "PL-02",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Luật An ninh mạng hiện hành của Việt Nam là số 116/2025/QH15, được Quốc hội khóa XV thông qua (nguồn ghi nhận ngày 10/12/2025 — nên đối chiếu lại chính xác ngày này qua vbpl.vn), hiệu lực từ 01/07/2026. Đây là kết quả HỢP NHẤT hai luật trước đó: Luật An ninh mạng 24/2018/QH14 (trọng tâm an ninh quốc gia/trật tự xã hội trên không gian mạng) và Luật An toàn thông tin mạng 86/2015/QH13 (trọng tâm kỹ thuật bảo đảm an toàn hệ thống — xem PL-01). Cả hai luật cũ đều đã hết hiệu lực kể từ ngày luật mới có hiệu lực thi hành.\n\n**Vì sao hợp nhất:** trước đây, một tổ chức phải tra cứu và tuân thủ đồng thời hai luật có phạm vi chồng lấn một phần nhưng trọng tâm khác nhau — dẫn tới khó khăn trong việc xác định đầy đủ nghĩa vụ pháp lý và nguy cơ bỏ sót yêu cầu của một trong hai luật. Việc hợp nhất thành một luật thống nhất phản ánh xu hướng đơn giản hóa khung pháp lý, đồng thời cho phép cập nhật đồng bộ các khái niệm và yêu cầu kỹ thuật đã có nhiều thay đổi kể từ 2015–2018 (điện toán đám mây, AI, giao dịch số...).\n\n**Điều khoản chuyển tiếp cần lưu ý (xem thêm PL-01):** hệ thống thông tin đã phân loại cấp độ theo luật cũ giữ nguyên cấp độ, phải đáp ứng điều kiện/tiêu chuẩn/biện pháp bảo vệ theo luật mới trong 12 tháng; sản phẩm/dịch vụ/giải pháp/phương tiện kỹ thuật đã sử dụng theo luật cũ được tiếp tục dùng nhưng cũng phải tuân thủ điều kiện an ninh mạng mới trong cùng thời hạn.\n\n**Văn bản hướng dẫn cũ vẫn còn giá trị tham khảo:** Nghị định 53/2022/NĐ-CP (hướng dẫn chi tiết Luật An ninh mạng 2018, gồm yêu cầu lưu trữ dữ liệu trong nước — xem PL-03) được ban hành để hướng dẫn luật cũ. Kho tri thức này CHƯA xác minh liệu Nghị định 53/2022 có tiếp tục hiệu lực dưới luật mới (theo nguyên tắc thông thường, nghị định hướng dẫn luật cũ thường cần được thay thế bằng nghị định hướng dẫn luật mới, nhưng có thể có điều khoản chuyển tiếp cho phép áp dụng tạm thời) — đây là khoảng trống tri thức cần rà soát khi có nghị định hướng dẫn Luật 116/2025 chính thức ban hành.\n\n**Với ngành ngân hàng:** hệ thống ngân hàng lõi và hạ tầng thanh toán quốc gia có khả năng thuộc phạm vi hệ thống thông tin quan trọng về an ninh quốc gia theo luật mới (danh mục cụ thể CHƯA xác minh) — nếu thuộc diện đó, tổ chức chịu thêm yêu cầu thẩm định an ninh mạng bổ sung so với hệ thống thông thường, và cần theo dõi sát các văn bản hướng dẫn Luật 116/2025 khi được ban hành.",
    sources: [
      { type: "legal_document", refId: "luat-116-2025-qh15" },
      { type: "legal_document", refId: "nd-53-2022-cp" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl03-t2",
    topicId: "PL-03",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Nghị định 53/2022/NĐ-CP (15/8/2022, hiệu lực 01/10/2022) quy định chi tiết một số điều của Luật An ninh mạng (xem PL-02), trong đó nội dung được quan tâm nhiều nhất là yêu cầu về lưu trữ dữ liệu tại Việt Nam và đặt chi nhánh/văn phòng đại diện tại Việt Nam — thường được gọi tắt là yêu cầu 'nội địa hóa dữ liệu' (data localization).\n\n**Bản chất của yêu cầu:** khác với cách hiểu đơn giản hóa phổ biến 'mọi dữ liệu phải lưu ở Việt Nam', yêu cầu thực tế trong Nghị định có tính CHỌN LỌC — áp dụng cho một số NHÓM DOANH NGHIỆP cụ thể (cả trong nước và nước ngoài) cung cấp một số loại dịch vụ nhất định trên không gian mạng tại Việt Nam, khi đáp ứng đồng thời một số điều kiện do Nghị định quy định (liên quan tới việc doanh nghiệp có hoạt động thu thập, khai thác, phân tích, xử lý các loại dữ liệu nhất định — dữ liệu về thông tin cá nhân người sử dụng dịch vụ, dữ liệu về mối quan hệ của người sử dụng dịch vụ, dữ liệu do người sử dụng dịch vụ tại Việt Nam tạo ra). Không phải mọi doanh nghiệp công nghệ hoạt động tại Việt Nam đều tự động thuộc diện này.\n\n**Vì sao đây là chủ đề rủi ro cao khi áp dụng sai:** việc xác định một tổ chức cụ thể CÓ hay KHÔNG thuộc diện phải lưu trữ dữ liệu trong nước phụ thuộc vào phân tích chi tiết mô hình kinh doanh và loại dữ liệu xử lý của chính tổ chức đó, đối chiếu với các tiêu chí cụ thể trong Nghị định — đây không phải loại câu hỏi có thể trả lời chung chung bằng một quy tắc đơn giản. Kho tri thức này CHƯA trích dẫn các tiêu chí cụ thể (số lượng người dùng, loại hình dịch vụ, thời hạn lưu trữ bắt buộc...) vì rủi ro diễn giải sai cao nếu chỉ dựa vào tóm tắt tổng quát — bất kỳ đánh giá thuộc diện áp dụng nào cũng cần đọc trực tiếp nguyên văn Nghị định và, với trường hợp phức tạp, tham vấn ý kiến pháp lý chuyên môn.\n\n**Liên hệ với hoạt động ngân hàng:** dữ liệu khách hàng ngân hàng (thông tin định danh, dữ liệu giao dịch) là loại dữ liệu nhạy cảm có khả năng cao thuộc phạm vi quan tâm của các quy định về nội địa hóa dữ liệu, cả từ góc độ Nghị định 53/2022 lẫn từ góc độ bảo vệ dữ liệu cá nhân (xem PL-04). Khi đánh giá phương án kiến trúc hệ thống liên quan tới dịch vụ đám mây nước ngoài (xem KT-06) hoặc trung tâm dữ liệu dự phòng ở nước ngoài, yêu cầu lưu trữ dữ liệu trong nước là một ràng buộc cần đưa vào đánh giá ngay từ giai đoạn thiết kế, không phải điều chỉnh sau khi hệ thống đã vận hành.",
    sources: [{ type: "legal_document", refId: "nd-53-2022-cp" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl04-t2",
    topicId: "PL-04",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Luật Bảo vệ dữ liệu cá nhân (số 91/2025/QH15, thông qua 26/6/2025, hiệu lực 01/01/2026) đánh dấu bước chuyển quan trọng trong khung pháp lý bảo vệ dữ liệu cá nhân tại Việt Nam: từ cấp NGHỊ ĐỊNH (Nghị định 13/2023/NĐ-CP, ban hành khi chưa có luật chuyên ngành) lên cấp LUẬT — phản ánh mức độ ưu tiên chính sách ngày càng cao đối với lĩnh vực này, đồng thời có ý nghĩa pháp lý quan trọng: quy định ở cấp luật thường có tính ổn định cao hơn, và các chế tài xử phạt có thể được quy định nghiêm khắc hơn so với khi chỉ có nghị định.\n\n**Điều gì thay đổi so với khung cũ:** Nghị định 13/2023/NĐ-CP đã hết hiệu lực kể từ 01/01/2026, được thay thế bởi Luật 91/2025 cùng nghị định hướng dẫn thi hành mới đi kèm. Bất kỳ tổ chức nào đã xây dựng quy trình/chính sách tuân thủ dựa trên Nghị định 13/2023 cần RÀ SOÁT LẠI TOÀN DIỆN theo khung mới — không thể giả định các quy trình cũ vẫn hoàn toàn phù hợp, vì việc nâng cấp từ nghị định lên luật thường đi kèm mở rộng phạm vi, làm rõ hoặc thắt chặt một số nghĩa vụ, và có thể thay đổi mức xử phạt.\n\n**Vì sao kho tri thức này chưa trích dẫn nội dung chi tiết:** các yếu tố cốt lõi của một luật bảo vệ dữ liệu cá nhân — nguyên tắc xử lý dữ liệu, quyền của chủ thể dữ liệu (quyền được biết, quyền rút lại sự đồng ý, quyền yêu cầu xóa dữ liệu...), yêu cầu về hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (DPIA), và đặc biệt mức xử phạt vi phạm hành chính — đều là những nội dung có tính quy phạm cụ thể, nếu trích dẫn sai một chi tiết (ví dụ nhầm lẫn quyền hạn hoặc mức phạt) có thể dẫn tới hậu quả pháp lý hoặc tài chính thực sự cho người áp dụng theo. Đây là văn bản MỚI (hiệu lực chưa đầy một năm tính tới thời điểm biên soạn), nên cả thực tiễn áp dụng lẫn các văn bản hướng dẫn dưới luật đều còn đang trong giai đoạn hoàn thiện — rủi ro trích dẫn lỗi thời hoặc chưa đầy đủ là đặc biệt cao.\n\n**Liên hệ với các chủ đề khác:** dữ liệu khách hàng ngân hàng là dữ liệu cá nhân nhạy cảm theo hầu hết mọi khung pháp lý bảo vệ dữ liệu — Luật 91/2025 tương tác trực tiếp với an toàn dữ liệu và chống thất thoát (xem KT-09), yêu cầu lưu trữ dữ liệu trong nước (xem PL-03), và rủi ro AI/LLM khi dữ liệu cá nhân được đưa vào các hệ thống AI (xem MN-01) — một dự án xử lý dữ liệu khách hàng mới nên được đánh giá đồng thời qua cả ba lăng kính này, không tách rời.",
    sources: [
      { type: "legal_document", refId: "luat-91-2025-qh15" },
      { type: "legal_document", refId: "nd-13-2023-cp" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl05-t2",
    topicId: "PL-05",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Nghị định 85/2016/NĐ-CP (ban hành và có hiệu lực 01/07/2016) là nghị định nền tảng thiết lập nguyên tắc bảo đảm an toàn hệ thống thông tin THEO CẤP ĐỘ tại Việt Nam — cơ chế mà sau này Thông tư 09/2020/TT-NHNN áp dụng cụ thể cho ngành ngân hàng với khung 5 cấp độ (xem PL-07), và TCVN 11930 cụ thể hóa về mặt yêu cầu kỹ thuật cho từng cấp (xem PL-06).\n\n**Nguyên tắc cốt lõi:** bảo đảm an toàn hệ thống thông tin theo cấp độ được thực hiện LIÊN TỤC, ĐỒNG BỘ từ giai đoạn thiết kế, xây dựng, vận hành cho tới khi hủy bỏ hệ thống — không phải một hoạt động thực hiện một lần rồi thôi. Nguyên tắc thứ hai là ĐẦU TƯ CÓ TRỌNG TÂM, TRÁNH TRÙNG LẶP: nghị định khuyến khích dùng chung, chia sẻ nguồn lực bảo vệ giữa các hệ thống thay vì mỗi hệ thống đầu tư riêng lẻ toàn bộ, đặc biệt với các cấp độ thấp hơn nơi rủi ro không đòi hỏi mức đầu tư tối đa.\n\n**Quy trình xác định cấp độ:** nghị định quy định tiêu chí, thẩm quyền, hồ sơ và quy trình để một tổ chức tự xác định, đề xuất cấp độ cho hệ thống thông tin của mình, sau đó trải qua bước thẩm định và phê duyệt bởi cơ quan có thẩm quyền (tùy loại hình tổ chức và hệ thống — với ngân hàng, cơ quan liên quan là Ngân hàng Nhà nước theo hướng dẫn chuyên ngành của Thông tư 09/2020). Việc xác định SAI cấp độ theo hướng thấp hơn thực tế là rủi ro tuân thủ nghiêm trọng (thiếu kiểm soát bắt buộc theo quy định); xác định cao hơn thực tế không vi phạm pháp luật nhưng gây lãng phí nguồn lực đầu tư không cần thiết — cả hai đều là kết quả của một quy trình đánh giá không đủ nghiêm túc ở bước đầu.\n\n**Khoảng trống cần lưu ý:** kho tri thức này CHƯA kiểm tra được liệu đã có nghị định hoặc thông tư sửa đổi, bổ sung Nghị định 85/2016 kể từ năm 2016 hay chưa — trong gần một thập kỷ, khả năng có văn bản sửa đổi (đặc biệt khi công nghệ đám mây và kiến trúc hệ thống đã thay đổi đáng kể) là hoàn toàn có thể xảy ra. Trước khi dùng Nghị định 85/2016 làm căn cứ cho một hồ sơ đề xuất cấp độ mới, cần kiểm tra bản hợp nhất mới nhất (nếu có) trên vbpl.vn thay vì chỉ dựa vào bản gốc năm 2016.",
    sources: [{ type: "legal_document", refId: "nd-85-2016-cp" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl09-t2",
    topicId: "PL-09",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Thông tư 13/2018/TT-NHNN (ban hành 18/5/2018, hiệu lực 01/01/2019) quy định về hệ thống kiểm soát nội bộ của ngân hàng thương mại, chi nhánh ngân hàng nước ngoài — đây là cơ sở pháp lý trực tiếp cho việc áp dụng mô hình ba tuyến phòng thủ (xem KG-01) tại các ngân hàng Việt Nam, không chỉ là một khuyến nghị thực hành quốc tế mà là YÊU CẦU BẮT BUỘC theo quy định của NHNN.\n\n**Cấu trúc quản trị rủi ro theo Thông tư:** chính sách quản lý rủi ro do Hội đồng quản trị hoặc Hội đồng thành viên ban hành, thể hiện định hướng và khẩu vị rủi ro ở cấp cao nhất của ngân hàng; trong khi hạn mức rủi ro cụ thể (ví dụ hạn mức rủi ro tín dụng, rủi ro hoạt động, rủi ro thị trường) do Tổng giám đốc ban hành để cụ thể hóa chính sách thành giới hạn vận hành hằng ngày. Sự phân tầng này phản ánh đúng nguyên tắc phân định vai trò: Hội đồng quản trị định hướng chiến lược và giám sát, Ban điều hành chịu trách nhiệm vận hành trong giới hạn đã được phê duyệt.\n\n**Ba tuyến bảo vệ theo quy định:** Thông tư yêu cầu ngân hàng tổ chức hệ thống kiểm soát nội bộ theo ba tuyến bảo vệ độc lập — bộ phận/cá nhân trực tiếp thực hiện nghiệp vụ (tuyến 1), bộ phận quản lý rủi ro và tuân thủ (tuyến 2), và kiểm toán nội bộ (tuyến 3) — với yêu cầu về tính độc lập, đặc biệt kiểm toán nội bộ phải báo cáo trực tiếp cho cấp cao nhất (Ban kiểm soát/Hội đồng quản trị) mà không chịu sự chỉ đạo nghiệp vụ từ Ban điều hành. Đây chính là căn cứ pháp lý cho phần lý thuyết mô hình ba tuyến phòng thủ trình bày ở KG-01 — khi áp dụng cho ngân hàng Việt Nam, mô hình đó không chỉ là 'thông lệ tốt' mà là nghĩa vụ tuân thủ.\n\n**Cần rà soát cập nhật:** lĩnh vực quản lý rủi ro ngân hàng thường có các thông tư sửa đổi, bổ sung theo thời gian để phản ánh thay đổi trong chuẩn mực quốc tế (Basel) và thực tiễn giám sát. Kho tri thức này CHƯA kiểm tra được liệu Thông tư 13/2018 đã có văn bản sửa đổi/bổ sung ban hành sau 2018 hay chưa — trước khi dùng làm căn cứ chi tiết cho hồ sơ thiết kế hệ thống kiểm soát nội bộ hoặc chuẩn bị làm việc với đoàn thanh tra, cần kiểm tra bản hợp nhất mới nhất trên vbpl.vn.",
    sources: [{ type: "legal_document", refId: "tt-13-2018-nhnn" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl10-t2",
    topicId: "PL-10",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Ngưỡng xác thực sinh trắc học cho giao dịch ngân hàng trực tuyến hiện được điều chỉnh bởi Thông tư 50/2024/TT-NHNN (hiệu lực 01/01/2025), ĐÃ ĐƯỢC SỬA ĐỔI, BỔ SUNG bởi Thông tư 77/2025/TT-NHNN (ban hành 31/12/2025, hiệu lực 01/03/2026; riêng Điều 3, Điều 10 hiệu lực 01/07/2026 cho đơn vị cung cấp dịch vụ thanh toán trực tuyến cho cả khách hàng cá nhân và tổ chức). Quyết định 2345/QĐ-NHNN (2023) — văn bản khởi nguồn của yêu cầu xác thực sinh trắc học, từng được truyền thông rộng rãi khi ban hành — nội dung nay đã được quy định lại tại Thông tư 50/2024, KHÔNG còn là căn cứ tra cứu phù hợp.\n\n**Vì sao có sự nâng cấp từ Quyết định lên Thông tư:** khác với Quyết định (văn bản hành chính cá biệt, áp dụng nội bộ điều hành ngành, không công bố trên Công báo theo quy trình như văn bản quy phạm pháp luật), Thông tư là văn bản quy phạm pháp luật chính thức của Thống đốc NHNN, công bố trên Công báo Chính phủ. Việc nâng cấp phản ánh mức độ ưu tiên ngày càng cao của yêu cầu bảo mật giao dịch trực tuyến, đồng thời tạo cơ sở pháp lý vững chắc hơn, minh bạch hơn cho yêu cầu này so với khi chỉ là quyết định hành chính.\n\n**Thay đổi quan trọng của Thông tư 77/2025:** không chỉ cập nhật ngưỡng cho cá nhân, mà còn (1) MỞ RỘNG PHẠM VI áp dụng sang hoạt động cung ứng dịch vụ mobile money; (2) BỔ SUNG ĐỐI TƯỢNG áp dụng — tổ chức cung ứng dịch vụ trung gian thanh toán, tổ chức cung ứng dịch vụ mobile money, công ty thông tin tín dụng (trước đây Thông tư 50/2024 chủ yếu nhắm tới tổ chức tín dụng, chi nhánh ngân hàng nước ngoài); (3) THAY THẾ Phụ lục 01, 02, 04 của Thông tư 50/2024 bằng bản cập nhật; (4) bổ sung yêu cầu riêng cho giao dịch của DOANH NGHIỆP/HỘ KINH DOANH (khác với ngưỡng cho khách hàng cá nhân), có hiệu lực từ 01/07/2026.\n\n**Ngưỡng cho khách hàng cá nhân được nhiều nguồn nhắc lại nhất quán (VẪN CẦN XÁC MINH LẠI TRƯỚC KHI ÁP DỤNG CHÍNH THỨC):** giao dịch chuyển khoản/nạp rút ví điện tử trên 10 triệu đồng/lần, hoặc từ 10 triệu đồng trở xuống nhưng tổng giá trị trong ngày vượt 20 triệu đồng, phải xác thực bằng OTP (SMS/Voice/Soft OTP/chữ ký điện tử) KẾT HỢP khớp đúng thông tin sinh trắc học. Ngưỡng cho doanh nghiệp/hộ kinh doanh theo Thông tư 77/2025 CHƯA được xác minh cụ thể trong kho tri thức này.\n\n**Khuyến nghị sử dụng:** dùng các con số và mô tả trên như ĐIỂM KHỞI ĐẦU để tra cứu, không phải căn cứ cuối cùng cho hồ sơ kiểm tra, tư vấn khách hàng, hay thiết kế hệ thống — luôn đối chiếu lại nguyên văn Thông tư 50/2024/TT-NHNN (bản hợp nhất sau khi được Thông tư 77/2025 sửa đổi) trước khi sử dụng chính thức, đặc biệt với các quy định mới áp dụng cho doanh nghiệp/hộ kinh doanh và mobile money.",
    sources: [
      { type: "legal_document", refId: "tt-50-2024-nhnn" },
      { type: "legal_document", refId: "tt-77-2025-nhnn" }
    ],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  },
  {
    id: "cb-pl11-t2",
    topicId: "PL-11",
    tier: "T2",
    kind: "dien_giai",
    body:
      "Thông tư 20/2017/TT-BTTTT (ban hành 12/9/2017, hiệu lực 01/11/2017, thay thế Thông tư 27/2011/TT-BTTTT) quy định về điều phối, ứng cứu sự cố an toàn thông tin mạng trên toàn quốc — đây là văn bản có khả năng cao nhất trả lời câu hỏi trọng tâm của module này: khi có sự cố an toàn thông tin, đơn vị vận hành hệ thống phải báo cáo cho ai, theo mẫu nào, và trong thời hạn bao lâu.\n\n**Vì sao đây là chủ đề được đánh dấu ưu tiên xác minh cao nhất của toàn bộ dự án:** khác với hầu hết nội dung tham khảo khác trong kho tri thức này (mang tính giải thích khái niệm, có thể sai lệch nhẹ mà không gây hậu quả tức thời), thời hạn báo cáo sự cố là một NGHĨA VỤ CÓ THỜI HẠN PHÁP LÝ CỤ THỂ — nếu một tổ chức dựa vào thông tin sai lệch về thời hạn này (dù chỉ lệch một vài ngày) và bỏ lỡ hạn báo cáo thực tế, hậu quả có thể là vi phạm nghĩa vụ pháp lý với cơ quan quản lý, không đơn thuần là một sai sót tham khảo.\n\n**Điều kho tri thức này CÓ và KHÔNG CÓ:** đã xác minh được sự tồn tại, số hiệu, ngày ban hành và ngày hiệu lực của Thông tư 20/2017/TT-BTTTT qua nhiều nguồn độc lập bao gồm Công báo Chính phủ (congbao.chinhphu.vn) — đủ tin cậy để khẳng định đây là văn bản pháp quy có thật và đang có hiệu lực. Tuy nhiên, NỘI DUNG CỤ THỂ về thời hạn báo cáo (bao nhiêu giờ/ngày kể từ khi phát hiện sự cố), mẫu biểu báo cáo, và đầu mối tiếp nhận cụ thể theo từng loại/mức độ sự cố — những chi tiết mang tính vận hành trực tiếp nhất — CHƯA được đối chiếu với nguyên văn thông tư trong phiên biên soạn kho tri thức này, dù có xuất hiện một số con số cụ thể trên các nguồn tham khảo thứ cấp không đủ tin cậy để nhập vào đây.\n\n**Hành động khuyến nghị khi có sự cố thực tế:** (1) xác định ngay đây có phải sự cố thuộc phạm vi điều chỉnh của Thông tư 20/2017 hay không (một số loại sự cố/hệ thống có thể còn chịu thêm quy định chuyên ngành khác, ví dụ nghĩa vụ báo cáo riêng theo quy định của NHNN đối với sự cố hệ thống ngân hàng); (2) tra cứu trực tiếp bản đầy đủ, cập nhật nhất của thông tư (kiểm tra có văn bản sửa đổi nào từ 2017 tới nay hay không) qua vbpl.vn hoặc liên hệ trực tiếp Cục An toàn thông tin (Bộ Thông tin và Truyền thông) hoặc đầu mối chuyên trách của tổ chức; (3) không chờ 'xác nhận chắc chắn' thời hạn rồi mới bắt đầu chuẩn bị báo cáo — nên vừa xác minh vừa chuẩn bị hồ sơ song song, vì trong hầu hết các thể chế quy định về sự cố, thời hạn thường được tính từ tHỜI ĐIỂM PHÁT HIỆN chứ không phải thời điểm tổ chức xác nhận xong toàn bộ chi tiết kỹ thuật.",
    sources: [{ type: "legal_document", refId: "tt-20-2017-btttt" }],
    classification: "cong_khai",
    status: "da_duyet",
    version: 1
  }
];
