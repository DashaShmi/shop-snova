import styles from "./Category.module.scss";
import imgUrl from '../../img/wallets.jpg';
import { Link } from "react-router-dom";

export const wallets = [
  {
    name: "Bifold Wallet",
    price: 140,
    description: 'Bifold wallet from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3333-3035-4331-b638-323663313935/-/format/webp/MIT04573.jpg.webp'
  },
  {
    name: "Zippered wallet",
    price: 100,
    description: 'For cards, coins and bills',
    img: 'https://optim.tildacdn.pub/tild6165-3136-4261-b764-343137636364/-/format/webp/MIT04678.JPG.webp'

  },
  {
    name: "Cardholder",
    price: 80,
    description: 'Cardholder from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3931-3437-4965-b136-323164363731/-/format/webp/MIT04888.jpg.webp'

  },
];



export default function Wallets() {
  // const arr = new Array(5).fill(0);
  return (<>
    <h2 className={styles.categoryTitle}>Wallets</h2>
    <section className={styles.category}>

      {wallets.map((wallet) =>
      (<div>
        <Link to="/shop/wallets/fakeWallet" className="nav-link">
          <div className={styles.card}>
            <img
              src={wallet.img}
              alt="картинка Wallets" />
          </div>
          <h3 className={styles.prpductTitle}>{wallet.name}</h3>
          <p className={styles.productDescription}>{wallet.description}</p>
          <p className={styles.productPrice}>{wallet.price}</p>
        </Link>
      </div>)
      )}

    </section >

  </>)

}