import React, { useEffect, useState } from "react";
import ModelHero from "../Components/ModelHero";
import Vechicle from "../Components/Vechicle";
import Booking from "../Components/Booking";
import axios from "axios";
import SuccessPopup from "../Components/UI/SuccessPopup";

const Models = () => {
  const [CarModel, setCarModels] = useState([]);

  const [bookingOpen, setBookingOpen] = useState(false);

  const [SuccessOpen, setSuccessOpen] = useState(false);


  async function FetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );

    const models = data.data;
  
    const model = data

    console.log(model)

    console.log(models)

    setCarModels(models);
  }

  const [SelectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    FetchModels();
  }, []);

  return (
    <>
      <SuccessPopup 
     SuccessOpen={SuccessOpen}
      />
      <Booking
        CarModel={CarModel}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        SelectedModel={SelectedModel}
        setSelectedModel={setSelectedModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelHero />
      <Vechicle
        CarModel={CarModel}
        setCarModels={setCarModels}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
};

export default Models;
