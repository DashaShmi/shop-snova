import "./Shop.css";
import { Link } from "react-router-dom";
import { ALL_CATEGORIES } from "./ALL_CATEGORIES";

export default function Shop() {

  return (<>
    <section className="shop">

      {ALL_CATEGORIES.map((category) =>
      (<div className="card">
        <Link to={`/shop/category/${category.id}`} className="nav-link">
          <img
            src={category.img}
            alt="картинка Shop" />
          <h2 className="shop-title">{category.name}</h2>
        </Link>
      </div>)
      )}

    </section >

  </>)
}