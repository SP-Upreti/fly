"use client";

import React from "react";
import Title from "../../components/title/Title";
import Image from "next/image";

interface Feature {
  id: number;
  title: string;
  description: string;
}

const About: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] bg-black/80 z-10">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          height={500}
          width={500}
          src="/heroimages/roundfade.png"
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
      </div>
      <section className="relative w-full py-14 md:py-18 text-white font-sans">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <Title
            title={"Who we are"}
            discription={
              "We're dedicated to providing exceptional service with our team of professionals."
            }
          />

          <p className="mt-12 text-gray-200 max-w-4xl mx-auto text-lg md:text-xl text-center leading-relaxed">
            Welcome to Flyest Nepal – your trusted gateway to the majestic
            Himalayas and the heart of authentic Nepali adventure. At Flyest
            Nepal, we believe that travel is more than just a journey; it’s an
            experience that connects people with nature, culture, and
            themselves.
            <br />
            <br />
            Founded with a passion for exploration and a deep love for Nepal’s
            natural beauty, Flyest Nepal is committed to offering unforgettable
            trekking, mountaineering, and cultural experiences. Whether you
            dream of summiting iconic peaks, exploring hidden trails, or
            immersing yourself in ancient traditions, our expert team ensures
            every trip is safe, personalized, and memorable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
