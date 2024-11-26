import React from "react";
import Menucard from "./Menucard";

type Props = {};

const Menu = (props: Props) => {
  const menu = [
    {
      name: "Vida Vera",
      price: "100 SR PER GUEST",
      img: "/assets/images/menu/1.png",
    },
    {
      name: "Zama Zulu",
      price: "100 SR PER GUEST",
      img: "/assets/images/menu/2.png",
    },
    {
      name: "Khawaja Yanni",
      price: "100 SR PER GUEST",
      img: "/assets/images/menu/3.png",
    },
    {
      name: "Yamagata",
      price: "100 SR PER GUEST",
      img: "/assets/images/menu/4.png",
    },
  ];
  return (
    <section>
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <h2 className="heading-md text-center">
              Experience the Finest Cuisine
            </h2>
            <p className="para text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              fugiat nesciunt accusantium expedita nulla ipsam!
            </p>
          </div>
        </div>
        <div className="row mt-4">
          {menu?.map((item, i) => (
            <div className="col-md-6 my-4" key={i}>
              <Menucard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
