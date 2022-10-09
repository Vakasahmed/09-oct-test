import React from 'react';
import google from '../Images/google.png';
import facebook from '../Images/facebook.png';

function RightDown() {
  return (
    <div className='rightDown'>
      <div className='btn'>
        <button className='btn2'>
          <img src={google} alt='Google'/>
          Sign up with Google
        </button>
        <button className='btn2'>
          <img src={facebook} alt='FaceBook'/>
          Sign up with Facebook
        </button>
      </div>
      <div>
        <span>Already have an account? </span>
        <span className='signIn'>Sign in</span>
      </div>
    </div>
  )
}

export default RightDown;