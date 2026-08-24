import { Link } from "react-router-dom";
import { DisclaimerFooter } from "../components/DisclaimerFooter";

export function NotFoundPage() {
  return (
    <div>
      <h1 className="page-title">Không tìm thấy trang</h1>
      <p>
        <Link to="/">Về trang chủ</Link>
      </p>
      <DisclaimerFooter />
    </div>
  );
}
