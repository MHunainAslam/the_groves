import Image from "next/image";
import React from "react";

type item = {
  name: string;
  price: string;
  img: string;
};

const Menucard = ({ item }: { item: item }) => {
  return (
    <div className="card text-card p-3">
      <Image src={item.img} width={500} height={400} alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="heading-sm">{item.name}</h2>
            <p className="primary-btn w-fit-content px-3 mt-4">{item.price}</p>
          </div>
          <i className="bi bi-arrow-right text-white fs-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Menucard;
