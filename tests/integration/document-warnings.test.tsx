import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ContentProvider } from "../../src/ui/context/ContentContext";
import { DocumentDetailPage } from "../../src/ui/pages/DocumentDetailPage";

/**
 * Kiem chung truc quan cua ca kiem thu bat buoc URD Muc 1.2: trang chi
 * tiet van ban TT09/2020 phai hien canh bao "hieu luc mot phan" VA canh
 * bao rieng o Dieu 25 (khong phai canh bao "het hieu luc" toan van ban).
 */
describe("DocumentDetailPage — canh bao hieu luc mot phan (URD Muc 1.2)", () => {
  it("hien banner hieu_luc_mot_phan va canh bao cap dieu khoan cho Dieu 25", () => {
    render(
      <ContentProvider>
        <MemoryRouter initialEntries={["/van-ban/tt-09-2020-nhnn"]}>
          <Routes>
            <Route path="/van-ban/:docId" element={<DocumentDetailPage />} />
          </Routes>
        </MemoryRouter>
      </ContentProvider>
    );

    expect(screen.getByText(/CÒN HIỆU LỰC MỘT PHẦN/i)).toBeTruthy();
    expect(screen.queryByText(/^ĐÃ HẾT HIỆU LỰC/i)).toBeNull();
    expect(screen.getByText(/Điều khoản này đã bị bãi bỏ/i)).toBeTruthy();
  });
});
