import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-900">
      <div className="relative w-16 h-16 animate-spin">
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent"></div>
        <div className="absolute inset-4 rounded-full border-4 border-t-gray-600 border-r-transparent border-b-gray-600 border-l-transparent animate-spin-slower"></div>
      </div>
      <span className="ml-4 text-lg text-blue-400 font-semibold">
        Loading Contents
      </span>
    </div>
  );
}

export default Loader;
