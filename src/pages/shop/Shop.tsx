import "./Shop.css";
import imgUrl from '../../img/MIT05233.jpg';
import { Link } from "react-router-dom";

export default function Shop() {

  const arr = new Array(5).fill(0);

  return (<>
    <section className="shop">

      {arr.map(() =>
      (<div className="card">
        <Link to="/shop/wallets" className="nav-link">
          <img
            src={imgUrl}
            alt="картинка Shop" />

          <h2 className="shop-title">Bags</h2>
        </Link>
      </div>)
      )}

    </section >

  </>)
}