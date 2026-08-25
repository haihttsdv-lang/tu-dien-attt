import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ContentProvider } from "../../src/ui/context/ContentContext";
import { ThreatMapPage } from "../../src/ui/pages/ThreatMapPage";
import { BookmarksPage } from "../../src/ui/pages/BookmarksPage";

function renderAt(path: string, routePath: string, element: React.ReactElement) {
  return render(
    <ContentProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path={routePath} element={element} />
        </Routes>
      </MemoryRouter>
    </ContentProvider>
  );
}

describe("ThreatMapPage — FR-A06", () => {
  it("hien thi chu de kiem soat cho ky thuat mac dinh va cap nhat khi chon ky thuat khac", () => {
    renderAt("/moi-de-doa", "/moi-de-doa", <ThreatMapPage />);
    expect(screen.getByText(/Bản đồ mối đe dọa/i)).toBeTruthy();
    // Ky thuat dau tien (phishing) phai co MITRE ATT&CK badge va link chu de KT-13
    expect(screen.getByText(/MITRE ATT&CK T1566/i)).toBeTruthy();
    expect(screen.getByText(/KT-13/i)).toBeTruthy();

    fireEvent.click(screen.getByText("Mã hóa tống tiền (Ransomware)"));
    expect(screen.getByText(/MITRE ATT&CK T1486/i)).toBeTruthy();
  });
});

describe("BookmarksPage — FR-Q10", () => {
  it("hien thi trang thai rong khi chua co danh dau nao", () => {
    renderAt("/da-danh-dau", "/da-danh-dau", <BookmarksPage />);
    expect(screen.getByText(/Chưa có chủ đề nào được đánh dấu/i)).toBeTruthy();
  });
});
