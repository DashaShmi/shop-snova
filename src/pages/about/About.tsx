import imgUrl from '../../img/MIT05023.jpg'
export default function About() {
  return (<>
  <section
      style={{
        display: "flex",
        flexWrap: "wrap", // чтобы на маленьких экранах было в столбик
        alignItems: "flex-start",
        gap: "2rem",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Текстовая часть */}
      <div style={{ flex: "1 1 400px", maxWidth: "600px", textAlign: "left",}}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
          About
        </h1>

        <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
          Hi everyone! My name is Dasha, creator of SNOVA. I dance to jazz, ride
          my bike, go hiking and swim. SNOVA – is my project about turning plastic
          waste into sustainable bags & accessories.
        </p>

        <h3 style={{ fontWeight: "bold", marginTop: "1.5rem" }}>WHAT I DO</h3>
        <p style={{ marginBottom: "1rem", lineHeight: 1.6 }}>
          I try to fight plastic pollution and think that the fashion industry
          was not creating positive change but rather contributing to our
          wasteful consumer culture. And I decided to do things without using
          new resources. I make bags, wallets, passport covers, and laptop cases
          from melted plastic bags. Also, I use product packaging, old jeans, and
          retired climbing rope.
        </p>

        <h3 style={{ fontWeight: "bold", marginTop: "1.5rem" }}>HOW I DO IT</h3>
        <p style={{ lineHeight: 1.6 }}>
          My Instagram followers are bringing me plastic bags for recycling. To
          produce one thing I melt 3 to 8 plastic bags, also I sew and design
          myself.
        </p>

        <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
          Creativity is my dialogue with the world. I like to add value to trash.
        </p>
      </div>

      {/* Фото */}
      <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
        <img
          src={imgUrl}
          alt="картинка About"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "2px",
            objectFit: "cover",
          }}
        />
      </div>
    </section>

  </>);
}


// заюзать стили, дивы, и SCSS 