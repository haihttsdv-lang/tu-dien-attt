/**
 * Cong cu tac nghiep kiem tra — FR-A01..A07 (minh hoa, chua phu 93 chu de).
 *
 * ControlRequirement/Mapping o day gioi han o cap "MOI TRUONG KIEM SOAT
 * CHUNG" (khong trich clauseRef qua chi tiet neu chua doi chieu ban co
 * ban quyen day du) — sourceTier "B" vi dua tren kien thuc chuyen mon pho
 * bien ve cau truc chuan, CHUA doi chieu tung dieu khoan voi ban mua ban
 * quyen chinh thuc. Day la buoc uu tien (3) trong chien luoc tang dan cua
 * URD Muc 7: ISO 27002 <-> NIST CSF, truoc khi lam cap NHNN <-> ISO 27002
 * (can du lieu dieu khoan NHNN chi tiet hon hien co).
 *
 * ComplianceObligation va IncidentPlaybook CO CHU DICH de trong — xem
 * docs/open-questions.md.
 */
import type {
  AuditProgram,
  ControlRequirement,
  EvidenceItem,
  InterviewQuestion,
  Mapping
} from "../../data/schema/models";

export const controlRequirements: ControlRequirement[] = [
  { id: "iso27002-8.2", frameworkId: "iso27002", clauseRef: "8.2", title: "Privileged access rights", summary: "Cấp phát và sử dụng quyền truy cập đặc quyền phải được hạn chế và kiểm soát chặt chẽ.", sourceTier: "B" },
  { id: "iso27002-5.15", frameworkId: "iso27002", clauseRef: "5.15", title: "Access control", summary: "Quy tắc kiểm soát truy cập vật lý và logic tới thông tin và tài sản liên quan phải được thiết lập theo yêu cầu nghiệp vụ và an toàn thông tin.", sourceTier: "B" },
  { id: "iso27002-5.24", frameworkId: "iso27002", clauseRef: "5.24", title: "Information security incident management planning and preparation", summary: "Tổ chức phải hoạch định và chuẩn bị quy trình quản lý sự cố an toàn thông tin, bao gồm vai trò và trách nhiệm.", sourceTier: "B" },
  { id: "iso27002-8.13", frameworkId: "iso27002", clauseRef: "8.13", title: "Information backup", summary: "Bản sao lưu thông tin, phần mềm và hệ thống phải được duy trì và kiểm thử định kỳ theo chính sách sao lưu đã thống nhất.", sourceTier: "B" },
  { id: "nist-csf-pr-aa-05", frameworkId: "nist-csf", clauseRef: "PR.AA-05", title: "Access permissions and authorizations", summary: "Quyền và ủy quyền truy cập được quản lý, kết hợp nguyên tắc đặc quyền tối thiểu và phân tách nhiệm vụ.", sourceTier: "B" },
  { id: "nist-csf-de-ae", frameworkId: "nist-csf", clauseRef: "DE.AE", title: "Adverse Event Analysis", summary: "Các sự kiện bất thường được phân tích để phát hiện sự cố an toàn thông tin tiềm ẩn.", sourceTier: "B" },
  { id: "nist-csf-rc-rp", frameworkId: "nist-csf", clauseRef: "RC.RP", title: "Incident Recovery Plan Execution", summary: "Kế hoạch khôi phục sau sự cố được thực thi để bảo đảm hoạt động và khôi phục dịch vụ.", sourceTier: "B" },
  { id: "iso27002-8.8", frameworkId: "iso27002", clauseRef: "8.8", title: "Management of technical vulnerabilities", summary: "Thông tin về điểm yếu kỹ thuật của hệ thống đang sử dụng phải được thu thập, đánh giá và xử lý kịp thời.", sourceTier: "B" },
  { id: "nist-csf-id-ra-01", frameworkId: "nist-csf", clauseRef: "ID.RA-01", title: "Vulnerability identification", summary: "Điểm yếu của tài sản được nhận diện và ghi nhận đầy đủ.", sourceTier: "B" },
  { id: "iso27002-5.9", frameworkId: "iso27002", clauseRef: "5.9", title: "Inventory of information and other associated assets", summary: "Tổ chức phải xây dựng và duy trì danh mục tài sản thông tin và tài sản liên quan.", sourceTier: "B" },
  { id: "nist-csf-id-am-01", frameworkId: "nist-csf", clauseRef: "ID.AM-01", title: "Asset inventory", summary: "Phần cứng do tổ chức quản lý được kiểm kê đầy đủ.", sourceTier: "B" },
  { id: "nist-csf-pr-ds-11", frameworkId: "nist-csf", clauseRef: "PR.DS-11", title: "Data backups", summary: "Bản sao lưu dữ liệu được tạo, bảo vệ, duy trì và kiểm thử định kỳ.", sourceTier: "B" }
];

export const mappings: Mapping[] = [
  {
    id: "map-pam",
    fromReqId: "iso27002-8.2",
    toReqId: "nist-csf-pr-aa-05",
    equivalence: "tuong_duong_mot_phan",
    rationale:
      "Cả hai đều yêu cầu kiểm soát chặt chẽ quyền truy cập đặc quyền và áp dụng nguyên tắc đặc quyền tối thiểu, nhưng ISO 27002 8.2 nhấn mạnh riêng vào quy trình cấp phát/thu hồi trong khi NIST PR.AA-05 đặt trong bối cảnh rộng hơn về quản lý quyền nói chung.",
    createdBy: "editor-demo",
    approvedBy: "lead-demo",
    approvedAt: "2026-08-24"
  },
  {
    id: "map-incident",
    fromReqId: "iso27002-5.24",
    toReqId: "nist-csf-de-ae",
    equivalence: "co_lien_quan",
    rationale:
      "ISO 27002 5.24 tập trung vào hoạch định/chuẩn bị quy trình quản lý sự cố; NIST DE.AE tập trung vào bước phân tích sự kiện để phát hiện sự cố — hai yêu cầu bổ trợ nhau trong cùng vòng đời ứng phó sự cố nhưng không trùng phạm vi hoàn toàn.",
    createdBy: "editor-demo",
    approvedBy: "lead-demo",
    approvedAt: "2026-08-24"
  },
  {
    id: "map-vuln",
    fromReqId: "iso27002-8.8",
    toReqId: "nist-csf-id-ra-01",
    equivalence: "tuong_duong_mot_phan",
    rationale:
      "Cả hai yêu cầu tổ chức nhận diện điểm yếu kỹ thuật một cách có hệ thống, nhưng ISO 27002 8.8 bao trùm cả bước đánh giá và xử lý, còn NIST ID.RA-01 chỉ tập trung vào bước nhận diện/ghi nhận (nằm trong hàm Identify) — bước xử lý được NIST CSF đặt ở các danh mục khác thuộc hàm Protect.",
    createdBy: "editor-demo",
    approvedBy: "lead-demo",
    approvedAt: "2026-08-24"
  },
  {
    id: "map-asset-inventory",
    fromReqId: "iso27002-5.9",
    toReqId: "nist-csf-id-am-01",
    equivalence: "tuong_duong_mot_phan",
    rationale:
      "ISO 27002 5.9 yêu cầu danh mục đầy đủ mọi loại tài sản thông tin và tài sản liên quan (phần cứng, phần mềm, dữ liệu, dịch vụ...); NIST ID.AM-01 trong dữ liệu này chỉ nêu phạm vi phần cứng — cần đối chiếu thêm các danh mục con khác của ID.AM (phần mềm, dữ liệu) để có ánh xạ đầy đủ hơn.",
    createdBy: "editor-demo",
    approvedBy: "lead-demo",
    approvedAt: "2026-08-24"
  },
  {
    id: "map-backup",
    fromReqId: "iso27002-8.13",
    toReqId: "nist-csf-pr-ds-11",
    equivalence: "tuong_duong_hoan_toan",
    rationale:
      "Cả hai yêu cầu đều tập trung trực tiếp vào cùng một hoạt động: tạo, bảo vệ, duy trì và kiểm thử định kỳ bản sao lưu dữ liệu/hệ thống — phạm vi trùng khớp gần như hoàn toàn.",
    createdBy: "editor-demo",
    approvedBy: "lead-demo",
    approvedAt: "2026-08-24"
  }
];

export const auditPrograms: AuditProgram[] = [
  {
    topicId: "KT-03",
    objective: "Xác định liệu tổ chức có kiểm soát hiệu quả việc cấp phát, sử dụng và giám sát tài khoản đặc quyền hay không.",
    scope: "Tất cả hệ thống lõi, cơ sở dữ liệu và hạ tầng mạng có tài khoản quản trị/đặc quyền.",
    procedures: [
      "Lấy danh sách toàn bộ tài khoản đặc quyền hiện có và đối chiếu với danh sách nhân sự được phê duyệt.",
      "Kiểm tra cơ chế luân chuyển mật khẩu đặc quyền và việc ghi phiên làm việc đặc quyền (session recording).",
      "Chọn mẫu các lần cấp quyền đặc quyền gần nhất, kiểm tra có phê duyệt và có thời hạn (just-in-time) hay không.",
      "Kiểm tra quy trình thu hồi quyền khi nhân sự nghỉ việc/chuyển vị trí."
    ],
    criteria: [
      "Không có tài khoản đặc quyền dùng chung không truy vết được người sử dụng thực tế.",
      "100% cấp quyền đặc quyền có phê duyệt bằng văn bản/hệ thống trước khi kích hoạt.",
      "Có bằng chứng thu hồi quyền trong vòng thời hạn quy định nội bộ sau khi nhân sự thay đổi vị trí."
    ]
  },
  {
    topicId: "VH-06",
    objective: "Đánh giá quy trình ứng phó sự cố an toàn thông tin có đủ năng lực phát hiện, phân loại và leo thang kịp thời.",
    scope: "Toàn bộ vòng đời ứng phó sự cố từ phát hiện tới đóng sự cố, không giới hạn hệ thống cụ thể.",
    procedures: [
      "Rà soát quy trình ứng phó sự cố đã ban hành, đối chiếu với các hàm Identify/Protect/Detect/Respond/Recover.",
      "Chọn mẫu một số sự cố đã ghi nhận, kiểm tra thời gian từ phát hiện tới phân loại mức độ.",
      "Phỏng vấn đội SOC/ứng phó sự cố về ngưỡng leo thang và vai trò trách nhiệm.",
      "Kiểm tra biên bản diễn tập ứng phó sự cố gần nhất (nếu có)."
    ],
    criteria: [
      "Quy trình có tiêu chí phân loại mức độ nghiêm trọng rõ ràng.",
      "Có bằng chứng leo thang đúng cấp có thẩm quyền khi sự cố vượt ngưỡng.",
      "Có ít nhất một lần diễn tập/kiểm chứng quy trình trong chu kỳ gần nhất."
    ]
  },
  {
    topicId: "KT-02",
    objective: "Xác định liệu quy trình cấp phát, điều chỉnh và thu hồi quyền truy cập có được kiểm soát chặt chẽ theo nguyên tắc đặc quyền tối thiểu hay không.",
    scope: "Toàn bộ hệ thống có xác thực người dùng — ưu tiên hệ thống lõi, hệ thống xử lý dữ liệu khách hàng.",
    procedures: [
      "Chọn mẫu tài khoản mới cấp trong kỳ, đối chiếu với hồ sơ phê duyệt và mô tả công việc tương ứng.",
      "Chọn mẫu nhân sự đã nghỉ việc/chuyển vị trí trong kỳ, kiểm tra thời điểm thu hồi/điều chỉnh quyền thực tế.",
      "Kiểm tra bằng chứng rà soát quyền truy cập định kỳ (access recertification) gần nhất — ai thực hiện, có đối chiếu thực tế công việc không.",
      "Kiểm tra cấu hình bắt buộc xác thực đa yếu tố (MFA) cho các hệ thống trọng yếu."
    ],
    criteria: [
      "100% tài khoản mới có phê duyệt trước khi kích hoạt, quyền cấp đúng theo vai trò công việc.",
      "Quyền truy cập bị thu hồi/điều chỉnh trong thời hạn quy định nội bộ sau khi nhân sự nghỉ việc/chuyển vị trí.",
      "Có bằng chứng rà soát quyền truy cập định kỳ với kết quả xử lý cụ thể (không chỉ 'đã rà soát' mà không có hành động theo sau)."
    ]
  },
  {
    topicId: "KT-04",
    objective: "Đánh giá việc quản lý khóa mật mã và lựa chọn thuật toán có tuân thủ thực hành an toàn trong toàn bộ vòng đời khóa.",
    scope: "Hệ thống xử lý dữ liệu nhạy cảm/dữ liệu thẻ, kênh giao dịch trực tuyến, và hạ tầng lưu trữ khóa (HSM nếu có).",
    procedures: [
      "Kiểm tra danh mục kiểm kê mật mã (crypto inventory) — nơi nào đang dùng mã hóa, thuật toán/độ dài khóa nào.",
      "Kiểm tra chính sách quản lý vòng đời khóa: sinh khóa, phân phối, lưu trữ, xoay vòng, thu hồi/hủy khóa.",
      "Xác nhận khóa mật mã không được lưu trữ ở dạng rõ trong mã nguồn, tệp cấu hình hoặc biến môi trường.",
      "Nếu có HSM: kiểm tra kiểm soát truy cập vật lý/logic vào thiết bị và nhật ký thao tác trên khóa."
    ],
    criteria: [
      "Không sử dụng thuật toán/độ dài khóa đã lỗi thời hoặc không còn được khuyến nghị cho dữ liệu nhạy cảm.",
      "Khóa mật mã không xuất hiện ở dạng rõ ngoài thiết bị lưu trữ khóa chuyên dụng.",
      "Có bằng chứng xoay vòng khóa theo chu kỳ đã định, và quy trình xử lý khi nghi ngờ khóa bị lộ."
    ]
  },
  {
    topicId: "KT-10",
    objective: "Đánh giá tính kịp thời và đầy đủ của quy trình phát hiện, ưu tiên và khắc phục điểm yếu bảo mật.",
    scope: "Hệ thống tiếp xúc Internet, hệ thống lõi và máy trạm/máy chủ trong phạm vi quét định kỳ.",
    procedures: [
      "Kiểm tra tần suất và phạm vi quét điểm yếu (tự động) có bao phủ đầy đủ tài sản trong danh mục kiểm kê hay không.",
      "Chọn mẫu điểm yếu mức độ nghiêm trọng cao/nghiêm trọng đã phát hiện, đối chiếu thời gian khắc phục thực tế với SLA nội bộ.",
      "Kiểm tra quy trình xử lý ngoại lệ khi không thể vá đúng hạn (biện pháp giảm thiểu tạm thời, phê duyệt chấp nhận rủi ro có thời hạn).",
      "Xác nhận có quét lại (rescan) để đóng điểm yếu, không chỉ đánh dấu 'đã xử lý' theo báo cáo."
    ],
    criteria: [
      "100% tài sản trọng yếu nằm trong phạm vi quét định kỳ.",
      "Điểm yếu mức nghiêm trọng cao được khắc phục hoặc giảm thiểu trong thời hạn quy định nội bộ.",
      "Ngoại lệ vượt thời hạn có phê duyệt cấp có thẩm quyền và thời hạn xem xét lại rõ ràng."
    ]
  },
  {
    topicId: "NH-02",
    objective: "Đánh giá việc tuân thủ PCI DSS trong phạm vi hệ thống xử lý, lưu trữ hoặc truyền dữ liệu chủ thẻ.",
    scope: "Toàn bộ hệ thống trong phạm vi PCI DSS (Cardholder Data Environment — CDE) đã xác định qua bài đánh giá phạm vi.",
    procedures: [
      "Kiểm tra kết quả bài đánh giá phạm vi (scoping) PCI DSS gần nhất — hệ thống nào trong/ngoài phạm vi và căn cứ xác định.",
      "Kiểm tra biện pháp bảo vệ dữ liệu chủ thẻ khi lưu trữ (mã hóa/che dấu) và khi truyền (kênh mã hóa).",
      "Kiểm tra kiểm soát truy cập vào hệ thống trong phạm vi CDE — nguyên tắc cần-mới-biết, MFA cho truy cập từ xa.",
      "Xác nhận có báo cáo tuân thủ (AOC/SAQ hoặc báo cáo QSA) còn hiệu lực cho kỳ đánh giá gần nhất."
    ],
    criteria: [
      "Phạm vi CDE được xác định và cập nhật khi có thay đổi kiến trúc hệ thống liên quan.",
      "Không phát hiện dữ liệu chủ thẻ lưu trữ ở dạng không được phép (vd. CVV lưu trữ sau xác thực giao dịch).",
      "Có báo cáo tuân thủ PCI DSS còn hiệu lực tại thời điểm kiểm tra."
    ]
  },
  {
    topicId: "QT-03",
    objective: "Đánh giá quy trình quản lý rủi ro an toàn thông tin có được thực hiện nhất quán, đầy đủ bằng chứng và gắn với quyết định thực tế.",
    scope: "Toàn bộ chương trình quản lý rủi ro ATTT của tổ chức, không giới hạn một hệ thống cụ thể.",
    procedures: [
      "Kiểm tra sổ đăng ký rủi ro (risk register) — có được cập nhật định kỳ và sau các thay đổi lớn (hệ thống mới, sự cố) hay không.",
      "Chọn mẫu một số rủi ro mức cao, kiểm tra có phương án xử lý cụ thể, chủ sở hữu rủi ro rõ ràng và thời hạn theo dõi.",
      "Kiểm tra các trường hợp 'chấp nhận rủi ro' — có được phê duyệt bởi cấp có thẩm quyền tương xứng và có thời hạn hay không.",
      "Phỏng vấn chủ sở hữu rủi ro về cách họ theo dõi và báo cáo tiến độ xử lý rủi ro được giao."
    ],
    criteria: [
      "Sổ đăng ký rủi ro phản ánh đúng bối cảnh hiện tại, không có rủi ro 'treo' quá hạn xử lý mà không được xem xét lại.",
      "Mọi rủi ro mức cao có chủ sở hữu, phương án xử lý và thời hạn cụ thể.",
      "Chấp nhận rủi ro có thời hạn được phê duyệt đúng thẩm quyền theo chính sách nội bộ, không tự động gia hạn ngầm."
    ]
  },
  {
    topicId: "PL-08",
    objective: "Đánh giá mức độ tuân thủ các yêu cầu an toàn, bảo mật dịch vụ ngân hàng trực tuyến theo Thông tư 50/2024/TT-NHNN (đã được TT77/2025 sửa đổi, bổ sung).",
    scope: "Toàn bộ kênh cung cấp dịch vụ trực tuyến của ngân hàng: Internet Banking, Mobile Banking, ví điện tử liên kết.",
    procedures: [
      "Đối chiếu danh mục biện pháp an toàn hiện đang triển khai với yêu cầu của TT50/2024/TT-NHNN và TT77/2025/TT-NHNN — LƯU Ý: cần đọc nguyên văn hai thông tư, kho tri thức này chưa trích dẫn đủ chi tiết điều khoản để dùng làm checklist đầy đủ.",
      "Kiểm tra cơ chế xác thực giao dịch có phân theo mức độ rủi ro/giá trị giao dịch hay không.",
      "Kiểm tra biện pháp giám sát, phát hiện gian lận giao dịch trực tuyến theo thời gian thực.",
      "Xác nhận phạm vi áp dụng đã được cập nhật theo TT77/2025 (bổ sung mobile money, trung gian thanh toán) nếu tổ chức có hoạt động liên quan."
    ],
    criteria: [
      "Biện pháp an toàn triển khai thực tế khớp với yêu cầu trong văn bản gốc (đã đối chiếu trực tiếp, không suy đoán từ tóm tắt).",
      "Có cơ chế giám sát gian lận hoạt động liên tục, không chỉ xử lý sau khi khách hàng khiếu nại.",
      "Không có khoảng trống giữa phạm vi áp dụng quy định và phạm vi triển khai thực tế của tổ chức."
    ]
  },
  {
    topicId: "CC-01",
    objective: "Đánh giá chương trình quản lý liên tục hoạt động kinh doanh có đủ năng lực duy trì/khôi phục các quy trình nghiệp vụ trọng yếu.",
    scope: "Toàn bộ quy trình nghiệp vụ đã được xác định là trọng yếu qua phân tích tác động nghiệp vụ (BIA).",
    procedures: [
      "Kiểm tra kết quả BIA gần nhất — quy trình nào được xác định trọng yếu, RTO/RPO tương ứng.",
      "Đối chiếu kế hoạch BCP/DRP với kết quả BIA — có phương án cho từng quy trình trọng yếu hay không.",
      "Kiểm tra biên bản diễn tập gần nhất — có đạt được RTO/RPO đã đặt ra không, phát hiện gì trong diễn tập.",
      "Kiểm tra danh sách liên hệ khẩn cấp và vai trò trách nhiệm trong kế hoạch có được cập nhật hay không."
    ],
    criteria: [
      "Mọi quy trình trọng yếu theo BIA đều có phương án BCP/DRP tương ứng.",
      "Diễn tập gần nhất được thực hiện trong chu kỳ quy định nội bộ và có biên bản ghi nhận bài học rút ra.",
      "Thông tin liên hệ/vai trò trong kế hoạch khớp với cơ cấu tổ chức hiện tại (không dùng thông tin đã lỗi thời)."
    ]
  },
  {
    topicId: "VH-02",
    objective: "Đánh giá năng lực thu thập, chuẩn hóa và bảo vệ nhật ký có đủ để phục vụ giám sát và điều tra sự cố.",
    scope: "Nguồn nhật ký từ hệ thống trọng yếu: hệ điều hành, ứng dụng lõi, thiết bị mạng/bảo mật, hệ thống xác thực.",
    procedures: [
      "Đối chiếu danh mục nguồn nhật ký đang được thu thập với danh mục tài sản trọng yếu — xác định khoảng trống (điểm mù).",
      "Kiểm tra đồng bộ thời gian (NTP) giữa các hệ thống nguồn nhật ký.",
      "Kiểm tra kiểm soát truy cập vào kho nhật ký tập trung — chỉ ghi thêm, ai có quyền đọc/xuất.",
      "Kiểm tra chính sách thời gian lưu trữ nhật ký có đáp ứng nhu cầu điều tra sự cố và yêu cầu nội bộ hay không."
    ],
    criteria: [
      "Không có tài sản trọng yếu nào thiếu thu thập nhật ký mà không có lý do/kiểm soát bù đắp được ghi nhận.",
      "Nhật ký được bảo vệ khỏi sửa đổi trái phép, quyền truy cập kho nhật ký được kiểm soát chặt và ghi vết.",
      "Thời gian lưu trữ thực tế đáp ứng chính sách đã ban hành, không phát hiện dữ liệu bị xóa sớm hơn quy định."
    ]
  }
];

export const interviewQuestions: InterviewQuestion[] = [
  {
    topicId: "KT-03",
    question: "Anh/chị mô tả quy trình một quản trị viên hệ thống được cấp quyền truy cập đặc quyền vào hệ thống lõi như thế nào?",
    redFlags: [
      "Không nêu được bước phê duyệt cụ thể, chỉ nói 'theo yêu cầu công việc'.",
      "Không biết cơ chế luân chuyển mật khẩu đặc quyền hoặc trả lời 'không nhớ'.",
      "Không phân biệt được tài khoản cá nhân và tài khoản dùng chung."
    ],
    followUps: [
      "Có thể cho xem log/bằng chứng phê duyệt của lần cấp quyền gần nhất không?",
      "Nếu một quản trị viên nghỉ việc đột xuất, quyền đặc quyền của họ bị thu hồi trong bao lâu?"
    ]
  },
  {
    topicId: "VH-06",
    question: "Khi phát hiện một cảnh báo bất thường lúc nửa đêm, ai là người đầu tiên xử lý và họ có thẩm quyền leo thang tới đâu?",
    redFlags: [
      "Không có ai trực ngoài giờ hành chính, hoặc phụ thuộc hoàn toàn vào một cá nhân duy nhất.",
      "Không nêu được ngưỡng thời gian phải leo thang lên cấp quản lý.",
      "Nhầm lẫn giữa 'phát hiện' và 'phân loại mức độ nghiêm trọng'."
    ],
    followUps: [
      "Có thể cho xem lịch trực (on-call schedule) hiện hành không?",
      "Lần gần nhất leo thang sự cố xảy ra khi nào, mất bao lâu để cấp có thẩm quyền phản hồi?"
    ]
  },
  {
    topicId: "KT-02",
    question: "Khi một nhân viên chuyển từ phòng ban này sang phòng ban khác, quyền truy cập của họ được xử lý như thế nào?",
    redFlags: [
      "Chỉ nói về việc CẤP thêm quyền mới, không đề cập tới việc THU HỒI quyền của vị trí cũ.",
      "Không biết ai chịu trách nhiệm khởi tạo yêu cầu điều chỉnh quyền khi có thay đổi vị trí.",
      "Trả lời 'quyền cũ vẫn còn cũng không sao vì không dùng tới' — dấu hiệu tích lũy quyền (privilege creep) không được kiểm soát."
    ],
    followUps: [
      "Lần rà soát quyền truy cập định kỳ gần nhất diễn ra khi nào, phát hiện được bao nhiêu trường hợp cần điều chỉnh?",
      "Có thể cho xem một trường hợp cụ thể đã điều chỉnh quyền sau khi đổi vị trí công việc không?"
    ]
  },
  {
    topicId: "KT-10",
    question: "Khi quét ra một điểm yếu mức độ nghiêm trọng cao trên hệ thống tiếp xúc Internet, quy trình xử lý tiếp theo là gì?",
    redFlags: [
      "Không có SLA/thời hạn khắc phục rõ ràng theo mức độ nghiêm trọng.",
      "Không biết ai là người chịu trách nhiệm cuối cùng nếu quá hạn khắc phục.",
      "Không phân biệt được 'đã vá' và 'đã quét lại xác nhận' — hai việc khác nhau."
    ],
    followUps: [
      "Hiện có bao nhiêu điểm yếu mức nghiêm trọng cao đang quá hạn khắc phục theo SLA nội bộ?",
      "Trường hợp không thể vá đúng hạn (vd. hệ thống legacy), quy trình xin ngoại lệ diễn ra như thế nào?"
    ]
  },
  {
    topicId: "QT-03",
    question: "Anh/chị cho ví dụ một rủi ro cụ thể trong sổ đăng ký rủi ro hiện tại, và tình trạng xử lý tới đâu rồi?",
    redFlags: [
      "Không nhớ hoặc không nắm được nội dung sổ đăng ký rủi ro do mình phụ trách.",
      "Rủi ro 'chấp nhận' nhưng không nêu được ai phê duyệt và thời hạn xem xét lại.",
      "Mọi rủi ro đều ở trạng thái 'đang xử lý' trong thời gian dài mà không có mốc tiến độ cụ thể."
    ],
    followUps: [
      "Sổ đăng ký rủi ro được cập nhật lần gần nhất khi nào, nhân dịp gì (sự cố, hệ thống mới, đánh giá định kỳ)?",
      "Khẩu vị rủi ro của tổ chức được ai phê duyệt và bao lâu rà soát lại một lần?"
    ]
  },
  {
    topicId: "NH-02",
    question: "Hệ thống nào trong tổ chức hiện đang lưu trữ hoặc xử lý dữ liệu chủ thẻ, và phạm vi đó được xác định như thế nào?",
    redFlags: [
      "Không có bài đánh giá phạm vi (scoping) chính thức, chỉ dựa vào 'ai cũng biết hệ thống nào liên quan tới thẻ'.",
      "Không biết dữ liệu chủ thẻ có được mã hóa khi lưu trữ hay không.",
      "Không phân biệt được dữ liệu được phép lưu trữ (PAN đã mã hóa) và dữ liệu tuyệt đối không được lưu (CVV sau xác thực)."
    ],
    followUps: [
      "Báo cáo tuân thủ PCI DSS gần nhất là khi nào, còn hiệu lực tới bao giờ?",
      "Khi có thay đổi kiến trúc hệ thống liên quan tới thẻ, phạm vi PCI DSS có được đánh giá lại không?"
    ]
  }
];

export const evidenceItems: EvidenceItem[] = [
  {
    requirementId: "iso27002-8.2",
    evidenceType: "Danh sách tài khoản đặc quyền và lịch sử phê duyệt cấp quyền",
    ownerUnit: "Đơn vị vận hành hạ tầng / CNTT",
    sourceSystem: "Hệ thống PAM (nếu có) hoặc hệ thống quản lý danh tính",
    frequency: "Theo yêu cầu kiểm tra / hằng quý"
  },
  {
    requirementId: "iso27002-8.13",
    evidenceType: "Nhật ký sao lưu và kết quả kiểm thử phục hồi gần nhất",
    ownerUnit: "Đơn vị vận hành hạ tầng / CNTT",
    sourceSystem: "Hệ thống sao lưu (backup software) hoặc nhật ký vận hành",
    frequency: "Hằng tháng (sao lưu); theo chu kỳ diễn tập (kiểm thử phục hồi)"
  },
  {
    requirementId: "iso27002-8.8",
    evidenceType: "Báo cáo quét điểm yếu và trạng thái khắc phục theo mức độ nghiêm trọng",
    ownerUnit: "Đơn vị quản lý điểm yếu / ATTT",
    sourceSystem: "Công cụ quét điểm yếu (vulnerability scanner) / hệ thống theo dõi khắc phục",
    frequency: "Theo chu kỳ quét định kỳ (thường hằng tuần/hằng tháng tùy loại tài sản)"
  },
  {
    requirementId: "iso27002-5.9",
    evidenceType: "Danh mục kiểm kê tài sản thông tin hiện hành",
    ownerUnit: "Đơn vị quản lý tài sản CNTT / ATTT",
    sourceSystem: "Hệ thống quản lý cấu hình (CMDB) hoặc bảng kiểm kê thủ công",
    frequency: "Cập nhật liên tục, đối chiếu định kỳ hằng quý/hằng năm"
  },
  {
    requirementId: "nist-csf-pr-aa-05",
    evidenceType: "Kết quả rà soát quyền truy cập định kỳ (access recertification) gần nhất",
    ownerUnit: "Đơn vị quản lý danh tính và truy cập / chủ sở hữu hệ thống",
    sourceSystem: "Hệ thống IAM hoặc bảng rà soát quyền thủ công",
    frequency: "Theo chu kỳ rà soát nội bộ (thường hằng quý cho hệ thống trọng yếu)"
  }
];
