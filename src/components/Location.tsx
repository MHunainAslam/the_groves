import Image from "next/image";
import React from "react";

type Props = {};

const Location = (props: Props) => {
  return (
    <section>
      <div className="container-lg">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6">
            <Image
              src={"/assets/images/map.png"}
              width={500}
              height={500}
              className="w-100 h-100 object-fit-contain"
              alt="map"
            />
          </div>
          <div className="col-lg-6">
            <p className="para text-uppercase">experience the groves</p>
            <h2 className="heading-md mb-3">Find your place</h2>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              ullam.
            </p>
            <button className="btn primary-btn mt-3">
              Open the Map
              <i className="bi bi-arrow-right ms-3"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
