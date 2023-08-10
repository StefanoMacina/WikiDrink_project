import React from 'react'

const Card = ({title, text, img, subtitle, className}) => {
  return (
    <div className={className ? `${className}` : 'card-content'}>
        
            <h3 className='card-title'>
                {title}
            </h3>
            {
                subtitle && 
                <div className='card-subtitle'>
                    {subtitle}
                </div>
            }
            {
                text ? (
                    <div className='card-value-text'>
                        <h6>{text}</h6>
                    </div>
                ) : (
                    <div className='team-card-img-container'>
                        <img src={img} alt="" />
                    </div>
                )
            }
    </div>
  )
}

export default Card