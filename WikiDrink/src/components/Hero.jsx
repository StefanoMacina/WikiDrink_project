import React from 'react'

const Hero = ({children, img, disabledOverlay}) => {

// componente riutilizzabile in tutte le pagine
  return (
    <div className='hero-img-container'
    style={{
        background: `url(${img})`,
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat',
        backgroundSize : 'cover'
    }}>
        <div className={`${!disabledOverlay ? 'hero-overlay' : ''}`}>
            <div className="hero-text-container">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Hero