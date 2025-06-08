import React from "react";

type titleDiscription = {
  title: string;
  discription: string;
};

const Title: React.FC<titleDiscription> = ({ title, discription }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase">
        {title}
      </h2>
      <p className="mt-8 text-gray-300 text-base sm:text-lg md:text-xl">
        {discription}
      </p>
    </div>
  );
};

export default Title;
