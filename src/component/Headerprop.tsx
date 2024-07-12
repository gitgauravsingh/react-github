import React from "react";
import { Isearch } from "./redux/Article";

interface HeaderpropProps {
  results: Isearch;
  onItemClick: (title: string) => void;
}

const Headerprop: React.FC<HeaderpropProps> = ({ results, onItemClick }) => {
  return <div></div>;
};

export default Headerprop;
