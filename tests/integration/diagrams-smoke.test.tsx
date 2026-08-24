import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ContentProvider } from "../../src/ui/context/ContentContext";
import { TopicDetailPage } from "../../src/ui/pages/TopicDetailPage";
import { DocumentDetailPage } from "../../src/ui/pages/DocumentDetailPage";

function renderTopic(topicId: string) {
  return render(
    <ContentProvider>
      <MemoryRouter initialEntries={[`/chu-de/${topicId}`]}>
        <Routes>
          <Route path="/chu-de/:topicId" element={<TopicDetailPage />} />
        </Routes>
      </MemoryRouter>
    </ContentProvider>
  );
}

describe("So do khai niem — khong crash runtime", () => {
  it("CycleDiagram (PDCA) render duoc tren CM-01", () => {
    renderTopic("CM-01");
    expect(screen.getByText(/Chu trình PDCA/i)).toBeTruthy();
  });

  it("LayeredDiagram (3 tuyen phong thu) render duoc tren KG-01", () => {
    renderTopic("KG-01");
    // Tieu de chu de va tieu de so do trung chuoi — chi can dam bao xuat hien (>=1)
    expect(screen.getAllByText(/Mô hình ba tuyến phòng thủ/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Tuyến 1 — Đơn vị vận hành/i)).toBeTruthy();
  });

  it("ZeroTrustDiagram render duoc tren KT-12", () => {
    renderTopic("KT-12");
    expect(screen.getByText(/Kiến trúc Zero Trust/i)).toBeTruthy();
  });

  it("TopicRelationGraph render duoc khi co relatedTopicIds", () => {
    renderTopic("KT-03"); // co relatedTopicIds: ["KT-02"]
    expect(screen.getByText(/Sơ đồ quan hệ chủ đề/i)).toBeTruthy();
  });
});

describe("So do van ban — khong crash runtime", () => {
  it("DocumentRelationGraph + EffectivityTimeline render duoc tren TT09/2020", () => {
    render(
      <ContentProvider>
        <MemoryRouter initialEntries={["/van-ban/tt-09-2020-nhnn"]}>
          <Routes>
            <Route path="/van-ban/:docId" element={<DocumentDetailPage />} />
          </Routes>
        </MemoryRouter>
      </ContentProvider>
    );
    expect(screen.getByText(/Sơ đồ quan hệ văn bản/i)).toBeTruthy();
    expect(screen.getByText(/Đường thời gian hiệu lực/i)).toBeTruthy();
  });
});
