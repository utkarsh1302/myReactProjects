import React from "react";
import "./SignUp.css";
 
const data = [
  {
    planName: "Premium",
    planPrice: "399$ per month",
    pricePerMeal: "That’s only 13.30$ per meal",
    features: {
      meals: "1 meal every day",
      access: "Access to newest creations",
      delivery: "Free delivery",
      order: "Order 24/7",
    },
  },
  {
    planName: "Pro",
    planPrice: "149$ per month",
    pricePerMeal: "That’s only 14.90$ per meal",
    features: {
      meals: "1 meal 10 days/month",
      access: "Access to newest creations",
      delivery: "Free delivery",
      order: "Order 24/7",
    },
  },
  {
    planName: "Starters",
    planPrice: "19$ per meal",
    pricePerMeal: "",
    features: {
      meals: "1 meal",
      access: "",
      delivery: "",
      order: "Order from 8 am to 12 pm",
    },
  },
];
const SignUp = (props) => {
  return (
    <div className="section-plans">
      <div className="row">
        <h2>Start eating healthy today</h2>
      </div>
      <div className="row">
        {data.map((plan, index) => {
          return (
            <div key={index} className="col span-1-of-3">
              <div className="plan-box">
                <div>
                  <h3>{plan.planName}</h3>
                  <p className="plan-price">{plan.planPrice}</p>
                  <p className="plan-price-meal">{plan.pricePerMeal}</p>
                </div>
                <div>
                  <ul>
                    {plan.features.meals && (
                      <li>
                        <ion-icon name="checkmark"></ion-icon>
                        {plan.features.meals}
                      </li>
                    )}
                    {plan.features.delivery && (
                      <li>
                        <ion-icon name="checkmark"></ion-icon>
                        {plan.features.delivery}
                      </li>
                    )}

                    {plan.features.order && (
                      <li>
                        <ion-icon name="checkmark"></ion-icon>
                        {plan.features.order}
                      </li>
                    )}
                    {plan.features.access && (
                      <li>
                        <ion-icon name="checkmark"></ion-icon>
                        {plan.features.access}
                      </li>
                    )}
                  </ul>
                </div>
                <a className="btn btn-full" href="#">
                   Sign Up
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SignUp;
