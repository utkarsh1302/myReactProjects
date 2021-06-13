import React from "react";
import "./OurCities.css";

const data = [
  {
    link: require("../../resources/images/lisbon-3.jpg").default,
    cityName: "Lisbon",
    happyEaters: "1600+ happy eaters",
    chef: "60+ top chefs",
    twitterLink: "@omnifood_lx",
  },
  {
    link: require("../../resources/images/san-francisco.jpg").default,
    cityName: "San Francisco",
    happyEaters: "3700+ happy eaters",
    chef: "160+ top chefs",
    twitterLink: "@omnifood_sf",
  },
  {
    link: require("../../resources/images/berlin.jpg").default,
    cityName: "Berlin",
    happyEaters: "2300+ happy eaters",
    chef: "110+ top chefs",
    twitterLink: "@omnifood_berlin",
  },
  {
    link: require("../../resources/images/london.jpg").default,
    cityName: "London",
    happyEaters: "1200+ happy eaters",
    chef: "50+ top chefs",
    twitterLink: "@omnifood_london",
  },
];

// const link =  require("../../resources/images/san-francisco.jpg").default;
const OurCities = (props) => {
  return (
    <>
      <div className="row">
        <h2>We're currently in these cities</h2>
      </div>
      <div className="row">
        {data.map((entry, index) => {
          return (
            <div key={index} className="col span-1-of-4 column">
              <img
                src={entry.link}
                alt={entry.cityName}
                className="city_image"
              ></img>
              <h3>{entry.cityName}</h3>
              <div className="city-feature">
                <ion-icon
                  //   className="icon_cities_feature"
                  name="person"
                ></ion-icon>
                {entry.happyEaters}
              </div>
              <div className="city-feature">
                <ion-icon
                  //   className="icon_cities_feature"
                  name="ribbon"
                ></ion-icon>
                {entry.chef}
              </div>
              <div className="city-feature">
                <ion-icon
                  //   className="icon_cities_feature"
                  name="logo-twitter"
                ></ion-icon>
                {entry.twitterLink}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurCities;
