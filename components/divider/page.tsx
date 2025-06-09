import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionProps = {
  panels: { base: string; overlay: string }[];
};

const HeroSection: React.FC<HeroSectionProps> = ({ panels }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const overlays = gsap.utils.toArray<HTMLDivElement>(".overlay-img");

      // Set initial position (fully covering the base image)
      gsap.set(overlays, { yPercent: 0 });

      // Create the animation
      overlays.forEach((overlay) => {
        gsap.to(overlay, {
          yPercent: -100, // slide up to reveal
          ease: "power3.inOut",
          duration: 1.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%", // Adjusted start position
            end: "top 20%",
            scrub: true, // Makes the animation smooth on scroll
            // toggleActions: "play none none reverse",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex h-[60vh] overflow-hidden bg-black relative"
    >
      {panels.map((panel, index) => (
        <div
          key={index}
          className="relative w-1/3 h-full overflow-hidden flex-shrink-0"
        >
          {/* Base Image */}
          <img
            src={panel.base}
            alt={`base-${index}`}
            className="w-full h-full object-cover absolute inset-0 z-0"
          />

          {/* Overlay Image */}
          <div className="overlay-img absolute inset-0 z-10 h-full w-full overflow-hidden">
            <img
              src={panel.overlay}
              alt={`overlay-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
