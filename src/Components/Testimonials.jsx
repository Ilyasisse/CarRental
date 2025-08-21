import React from "react";
import test1 from "../assets/testimonial-1.jpg";
import Testimonial from "./UI/Testimonial";
import test2 from "../assets/testimonial-2.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row testimonials__row">
          <h3 className="testimonials__subtitle">Reviewed by People</h3>
          <h2 className="testimonials__title">Client's Testimoials</h2>
          <p className="testimonials__para">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
          <div className="testimonials__list">
            <Testimonial img={test1} name="Parry Hotter" location="New York" />
            <Testimonial img={test2} name="Ron Rizzly" location="London" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
