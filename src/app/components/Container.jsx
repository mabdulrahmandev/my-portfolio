import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 bg-black">
      {children}
    </div>
  );
};

export default Container;
