"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Socialicons from "../Socialicons";

type Props = {};

const Header = (props: Props) => {
  const [language, setLanguage] = useState({
    label: "English",
    img: "/assets/images/english.png",
  });

  const routes = [
    { label: "dine with us", url: "#" },
    { label: "plan your visit", url: "#" },
    { label: "events", url: "#" },
    { label: "view groves map", url: "#" },
    { label: "our story", url: "#" },
    { label: "contact us", url: "#" },
  ];

  const languages = [
    { label: "English", img: "/assets/images/english.png" },
    { label: "Urdu", img: "/assets/images/english.png" },
    { label: "Arabic", img: "/assets/images/english.png" },
  ];
  return (
    <>
      <nav className="navbar bg-transparent navbar-expand-lg d-block">
        <div className="container-md">
          <Link className="navbar-brand" href="#">
            <Image
              src={"/assets/images/logo.png"}
              className="w-100 h-100 object-fit-contain contain-left"
              width={300}
              height={300}
              alt="groves"
            ></Image>
          </Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list primary-gradient-icon"></i>
          </button>
          <div
            className="offcanvas offcanvas-end w-100"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-between">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Image
                  src={"/assets/images/logo.png"}
                  className="w-100 h-100 object-fit-contain contain-left"
                  width={300}
                  height={300}
                  alt="groves"
                ></Image>
              </h5>
              <button
                type="button"
                className="bg-transparent  border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="bi bi-x-lg primary-gradient-icon"></i>
              </button>
            </div>
            <div className="offcanvas-body px-0">
              <ul className="navbar-nav justify-content-end align-items-lg-center flex-grow-1 pe-lg-3 h-100">
                <div className="flex-column flex-lg-row d-flex my-2 justify-content-between px-3 h-100">
                  <div className="d-lg-flex align-items-center">
                    <div className="d-lg-block d-none">
                      <Socialicons />
                    </div>
                    <div className="d-flex flex-column flex-lg-row flex-column-reverse">
                      <button className="btn primary-btn w-auto">Log in</button>
                      <li className="nav-item dropdown ms-2">
                        <Link
                          className="nav-link dropdown-toggle text-white"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <Image
                            src={language.img}
                            width={25}
                            height={20}
                            alt="languages"
                            className="me-2"
                          ></Image>
                          {language?.label}
                        </Link>
                        <ul className="dropdown-menu ">
                          {languages?.map((item, i) => (
                            <li key={i} onClick={() => setLanguage(item)}>
                              <Link
                                className="dropdown-item lang-dropdown"
                                href="#"
                              >
                                <Image
                                  src={item.img}
                                  width={25}
                                  height={20}
                                  alt="languages"
                                  className="me-2"
                                ></Image>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </div>
                  </div>
                  <div className="d-lg-none">
                    <Socialicons />
                  </div>
                </div>
                {routes?.map((item, i) => (
                  <li className="nav-item d-lg-none main-nav" key={i}>
                    <Link
                      className="nav-link text-uppercase"
                      aria-current="page"
                      href={item.url}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="header-border mt-3 d-lg-block d-none">
          <div className="container">
            <div className="row justify-content-between w-100 py-2">
              <ul className="navbar-nav justify-content-between w-100 pe-3">
                {routes?.map((item, i) => (
                  <li className="nav-item main-nav" key={i}>
                    <Link
                      className="nav-link text-uppercase"
                      aria-current="page"
                      href={item.url}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
