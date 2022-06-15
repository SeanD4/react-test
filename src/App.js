import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import './reset.css'
import './styles.css'

const App = () => {
  return (
    <main className="container">
      <Header logo='BrandName' item1='Home' item2='Product' item3='Pricing' item4='Contact' heroButton='Become a member ->'/>
      <Hero heading='new heading' text='new text' button1Text=' new quote' button2Text='new learn' />
      <Form />
      <Hero heading='whatever heading' text='whatever text' button1Text='quote' button2Text='learn' />
    </main>
  );
};

export default App;
