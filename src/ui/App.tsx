import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ContentProvider } from "./context/ContentContext";
import { TopNav, BottomNav } from "./components/NavBar";

// Lazy-load tung trang: giam JS phai tai/parse cho lan mo dau tien mot
// route cu the — quan trong tren mang di dong. Du lieu noi dung
// (contentBundle) van nam trong ContentProvider o goc, tai mot lan de
// bao dam tim kiem toan van hoat dong day du ngay ca khi mat mang
// (FR-Q01, FR-Q07) — chi ma giao dien duoc tach nho.
const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const SearchPage = lazy(() => import("./pages/SearchPage").then((m) => ({ default: m.SearchPage })));
const GroupListPage = lazy(() => import("./pages/GroupListPage").then((m) => ({ default: m.GroupListPage })));
const TopicDetailPage = lazy(() => import("./pages/TopicDetailPage").then((m) => ({ default: m.TopicDetailPage })));
const DocumentDetailPage = lazy(() => import("./pages/DocumentDetailPage").then((m) => ({ default: m.DocumentDetailPage })));
const PointInTimePage = lazy(() => import("./pages/PointInTimePage").then((m) => ({ default: m.PointInTimePage })));
const TermsPage = lazy(() => import("./pages/TermsPage").then((m) => ({ default: m.TermsPage })));
const MappingPage = lazy(() => import("./pages/MappingPage").then((m) => ({ default: m.MappingPage })));
const AuditToolsPage = lazy(() => import("./pages/AuditToolsPage").then((m) => ({ default: m.AuditToolsPage })));
const EmergencyPage = lazy(() => import("./pages/EmergencyPage").then((m) => ({ default: m.EmergencyPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

function PageLoadingFallback() {
  return (
    <div className="card" role="status" aria-live="polite">
      Đang tải...
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <HashRouter>
        <div className="app-shell">
          <TopNav />
          <main className="app-main">
            <Suspense fallback={<PageLoadingFallback />}>
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
            </Suspense>
          </main>
          <BottomNav />
        </div>
      </HashRouter>
    </ContentProvider>
  );
}
