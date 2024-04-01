// components/Layout.js
import React from "react";

const NightLayout = ({ children }) => {
  return (
    <div className="bg-night-sky bg-cover min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-full h-full bg-night-sky-animation"></div>
      {children}
    </div>
  );
};

export default NightLayout;
