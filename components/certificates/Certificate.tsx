"use client";

import React from "react";
import Image from "next/image";
import Title from "../title/Title";

const certificates = [
  {
    src: "https://infinityadventurenepal.com/_next/image?url=%2Flogo%2Fassociated1.png&w=2048&q=75",
    alt: "Associated Certificate 1",
    label: "Government Certified",
  },
  {
    src: "https://infinityadventurenepal.com/_next/image?url=%2Flogo%2Fnmalogo.png&w=2048&q=75",
    alt: "Associated Certificate 2",
    label: "Certified Organization",
  },
  {
    src: "https://infinityadventurenepal.com/_next/image?url=%2Flogo%2Fcertified.png&w=2048&q=75",
    alt: "Certified Badge",
    label: "Certified Organization",
  },
];

const Certificate: React.FC = () => {
  return (
    <section className="relative px-4 md:px-16 py-16 text-white">
      <div className="text-center mb-10">
        <Title
          title="Certifications"
          discription="Our organization is officially recognized and certified by trusted institutions."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-800/40  transition-all rounded-xl p-6 shadow-lg w-full max-w-xs flex flex-col items-center text-center"
          >
            <div className="relative w-40 h-40 mb-4">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold">{item.label}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
