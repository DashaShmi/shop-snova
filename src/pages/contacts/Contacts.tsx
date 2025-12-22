import { FaInstagram, FaTelegramPlane, FaPinterestP } from "react-icons/fa";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (<section className={styles.contacts}>
    <p className={styles.contactsAddress}>Based in Tbilisi, Georgia. Shipping worldwide.</p>
    <div className={styles.contactsDescr}>
      SNOVA is a small handmade project. If you have questions, ideas, or want a custom piece — just message me.
    </div>
    <div className={styles.contactsIcons}>
      <a href="https://www.instagram.com/snova.upcycle" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://t.me/shmizh" target="_blank" rel="noopener noreferrer">
        <FaTelegramPlane />
      </a>
      <a href="https://pin.it/20LCkd5EN" target="_blank" rel="noopener noreferrer">
        <FaPinterestP />
      </a>
    </div>
  </section>)


}