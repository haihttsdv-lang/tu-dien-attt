import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { to: "/", label: "Trang chủ", icon: "🏠" },
  { to: "/tim-kiem", label: "Tìm kiếm", icon: "🔎" },
  { to: "/chu-de", label: "Chủ đề", icon: "📚" },
  { to: "/anh-xa", label: "Ánh xạ", icon: "🔗" },
  { to: "/khan-cap", label: "Khẩn cấp", icon: "🚨" }
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
      <NavLink to="/" className="brand" end>
        Bách khoa ATTT Ngân hàng
      </NavLink>
      <nav className="top-nav-links">
        <NavLinks />
        <NavLink to="/gioi-thieu" className="nav-link">
          Giới thiệu
        </NavLink>
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
