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
  }
];
