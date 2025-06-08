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
    <div className="relative w-full  h-screen z-10">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          height={500}
          width={500}
          src="https://cdn.pixabay.com/photo/2021/11/01/21/31/forest-6761846_1280.jpg"
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
      </div>
      <section className="relative w-full py-14 md:py-18 text-white font-sans">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Section Title */}
          <Title
            title={"Our Story"}
            discription={
              "At Flyest Nepal, we don't just guide journeys we craft experiences that stir the soul and awaken the spirit of adventure. Rooted in the heart of the Himalayas, we are a team of passionate explorers, seasoned professionals, and proud custodians of Nepal's breathtaking beauty and timeless traditions."
            }
          />

          <p className="mt-6 text-gray-200 max-w-4xl mx-auto text-lg md:text-xl text-center leading-relaxed">
            Welcome to Flyest Nepal your trusted gateway to the soaring peaks,
            serene valleys, and sacred paths of this extraordinary land. For us,
            travel is more than motion; it&apos;s transformation. Each step with
            us is a deeper connection to nature&apos;s grandeur, to ancient
            cultures, and to the truest version of yourself.
            <br />
            <br /> Born from a love of wild places and the stories they hold,
            Flyest Nepal is devoted to curating unforgettable trekking,
            mountaineering, and cultural adventures. Whether you long to stand
            atop the world&apos;s most iconic summits, wander through whispering
            forests, or share tea in a centuries-old village, our mission is to
            make every moment not only safe and seamless but deeply
            meaningful.
            <br />
            <br />
            Let us show you the Nepal we know and cherish wild, warm, and
            wonderfully alive.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
