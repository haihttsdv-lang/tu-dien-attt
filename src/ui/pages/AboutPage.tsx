import { DisclaimerFooter } from "../components/DisclaimerFooter";
import { useContentBundle } from "../context/ContentContext";
import { isReviewOverdue } from "../../core/effectivity";

const REVIEW_CYCLE_DAYS = 90;

export function AboutPage() {
  const bundle = useContentBundle();
  const overdueCount = bundle.legalDocuments.filter((d) =>
    isReviewOverdue(d, REVIEW_CYCLE_DAYS)
  ).length;

  return (
    <div>
      <h1 className="page-title">Giới thiệu</h1>

      <div className="card">
        <p>
          <strong>Bách khoa toàn thư An toàn thông tin ngành Ngân hàng</strong> là
          công cụ tra cứu tham khảo cá nhân, xây dựng dựa trên URD "Bách khoa
          toàn thư An toàn thông tin ngành Ngân hàng" — tập trung vào tầng
          <strong> tham chiếu</strong> (pháp lý, chuẩn mực quốc tế, kiến thức kỹ
          thuật). Ứng dụng <strong>không</strong> gắn với một ngân hàng cụ thể,
          <strong> không</strong> chứa dữ liệu nội bộ/nhạy cảm, và{" "}
          <strong>không</strong> phải nguồn chân lý pháp lý.
        </p>
        <p>
          Quy tắc nền tảng: <strong>không có nguồn thì không có nội dung</strong>.
          Mọi nội dung mang tính quy phạm đều bắt buộc gắn với một văn bản pháp
          lý hoặc chuẩn mực cụ thể, kiểm tra tự động ở tầng schema và kiểm thử
          (xem <code>scripts/validate/validate-content.ts</code>).
        </p>
      </div>

      <div className="card">
        <h2>Phạm vi đã triển khai</h2>
        <ul>
          <li>Tra cứu {bundle.topics.length} chủ đề theo 9 nhóm, tầng T1 (tra cứu nhanh)</li>
          <li>Quản lý vòng đời hiệu lực văn bản, gồm xem theo thời điểm trong quá khứ</li>
          <li>Tìm kiếm tiếng Việt có dấu / không dấu / tiếng Anh, hoạt động ngoại tuyến</li>
          <li>Ánh xạ chéo minh họa giữa các khung kiểm soát quốc tế</li>
          <li>Công cụ tác nghiệp kiểm tra minh họa: chương trình kiểm toán, câu hỏi phỏng vấn, thư viện bằng chứng</li>
        </ul>
        <h2>Cố tình chưa triển khai (xem <code>docs/open-questions.md</code>)</h2>
        <ul>
          <li>Tầng nội bộ (chính sách nội bộ, tri thức ngầm) — không phù hợp với công cụ public</li>
          <li>Trợ lý hỏi-đáp bằng mô hình ngôn ngữ</li>
          <li>Xác thực/SSO, nhật ký kiểm toán bất biến — không cần thiết khi không có dữ liệu nhạy cảm</li>
          <li>Một số văn bản pháp lý Việt Nam chưa xác minh được số hiệu chính xác</li>
        </ul>
      </div>

      <div className="card">
        <h2>Tình trạng rà soát</h2>
        <p>
          {overdueCount > 0
            ? `${overdueCount} văn bản đã quá hạn rà soát ${REVIEW_CYCLE_DAYS} ngày (FR-E12/E13).`
            : `Không có văn bản nào quá hạn rà soát ${REVIEW_CYCLE_DAYS} ngày.`}
        </p>
      </div>

      <DisclaimerFooter />
    </div>
  );
}
