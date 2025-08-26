import "./Home.css";
export default function Home() {
  return (<>
    <section className="home">
      <div className='wrap-home'>
        {/* <div className="home-overlay"></div> */}
        <div className="home-text">
          <h1>SNOVA</h1>
          <p>
            Project about turning plastic waste into sustainable bags & accessories
          </p>
        </div>
        <a className="home-button" href="/shop">SHOP</a>
      </div>

    </section>
  </>)
}