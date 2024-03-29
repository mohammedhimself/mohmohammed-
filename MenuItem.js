import React from 'react'

function MenuItem({ image, name, price })
 {
  return (
    <div className="MenuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <img src={image} />
      <h1> {name} </h1>
      <p> ${price} </p>


    </div>
  )
}

export default MenuItem;
