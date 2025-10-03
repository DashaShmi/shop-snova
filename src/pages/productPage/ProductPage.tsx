import styles from "./ProductPage.module.scss";
import { useParams } from "react-router-dom";
import { ALL_PRODUCTS } from "../data/ALL_PRODUCTS";

type ProductParams = {
  productId: string;
};

export default function ProductPage() {

  const { productId } = useParams<ProductParams>();

  const product = ALL_PRODUCTS.find(elem => {
    if (elem.id == productId) {
      return true;
    }
  })

  return (<>

    {product === undefined && (<>
      <h2>Product not found</h2>
    </>)}

    {product && (<>
      <section className={styles.productPage}>
        <div className={styles.page}>
          <div className={styles.preview}>
            <img
              src={product.img}
              alt="картинка Wallets" />
          </div>
          <div className={styles.info}>
            <h3>{product.name}</h3>
            <p>{product.price} GEL</p>
            <p className={styles.fulllName}>{product.fulllName}</p>
            <div className={styles.bulletsDescription}>{product.description}</div>
            <h4>IMPORTANT</h4>
            <div style={{ fontStyle: 'italic' }}>None of the products look 100% alike, so please note that the product: print and lining you receive may be slightly different from the picture. Each plastic bag I use to make products is unique, making each produced item one of a kind.</div>
          </div>
        </div>
      </section >
    </>)}




  </>)

}




