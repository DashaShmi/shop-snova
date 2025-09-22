import styles from "./ProductPage.module.scss";
import imgUrl from '../../img/wallets.jpg';
import { useParams } from "react-router-dom";
import { products } from "../category/Category";

type ProductParams = {
  productId: string;
};

export default function ProductPage() {

  const { productId } = useParams<ProductParams>();

  console.log("productId ", productId);

  const product = products.find(elem => {
    if (elem.id == productId) {
      return true;
    }
  })

  console.log("product ", product);

  return (<>
    <h2> Fake Product Page</h2>
    <section className={styles.productPage}>

      <div>
        <div className={styles.card}>
          <img
            src={product?.img}
            alt="картинка Wallets" />
        </div>
        <h3>{product?.name}</h3>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
      </div>
    </section >

  </>)

}




