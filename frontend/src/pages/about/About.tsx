import imgUrl from '../../img/MIT05023.jpg';
import styles from "./About.module.scss";

export default function About() {
  return (<>
    <section className="about">
      {/* Текстовая часть */}
      <div className={styles.wrap}>
        <div className={`${styles.aboutText} ${styles.wrapItem}`}>
          <h1 className={styles.aboutTitle}>About</h1>
          <p>
            Hi everyone! My name is Dasha, creator of SNOVA. I dance to jazz, ride
            my bike, go hiking and swim. SNOVA – is my project about turning plastic
            waste into sustainable bags & accessories. Alongside making accessories, I host sewing workshops where people learn how to upcycle old plastic bags into a new material and create their own pieces.
          </p>

          <h3>WHAT I DO</h3>
          <p>
            I try to fight plastic pollution and think that the fashion industry
            was not creating positive change but rather contributing to our
            wasteful consumer culture. And I decided to do things without using
            new resources. I make bags, wallets, passport covers, and laptop cases
            from melted plastic bags. Also, I use product packaging, old jeans, and
            retired climbing rope.
          </p>

          <h3>HOW I DO IT</h3>
          <p>
            My Instagram followers are bringing me plastic bags for recycling. To
            produce one thing I melt 3 to 8 plastic bags, also I sew and design
            myself.
          </p>

          <p className={styles.aboutQuote}>
            Creativity is my dialogue with the world. I like to add value to trash.
          </p>

        </div>

        {/* Фото */}
        <div className={`${styles.aboutImage} ${styles.item}`}>
          <img
            src={imgUrl}
            alt="картинка About" />
        </div>

      </div>
    </section>

  </>);
}


// заюзать стили, дивы, и SCSS 