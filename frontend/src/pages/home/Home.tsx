import { Link } from "react-router-dom";

import "./Home.scss";
export default function Home() {
  return (<>
    <section className="home">
      <div className='wrap-home'>

        <div className="container-home" >
          <div className="home-text">
            <h1>SNOVA</h1>
            <p>Project about turning plastic waste into sustainable bags & accessories</p>
          </div>

          <Link className="home-button" to="/shop">SHOP</Link>
        </div>
      </div>

    </section >
  </>)
}