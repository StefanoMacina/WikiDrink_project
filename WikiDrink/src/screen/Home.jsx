import React from "react";
import Hero from "../components/Hero";
import homeImg from "../assets/image/home-hero.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
  
      <Hero img={homeImg} >
        <div className="home-container">
          <div className="home-first-container">
            <div className="home-text-container">
              <h1>Wiki drink</h1>
              <h3>tutti i cocktail del mondo a portata di click</h3>
              <p>
                Wiki Drink è un database internazionale che mette a tua
                disposizione, in maniera <span>Gratuita</span>, le ricette dei più importanti e
                diffusi cocktail al mondo.
              </p>
            <button className="home-cta-btn"><Link to='/about'>scopri di più</Link></button>
            </div>
          </div>
            <div className="image">
              sdsds
            </div>
          </div>
      </Hero>
   
  );
};

export default Home;
