import React from "react";
import video from "../images/Video.mp4";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import poster from "../images/media-bg.png";

const about = ({
  aboutHead,
  aboutSub,
  videoHead,
  videoSub,
  videoQuoteHead1,
  videoQuoteSub1,
  videoQuoteHead2,
  videoQuoteSub2,
}) => {
  return (
    <section className="about__wrapper">
      <div className="about__heading-wrapper">
        <h1 className="about__heading">{aboutHead}</h1>
        <p className="about__text">{aboutSub}</p>
      </div>

      <div className="about__content-wrapper">
        <div className="about__video-wrapper">
          <video poster={poster}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause"></i>
        </div>

        <div className="about__video-text__wrapper">
          <div className="about__video-heading-wrapper">
            <h2 className="about__video-heading">{videoHead}</h2>
            <p className="about__video-heading-text">{videoSub}</p>
          </div>

          <div className="about__video-quote__wrapper">
            <img src={img1} alt="Services Icon" />
            <div className="about__video-quote-text__wrapper">
              <h3 className="about__video-quote-header">{videoQuoteHead1}</h3>
              <p className="about__video-quote-text">{videoQuoteSub1}</p>
            </div>
          </div>
          <div className="about__video-quote__wrapper">
            <img src={img2} alt="Services Icon" />
            <div className="about__video-quote-text__wrapper">
              <h3 className="about__video-quote-header">{videoQuoteHead2}</h3>
              <p className="about__video-quote-text">{videoQuoteSub2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default about;
