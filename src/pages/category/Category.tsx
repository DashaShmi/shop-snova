import styles from "./Category.module.scss";
import { Link, useParams } from "react-router-dom";
import { ALL_CATEGORIES } from "../data/ALL_CATEGORIES";
import { ALL_PRODUCTS } from "../data/ALL_PRODUCTS";

type CategoryParams = {
  categoryId: string;
};


export default function Wallets() {

  const { categoryId } = useParams<CategoryParams>();

  const category = ALL_CATEGORIES.find((elem) => elem.id === categoryId)

  const productInCategory = ALL_PRODUCTS.filter((elem) => elem.category === categoryId)

  return (<>
    <h2 className={styles.categoryTitle}>{category?.name}</h2>
    <p className={styles.categoryTitle}>{category?.description}</p>
    <section className={styles.category}>

      {productInCategory.map((product) =>
      (<div key={product.id}>
        <Link to={`/shop/product/${product.id}`} className="nav-link">
          <div className={styles.card}>
            <img
              src={product.img}
              alt="картинка Wallets" />
          </div>
          <h3 className={styles.prpductTitle}>{product.name}</h3>
          <p className={styles.productDescription}>{product.fulllName}</p>
          <p className={styles.productPrice}>{product.price}</p>
        </Link>
      </div>)
      )}

    </section >

  </>)

}