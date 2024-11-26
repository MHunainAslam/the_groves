"use client";
import React, { useEffect } from "react";

type Props = {};

const AppProvider: React.FC<any> = ({ children }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return children;
};

export default AppProvider;
