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
      <h2> Detail Product Page</h2>
      <section className={styles.productPage}>
        <div>
          <div className={styles.card}>

            <img
              src={product.img}
              alt="картинка Wallets" />
          </div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      </section >
    </>)}




  </>)

}




