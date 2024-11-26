import React from "react";
import Slider from "./Slider";

type Props = {};

const Ticketslider = (props: Props) => {
  return (
    <section>
      <div className="container-lg">
        <div className="row my-5">
          <div className="col">
            <h2 className="heading-md">
              Book General Access ticket and <br /> enjoy the attractions for
              free
            </h2>
            <button className="btn primary-btn w-auto mt-4">
              Book General Access Ticket
            </button>
          </div>
        </div>
        <Slider />
      </div>
    </section>
  );
};

export default Ticketslider;
