import { HashRouter, Route, Routes } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";
import { TopNav, BottomNav } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { GroupListPage } from "./pages/GroupListPage";
import { TopicDetailPage } from "./pages/TopicDetailPage";
import { DocumentDetailPage } from "./pages/DocumentDetailPage";
import { PointInTimePage } from "./pages/PointInTimePage";
import { TermsPage } from "./pages/TermsPage";
import { MappingPage } from "./pages/MappingPage";
import { AuditToolsPage } from "./pages/AuditToolsPage";
import { EmergencyPage } from "./pages/EmergencyPage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <ContentProvider>
      <HashRouter>
        <div className="app-shell">
          <TopNav />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tim-kiem" element={<SearchPage />} />
              <Route path="/chu-de" element={<GroupListPage />} />
              <Route path="/chu-de/:topicId" element={<TopicDetailPage />} />
              <Route path="/van-ban/:docId" element={<DocumentDetailPage />} />
              <Route path="/xem-theo-thoi-diem" element={<PointInTimePage />} />
              <Route path="/thuat-ngu" element={<TermsPage />} />
              <Route path="/anh-xa" element={<MappingPage />} />
              <Route path="/cong-cu-kiem-tra" element={<AuditToolsPage />} />
              <Route path="/khan-cap" element={<EmergencyPage />} />
              <Route path="/gioi-thieu" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </HashRouter>
    </ContentProvider>
  );
}
