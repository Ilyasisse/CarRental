import React from "react";
import Landing from "../Components/Landing"
import Features from "../Components/Features";
import Banner from "../Components/Banner";
import Choose from "../Components/Choose";
import Testimonials from "../Components/Testimonials"
import Download from "../Components/Download";


const Home = () => {
  return (
    <>
      <Landing />
      <Features />
      <Banner />
      <Choose />
      <Testimonials />
      <Download />
    </>
  );
};

export default Home;
