import React from 'react'


const Hero = ({ heading, text, button1Text, button2Text }) => {
  return (
    <section className="hero__wrapper">
    <div className="hero__text-wrapper">
      <h1 className="hero__heading">{heading}</h1>
      <p className="hero__text">
       {text}
      </p>
      <div className="hero__button-wrapper">
        <button className="hero__button-quote">{button1Text}</button>
        <button className="hero__button-learn">{button2Text}</button>
      </div>
    </div>
  </section>
  )
}

export default Hero