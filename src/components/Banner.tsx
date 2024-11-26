import Image from "next/image";
import React from "react";
import Header from "./layout/Header";

type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <div className="position-absolute w-100 z-3">
        <Header />
      </div>
      <section className="banner d-flex m-0">
        <div className="container-lg banner-container my-auto">
          <div className="row align-items-center h-100 z-2 position-relative">
            <div className="col-lg-5 mt-5">
                <p className="para  text-uppercase">
                    Khawaja yanni
                </p>
                <h1 className="heading mb-3">
                    The new era of luxury
                </h1>
                <p className="para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
                <button className="btn primary-btn mt-4">
                    Book Reservation Now <i className="bi bi-arrow-right"></i>
                </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
