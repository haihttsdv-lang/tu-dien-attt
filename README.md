# Bách khoa ATTT Ngân hàng

Công cụ tra cứu tham khảo cá nhân về pháp lý, chuẩn mực quốc tế và kiểm soát
an toàn thông tin ngành ngân hàng. Xây dựng dựa trên URD
[`URD-bach-khoa-ATTT-ngan-hang-Antigravity.md`](./URD-bach-khoa-ATTT-ngan-hang-Antigravity.md),
giới hạn ở **tầng tham chiếu** (không có tầng nội bộ, không gắn với một
ngân hàng cụ thể — xem [`docs/open-questions.md`](./docs/open-questions.md)
để biết đầy đủ phạm vi đã/chưa triển khai).

> ⚠️ **Đây KHÔNG phải nguồn chân lý pháp lý.** Mọi nội dung quy phạm phải
> được đối chiếu với văn bản gốc trước khi dùng trong công việc chính thức.

## Nguyên tắc nền tảng

**Không có nguồn thì không có nội dung.** Mọi khối nội dung (`ContentBlock`)
bắt buộc gắn với ít nhất một văn bản pháp lý hoặc chuẩn mực có thật trong
kho — cưỡng chế ở tầng schema (Zod, `src/data/schema/models.ts`) và ở tầng
kiểm thử (`scripts/validate/validate-content.ts`, chạy trong CI cho mọi
commit).

## Chạy cục bộ

```bash
npm install
npm run dev              # http://localhost:5173
npm test                 # unit + integration test (vitest)
npm run validate:content # kiểm tra toàn vẹn nguồn nội dung (FR-T01/T02)
npm run build            # build production vào dist/
```

## Kiến trúc

```
src/
  data/schema/     # mô hình dữ liệu trung tâm (Zod) — URD Mục 16
  core/            # logic thuần, có kiểm thử riêng, KHÔNG gọi mạng
    source-validator/  # FR-T01, T02 — cưỡng chế nguồn
    effectivity/       # FR-E01..E14 — trạng thái hiệu lực, xem theo thời điểm
    search/             # FR-Q01..Q06 — tìm kiếm tiếng Việt có dấu/không dấu
    mapping/            # FR-X01..X07 — ánh xạ chéo khung kiểm soát
  content/         # DỮ LIỆU — 93 chủ đề, văn bản, framework, thuật ngữ...
  ui/              # React SPA (PWA, mobile-first, offline)
tests/unit/        # kiểm thử module core, gồm ca kiểm thử bắt buộc URD Mục 1.2
tests/integration/ # kiểm thử render UI (cảnh báo hiệu lực, v.v.)
docs/open-questions.md  # danh sách CHƯA XÁC MINH — đọc trước khi bổ sung nội dung
```

## Triển khai lên GitHub Pages

Workflow `.github/workflows/deploy.yml` tự động test + build + deploy mỗi
khi push lên `main`. Yêu cầu một lần duy nhất trên GitHub:
**Settings → Pages → Source: "GitHub Actions"**.

Ứng dụng là PWA (`vite-plugin-pwa`) — sau lần tải đầu tiên, có thể "Cài đặt"
vào màn hình chính (điện thoại) hoặc thanh địa chỉ (desktop) và dùng lại
**hoàn toàn ngoại tuyến** (FR-Q07).

## Đóng góp nội dung mới

Đọc kỹ comment đầu file [`src/content/topics/content-blocks.ts`](./src/content/topics/content-blocks.ts)
trước khi thêm `ContentBlock` mới — đặc biệt quy tắc **không bịa số hiệu
văn bản/điều khoản**. Luôn chạy `npm run validate:content` trước khi commit.
