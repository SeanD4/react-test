import React, { useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clients from "./components/Clients";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./reset.css";
import "./styles.css";

const App = () => {
  useEffect(() => {
    var header = Array.from(document.querySelectorAll("header"));
    var mobileNavButton = document.querySelector(
      "div.mobile-header__icon-wrapper i.fa-solid.fa-bars-staggered"
    );
    var mobileHeaderNav = document.querySelector(
      "nav.mobile-header__menu-items__wrapper"
    );

    var video = document.querySelector("video");
    var playButton = document.querySelector("i.fa-solid.fa-play");
    var pauseButton = document.querySelector("i.fa-solid.fa-pause");

    window.addEventListener("scroll", function (e) {
      let currentScroll = window.pageYOffset;
      if (currentScroll >= 46) {
        header.forEach((element) => {
          element.style.backgroundColor = "rgba(37, 43, 66, .9)";
        });
      }
      // console.log("this is our event target", window.pageYOffset, currentScroll);
      // console.log("this is main.js !!!!", header);
    });

    mobileNavButton.addEventListener("click", (e) => {
      mobileHeaderNav.classList.toggle("flexed");
      console.log("display", mobileHeaderNav.classList);
    });

    playButton.addEventListener("click", (e) => {
      e.target.style.display = "none";
      pauseButton.style.display = "flex";
      pauseButton.style.backgroundColor = "transparent";
      video.play();
      console.log("play target", e.target);
    });
    pauseButton.addEventListener("click", (e) => {
      e.target.style.display = "none";
      playButton.style.display = "flex";
      video.load();
      console.log("pause target", e.target);
    });

    console.log("button", playButton);
    console.log("video", video);
  }, []);

  return (
    <main className="container">
      <Header
        logo="BrandName"
        login="Login"
        item1="Home"
        item2="Product"
        item3="Pricing"
        item4="Contact"
        heroButton="Become a member ->"
      />
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

      <Contact
        contactHead="Get In Touch"
        contactSub="Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"
        email1="Georgia.young@example.com"
        email2="Georgia.young@example.com"
        email3="Georgia.young@example.com"
        support="Get Support"
        buttonText="Submit Request"
      />

      <Footer
        head="BrandName"
        menu1="Company Info"
        menu2="Legal"
        menu3="Features"
        menu4="Resources"
        menu5="Get in Touch"
        m1item1="About Us"
        m1item2="Carrier"
        m1item3="We are hiring"
        m1item4="Blog"
        m2item1="About Us"
        m2item2="Carrier"
        m2item3="We are hiring"
        m2item4="Blog"
        m3item1="Business Marketing"
        m3item2="User Analytic"
        m3item3="Live Chat"
        m3item4="Unlimited Support"
        m4item1="IOS & Android"
        m4item2="Watch a Demo"
        m4item3="Customers"
        m4item4="API"
        buttonText="Subscribe"
        formSub="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quaerat, illo"
        disclaimer="Made With Precision By VTD All Rights Reserved"
      />
    </main>
  );
};

export default App;
