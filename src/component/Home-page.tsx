import React from "react";
import Banner from "./Banner";
import FEATURED from "./FEATURED";
import Monrev from "./Monrev";
import Pre from "./Pre";
import Lesol from "./LESOLARIUM";
import Theprism from "./Theprism";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <FEATURED />
      <Monrev />
      <Pre />
      <Lesol />
      <Theprism />
    </div>
  );
};

export default Homepage;
