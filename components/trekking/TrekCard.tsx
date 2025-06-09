"use client";

import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { trek } from "./TrekCardData";
import Title from "../title/Title";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(price);

const TrekCard = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay.current]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="w-full bg-black/80 text-white py-12 pl-4 md:pl-8 lg:pl-16 lg:mt-20 relative z-10">
      <Title
        title="Our Popular Treks"
        discription="Discover handpicked adventures loved by our community."
      />

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="text-black w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="text-black w-6 h-6" />
      </button>

      <div className="overflow-hidden mt-12" ref={emblaRef}>
        <div className="flex ">
          {trek.map((item) => (
            <div
              key={item.id}
              className="w-[90%] sm:w-[45%] lg:w-[30%] flex-shrink-0 mx-4"
            >
              <article className="flex flex-col text-white overflow-hidden group cursor-pointer">
                <div className="relative w-full h-64 sm:h-72 md:h-80">
                  <Image
                    height={400}
                    width={400}
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full rounded-2xl object-cover  overflow-hidden transition-transform duration-300 group-hover:scale-95"
                  />
                </div>

                <div className=" py-4 flex flex-col gap-2 flex-grow">
                  <h3 className="font-medium text-2xl">{item.title}</h3>
                  <div className="text-sm  mt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-zinc-800 px-2 py-1 rounded-2xl">
                        <MapPin size={16} className="mr-1 text-zinc-100" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center bg-zinc-800 px-2 py-1 rounded-2xl">
                        <Clock size={16} className="mr-1 text-zinc-100" />
                        <span>{item.duration}</span>
                      </div>
                      <p className=" bg-zinc-800 px-2 py-1 rounded-2xl">
                        {" "}
                        Starting{" "}
                        <span className="text-red-400">${item.newPrice}</span>
                      </p>
                    </div>
                    <p className="py-2">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <button className="w-full bg-white  rounded-full text-[#FF4E58] py-2  text-lg font-medium hover:bg-zinc-800 transition-transform cursor-pointer">
                      View Itinerary
                    </button>
                    <button className="w-full bg-[#FF4E58] rounded-full hover:text-[#FF4E58] py-2  text-lg font-medium hover:bg-zinc-800 transition-transform cursor-pointer">
                      Book a date
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
