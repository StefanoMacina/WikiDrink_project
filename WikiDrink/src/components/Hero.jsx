import React from 'react'

const Hero = ({children, img, disabledOverlay}) => {

  return (
    <div className='hero-img-container'
    style={{
        background: `url(${img})`,
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover'
    }}>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Hero