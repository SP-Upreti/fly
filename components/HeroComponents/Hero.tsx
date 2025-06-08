"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const cardsData = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2023/01/04/08/27/nature-7696147_1280.jpg",
    alt: "Mountain View 1",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2018/04/07/01/44/mountain-3297562_1280.jpg",
    alt: "Mountain View 2",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2019/01/01/10/19/everest-base-camp-3906487_1280.jpg",
    alt: "Mountain View 3",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2020/02/02/05/35/himalaya-4812051_1280.jpg",
    alt: "Mountain View 4",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2020/02/02/05/35/himalaya-4812050_1280.jpg",
    alt: "Mountain View 5",
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2021/02/23/11/06/mountains-6043079_1280.jpg",
    alt: "Mountain View 6",
  },
  {
    id: 7,
    src: "https://cdn.pixabay.com/photo/2023/01/31/08/53/mountain-7757483_1280.jpg",
    alt: "Mountain View 7",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [backgroundImage, setBackgroundImage] = useState(
    "https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_1280.jpg"
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionImage, setTransitionImage] = useState("");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const updateBackground = (index: number) => {
    if (isTransitioning) return;
    const newIndex = (index + cardsData.length) % cardsData.length;
    const src = cardsData[newIndex].src;

    setTransitionImage(src);
    setIsTransitioning(true);
    setCurrentIndex(newIndex);

    setTimeout(() => {
      setBackgroundImage(src);
      setIsTransitioning(false);
    }, 600);
  };

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateBackground(emblaApi.selectedScrollSnap());

    const handleSelect = () => {
      updateBackground(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", handleSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Auto-slide every 4 seconds

    return () => {
      emblaApi.off("select", handleSelect);
      clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full h-screen z-10 overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="w-full h-full object-cover object-center transition-opacity duration-500"
      />

      {/* Transitioning Image */}
      {isTransitioning && (
        <img
          src={transitionImage}
          alt="Transition"
          className="absolute inset-0 w-full h-full object-cover object-center z-40 animate-zoomIn"
        />
      )}

      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-[20vh] bg-gradient-to-b from-black/50 z-50" />

      {/* Hero Title Text */}
      <div className="absolute top-[25%] md:top-[55%] left-4 sm:left-10 md:left-20 z-50 flex flex-col space-y-2 max-w-[90%] sm:max-w-2xl">
        <h2 className="text-white text-4xl md:text-7xl lg:text-[4vw] font-bold uppercase leading-tighter">
          Reconnect with the Natural World
        </h2>
        <p className="text-white text-xl pl-2">Let the mountain tell your story.</p>
        <button className="mt-4 w-fit text-red-400 rounded-full border-2 bg-white border-white px-6 py-2 hover:bg-white hover:text-red-400">
          Explore Now
        </button>
      </div>

      {/* Centered Nepal Text */}
      {/* <div className="absolute inset-0 z-50 flex items-center justify-center px-4">
        <h1 className="text-[28vw] sm:text-[18vw] md:text-[20vw] lg:text-[22vw] xl:text-[25vw] font-bold uppercase text-transparent stroke-text tracking-widest">
          Nepal
        </h1>
      </div> */}

      {/* Bottom Carousel */}
      <div className="absolute bottom-14 sm:bottom-16 right-0 z-50 w-[90vw] sm:w-[600px] overflow-hidden px-4">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {cardsData.map(({ id, src, alt }, index) => (
              <div
                key={id}
                className="embla__slide flex-none w-[40vw] sm:w-[160px] md:w-[220px] mr-4 sm:mr-6"
              >
                <button
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="w-full h-[120px] sm:h-[160px] md:h-[300px] overflow-hidden rounded-2xl shadow-lg border border-white/20 transition-all duration-300 focus:outline-none"
                  style={{
                    marginTop: id % 2 === 0 ? "10px" : "0px",
                  }}
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Arrows */}
        <div className="absolute -bottom-4 sm:hidden flex items-center space-x-4">
          <button
            onClick={scrollPrev}
            className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft size={20} className="sm:size-6" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 sm:p-3 bg-white/20 hover:bg-white/30 text-white rounded-full backdrop-blur transition-all duration-300 hover:scale-110"
          >
            <ArrowRight size={20} className="sm:size-6" />
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-10 z-50 flex space-x-1 sm:space-x-2">
        {cardsData.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes zoomIn {
          0% {
            transform: scale(0.1);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-zoomIn {
          animation: zoomIn 0.6s ease-out forwards;
        }

        .stroke-text {
          -webkit-text-stroke: 2px white;
          text-stroke: 2px white;
        }

        .embla {
          max-width: 100%;
        }

        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
        }

        .embla__slide {
          transform: translate3d(0, 0, 0);
          flex: 0 0 auto;
          min-width: 0;
        }

        .embla::-webkit-scrollbar {
          display: none;
        }

        .embla {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Hero;
