import styles from "./CategoryPage.module.scss";

import { Link, useParams } from "react-router-dom";
import { ALL_CATEGORIES } from "../data/ALL_CATEGORIES";
import { ALL_PRODUCTS } from "../data/ALL_PRODUCTS";

type CategoryParams = {
  categoryId: string;
};


export default function CategoryPage() {

  const { categoryId } = useParams<CategoryParams>();

  const category = ALL_CATEGORIES.find((elem) => elem.id === categoryId)

  const productInCategory = ALL_PRODUCTS.filter((elem) => elem.category === categoryId)

  return (<>
    <h1 className={styles.categoryTitle}>{category?.name}</h1>
    <p>{category?.description}</p>
    <section className={styles.category}>

      {productInCategory.map((product) =>
      (<div key={product.id}>
        <Link to={`/shop/product/${product.id}`} className={styles.navLink}>
          <div className={styles.card}>
            <img
              src={product.images[0]}
              alt="картинка Wallets" />
          </div>
          <h3 className={styles.prpductTitle}>{product.name}</h3>
          <p className={styles.productDescription}>{product.fulllName}</p>
          <p className={styles.productPrice}>{product.price} GEL</p>
        </Link>
      </div>)
      )}

    </section >

  </>)

}