import "./Shop.css";
import imgUrl from '../../img/MIT05233.jpg';

export default function Shop() {

  const arr = new Array(5).fill(0);

  return (<>
    <section className="shop">

      {arr.map(() =>
      (<div className="card">

        <img
          src={imgUrl}
          alt="картинка Shop" />

        <h2>Bags</h2>
      </div>)
      )}

    </section >

  </>)
}