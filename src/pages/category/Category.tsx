import styles from "./Category.module.scss";
import imgUrl from '../../img/wallets.jpg';
import { Link, useParams } from "react-router-dom";
import { ALL_CATEGORIES } from "../shop/ALL_CATEGORIES";
import { ALL_PRODUCTS } from "./ALL_PRODUCTS";

type CategoryParams = {
  categoryId: string;
};


export default function Wallets() {

  const { categoryId } = useParams<CategoryParams>();

  const category = ALL_CATEGORIES.find(elem => {
    if (elem.id == categoryId) {
      return true;
    }
  });

  const productInCategory = ALL_PRODUCTS.filter(elem => {
    if (elem.category == categoryId) {
      return true;
    }
  })

  return (<>
    <h2 className={styles.categoryTitle}>{category?.name}</h2>
    <p className={styles.categoryTitle}>{category?.description}</p>
    <section className={styles.category}>

      {productInCategory.map((product) =>
      (<div>
        <Link to={`/shop/product/${product.id}`} className="nav-link">
          <div className={styles.card}>
            <img
              src={product.img}
              alt="картинка Wallets" />
          </div>
          <h3 className={styles.prpductTitle}>{product.name}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>{product.price}</p>
        </Link>
      </div>)
      )}

    </section >

  </>)

}