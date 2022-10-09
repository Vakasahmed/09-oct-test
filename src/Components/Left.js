import React from 'react';
import image from '../Images/d.jpg';

function Left() {
  return (
    <div className='left'>
      <p>Listen to your top musics</p>
      <h4>FOR FREE</h4>
        <img src={image} alt='backGround'/>
    </div>
  )
}

export default Left;