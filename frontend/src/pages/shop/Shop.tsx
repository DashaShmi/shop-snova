import styles from "./Shop.module.scss"
import { Link } from "react-router-dom";
import { ALL_CATEGORIES } from "../data/ALL_CATEGORIES";

export default function Shop() {

  return (<>
    <section className={styles.shop}>

      {ALL_CATEGORIES.map((category) =>
      (<div key={category.id} className={styles.card}>
        <Link to={`/shop/category/${category.id}`} className={styles.navLink}>
          <img
            src={category.img}
            alt="картинка Shop" />
          <h2 className={styles.shopTitle}>{category.name}</h2>
        </Link>
      </div>)
      )}

    </section >

  </>)
}