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

      // Set initial state
      gsap.set(overlays, { yPercent: 0 });

      // Create a master timeline for all animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",   // When top of container hits viewport top
          end: "+=100%",      // Scroll distance = 100% viewport height
          scrub: 1,
          pin: true,          // Pins the container during animation
          anticipatePin: 1,
        }

      });

      // Add overlay animations to timeline
      tl.to(overlays, {
        yPercent: -100,
        ease: "none",
        duration: 1,
        stagger: 0.5          // Optional stagger effect
      });
    }, containerRef);

    return () => ctx.revert();
  });

  return (
    <div className="h-[180vh]">
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
    </div>
  );
};

export default HeroSection;
