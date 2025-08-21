import React, { useEffect, useState } from "react";

import axios from "axios";
import Models from "../Pages/Models";
import Model from "./UI/Model";
import ModelSkeleton from "./UI/ModelSkeleton";

const Vechicle = ({CarModel,setCarModels,setBookingOpen,setSelectedModel}) => {
  const [sort, setSort] = useState("");



  function sortmodels() {
    if (sort === "HIGH__TO__LOW") {
      setCarModels(
        CarModel.slice().sort((a, b) => b.per_day_price - a.per_day_price)
      );
    }
    if (sort === "LOW__TO__HIGH") {
      setCarModels(
        CarModel.slice().sort((a, b) => a.per_day_price - b.per_day_price)
      );
    }
    if (sort === "RATING") {
      setCarModels(CarModel.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  useEffect(() => {
    sortmodels();
  }, [sort]);

  return (
    <section id="models">
      <div className="container">
        <div className="row models__row">
          <div className="models__header">
            <h2 className="models__header__title">Vehicle Models</h2>
            <select
              value={sort}
              className="models__header__sort"
              onChange={(event) => setSort(event.target.value)}
            >
              <option
                value=""
                disabled
                className="models__header__sort__option"
              >
                Sort
              </option>
              <option
                value="HIGH__TO__LOW"
                className="models__header__sort__option"
              >
                Price(High to Low)
              </option>
              <option
                value="LOW__TO__HIGH"
                className="models__header__sort__option"
              >
                Price(Low to High)
              </option>
              <option value="RATING" className="models__header__sort__option">
                Rating
              </option>
            </select>
          </div>
          <div className="models__list">
            {CarModel.length > 0
              ? CarModel.map((model) => <Model model={model} key={model.id} setBookingOpen={setBookingOpen} setSelectedModel={setSelectedModel}/>)
              : new Array(20)
                  .fill(0)
                  .map((_, index) => <ModelSkeleton key={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vechicle;
