import React from "react";
import Hero from "../components/Hero";
import homeImg from "../assets/image/home-hero.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero img={homeImg}>
      <div className="home-container">
        <div className="text-container-home">
          <h1>wiki drink</h1>
          <h4>tutti i cocktail del mondo a portata di click</h4>
          <p>
            Wiki Drink è un database internazionale che mette a tua
            disposizione, in maniera <span>Gratuita</span>, le ricette dei più
            importanti e diffusi cocktail al mondo.
          </p>
          <button>
            <Link to="/about">scopri di più</Link>
          </button>
        </div>
        <div className="img-container-home">
          svg img
        </div>
      </div>
    </Hero>
  );
};

export default Home;
