import styles from "./Category.module.scss";
import imgUrl from '../../img/wallets.jpg';

export default function Wallets() {
  const arr = new Array(5).fill(0);
  return (<>
    <h2 className={styles.categoryTitle}>Wallets</h2>
    <section className={styles.category}>

      {arr.map(() =>
      (<div>
        <div className={styles.card}>
          <img
            src={imgUrl}
            alt="картинка Wallets" />
        </div>
        <h3 className={styles.prpductTitle}>Bifold wallet</h3>
        <p className={styles.productDescription}>Описание товара</p>
        <p className={styles.productPrice}>169</p>
      </div>)
      )}

    </section >

  </>)

}