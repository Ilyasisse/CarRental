import React from "react";
import Feature1 from "../assets/feature-1.png";
import Feature2 from "../assets/feature-2.png";
import Feature3 from "../assets/feature-3.png";
import Feature from "./UI/Feature";

const Features = () => {
  return (
    <section id="Features">
      <div className="container">
        <div className="row features__row">
          <h3 className="features__subtitle">Plan Your Trip Now</h3>
          <h2 className="features__title">Quick and Easy Car Rental</h2>
          <div className="features__list">
            <Feature
              image={Feature1}
              title="Select Car"
              paragraph="We offer a big range of vehicle for all your driving needs. We have the prefect car to meet your needs."
            />
            <Feature
              image={Feature2}
              title="Contact Operator"
              paragraph="Our Knowledgeable and friendly operators are always ready to help with any question or concerns"
            />
            <Feature
              image={Feature3}
              title="Let's Drive"
              paragraph="Whether you're hitting the open road, we've you covered with our wide range of cars"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
