import React from 'react'

const Button = ({ handleClick, type, buttonText }) => {
  return (
    <button onClick={handleClick} type={type}>{buttonText}</button>
  )
}

export default Button