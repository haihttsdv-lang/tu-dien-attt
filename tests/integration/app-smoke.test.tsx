import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../../src/ui/App";

/**
 * Kiem thu khoi (FR-Q07 pipeline dau-cuoi toi thieu): ung dung phai render
 * duoc man hinh chinh, khong crash runtime, va hien thi tuyen bo mien tru
 * (FR-T04) tren trang chu.
 */
describe("App smoke test", () => {
  it("render trang chu khong loi va co tuyen bo mien tru", async () => {
    render(<App />);
    // HomePage duoc lazy-load (React.lazy/Suspense) — cho chunk tai xong
    // truoc khi kiem tra noi dung.
    expect(await screen.findByRole("heading", { level: 1, name: /Bách khoa ATTT Ngân hàng/i })).toBeTruthy();
    expect(await screen.findByText(/Miễn trừ trách nhiệm/i)).toBeTruthy();
  });
});
