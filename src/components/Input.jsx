import React from 'react'

const Input = ({ input, setInput }) => {
    console.log('this is my props', input)
  return (
    <input onChange={(e) => setInput(e.target.value)} type='text'  />
  )
}

export default Input