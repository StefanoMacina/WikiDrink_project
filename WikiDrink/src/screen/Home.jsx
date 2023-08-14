import React, { useState } from "react";
import Hero from "../components/Hero";
import homeImg from "../assets/image/home-hero.jpg";
import { Link } from "react-router-dom";
import animation from '../assets/animations/animation_llaqci4u.json'
import Lottie2 from 'react-lottie'
import {FaSearch} from 'react-icons/fa'

const Home = () => {

  const [input, setInput] = useState('negroni')

  

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
          <Lottie2
          options={{
            loop : true,
            autoplay : true,
            reverse : true,
            animationData : animation,
            rendererSettings : {
              preserveAspectRatio : 'xMidYMid slice'
            }
          }}
          height={300}>
          </Lottie2>
        </div>
      </div>
      <div className="search-bar-container">
        <div className="search-bar-content">
          <form action="">
            <label htmlFor="">cerca il tuo drink</label>
              <div className="input-search">
                <input type="text" value={input} onChange={e => setInput(e.target.value)}  onClick={()=>setInput('')}/>
                <button><FaSearch className="icon"/></button>
              </div>
          </form>
        </div>
      </div>
    </Hero>
  );
};

export default Home;
