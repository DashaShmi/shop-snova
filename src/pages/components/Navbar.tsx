import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    // <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
    //   <Link to="/" style={{ marginRight: "1rem" }}>Главная</Link>
    //   <Link to="/shop" style={{ marginRight: "1rem" }}>Shop</Link>
    //   <Link to="/cart" style={{ marginRight: "1rem" }}>Cart</Link>
    //   <Link to="/contact">About</Link>
    // </nav>

    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">SNOVA</Link>
      </div>
      {/* 
      <div className="nav-center">
        <Link to="/" className="nav-logo">SNOVA</Link>
      </div> */}

      <div className="nav-right">
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contacts</Link>
        <Link to="/cart" className="nav-icon">🛒</Link>
      </div>
    </header>
  );
}