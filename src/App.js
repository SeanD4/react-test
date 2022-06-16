import React from "react";
import Form from "./components/Form";
// import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import About from "./components/About";
import Pricing from "./components/Pricing";
import "./reset.css";
import "./styles.css";

const App = () => {
  return (
    <main className="container">
      {/* <Header logo='BrandName' item1='Home' item2='Product' item3='Pricing' item4='Contact' heroButton='Become a member ->'/> */}
      <Form />
      <Hero
        heading="Creating a Beautiful & Useful Solutions"
        text="We know how large objects will act, but things on a small scale just do not act that way."
        button1Text="Get Quote Now"
        button2Text="Learn More"
      />
      <Services
        servicesHead="Better Strategy With Quality Business"
        servicesSub="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        service1="Investment Trading"
        service2="Raising Funds"
        service3="Financial Analysis"
        service4="Taxation Planning"
        service5="Save money and time"
        service6="Outsourced Consulting"
        servicesText="the quick fox jumps over the lazy dog"
      />
      <Clients
        clientHead="What Clients Say"
        clientSub="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        client1="Regina Miles"
        client2="Regina Miles"
        client1Title="Designer"
        client2Title="Designer"
        client1Feedback="This proved to be impossible using concepts of space and time. Einstein new view of time first and then"
        client2Feedback="This proved to be impossible using concepts of space and time. Einstein new view of time first and then"
      />
      <About
        aboutHead="About Us"
        aboutSub="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        videoHead="Most trusted in our field"
        videoSub="Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule."
        videoQuoteHead1="the quick fox jumps over the lazy dog"
        videoQuoteSub1="Things on a very small scale ..."
        videoQuoteHead2="the quick fox jumps over the lazy dog"
        videoQuoteSub2="Things on a very small scale ..."
      />
      <Pricing
        pricingHead="Pricing"
        pricingSub="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        pricingCardHead1="FREE"
        pricingCardHead2="SILVER"
        pricingCardHead3="GOLD"
        pricingCardSub="Organize accross all apps by hand"
        price1="0$"
        price2="9.99$"
        price3="19.99$"
        cardText="Per Month"
        priceButton1="Try it for free"
        priceButton2="Join Today!"
        pricingFeature1="Ulimited product updates"
        pricingFeature2="Ulimited product updates"
        pricingFeature3="Ulimited product updates"
        pricingFeature4="1GB Cloud Storage"
        pricingFeature5="Email and community support"
        pricingBadge="New"
      />
    </main>
  );
};

export default App;
