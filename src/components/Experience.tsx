import React from "react";
import Slider from "./Slider";
import Experienceslider from "./Experienceslider";

type Props = {};

const Experience = (props: Props) => {
  return (
    <section>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-4">
            <h2 className="heading-md">Curate your experience as you like</h2>
            <button className="btn primary-btn mt-3">
              Book Tickets
              <i className="bi bi-arrow-right ms-3"></i>
            </button>
          </div>
          <div className="col-lg-8 mt-4 position-relative">
            <Experienceslider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
