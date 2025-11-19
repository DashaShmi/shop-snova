import { getOrder } from "../../services/slices/OrderSlice";
import { useAppDispatch, useAppSelector } from "../../services/store";
import styles from "./Cart.module.scss";
import { deleteProduct } from "../../services/slices/OrderSlice"
import type { IProduct } from "../data/ALL_PRODUCTS";



export default function Cart() {
  const cart = useAppSelector(getOrder);
  const dispatch = useAppDispatch();

  function handleDelete(product: IProduct) {
    dispatch(deleteProduct(product));
  };

  return (<>
    <h1>Cart</h1>
    <div className={styles.cart}>
      {cart.map(product => <div className={styles.productAtCart}>
        <img src={product.images[0]} />
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice}> {product.price}</div>
        <button onClick={() => handleDelete(product)} className={styles.deleteButton}>✖️</button>
      </div>
      )}

    </div>
  </>)



}

