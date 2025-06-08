import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex h-[60vh] bg-black relative gap-2">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center w-1/3  text-white p-6">
        <div className="text-5xl font-bold leading-tight text-center uppercase">
          Welcome to Flyeast Nepal
        </div>
        <div className="space-y-4 text-sm font-semibold">
          <div className="text-zinc-200">
            Better for the world for travel the adventure
          </div>
        </div>
      </div>

      {/* Middle Column - Building Image */}
      <div className="w-1/3">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/09/19/38/manang-2388080_1280.jpg" // Replace with your own image
          alt="Architecture"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right Column - Team Collaboration Image */}
      <div className="w-1/3">
        <img
          src="https://cdn.pixabay.com/photo/2021/07/08/03/55/mount-everest-6395759_1280.jpg" // Replace with your own image
          alt="Team Planning"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;
