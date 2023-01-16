import React from 'react';
import './Button.scss';

const Button = ({texto}) => {
  return (
    <button className='button' >{texto}</button>
  )
}

export default Button;