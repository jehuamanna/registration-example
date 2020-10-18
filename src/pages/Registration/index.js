import React from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

const Registration = () => {
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 767px)");
  return isMobile ? <Mobile isMobile={isMobile} /> : <Desktop />;
};

export default Registration;
