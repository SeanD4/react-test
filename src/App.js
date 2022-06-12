import React from "react";
import Form from "./components/Form";
import Hero from "./components/Hero";
import './reset.css'
import './styles.css'

const App = () => {
  return (
    <main className="container">
      <Hero heading='new heading' text='new text' button1Text=' new quote' button2Text='new learn' />
      <Form />
      <Hero heading='whatever heading' text='whatever text' button1Text='quote' button2Text='learn' />
    </main>
  );
};

export default App;
