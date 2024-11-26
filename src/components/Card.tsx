import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card text-card">
      <div className="card-body p-md-4">
        <div className="d-lg-flex align-items-center">
          <div className="col-lg-8">
            <p className="para">25 SR/Guest</p>
            <h2 className="heading-md mb-3">Get your general access ticket</h2>
            <p className="para mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              officiis hic in aliquam ipsam mollitia nemo nobis sint molestiae
              expedita facilis, 
            </p>
          </div>
          <div className="col-lg-4 text-end">
            <i className="bi bi-arrow-right text-white fs-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
