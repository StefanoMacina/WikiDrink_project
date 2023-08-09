import React from 'react'

const Card = ({title, text, img, subtitle}) => {
  return (
    <div className='card-container'>
        <h3>
            {title}
        </h3>
        {
            subtitle ?
            <>
                <div>
                    <h6>
                    {subtitle}
                    </h6>
                </div>
                <div>
                    <img src="" alt="" />
                </div> 
            </> 
            
            : <div>{text}</div>
        }
    </div>
  )
}

export default Card