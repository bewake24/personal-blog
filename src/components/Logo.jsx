import React from "react";
import { logo } from "../conf/constants";
function Logo({ width = "100%" }) {
  return (
    <img src={logo.url} className="w-12 h-12  rounded-full" alt={logo.alt} />
  );
}

export default Logo;
