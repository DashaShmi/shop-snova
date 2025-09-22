import styles from "./Category.module.scss";
import imgUrl from '../../img/wallets.jpg';
import { Link, useParams } from "react-router-dom";
import { categories } from "../shop/Shop"

export const products = [
  {
    name: "Bifold Wallet",
    price: 140,
    description: 'Bifold wallet from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3333-3035-4331-b638-323663313935/-/format/webp/MIT04573.jpg.webp',
    category: "wallet",
    id: "bifold-wallet"
  },
  {
    name: "Zippered wallet",
    price: 100,
    description: 'For cards, coins and bills',
    img: 'https://optim.tildacdn.pub/tild6165-3136-4261-b764-343137636364/-/format/webp/MIT04678.JPG.webp',
    category: "wallet",
    id: "zippered-wallet"
  },
  {
    name: "Cardholder",
    price: 80,
    description: 'Cardholder from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3931-3437-4965-b136-323164363731/-/format/webp/MIT04888.jpg.webp',
    category: "wallet",
    id: "cardholder"
  },

  {
    name: "Docholder",
    price: 140,
    description: 'Bifold wallet from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3531-3430-4336-a237-666565393236/-/format/webp/MIT04497.jpg.webp',
    category: "passport-covers",
    id: "docholder"
  }
];

type CategoryParams = {
  categoryId: string;
};


export default function Wallets() {

  const { categoryId } = useParams<CategoryParams>();

  const category = categories.find(elem => {
    if (elem.id == categoryId) {
      return true;
    }
  })

  return (<>
    <h2 className={styles.categoryTitle}>{category?.name}</h2>
    <p className={styles.categoryTitle}>{category?.description}</p>
    <section className={styles.category}>

      {products.map((product) =>
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