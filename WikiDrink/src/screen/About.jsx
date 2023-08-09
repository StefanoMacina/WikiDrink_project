import React from "react";
import Hero from "../components/Hero";
import aboutImg from "../assets/image/about-hero.jpg";
import {teamCards, valueCards} from '../utils/info.js'
import Card from "../components/Card";
import teamImg from '../assets/image/team-img.jpg'

const About = () => {

  
  return (
    <>
    <Hero img={aboutImg}>
      <section className="about-container">
        <div className="top-line"></div>
        <h3 className="about-quote">
          <q>
            Grande è la fortuna di colui che possiede una buona bottiglia, un
            buon libro, un buon amico.
          </q>
        </h3>
        <div className="bottom-line"></div>
      </section>
    </Hero>
    <section className="about-main">
      <div className="about-title">
        <h2>il nostro progetto</h2>
      </div>
      <div className="about-card-container">
      {
        valueCards.map((card) => {
          return(
            <Card key={card.title} {...card} ></Card>
          )
        })
      }
      </div>
    </section>
    <section className="about-team">
      <div>
        <img src={teamImg} alt="" />
      </div>
    </section>
    <section>
      <div className="about-team-title">
        <h2>
          il nostro team
        </h2>
      </div>
      <div>
        {
          teamCards.map((card) => {
            return(
              <Card key={card.title} {...card}></Card>
            )
          })
        }
      </div>
    </section>
    </>
  );
};

export default About;
