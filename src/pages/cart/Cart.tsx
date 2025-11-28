import { getOrder } from "../../services/slices/OrderSlice";
import { useAppDispatch, useAppSelector } from "../../services/store";
import styles from "./Cart.module.scss";
import { deleteProduct } from "../../services/slices/OrderSlice"
import type { IProduct } from "../data/ALL_PRODUCTS";
import { useState } from "react";



export default function Cart() {
  const cart = useAppSelector(getOrder);
  const dispatch = useAppDispatch();
  const [telegram, setTelegram] = useState("");

  const totalPrice = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  const sendTelegram = (e: React.FormEvent) => {
    e.preventDefault();                // не даем странице перезагружаться
    console.log("Никнейм:", telegram);
  };

  function handleDelete(product: IProduct) {
    dispatch(deleteProduct(product));
  };

  return (<>

    <div className={styles.cartContainer}>

      <div className={styles.cart}>
        <h1>Cart</h1>
        {cart.map(product => <div className={styles.productAtCart}>
          <img src={product.images[0]} />
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.productPrice}> {product.price} GEL</div>
          <button onClick={() => handleDelete(product)} className={styles.deleteButton}>✖️</button>

        </div>
        )}

        <form onSubmit={sendTelegram} method="post">
          <div className={styles.line} />
          <div className={styles.total}>Estimated Total: {totalPrice} GEL</div>
          <p className={styles.label}>Your nickname in Telegram for communication</p>
          <input type="text" className={styles.inputField} value={telegram}
            onChange={(e) => setTelegram(e.target.value)} />
          <button type="submit" className={styles.orderButton}>Order</button>
        </form>
        <p className={styles.label}>After ordering through the cart. I will contact you for payment and further processing. Or you can place an order through the Instagram by contacting me personally.
          For orders to another country the shipping cost is calculated individually.</p>
      </div>
    </div>
  </>)

}

