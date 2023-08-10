import React from 'react'
import Hero from '../components/Hero'
import background from '../assets/image/Contact-hero.png'

const Contattaci = () => {
  return (
   <Hero disabledOverlay img={background}>
    <section className='contact-us-container'>
      <div className='contact-us-header'>
        <h2>Vorresti aggiungere un cocktail?</h2>
        <p>Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database</p>
      </div>
      <form action="" className='contact-us-form'>
        <div>
          <label htmlFor="name">Nome</label>
          <input type="text" name='name' placeholder='name' />
          <hr />
        </div>
        <div>
          <label htmlFor="lastname">lastname</label>
          <input type="text"  name='lastname' placeholder='lastname' />
          <hr />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name='email' placeholder='daniele@esempio.com' />
          <hr />
        </div>
        <div>
          <label htmlFor="phone">telefono</label>
          <input type="tel" name='tel' placeholder='555 555-55' />
          <hr />
        </div>
        <div>
          <label htmlFor="recipe">recipe</label>
          <textarea id='recipe' name='recipe' placeholder='descrivi la tua ricetta'  />
        </div>
      </form>
    </section>
   </Hero>
  )
}

export default Contattaci