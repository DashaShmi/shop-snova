import { cleanCart, getOrder } from "../../services/slices/OrderSlice";
import { useAppDispatch, useAppSelector } from "../../services/store";
import styles from "./Cart.module.scss";
import { deleteProduct } from "../../services/slices/OrderSlice"
import type { IProduct } from "../data/ALL_PRODUCTS";
import { useEffect, useState } from "react";

interface CreateOrderData {
  email: string;
  telegram: string;
  productIds: string[];
}

async function createOrder(data: CreateOrderData): Promise<boolean> {
  try {
    const response = await fetch("https://functions.yandexcloud.net/d4eshnc1lmhtg9cngcsn", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    // Check if the request was successful (fetch only rejects on network errors, not HTTP errors)
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`, response);
      return false;
    }

    const responseData = await response.json(); // Parse the JSON response
    console.log('Success:', responseData);
    return true;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}


export default function Cart() {
  const cart = useAppSelector(getOrder);
  const dispatch = useAppDispatch();
  const [telegram, setTelegram] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [orderIsComplete, setOrderIsComplete] = useState(false)

  const [formTouched, setFormTouched] = useState(false);

  const totalPrice = cart.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  const checkForm = (): boolean => {

    if (email.trim() === "") {
      setError("Enter your email");
      return false;
    }

    setError("");

    return true;
  }

  useEffect(() => {
    checkForm()
  }, [telegram]);

  useEffect(() => {
    checkForm()
  }, [email]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();                // не даем странице перезагружаться. 

    setFormTouched(true);

    const formIsValid = checkForm();

    if (!formIsValid) {
      return;
    }

    console.log("Никнейм:", telegram);

    const successfulySendEmail = await createOrder({ email, telegram, productIds: cart.map(x => x.id) })

    if (successfulySendEmail) {
      // показываем что отправлено сообщение
      setOrderIsComplete(true)
      dispatch(cleanCart());
    } else {
      alert('ошибка');
      // показываем ошибку, что не вышло отправить
    }

  };

  function handleDelete(product: IProduct) {
    dispatch(deleteProduct(product));
  };

  return (<>

    <div className={styles.cartContainer}>

      {orderIsComplete && <>
        <div className={styles.cart}>
          <h3 className={styles.orderComplete}>Order sent successfully!</h3>
          <p className={styles.label}>We have copied the order to your email, will contact you soon.</p>
        </div>
      </>}

      {!orderIsComplete && cart.length === 0 && <>
        <div className={styles.cart}>
          <h1>Cart</h1>
          <p style={{ textAlign: 'center' }} className={styles.label}>Cart is empty, go to Shop for purchases</p>
        </div>
      </>}

      {!orderIsComplete && cart.length > 0 && <>
        <div className={styles.cart}>
          <h1>Cart</h1>
          {cart.map(product => <div className={styles.productAtCart}>
            <img src={product.images[0]} />
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productPrice}> {product.price} GEL</div>
            <button onClick={() => handleDelete(product)} className={styles.deleteButton}> Х </button>
          </div>
          )}
          <form onSubmit={submitHandler} method="post">
            <div className={styles.line} />
            <div className={styles.total}>Estimated Total: {totalPrice} GEL</div>
            <p className={styles.label}>Your email</p>
            <input type="text" className={styles.inputField} value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setFormTouched(true);
              }} />
            {formTouched && error && <p className={styles.error}>{error}</p>}

            <p className={styles.label}>Your nickname in Telegram or Instagram for communication</p>
            <input type="text" className={styles.inputField} value={telegram}
              onChange={(e) => {
                setTelegram(e.target.value);
                setFormTouched(true);
              }} />
            <button type="submit" className={styles.orderButton}>ORDER</button>
          </form>
          <p className={styles.label}>After ordering through the cart. I will contact you for payment and further processing. Or you can place an order through the Instagram by contacting me personally.
            For orders to another country the shipping cost is calculated individually.</p>
        </div> </>}
    </div>
  </>)

}

