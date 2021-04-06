import React from "react";
import iphone from "../../resources/images/app-iPhone.png";
import appleStore from "../../resources/images/download-app.svg";
import playStore from "../../resources/images/download-app-android.png";

import "./HowItWorks.css";

const HowItWorks = (props) => {
  return (
    <>
      <div className="row">
        <h2>How it works - Simple as 1, 2, 3</h2>
      </div>
      <div className="row">
        <div className="col span-1-of-2 step-box">
          <img src={iphone} alt="Phone" className="phone-image"></img>
        </div>
        <div className="col span-1-of-2 step-box">
          <div className="steps">
            <div>1</div>
            <p>
              Choose the subscription plan that best fits your needs and sign up
              today.
            </p>
          </div>
          <div className="steps">
            <div>2</div>
            <p>
              Order your delicious meal using our mobile app or website. Or you
              can even call us!
            </p>
          </div>

          <div className="steps">
            <div>3</div>
            <p>
              Enjoy your meal after less than 20 minutes. See you the next time!
            </p>
          </div>
          <a href="#" className="app-btn">
            <img src={appleStore} alt="Apple Store App Link"></img>
          </a>
          <a href="#" className="app-btn">
            <img src={playStore} alt="Play Store App Link"></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;

/*1.	Choose the subscription plan that best fits your needs and sign up today.
2.	Order your delicious meal using our mobile app or website. Or you can even call us!
3.	Enjoy your meal after less than 20 minutes. See you the next time!

 */
