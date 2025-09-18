import "./Shop.css";
import imgUrl from '../../img/MIT05233.jpg';
import { Link } from "react-router-dom";

export const categories = [
  {
    name: "Wallets",
    id: "wallets",
    description: 'Wallets from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3333-3035-4331-b638-323663313935/-/format/webp/MIT04573.jpg.webp'
  },
  {
    name: "Bags",
    id: "bags",
    description: 'Bags from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3166-6466-4433-b836-663566613866/-/format/webp/MIT05333.JPG.webp'

  },
  {
    name: "Passport covers",
    id: "passport-covers",
    description: 'Passport covers from plastic bags',
    img: 'https://optim.tildacdn.pub/tild3465-6332-4535-a363-623762303938/-/format/webp/MIT04981.JPG.webp'

  },
];


export default function Shop() {

  return (<>
    <section className="shop">

      {categories.map((category) =>
      (<div className="card">
        <Link to={`/shop/${category.id}`} className="nav-link">

          <img
            src={category.img}
            alt="картинка Shop" />
          <h2 className="shop-title">{category.name}</h2>
        </Link>
      </div>)
      )}

    </section >

  </>)
}