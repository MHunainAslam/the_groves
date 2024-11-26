import Image from "next/image";
import React from "react";
import Socialicons from "../Socialicons";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="row justify-content-between">
          <div className="col-md-6 mt-md-5 mt-3 d-md-none">
            <Image
              src={"/assets/images/logo.png"}
              className="w-50 h-100 object-fit-contain contain-left"
              width={300}
              height={300}
              alt="groves"
            ></Image>
          </div>
          <div className="col-lg-8 mt-md-5 mt-3">
            <h2 className="heading">
              Join us for an <br />
              unforgettable experience
            </h2>
          </div>
          <div className="col-lg-4 mt-md-5 mt-3">
            <p className="para text-uppercase">download the groves app</p>
            <div className="d-flex ">
              <Image
                src="/assets/images/appstore.png"
                width={140}
                height={70}
                className="w-auto h-auto rounded-3"
                alt="appstore"
              />
              <Image
                src="/assets/images/playstore.png"
                width={140}
                height={70}
                className="w-auto h-auto rounded-3 ms-3"
                alt="appstore"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-5 mt-3">
            <p className="para fw-bold text-uppercase">Location</p>
            <ul className="p-0 para">
              <li>Al-Hazim Park</li>
              <li>Al-Semairi, Yanbu Al Bahr 46455</li>
              <li>Riyadh Saudi Arabia</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-5 mt-3">
            <p className="para fw-bold text-uppercase">Woking hours</p>
            <ul className="p-0 para">
              <li>Sun until Thurs: 4:00PM</li>
              <li>Fri & Sat: 2:30PM</li>
              <br />
              <li>Gate Close at:</li>
              <li>Sat until wed: 12:00AM</li>
              <li>Thu & Fri: 12:30PM</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-5 mt-3">
            <p className="para fw-bold text-uppercase">guest service call</p>
            <ul className="p-0 para">
              <li>cc@thegroves-sa.com</li>
              <li>920001672</li>
              <br />
              <li>+966556631309</li>
            </ul>
          </div>
          <div className="col-md-8 d-md-block mt-md-5 mt-3 d-none">
            <Image
              src={"/assets/images/logo.png"}
              className="w-auto h-100 object-fit-contain contain-left"
              width={500}
              height={300}
              alt="groves"
            ></Image>
          </div>
          <div className="col-md-4 d-md-block mt-md-5 mt-3 d-none">
            <Socialicons />
          </div>
          <div className="col-lg-8 mt-md-5 mt-3">
            <Link href="#" className="me-5 para text-decoration-none d-md-inline d-block mt-md-0 mt-3">
              Terms & Conditions
            </Link>
            <Link href="#" className="me-5 para text-decoration-none d-md-inline d-block mt-md-0 mt-3">
              Privacy Policy
            </Link>
            <Link href="#" className="me-5 para text-decoration-none d-md-inline d-block mt-md-0 mt-3">
              2023 The Groves For Entertainment
            </Link>
          </div>
          <div className="col-lg-4 mt-md-5 mt-3">
            <Image
              src={"/assets/images/visa.png"}
              className="object-fit-contain"
              width={50}
              height={30}
              alt="payment"
            ></Image>
            <Image
              src={"/assets/images/union.png"}
              className="object-fit-contain"
              width={50}
              height={30}
              alt="payment"
            ></Image>
            <Image
              src={"/assets/images/americanpay.png"}
              className="object-fit-contain"
              width={50}
              height={30}
              alt="payment"
            ></Image>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
