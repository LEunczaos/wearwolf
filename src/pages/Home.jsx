import { Link } from "react-router-dom";
import "../styles/home.css";
import bgVideo from "../assets/videos/bgHome.mp4";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <video className="hero__video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="hero__overlay"></div>

        <div className="hero__content">
          <h1 className="hero__title">WEARWOLF</h1>

          <p className="hero__subtitle">
            Roam Free in Fashion
          </p>

          <Link to="/shop" className="hero__btn">
            SHOP NOW
          </Link>
        </div>

      </section>

      <section className="essence">

        <div className="grid">

          <div className="card">
            <h3>WILD SPIRIT</h3>
            <p>Untamed energy</p>
          </div>

          <div className="card">
            <h3>URBAN EDGE</h3>
            <p>Street freedom</p>
          </div>

          <div className="card">
            <h3>NIGHT HOWL</h3>
            <p>After dark style</p>
          </div>

          <div className="card">
            <h3>ROAM FREE</h3>
            <p>Limitless fashion</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;