import styles from "./ProductPage.module.scss";
import imgUrl from '../../img/wallets.jpg';

export default function ProductPage() {

  return (<>
    <h2> Fake wallet</h2>
    <section className={styles.productPage}>

      <div>
        <div className={styles.card}>
          <img
            src={imgUrl}
            alt="картинка Wallets" />
        </div>
        <h3>Fake wallet</h3>
        <p>Описание товара</p>
        <p>169</p>
      </div>

    </section >

  </>)

}




