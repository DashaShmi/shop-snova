import { FaInstagram, FaTelegramPlane, FaPinterestP } from "react-icons/fa";
import "./Contacts.css";

export default function Contacts() {
  return(<section className="contacts">
      <p className="contacts-address">Georgia, Tbilisi.</p>
      <div className="contacts-icons">
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