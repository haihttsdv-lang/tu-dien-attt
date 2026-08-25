import { NavLink } from "react-router-dom";
import { BrandIcon } from "./BrandIcon";

const NAV_ITEMS = [
  { to: "/", label: "Trang chủ", icon: "🏠" },
  { to: "/tim-kiem", label: "Tìm kiếm", icon: "🔎" },
  { to: "/chu-de", label: "Chủ đề", icon: "📚" },
  { to: "/anh-xa", label: "Ánh xạ", icon: "🔗" },
  { to: "/khan-cap", label: "Khẩn cấp", icon: "🚨" }
];

/** Chi hien tren TopNav (man hinh rong) — tranh qua tai bottom nav di dong. */
const DESKTOP_ONLY_LINKS = [
  { to: "/moi-de-doa", label: "Mối đe dọa" },
  { to: "/cong-cu-kiem-tra", label: "Công cụ kiểm tra" },
  { to: "/da-danh-dau", label: "Đã đánh dấu" },
  { to: "/gioi-thieu", label: "Giới thiệu" }
];

function NavLinks() {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
        >
          <span className="nav-icon" aria-hidden="true">
            {item.icon}
          </span>
          <span className="nav-label">{item.label}</span>
        </NavLink>
      ))}
    </>
  );
}

/** Thanh dieu huong tren cung (man hinh rong) — FR-Q08. */
export function TopNav() {
  return (
    <header className="top-nav">
      <NavLink to="/" className="brand" end title="Bách khoa ATTT Ngân hàng">
        <BrandIcon />
      </NavLink>
      <nav className="top-nav-links">
        <NavLinks />
        {DESKTOP_ONLY_LINKS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

/** Thanh dieu huong duoi (man hinh nho, vung cham >=48px) — NFR-04. */
export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Điều hướng chính">
      <NavLinks />
    </nav>
  );
}
