import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { orderSlice } from "../../services/slices/OrderSlice"
import styles from "./Navbar.module.scss"


export default function Navbar() {
  const cartProducts = useSelector(orderSlice.selectors.getOrder);
  const cartCount = cartProducts.length;
  return (
    <header className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link to="/" className={styles.navLink}>SNOVA</Link>
      </div>

      <div className={styles.navRight}>
        <Link to="/shop" className={styles.navLink}>Shop</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/contact" className={styles.navLink}>Contacts</Link>
        <div className={styles.cartWrapper}>
          <Link to="/cart" className={styles.navIcon}>🛒</Link>

          {cartCount > 0 && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  );
}