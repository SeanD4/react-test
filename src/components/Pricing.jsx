import React from "react";

const pricing = ({
  pricingHead,
  pricingSub,
  pricingCardHead1,
  pricingCardHead2,
  pricingCardHead3,
  pricingCardSub,
  price1,
  price2,
  price3,
  cardText,
  priceButton1,
  priceButton2,
  pricingFeature1,
  pricingFeature2,
  pricingFeature3,
  pricingFeature4,
  pricingFeature5,
  pricingBadge,
}) => {
  return (
    <section className="pricing__wrapper">
      <div className="pricing__heading-wrapper">
        <h2 className="pricing__heading">{pricingHead}</h2>
        <p className="pricing__text">{pricingSub}</p>
      </div>
      <div className="pricing__cards-wrapper">
        <div className="pricing__card-wrapper">
          <h3 className="pricing__card-heading">{pricingCardHead1}</h3>
          <p className="pricing__card-description">{pricingCardSub}</p>
          <h4 className="pricing__card-price">{price1}</h4>
          <p className="pricing__card-price__tag">{cardText}</p>
          <button type="button" className="pricing__card-button">
            {priceButton1}
          </button>
          <ul className="pricing__features-wrapper">
            <li className="pricing__features">{pricingFeature1}</li>
            <li className="pricing__features">{pricingFeature2}</li>
            <li className="pricing__features">{pricingFeature3}</li>
            <li className="pricing__features">{pricingFeature4}</li>
            <li className="pricing__features">{pricingFeature5}</li>
          </ul>
        </div>
        <div className="pricing__card-wrapper">
          <span className="pricing__card-badge">{pricingBadge}</span>
          <h3 className="pricing__card-heading">{pricingCardHead2}</h3>
          <p className="pricing__card-description">{pricingCardSub}</p>
          <h4 className="pricing__card-price">{price2}</h4>
          <p className="pricing__card-price__tag">{cardText}</p>
          <button type="button" className="pricing__card-button">
            {priceButton2}
          </button>
          <ul className="pricing__features-wrapper">
            <li className="pricing__features">{pricingFeature1}</li>
            <li className="pricing__features">{pricingFeature2}</li>
            <li className="pricing__features">{pricingFeature3}</li>
            <li className="pricing__features">{pricingFeature4}</li>
            <li className="pricing__features">{pricingFeature5}</li>
          </ul>
        </div>
        <div className="pricing__card-wrapper">
          <h3 className="pricing__card-heading">{pricingCardHead3}</h3>
          <p className="pricing__card-description">{pricingCardSub}</p>
          <h4 className="pricing__card-price">{price3}</h4>
          <p className="pricing__card-price__tag">{cardText}</p>
          <button type="button" className="pricing__card-button">
            {priceButton2}
          </button>
          <ul className="pricing__features-wrapper">
            <li className="pricing__features">{pricingFeature1}</li>
            <li className="pricing__features">{pricingFeature2}</li>
            <li className="pricing__features">{pricingFeature3}</li>
            <li className="pricing__features">{pricingFeature4}</li>
            <li className="pricing__features">{pricingFeature5}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default pricing;
