import React, { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
import background from '../assets/image/Contact-hero.png'
import axios from 'axios'
import { useNavigate} from'react-router-dom'


const Contattaci = () => {
  const inputFocus = useRef()
  const navigate = useNavigate()


  const [data, setData] = useState({
    name : '',
    lastname : '',
    email : '',
    tel : '',
    recipe : ''

  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setData((prevData) => ({...prevData , [name] : value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postData()
    console.log(data)
  }

  const postData = async() =>{
    try {
      const res = await axios.post('http://localhost:3000/find' , data, {
        headers : {
          "Content-Type": "application/json",
        }
      })
      if(res.status === 200){
        setData({
          name : '',
          lastname : '',
          email : '',
          tel : '',
          recipe : ''
        })
        setTimeout(() => {
          navigate("/")
        }, 1500);
      }
      
    } catch (error) {
      console.log(error.name);
    }
  
  }

  useEffect(() => {
    inputFocus.current.focus()
  },[])



  return (
   <Hero disabledOverlay img={background}>
    <section className='contact-us-container'>
      <div className='contact-us-header'>
        <h2>Vorresti aggiungere un cocktail?</h2>
        <p>Il nostro team è sempre disponibile per valutare possibili nuove ricette ed ad aggiungerle alla nostro database</p>
      </div>
      <form action="/find" method='POST' className='contact-us-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='name' ref={inputFocus} />
          <hr />
        </div>
        <div>
          <label htmlFor="lastname">lastname</label>
          <input type="text"  name='lastname' value={data.lastname} onChange={handleChange} placeholder='lastname' />
          <hr />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="email" name='email' value={data.email} onChange={handleChange} placeholder='daniele@esempio.com' />
          <hr />
        </div>
        <div>
          <label htmlFor="phone">telefono</label>
          <input type="tel" name='tel' value={data.tel} onChange={handleChange} placeholder='555 555-55' />
          <hr />
        </div>
        <div>
          <label htmlFor="recipe">recipe</label>
          <textarea id='recipe' name='recipe' value={data.recipe} onChange={handleChange} placeholder='descrivi la tua ricetta'  />
        </div>
        <div className='form-send-btn'>
          <button>SEND RECIPE</button>
        </div>
      </form>
    </section>
   </Hero>
  )
}

export default Contattaci