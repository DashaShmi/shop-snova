import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Главная</Link>
      <Link to="/shop" style={{ marginRight: "1rem" }}>Shop</Link>
      <Link to="/cart" style={{ marginRight: "1rem" }}>Cart</Link>
      <Link to="/contact">About</Link>
    </nav>
  );
}