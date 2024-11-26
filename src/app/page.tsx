import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Possibilities from "@/components/Possibilities";
import Ticketslider from "@/components/Ticketslider";
import React from "react";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Footer from "@/components/layout/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Banner />
      <Possibilities />
      <Ticketslider />
      <Menu />
      <Experience />
      <Location />
      <Footer />
    </>
  );
};

export default page;
